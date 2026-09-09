import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {clone} from 'three/addons/utils/SkeletonUtils.js';
import {SKIN} from './profiles.js';

const loader=new GLTFLoader();
const kits={};
export async function loadCharacterKits(){
  await Promise.all(['a','b'].map(async body=>{kits[body]=await loader.loadAsync(`./assets/avatar-${body}.glb`);}));
}
export function createCharacter(profile) {
  const kit=kits[profile.body];
  const model=clone(kit.scene);
  const materialCopies=new Map();
  const materialSlots={Skin:'skin',Hair:'hair',Eye:'eye',Top:'top',Bottom:'bottom',Outer:'outer',Jumper:'jumper',Shoe:'shoes'};
  model.traverse(node=>{
    if(!node.isMesh)return;
    node.castShadow=true;node.receiveShadow=true;
    const copy=source=>{
      if(!materialCopies.has(source))materialCopies.set(source,source.clone());
      const m=materialCopies.get(source);
      const semantic=m.name.replace(/\.\d+$/,'');
      const key=materialSlots[semantic];
      if(key)m.color.set(key==='skin'?SKIN[profile.skin]:profile.colours[key]);
      return m;
    };
    node.material=Array.isArray(node.material)?node.material.map(copy):copy(node.material);
    const {slot,variant}=node.userData;
    if(slot==='hair')node.visible=variant===profile.hair;
    if(slot==='top')node.visible=variant===profile.top;
    if(slot==='bottom')node.visible=variant===profile.bottom;
    if(slot==='outer')node.visible=variant===profile.outer;
    if(slot==='accessory')node.visible=variant===profile.accessory;
    if(slot==='jumper')node.visible=profile.jumper;
    const coveredSleeve=node.name.startsWith('Sleeve')&&['blazer','labcoat'].includes(profile.outer);
    if(coveredSleeve && (slot==='top'||slot==='jumper'))node.visible=false;
    if(slot==='top'&&node.name.startsWith('Sleeve')&&profile.jumper)node.visible=false;
    if(/^Leg(?:[._\d]|$)/.test(node.name)&&profile.bottom!=='skirt')node.visible=false;
    // Concealed skin is hidden by the garment meshes; all optional parts share the same rig.
  });
  const head=model.getObjectByName('head');
  if(head)head.scale.set(profile.face==='round'?1.08:profile.face==='defined'?.94:1,profile.face==='defined'?1.025:1,1);
  const mixer=new THREE.AnimationMixer(model);
  const clips={};
  for(const clip of kit.animations){const name=/walk/i.test(clip.name)?'walk':'idle';clips[name]=mixer.clipAction(clip);}
  if(clips.idle)clips.idle.play();
  let motion='idle';
  return {model,mixer,profile,clips,
    setWalking(value){const next=value?'walk':'idle';if(motion===next)return;clips[next]?.reset().fadeIn(.18).play();clips[motion]?.fadeOut(.18);motion=next;},
    update(dt){mixer.update(dt*(motion==='walk'?1.8:1));},
    dispose(){mixer.stopAllAction();mixer.uncacheRoot(model);for(const m of materialCopies.values())m.dispose();model.removeFromParent();}
  };
}
