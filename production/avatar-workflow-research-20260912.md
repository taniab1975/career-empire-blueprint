# A repeatable avatar and wardrobe workflow for Career Empire

The recommended foundation is one approved character with a fixed skeleton, plus separate garments fitted and weighted to that skeleton. Keep Tripo as a possible source of the character and clothing shapes. Use a tool explicitly designed for garment fitting to turn those shapes into reusable clothing. Repeatedly generating a dressed character is not a reliable substitute for this step.

For a Mac workflow that preserves the new Tripo character, **Marvelous Designer with EveryWear, followed by Blender for game export and verification, is the strongest documented option to trial**. For a Windows workflow, **Tripo plus MetaTailor deserves a focused trial**: Tripo explicitly documents this integration for wearable assets. Neither has been tested with this particular character yet. The research establishes a proposed workflow, not an end-to-end validated production pipeline.

## The newly supplied base

The file inspected is `rig+walking.glb`, supplied from Downloads. Its retained copy is unchanged. SHA-256: `4b83e3ae81eb4f5d363a6c263d68b87bdb01d79738358dd15a9f04f951808a3f`.

| Feature | Actual finding | Meaning for the wardrobe |
|---|---|---|
| Appearance | Bald stylised character, grey singlet and shorts, bare feet | This is the fresh visual candidate; previous rejected characters are not the basis for this recommendation. |
| Geometry | One mesh, one primitive; 28,044 exported vertices and 49,410 triangles | Manageable starting complexity. Triangle count alone does not establish animation quality or phone performance. |
| Materials | One material with base-colour, normal and metallic/roughness textures | Skin and outfit are not delivered as independently selectable material regions. Colour controls need deliberate separation or masks. |
| Skeleton | One skin, 41 joints including limb twist joints | A usable body skeleton is present. Freeze its rest pose and proportions once accepted. |
| Skin weights | All vertices weighted; no negative weights; largest weight-sum error about 0.000000119 | Numerical checks pass; this does not establish perfect joint deformation. |
| Animation | `preset:biped:walk`, 2.375 seconds, 123 animation channels | Actual skeletal walking data exists, rather than just a filename or video. |
| Hands and face | No individual finger joints; no morph targets | Adequate for a basic walking trial. Finger articulation, blinking and facial expressions would require more work. |
| Wardrobe separation | Body and existing outfit packaged as one mesh | Not yet a modular base-and-clothing delivery. This does not by itself prove that every surface is physically fused. |

Six original-model renders cover rest front/back and four walk poses. A numerical check evaluated all vertices at 58 times through the walk; all positions remained finite and visibly moved. The largest start/end vertex difference was about 0.000485 model units. These checks do not certify collisions, foot contact, all possible poses or a seamless game loop.

The original looks substantially cleaner than the rejected derived wardrobe in these views: there is no comparable torn neck boundary. The hands stay open because there are no finger bones. The existing singlet and shorts are part of the visible silhouette; whether a complete body surface exists underneath them has not been established. Do not remove them and assume a finished body remains.

**Keep this file as a candidate, not an approved canonical master yet.** Before changing it, decide whether the singlet/shorts are permanent underlayers or must also be removable. For jackets over permanent underlayers, this model can be a useful fitting reference. A fully interchangeable wardrobe needs a complete, deliberately prepared base beneath its removable clothing.

![Unmodified supplied avatar: rest front/back and four walking frames](/career-empire-blueprint/Users/tania.byrnes/Documents/Codex/2026-09-08/referenced-chatgpt-conversation-this-is-an/work/production-blueprint/private/production-evidence/2026-09-12/avatar-workflow-research/original-review.jpg)

## Mesh, topology, rig and animation in plain language

A **mesh** is the character's physical 3D surface: points joined by edges and small faces. A **texture** is an image laid over that surface. Painting a jacket onto a body changes its appearance; it does not create a removable jacket with sleeves and thickness.

**Topology**, often shortened to “topo,” is the arrangement of those points and faces. Good topology places useful loops around areas that bend, such as elbows and knees. **Retopology** rebuilds that arrangement, often with fewer and better-organised faces. **Decimation** mainly reduces face count; it does not necessarily create good bending loops. Blender provides mesh modelling and editing tools for these operations.[^1]

A **rig** supplies the skeleton and controls. **Skin weights** say how strongly each bone moves each point on the surface. An **animation** changes the bones over time. The original pose and the mesh-to-bone binding matter as well as the bone names. Two skeletons called “Hip” and “Spine” are not automatically interchangeable.[^2]

Quads are four-sided faces, useful in an editable master. GLB exports generally use triangles for these surfaces. A triangulated GLB is normal and does not prove that the source was badly retopologised. Keep a quad-preserving FBX or OBJ as well when available; OBJ does not preserve the rig or skeletal animation.[^3]

## Tripo and Meshy: relevant features and limits

| Stage or feature | Tripo | Meshy | Practical use here |
|---|---|---|---|
| Reference and generation | Text, image and multiview generation; integrated reference-image creation; high-detail and Smart Mesh routes [^4] | Text/image generation, multiview, image tools and pose controls; Standard and Smart Topology routes [^5] | Establish the desired shape once; inspect every generated result. |
| Part creation | Generate in Parts, segmentation, boundary editing and part completion [^6][^7] | Auto Split; newer native multi-part generation research and Smart Topology [^8][^9] | Separate parts do not automatically become fitted, skinned wearables. |
| Mesh preparation | Retopology, quad conversion and polygon controls [^4] | Remesh and quad export [^3] | Complete structural changes before final rigging. |
| Surface appearance | AI texturing, PBR and Magic Brush [^6] | AI texturing and local Texture Edit [^10] | Texture editing cannot make real garment geometry. |
| Skeleton and movement | Auto-rig and animation retargeting; API includes in-place animation option [^11][^12] | Humanoid, quadruped and Smart Rig; presets; separate Text to Motion API [^13][^14] | Use the full body to establish its rig. Do not ask a body auto-rigger to interpret a jacket alone. |
| Transfer to other tools | Export and DCC Bridge, including a MetaTailor beta integration [^15] | Exports, APIs and DCC integrations [^16] | Moving a file does not itself fix fit or weight compatibility. |
| Other outputs | Stylisation and printable-model tools [^6] | Video/image creation, printing tools and community assets [^16] | Useful elsewhere, but not the solution to interchangeable clothing. |

### Tripo processing order

For a new base that needs part separation, the useful order is:

1. Create consistent full-body references with an A-pose or T-pose, separated limbs and visible hands/feet.
2. Generate the model and assess its anatomy, face and silhouette before spending time on textures.
3. Separate required parts while the model is still unrigged. Keep a complete original version.
4. Retopologise or optimise the final shapes. Preserve joint detail and review the face/hands again.
5. Prepare UVs, textures and intentional colour regions.
6. Rig the complete approved body once, then apply and inspect walking.
7. Export both an editable master and the game-facing GLB.

This follows Tripo's published general ordering, which it describes as flexible.[^4] There is an important dependency: the current public segmentation workspace explicitly excludes quad and rigged models.[^17] Therefore, do not build a routine around “rig first, then run segmentation.” Account-specific tools may differ, but rig preservation must be demonstrated on their actual exports.

Smart Mesh is worth using when starting a clean character, but “maximum detail” is not the objective. If part segmentation is required, resolve that stage before quad conversion. There is no reason to regenerate this new 49,410-triangle candidate solely to obtain more polygons. The export does not reveal enough about its original generation settings to call it the best possible Tripo result.

Tripo's part completion can seal or reconstruct missing areas.[^7] A garment has intentional neck, wrist and waist openings: review completion carefully, rather than treating all openings as defects.

### Meshy distinctions that affect the decision

Meshy's current guidance supports A/T/custom pose controls and a separate Smart Topology generation route.[^5] Its native-mesh research is promising for economical, separated geometry; it does not demonstrate preserving this Tripo character's identity and rig while dressing it.[^9]

Auto Split is explicitly documented as a printing operation. The API accepts untextured supported models, excludes low-poly/Smart Topology inputs, and reinforces thin regions for printing.[^8] That is not the garment-weight-preserving separation operation needed here.

For a humanoid walk, choose Humanoid rigging. The current guide explicitly says Smart Rig models are not supported by its animation library, despite broader wording elsewhere on the same page.[^13] Text to Motion is a separate documented capability; generating movement still does not fit clothing.[^14]

## Why the proposed clone-and-segment sequence failed

The proposed sequence was: animate a base, copy it, dress it, remove the body, export the animated jacket. **That can work only if the clothing retains the correct binding to the same skeleton throughout.** Deleting other meshes from an already correctly skinned assembly can preserve garment animation. Generative dressing, remeshing, completion, or a fresh auto-rig can change the body, skeleton or binding.

The earlier investigation showed that a jacket-only file could contain a real skeleton, weights and a walk. It also showed that similarly named body and outfit rigs were not the same binding. The rejected local result subsequently failed visual review. Neither successful metadata checks nor a jacket moving by itself establishes correct fit on the intended base.

When an auto-rigger interprets the bottom of a jacket as legs, it is trying to solve a character-recognition problem on the wrong input. Keep the actual character skeleton and transfer garment weights from that body. Do not auto-rig the isolated jacket as a fresh humanoid.

## Alternative software assessment

| Application | Best role | Fit with this project | Main limitation |
|---|---|---|---|
| **Marvelous Designer + EveryWear** | Build clothes around the chosen avatar, optimise and transfer weights | Strongest documented Mac option for retaining the supplied body | Requires garment-design learning and final export checks; not a hair modeller. |
| **MetaTailor + Tripo** | Fit generated or existing wearable meshes | Particularly relevant to the proposed AI clothing workflow | Tripo bridge is beta; current MetaTailor FAQ says no Mac version. |
| **Blender** | Keep the master, prepare skin weights/materials, test animation and export | Essential controllable finishing and verification tool; already available locally | More technical; automatic weight transfer still needs visual correction. |
| **VRoid Studio** | Accessible character, clothing-template and hair authoring | Attractive for a new stylised character on Mac | Different visual conventions, VRM export, and customisation-app licensing questions. |
| **Character Creator 5** | Integrated character, clothing and hair production | Strong tools if Windows and the relevant licence are available | Windows requirement and specific character-creation-system licensing. |
| **MakeHuman / MPFB** | Fixed human base and clothing asset system in Blender | Open alternative if changing the base is acceptable | More technical; fitting its ecosystem to the desired stylised appearance takes work. |
| **Mixamo** | Rigging and motion source | Useful supporting animation tool | Does not provide the required clothing-authoring and fitting workflow. |

### Marvelous Designer: the Mac trial to prioritise

EveryWear requires a rigged avatar; its autofitting workflow uses a fitting suit.[^18] Its documented garment rigging joins clothing to the avatar's joints through weight transfer. It includes optimisation and weight correction; the manual specifically calls for checking penetration and motion inaccuracies. Rig in bind pose. Re-simulating a garment can delete its rigging information, so finish draping before the final weight pass.[^19]

The useful sequence is **import the fixed avatar → fit/drape garment → optimise and prepare textures → transfer weights → test → export**. The base can already be rigged while the garment is still being designed. This is different from repeatedly changing and re-rigging the base itself.

Use General export, retain a full avatar-plus-garment proof file and the editable project, and supply textures with the FBX.[^20] Distinguish skeletal animation from a recorded cloth simulation: FBX joint animation and garment cache animation are separate export choices.[^21] A simulation cache is not automatically a lightweight interchangeable jacket for the browser game.

The April 2026 Mac requirements specify Apple Silicon, at least 16 GB RAM and macOS Sonoma 14.[^22] Verify this against the machine before subscribing. No installed trial or performance test was undertaken here.

### MetaTailor: the closest Tripo-specific lead

Tripo's partnership announcement explicitly describes generating a wearable, sending it through DCC Bridge, fitting it to a target character in MetaTailor and continuing downstream. It labels the integration beta and says compatibility and stability are still being refined.[^15] The installation guide provides the bridge setup.[^23]

MetaTailor advertises fitting, skin weighting, bone matching and FBX export.[^24] Treat “any character” and “zero manual adjustment” language as vendor claims, not an acceptance result. Its FAQ currently says Mac support is not available.[^25] If a Windows machine is available, trial exactly one jacket on this fixed base, export it, and test it outside MetaTailor before committing to a library. Viewport physics and engine-specific plugins do not prove equivalent browser behaviour.

### VRoid and Character Creator: convenient, but assess the whole requirement

VRoid has sliders, clothing templates, texture editing, hair authoring and VRM export on Mac.[^26] XWear adds autofitting and manual fitting tools for supported avatars/outfits.[^27] It would be a new authoring route, not a direct guarantee that the present GLB becomes a fully editable VRoid character.

VRoid's guidelines distinguish ordinary model use from applications that generate or output combined/deformed models; the latter require a separate licence.[^28] Career Empire's precise picker behaviour needs confirmation before adopting these assets as its foundation. This is a product-selection constraint, not a claim that every in-game outfit switch is prohibited.

Character Creator supplies templates for transferring weights to clothes, shoes and hair, and tools for fixing body poke-through.[^29] Its current system requirements list Windows.[^30] Reallusion directs developers building character-creation systems to discuss Enterprise licensing. Its content-policy page also contains conflicting old/new Standard versus Extended licence wording; do not base a purchase on the older FAQ alone.[^31]

MPFB's documented clothing system includes body fitting, weight interpolation and optional garment sub-rigs.[^32] It is a credible structured alternative, but adopting its base would mean a deliberate appearance change. MakeHuman's core exports have permissive terms, while externally sourced clothes must be checked individually.[^33] Mixamo provides humanoid auto-rigging and animations; it remains an animation aid rather than a clothing fitter.[^34]

## The single production workflow to establish

### 1. Approve and preserve one base

Use the supplied character for the next evaluation. Resolve permanent underlayers versus removable singlet/shorts before calling it the canonical base. Keep its original file. Save an editable body master, rest-pose reference, rigged GLB and walking sample. Once the master is accepted, preserve its body proportions, skeleton, scale and bind pose across all clothing jobs.

An A-pose shown by the model's skeleton is not the same as generating a new A-pose image and recreating the body. Preserve the existing geometry whenever it meets the appearance requirements.

### 2. Create garments against that exact body

For the Mac trial, use that body as the avatar in Marvelous Designer. Fit a simple jacket first, with clear collar, sleeve and hem construction. Alternatively, use a generated garment as a shape source in a fitting tool. The body is the unchanging reference; the garment changes to fit it.

For a Tripo garment source, complete its shape/segmentation/retopology before final skinning. Preserve a full source export as well as the isolated garment. Never throw away the only alignment reference or rigged assembly.

### 3. Attach movement once

Bind the garment to the canonical body skeleton. Start with transferred weights, then correct shoulders, elbows, armpits, wrists and hem during motion. Blender supports vertex-group transfer between meshes, but the correspondence method is a starting point requiring review.[^35]

A jacket needs the correct weights and shared bones. It does not need its own independent copy of every walk animation. The game should drive body and garment from one character animation state. An isolated garment GLB may still include the necessary skeleton nodes for transport.

Short rigid hair can follow the head bone. Longer hair may need extra bones or a separate secondary-motion implementation. Skirts, loose coats and hair are not all equivalent to a close-fitting jacket; test those categories separately. Additional garment bones must be preserved and driven in the game, not merely present in an export.

### 4. Prepare colour deliberately

Author separate regions for jacket fabric, trim, fasteners and logos, and a separate region for hair. Use a neutral light base colour for tintable fabric, or an explicit colour mask. Keep folds and fine surface detail in appropriate texture maps. Do not tint the entire character atlas or rely on guessing green pixels.

A hex colour control can change the designated material at runtime. Texture colour and material tint multiply in the standard glTF material model: a black source stays dark even with a bright tint.[^36] The earlier patchy recolour is not an acceptable template. Test dark, light and saturated colours; lighting means the displayed shaded pixels will not all equal the chosen hex value.

### 5. Prove one complete garment outside the authoring tool

The first acceptance test is a base-plus-jacket assembly exported into the local game-style viewer. Check front, side and back, the entire walk, idle and a representative arm bend. Inspect neck continuity, shoulder and elbow deformation, cuff alignment, knees, garment/body intersections and colour boundaries. Verify jacket-off restores the complete intended base.

If hidden body regions are needed, keep a complete master and use a carefully authored, reversible coverage arrangement. Do not recreate the coarse neck deletion that damaged the rejected version. Recolouring must preserve skin, trim and logos. Appearance approval is separate from numerical validation.

### 6. Reuse the accepted template

Store each accepted item with its base/rig version, garment mesh, materials or masks, attachment method and coverage rules. Reuse the fitting setup and export settings for subsequent jackets. Hair and accessories use their appropriate attachment method. New colours should require no new generation, fitting or animation export.

Blender can support repeatable import, checks, packaging and GLB conversion. That can reduce repetitive work; it cannot guarantee that a poorly generated shape becomes attractive automatically. The first well-made item establishes the process. Subsequent items still need a short fit and motion review.

## What to do next

**Do not regenerate or animate another dressed copy yet.** Keep `rig+walking.glb` and export its existing pre-animation/rest-pose version and editable FBX from the same Tripo model if available, with textures. If the source was quad-based, retain that version too. The original reference image and generation settings help assess identity and topology; they are not a reason to replace the model.

The next decision is whether this exact character and its permanent underlayers are the desired base. Once settled, trial one simple jacket with **Marvelous Designer/EveryWear on Mac**, or **MetaTailor on Windows** if available. Export and review that jacket in the local viewer before producing more assets. No new software subscription is required merely to preserve and finish evaluating the supplied base.

## Follow-up: three further Tripo exports

Subsequent inspection confirms that Walking jacket.glb preserves the geometry and skin weights of seven parts in Walking+boy+with+jacket+on.glb, with aligned motion agreeing across 58 sampled times. One cuff is absent. These reuse the earlier outfit geometry; they are not a fitted garment for the new grey-singlet base, whose rig proportions differ. The dressed export now includes walking. See [the three-file inspection](/career-empire-blueprint/Users/tania.byrnes/Documents/Codex/2026-09-08/referenced-chatgpt-conversation-this-is-an/work/production-blueprint/docs/production/avatar-fresh-variants-20260912.md). This evidence supports separation on a matching rig, but does not prove the proposed fresh-base clothing pipeline.

## Sources and evidence

Official documentation reviewed 12 September 2026. Feature availability can differ between APIs, web interfaces, account plans and beta releases. Claims about fitting quality have not been independently validated in the alternative applications. Published dates are recorded where visible; undated pages are identified by access date above.

1. Blender Foundation, [Modelling features](https://www.blender.org/features/modeling/).
2. Khronos Group, [glTF skins tutorial](https://github.com/KhronosGroup/glTF-Tutorials/blob/main/gltfTutorial/gltfTutorial_020_Skins.md).
3. Meshy, [How to download a quad mesh model](https://help.meshy.ai/en/articles/9992029-how-to-download-a-quad-mesh-model).
4. Tripo, [What features does Tripo have?](https://www.tripo3d.ai/help/getting-started/what-features-does-tripo-have).
5. Meshy, [Image to 3D guide](https://help.meshy.ai/en/articles/9996860-how-to-use-meshy-image-to-3d).
6. Tripo, [Studio tutorial](https://www.tripo3d.ai/blog/tripo-studio-tutorial-english).
7. Tripo, [Segmentation v2](https://www.tripo3d.ai/blog/tripo-segmentation-v2).
8. Meshy, [Auto Split API](https://docs.meshy.ai/en/api/auto-split).
9. Rendong Liang / Meshy, [Meshy T2 native mesh generation](https://www.meshy.ai/blog/meshy-t2-native-3d-mesh-generation), 12 August 2026.
10. Meshy, [Texture Edit](https://docs.meshy.ai/en/webapp/guides/texture-edit).
11. Tripo, [Auto Rig API](https://developers.tripo3d.ai/en/docs/animations-rig).
12. Tripo, [Animation retarget API](https://developers.tripo3d.ai/en/docs/animations-retarget).
13. Meshy, [Auto Rigging and animation guide](https://help.meshy.ai/en/articles/16231707-how-to-create-3d-animation-with-auto-rigging).
14. Meshy, [Text to Motion API](https://docs.meshy.ai/en/api/text-to-motion).
15. Tripo, [MetaTailor partnership and beta workflow](https://www.tripo3d.ai/blog/metatailor-x-tripo).
16. Meshy, [Feature overview](https://help.meshy.ai/en/articles/9991738-what-features-does-meshy-have).
17. Tripo, [Public segmentation workspace](https://studio.tripo3d.ai/workspace/segmentation), live restriction text.
18. CONNECT, [Preparing and starting EveryWear](https://support-connect.clo-set.com/hc/en-us/articles/45304285349273-Preparing-and-Starting-EveryWear), 2 April 2026.
19. CONNECT, [Garment tab](https://support-connect.clo-set.com/hc/en-us/articles/45304301912857-Garment-Tab), 10 April 2026.
20. CONNECT, [EveryWear export](https://support-connect.clo-set.com/hc/en-us/articles/51922118774425-Export), 18 November 2025.
21. Marvelous Designer, [FBX import/export](https://support.marvelousdesigner.com/hc/en-us/articles/47358232885017-3D-File-FBX-Import-Export), 6 April 2026.
22. Marvelous Designer, [System requirements](https://support.marvelousdesigner.com/hc/en-us/articles/47358219834649-System-Requirements-April-2026), 20 April 2026.
23. Tripo, [MetaTailor bridge setup](https://www.tripo3d.ai/blog/tripo-dcc-bridge-for-metatailor).
24. MetaTailor, [Features](https://www.metatailor.com/features).
25. MetaTailor, [FAQ](https://www.metatailor.com/faq).
26. pixiv, [VRoid Studio](https://vroid.com/en/studio).
27. pixiv, [XWear and dress-up release](https://vroid.com/en/news/26gn98sTuPJQ53LxDQRyFg), 28 November 2024.
28. pixiv, [VRoid Studio guidelines](https://vroid.com/en/studio/guidelines), edited 21 December 2023.
29. Reallusion, [Creating assets with Transfer Skin Weights](https://manual.reallusion.com/Character-Creator-5/Content/ENU/5.0/08-Creating-Custom-Assets/Creating_Assets_with_Transfer_Skin_Weights.htm).
30. Reallusion, [CC5 system requirements](https://kb.reallusion.com/Product/53240/System-Requirements).
31. Reallusion, [Content licence policy and character-creation FAQ](https://www.reallusion.com/license/content.html).
32. MakeHuman Community, [MPFB clothing service](https://github.com/makehumancommunity/mpfb2/blob/master/docs/services/clothesservice.md).
33. MakeHuman Community, [Export licensing FAQ](https://static.makehumancommunity.org/makehuman/faq/can_i_sell_models_created_with_makehuman.html).
34. Adobe, [Mixamo FAQ](https://helpx.adobe.com/creative-cloud/faq/mixamo-faq.html).
35. Blender Foundation, [Data Transfer modifier](https://docs.blender.org/manual/en/4.3/modeling/modifiers/modify/data_transfer.html).
36. Khronos Group, [glTF 2.0 specification](https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html), material base-colour factors and textures.

Original-file evidence: inspection.json, validation.json, render-review.json and six renders in the accompanying fresh-base evidence folder. The source GLB was not modified. No live Career Empire changes, alternative-software trials, purchases or finished-wardrobe acceptance are claimed.


[^1]: Blender Foundation, [Modelling features](https://www.blender.org/features/modeling/).
[^2]: Khronos Group, [glTF skins tutorial](https://github.com/KhronosGroup/glTF-Tutorials/blob/main/gltfTutorial/gltfTutorial_020_Skins.md).
[^3]: Meshy, [How to download a quad mesh model](https://help.meshy.ai/en/articles/9992029-how-to-download-a-quad-mesh-model).
[^4]: Tripo, [What features does Tripo have?](https://www.tripo3d.ai/help/getting-started/what-features-does-tripo-have).
[^5]: Meshy, [Image to 3D guide](https://help.meshy.ai/en/articles/9996860-how-to-use-meshy-image-to-3d).
[^6]: Tripo, [Studio tutorial](https://www.tripo3d.ai/blog/tripo-studio-tutorial-english).
[^7]: Tripo, [Segmentation v2](https://www.tripo3d.ai/blog/tripo-segmentation-v2).
[^8]: Meshy, [Auto Split API](https://docs.meshy.ai/en/api/auto-split).
[^9]: Rendong Liang / Meshy, [Meshy T2 native mesh generation](https://www.meshy.ai/blog/meshy-t2-native-3d-mesh-generation), 12 August 2026.
[^10]: Meshy, [Texture Edit](https://docs.meshy.ai/en/webapp/guides/texture-edit).
[^11]: Tripo, [Auto Rig API](https://developers.tripo3d.ai/en/docs/animations-rig).
[^12]: Tripo, [Animation retarget API](https://developers.tripo3d.ai/en/docs/animations-retarget).
[^13]: Meshy, [Auto Rigging and animation guide](https://help.meshy.ai/en/articles/16231707-how-to-create-3d-animation-with-auto-rigging).
[^14]: Meshy, [Text to Motion API](https://docs.meshy.ai/en/api/text-to-motion).
[^15]: Tripo, [MetaTailor partnership and beta workflow](https://www.tripo3d.ai/blog/metatailor-x-tripo).
[^16]: Meshy, [Feature overview](https://help.meshy.ai/en/articles/9991738-what-features-does-meshy-have).
[^17]: Tripo, [Public segmentation workspace](https://studio.tripo3d.ai/workspace/segmentation), live restriction text.
[^18]: CONNECT, [Preparing and starting EveryWear](https://support-connect.clo-set.com/hc/en-us/articles/45304285349273-Preparing-and-Starting-EveryWear), 2 April 2026.
[^19]: CONNECT, [Garment tab](https://support-connect.clo-set.com/hc/en-us/articles/45304301912857-Garment-Tab), 10 April 2026.
[^20]: CONNECT, [EveryWear export](https://support-connect.clo-set.com/hc/en-us/articles/51922118774425-Export), 18 November 2025.
[^21]: Marvelous Designer, [FBX import/export](https://support.marvelousdesigner.com/hc/en-us/articles/47358232885017-3D-File-FBX-Import-Export), 6 April 2026.
[^22]: Marvelous Designer, [System requirements](https://support.marvelousdesigner.com/hc/en-us/articles/47358219834649-System-Requirements-April-2026), 20 April 2026.
[^23]: Tripo, [MetaTailor bridge setup](https://www.tripo3d.ai/blog/tripo-dcc-bridge-for-metatailor).
[^24]: MetaTailor, [Features](https://www.metatailor.com/features).
[^25]: MetaTailor, [FAQ](https://www.metatailor.com/faq).
[^26]: pixiv, [VRoid Studio](https://vroid.com/en/studio).
[^27]: pixiv, [XWear and dress-up release](https://vroid.com/en/news/26gn98sTuPJQ53LxDQRyFg), 28 November 2024.
[^28]: pixiv, [VRoid Studio guidelines](https://vroid.com/en/studio/guidelines), edited 21 December 2023.
[^29]: Reallusion, [Creating assets with Transfer Skin Weights](https://manual.reallusion.com/Character-Creator-5/Content/ENU/5.0/08-Creating-Custom-Assets/Creating_Assets_with_Transfer_Skin_Weights.htm).
[^30]: Reallusion, [CC5 system requirements](https://kb.reallusion.com/Product/53240/System-Requirements).
[^31]: Reallusion, [Content licence policy and character-creation FAQ](https://www.reallusion.com/license/content.html).
[^32]: MakeHuman Community, [MPFB clothing service](https://github.com/makehumancommunity/mpfb2/blob/master/docs/services/clothesservice.md).
[^33]: MakeHuman Community, [Export licensing FAQ](https://static.makehumancommunity.org/makehuman/faq/can_i_sell_models_created_with_makehuman.html).
[^34]: Adobe, [Mixamo FAQ](https://helpx.adobe.com/creative-cloud/faq/mixamo-faq.html).
[^35]: Blender Foundation, [Data Transfer modifier](https://docs.blender.org/manual/en/4.3/modeling/modifiers/modify/data_transfer.html).
[^36]: Khronos Group, [glTF 2.0 specification](https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html), material base-colour factors and textures.


## CONNECT page clarification — 12 September 2026
Tania supplies CONNECT /upload screenshot with Store, Gallery and Gamewear publishing choices. Clarified that this page is for publishing/sharing; it is not the garment fitting workspace. EveryWear opens through CONNECT > EveryWear inside the installed CLO/Marvelous Designer program; official preparation documentation rechecked. Prior recommendation was a desktop software trial, not a browser GLB upload service. Screenshot retained in avatar-workflow-research/connect-publishing-page.png. No upload, installation, purchase, model edits or game changes. Next remains one same-base garment trial; no new source/appearance approval.


## GLB import clarification — 12 September 2026
Tania notes there is no GLB upload type. The documented Marvelous Designer avatar workflow uses File > Import > FBX in the desktop application, including joints and animation. CONNECT website publishing upload is not the import path. Advise retaining/exporting the same Tripo model as rigged FBX with textures; OBJ does not retain skeletal animation. Do not claim renaming GLB to FBX converts it, or that converting format alone makes the existing generated jacket suitable for EveryWear. No conversion or software trial performed in this clarification.


## Avatar work parked pending trial — 12 September 2026
Tania has applied for a Marvelous Designer trial and explicitly parks avatar work for a couple of days while awaiting access. She confirms the missing jacket cuff was accidentally deleted by her; do not attribute that omission to a Tripo segmentation failure. Preserve all originals, comparisons and research. No further avatar generation, conversion, optimisation or fitting while paused; resume when Tania returns with trial access, not automatically on a timer. No reminder requested.
Tania asks what is next. Current operations.productionPlan and handoff agree: return to World Environment & Ecosystem; finish campus-edge/material and planting blending, welcome-sign/Chapel arrival composition, and smooth Disrepair/Growth/Flourishing transitions, then combined desktop/mobile review and release preparation. Approved environment assets/camera remain banked; recent walkable oval and mobile layout are local candidates. Recommend campus-edge/material blending as the first bounded step. This turn records the pause and identifies next work; no game edits, new acceptance or publication.

## Avatar Studio vendor evidence — 14 September 2026

Source: Tripo support response supplied by Tania, dated 2026-09-14 15:18:32 (sender displayed as “ddie”; timezone not supplied), in “Update Blueprint Avatar Studio”, conversation 6aa7a356-c95c-83ec-9dfa-482d58de1e43. This is vendor-confirmed capability as reported in the supplied response, not a new local test or independent inspection of the vendor account.

Tripo confirms its animation feature is designed for complete character models with recognizable body structures. A standalone clothing item such as a blazer may be interpreted as the entire animated object rather than a separate garment. Tripo currently has no separate option to animate standalone clothing independently from a character body.

Tripo recommends three possible workflows:
1. Create a complete character wearing the blazer, apply walking animation in Tripo, export the animated model to Blender, then remove unwanted body parts while retaining the animated blazer.
2. Prepare the blazer in Blender before animation: attach it to a rigged character and adjust rigging and weight painting to control deformation.
3. Use Blender for independent clothing animation through custom rigging, weight adjustments and animation controls.

Tripo says it has forwarded the standalone-clothing animation suggestion to its product team. This is feedback escalation, not a promised feature or delivery date.

Status as of 2026-09-14: Tripo response received; still awaiting a response from the other third-party software company previously contacted about the Avatar Studio/clothing workflow. The supplied update does not identify that company, so do not infer its identity from earlier product research.

Production implication: exclude standalone-blazer auto-animation in Tripo as a supported production route. The three Blender routes remain vendor recommendations awaiting validation with the chosen Career Empire body and garment; they do not prove interchangeable clothing or preservation of the same skeleton/bind pose. On resumption, select one complete approved body, preserve the original rigged assembly, and prove one same-base blazer through deformation, retained cuffs/openings, equip/unequip and Studio/world review before expanding the wardrobe. Keep the other vendor response as an open dependency; do not automatically resume modelling or spending from this documentation update.

Prior experimental findings are retained: the matching jacket/dressed motion checks, incompatible newer base proportions/bind pose, missing covered body surfaces and visually rejected reconstructed wardrobe remain valid evidence at their original scope. The vendor reply does not approve those prototypes or convert numerical motion checks into visual acceptance.

Task scope and completion: inspected canonical AGENTS, handoff, production plan and September 12 avatar checkpoint; recorded this discussion/evidence in the existing Blueprint and updated the avatar roadmap/status and handoff. No new visual assets, asset experiments or game changes were made. Public reader publication and global refresh remain separate.

Validation close: canonical JSON parses; the vendor decision occurs once; existing production-plan tests pass (3/3); generated planning exports match canonical records. Global refresh remains unset. This source update has not been published to the hosted Blueprint reader.


## Reusable clothing workflow research — 16 September 2026
Tania requests written research to import an animated base into MD, recover a dressing pose, fit garments and export them separately to Blender. Recommendation: Tripo once for the base, Blender master with unchanged full body/skeleton/clips, animated FBX into MD, EveryWear Switch to Bind Pose and Transfer Weights, General garment-only FBX back to the same Blender rig. If bind pose is unsuitable, prepare a reusable dressing-pose lead-in in Blender; no need to recreate the walk in MD. Simulation must precede final garment rigging; re-simulation removes weights. Exact simulated Alembic and reusable skeletal garments are different deliverables. EveryWear custom Tripo round trip and exported clip/skeleton contents remain untested. Preserve Textured done lineage and use an unmasked body; never the corrected masked game body as naked fitting master. Research only, no new asset/game publication or universal-fit claim. Sources, fallback and bounded proof: docs/production/clothing-workflow-research-20260916.md.
