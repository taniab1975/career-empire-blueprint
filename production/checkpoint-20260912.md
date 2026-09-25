# Current checkpoint — 12 September 2026

## Live environment

Release **d442671** is published and verified: English/Media and SPACE behind Admin, smaller oval, tree-lined boundaries, ground/planting polish and welcome/Chapel framing. Published thumb joystick/touch fixes retained. [Open game](https://emmanuel-ict-support.github.io/GTCEM-Career-Empire/playable-3d/).

Steps 1 and 2 were explicitly approved. Earlier “ok” meant open the screen, not approval; the later explicit acceptance supersedes that mistake. Pages deployment, nine live file hashes and Home Base browser view verified. Seven movement probes, six unit tests, navigation/panel checks and three phone viewport sizes passed. Physical-phone performance remains unverified. Remote CI was still running at release close; no later result is asserted. [Release evidence](environment-release-20260912.md).

## Avatar findings

| File | Verified contents | Meaning |
|---|---|---|
| rig+walking.glb | 49,410 triangles; one mesh/material; 41-joint rig; 2.375s walk | New neutral-looking candidate. Singlet/shorts fused with body; complete hidden body not established. |
| Walking+boy+with+jacket+on.glb | 997,630 triangles; 21 meshes; rig and walk | Matching dressed character and jacket. Missing covered body surfaces: not a complete unclothed modular base. |
| Walking jacket.glb | 481,989 triangles; seven skinned jacket parts; walk | Matches the dressed character, not the newer base. One cuff accidentally deleted by Tania; recover from dressed source. |

Matching jacket/dressed motion was checked at 58 times. The newer base has different proportions and bind pose; the same bone count/names do not make it compatible. Segmentation can retain existing skinning but cannot reconstruct hidden body surfaces or fit a garment to another character. Rigging a jacket alone can mistake its hem for legs.

The earlier reconstructed wardrobe remains **visually rejected**: open neck, knee deformation and poor recolouring/materials. Motion-number checks were not visual acceptance. Preserve all originals; do not promote that derived base. [Detailed asset comparison](avatar-fresh-variants-20260912.md) · [Workflow research](avatar-workflow-research-20260912.md).

## Proposed repeatable workflow

Choose one complete approved body and fixed bind pose; fit clothing to it; transfer/check skin weights on that exact skeleton; retain cuffs and details; author fabric/detail material regions for hex recolouring; test walking and difficult poses; then optimise and export. Mesh is surface geometry; topology is its vertex/edge/face connectivity. Complete geometry/topology work before final rig acceptance.

Marvelous Designer/EveryWear plus Blender is the proposed Mac trial; Tania applied, but no completed trial is recorded. CONNECT web upload is a publishing portal, not garment fitting. Documented desktop avatar import uses rigged FBX; renaming GLB is not conversion. MetaTailor’s Windows route remains a possible trial, not a proven reason to buy hardware. Product research is dated 12 September and needs rechecking when resumed.

## Where we stopped

Tania briefly requested more Studio experimentation, then account inspection. Tripo opened successfully in signed-in Edge. **She cancelled before the asset library/specifications were inspected. No generation, segmentation, credit expenditure or new avatar upload occurred.** Existing game character choices remain unchanged.

No new production is pending automatically. When requested, first select the canonical complete body/permanent underlayers, then prove one same-base garment. A complete matching outfit is useful as a reference but is not interchangeable clothing on the new base.

World states change at discrete activity/curriculum/story milestones, potentially including setbacks. Starting state, triggers and timing are undecided. Do not implement gradual progression or invent curriculum mappings.

## Open items

Physical-phone performance; one proven avatar/garment workflow; curriculum-linked world-state decisions; end-to-end classroom/evidence validation. Last project monitor: ten folders, zero coverage failures, 158 pending observations and nine pending changes. This checkpoint does not certify global reconciliation or a new public Blueprint deployment.

Checkpoint validation: exports regenerated and verified. Updated the obsolete test that required an unpublished-lighting caption after the environment was published. Full governance validation remains blocked by a pre-existing stale AGENTS.md review hash; no review receipt was forged or broad reconciliation claimed. Public reader artifacts regenerated locally; no new hosted Blueprint deployment performed.

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

## Marvelous Designer / EveryWear and Tripo vendor replies — received 18 September 2026

18 September 2026: Marvelous Designer/CONNECT response received; rigged/skinned same-base FBX is required, A-pose preferred, initial Walk/Run clips optional. EveryWear garment rigging, motion/Weight Brush checks, UV packing/baking and garment-only FBX are vendor-supported; the custom Tripo-to-game round trip remains untested. Tripo generation guidance and model-quality escalation recorded without a fidelity guarantee. See docs/production/clothing-workflow-research-20260916.md. Preserve prior evidence and the current selected master; no new generation or implementation from this update.
