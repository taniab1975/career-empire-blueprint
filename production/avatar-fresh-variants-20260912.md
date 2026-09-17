# Three Tripo exports: what is usable

These files are useful evidence. They show that the jacket separation preserved skin weights and walking on its matching dressed character. They do not show that the jacket is fitted to the newly supplied grey-singlet base. More generations are not needed to answer that question.

| File | Contents verified | Useful for | Remaining issue |
|---|---|---|---|
| rig+walking.glb | One mesh/material, 49,410 triangles, 41-joint skin, 2.375s walk | Fresh candidate body and visual reference | Singlet/shorts are not separate wardrobe assets; no finger bones or expression morphs. |
| Walking+boy+with+jacket+on.glb | 21 meshes, one material, 997,630 triangles, 41-joint skin, 2.375s walk | Complete reference for this outfit's appearance, skeleton and motion | Different body/rig from the grey-singlet candidate; very dense for a browser wardrobe. |
| Walking jacket.glb | Seven jacket meshes, one material, 481,989 triangles, 41-joint skin, 2.375s walk | A real skinned, animated garment source | One striped wrist cuff is missing; needs optimisation, controlled recolouring and fitting to the chosen base. |

![Three original exports, independently framed](/career-empire-blueprint/Users/tania.byrnes/Documents/Codex/2026-09-08/referenced-chatgpt-conversation-this-is-an/work/production-blueprint/private/production-evidence/2026-09-12/avatar-workflow-research/fresh-variants/three-originals.jpg)

## What worked

All seven jacket meshes have matching corresponding vertex geometry, joint indices and weights in the dressed export. Their rest positions differ by an export translation. Across 58 walk times, with up to 2,000 corresponding vertices sampled per mesh, the largest aligned movement difference was approximately 0.00000035 model units. This supports retained skinning and synchronised movement on the matching outfit rig. It is not a penetration, full-surface deformation or visual-quality certificate.

Raw face indices and UVs differ between most corresponding parts. After accounting for coincident vertices and the export translation, the triangle surfaces match at a 0.000001-coordinate tolerance. The comparison therefore establishes geometric and motion correspondence, not byte-identical exports or identical texture layouts.

The jacket-only original is visibly missing one striped cuff present on the dressed original. That cuff should be included from the matching dressed source during any later garment preparation. No source geometry has been edited to fix it during this inspection.

## What these files do not establish

The grey-singlet character is not the same drop-in skeleton as the dressed export. Both have 41 joints, but their bind poses and proportions differ. For example, the upper-arm/forearm bone-length ratio is about 1.114 in the new base and 1.893 in the dressed rig. Uniform scaling cannot reconcile that difference. The new base is in an A-pose at rest; the dressed source is in a T-pose.

The renders also show different face and body proportions. This does not establish how Tripo's generation history produced them, but it is enough to rule out assuming that copying the jacket onto the new base will work without fitting and binding checks.

The underlying character in the dressed source must not be substituted for the intended base merely because its jacket works. Whether a complete body exists under that outfit remains an issue identified in the earlier source investigation. Do not delete the coat and call the remainder a complete modular avatar.

## Relationship to the earlier uploads

The new rig+walking.glb is exactly the same file already inspected in the immediately preceding research work: SHA-256 4b83e3ae81eb4f5d363a6c263d68b87bdb01d79738358dd15a9f04f951808a3f.

Walking jacket.glb reuses the earlier jacket+walk.glb's seven parts: corresponding positions match after translation and skin weights match exactly. Walking+boy+with+jacket+on.glb reuses the earlier animated+walk+with+jacket.glb's 21 parts: corresponding positions match to within about 0.0000000383 model units after translation and skin weights match exactly. Names, texture/export packaging and animation data are not identical files.

The useful improvement is that the new dressed export contains a real walk animation; the earlier combined outfit did not. These are valuable source/export examples, but they are not evidence of a newly fitted jacket for the grey-singlet character. We cannot infer how many credits their creation or export cost from the files.

## Recommendation

Keep all three originals. Use rig+walking.glb as the candidate base only if its appearance and underlayer arrangement are the intended choice. Retain the dressed export as the authoritative reference for this jacket, including the missing cuff. Retain the jacket-only file as proof that separation can preserve animation; do not regard it as the finished canonical garment.

The next useful production test is to fit this existing jacket to the chosen base, bind it to that exact skeleton, and test it locally. A deliberate fabric material or mask is needed for a reliable hex control. No additional AI generation is needed for this evidence-gathering step. The original dense geometry should be preserved as a master; a reduced runtime version must be checked visually after optimisation.

There is not yet evidence that obtaining a Windows device is necessary or that MetaTailor is the best-performing option for this asset. Its Tripo integration is a relevant beta trial. The research guide compares it with Marvelous Designer/EveryWear on Mac and Blender. Do not commit to a new device solely on a marketing claim; the decisive result would be a successfully exported, fitted jacket on this exact base.

## Evidence and limits

All three Downloads files were copied unchanged and hashes verified. Original materials and animations were rendered with review lighting/cameras; cameras are independently framed, so panel sizes are not a physical scale comparison. Front/back rest views and two walk frames were rendered for both new outfit exports. Original base renders were reused because its hash is unchanged. No live game or original GLB edits were made.

Detailed evidence: glb-analysis.json, comparison.json, topology-rig-check.json, prior-source-comparison.json and the rendered originals. The broad workflow remains a proposal; the fresh base-plus-jacket assembly has not been made or accepted.


Update from Tania: the missing cuff was accidentally deleted during her export preparation. Its absence is not evidence of an automatic Tripo segmentation fault. Avatar work is parked while she awaits a Marvelous Designer trial.
