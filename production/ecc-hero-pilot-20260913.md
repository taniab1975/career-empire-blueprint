# ECC hero-fidelity pilot — 13 September 2026

Owner: Career Empire environment integrator. Authority: Tania's explicit current Work request, CE-CHANGE-20260913-47. Approved direction and reversible implementation; appearance acceptance and deployment remain separate.

## Governing production standard
Approved hero/concept artwork is the visual north star for playable Career Empire. Target polished architectural visualisation / stylised realism: warm sandstone, glass, charcoal/blue framing, layered architecture and rooflines, pergolas/shade, rich paving, dense native Australian landscape, rocks, retaining walls and planters, strong warm directional sunlight, believable shadows/AO, environmental depth and purposeful detail.

Aim for roughly 80–90% of perceived hero richness at normal gameplay viewpoints. This is a visual acceptance ambition, not a measured percentage or current achievement. Browser optimisation must not mean simple, flat, minimal or indiscriminately low-poly.

Optimise through LOD, GPU instancing, atlases, compressed meshes/textures, PBR, normal maps, baked AO/lighting where appropriate, occlusion/frustum culling, selective geometry, distant cards/impostors, repeated modules and cheap interior impressions. Select techniques based on measurement; do not add every technique regardless of benefit.

HERO: ECC Campus, Avatar Studio and major destinations receive highest perceived fidelity. SUPPORTING: medium geometry with excellent materials and planting. BACKGROUND: aggressive LOD/impostors/cheap geometry preserving the town aesthetic.

Existing ECC is functional/blockout-quality relative to this new standard, not the final visual benchmark. Preserve recognition, working geometry and routes. Admin, Student Services and Chapel remain one connected destination. Preserve Chapel reflection and its planned wellbeing role without inventing rewards, clinical claims or curriculum triggers.

## Staged execution and acceptance
A. Capture fixed arrival, Home Base/Chapel and services views, desktop and phone viewport, Flourishing, Auto quality, identical camera and resolution. Record readiness, transferred resource sizes, draw calls, triangles and repeated frame samples. Retain exact baseline source.
B. Upgrade current silhouette detail, layered roof edges, recesses, warm masonry, charcoal/blue frames, glazing and linked shade structures. Retain existing massing, terracotta recognition cues and exact crest.
C. Improve paving scale, joints, foundation contact and existing planter coping; rocks remain inside existing obstacles.
D. Increase layered planting within existing beds using reused approved assets and instancing; preserve clear routes and welcome/Chapel sightlines.
E. Refine local material response, contact shading, glazing/interior impression and purposeful detail. Retain discrete world states and accepted daylight identity; no invented state timing.
F. Compare identical views, run performance and gameplay checks, reduce invisible cost first. Document remaining gap without claiming 80–90% from numbers alone.

Visual rubric: silhouette/layering; material richness; architectural depth; planting density; paving integration; sunlight/shadows/AO; palette; dressing; overall perceived richness. Review each 0–4 against the reference: absent, blockout, developing, close, reference-level. A score is an assessment aid, not proof of equivalence. Optimisation cannot materially damage normal player views. Gate: no critical regression in entrances, Chapel/EST/Studio/Home Base, walking or mobile UI; compare at least 3 repeated warm samples and clearly distinguish desktop viewport simulation from physical-device performance.

## Source and continuity evidence
Canonical Blueprint is the existing September 8 production-blueprint checkout; game is the existing September 12 work/release-candidate checkout of Emmanuel-ICT-Support/GTCEM-Career-Empire. Clean game baseline and remote main both d442671e21c1df623309c9fda279f6cb85fa385e, verified 13 September. Retain yesterday's approved layout, oval, camera, ground polish and joystick. Blueprint has pre-existing dirty documentation, export, monitor and test changes: preserve them.

Inspected retained approved CE-CAMPUS-01 and CE-CAMPUS-02 images and canonical targets contact sheet. These support the visual language, not surveyed school geometry. Current /mnt/data/image.png and /mnt/data/Campus.jpeg do not exist in this environment. No read_thread capability is available in this session, so original attachments in conversation 6aa5d29b-1718-83ec-81ca-2a0182a24d67 could not be recovered through that route. Do not claim the retained images are byte-identical to these missing attachments. Exact comparison against the missing three-panel reference remains open. No regeneration or paid resources required.

Global lastSuccessfulRefreshAt remains null; source checkpoints are not advanced by this scoped work. Avatar work and state triggers remain parked. Older approval-per-batch gates are superseded for this pilot by Tania's explicit autonomous reversible-work authorisation; material concept forks, destructive actions and credit/resource decisions still require her input.

## Progressive rollout
Finish and measure ECC first. Next HERO destination: Avatar Studio exterior using CE-STUDIO-CONCEPT-01, preserving the separately paused avatar/wardrobe work. Then supporting Careers Advice / First Workplace surroundings, then background campus/world by tier. No uncontrolled world rewrite.

## Work log
- Loaded handoff, instructions, refresh checkpoint, current productionPlan and recent verified release evidence. Started local project scan. Inspected existing ECC implementation: merged material geometry, instanced approved planting, procedural masonry and glass; retain these foundations.
- Recorded this governing standard before implementation. Baseline capture and measured pilot follow.

Start scan: 10 monitored folders, zero coverage failures, 159 retained intake observations, nine older pending integration records. Baseline snapshots and exact reference hashes saved privately. First benchmark used software rendering and was abandoned; subsequent hardware run hit a phone-settings selector error after five captures. Neither incomplete run supplies final timing results. Retrying corrected fixed-view harness.

## Implementation checkpoints
- B/C: retained the original connected massing, curved Chapel openings, exact crest, terracotta roof recognition and original collision footprints. Added shared procedural PBR stone/paving maps (colour, height/bump and roughness), real window reveal edges, low-cost interior impressions, charcoal fascia/roof bands, timber entrance soffits and downlight strips, planter coping and local contact-AO cards.
- D: increased grasses/flowers inside existing raised beds, with reused shrub and rock meshes. Original uploaded GLBs remain unchanged. No new trees or building relocations.
- E: warmer directional Flourishing daylight and lower hemisphere fill reveal depth; Growth/Disrepair timing and discrete state selection stay unchanged. No screen-space AO or full indoor reconstruction claimed.
- F: merged opaque static SPACE/Media geometry and repeated garden shade geometry while retaining transparent surface sorting. Shared identical repeated Media materials. Partitioned existing plant instances into 12-unit cells for frustum culling, keeping all original instance matrices and full-detail geometry. This is a bounded engineering optimisation of the current campus, not a visual rewrite of other destinations.
- Intermediate detail-only pass increased rendering cost; it is retained as diagnostic history, not final performance evidence. The final comparison includes batching/culling. A second normal-player forecourt/services comparison is being added because the approved Home Base view includes a large foreground tree.

## Verification and measured limits (in progress)
- Source checks pass; six unit tests pass (coverage 96.7% on their existing service scope, not environment coverage). TypeScript and five focused Blueprint plan/route tests pass. Desktop/phone Blueprint standard and generated pilot document render without horizontal overflow or page errors.
- New static-batching regression found non-uniform-scale shear lost by transparent mesh matrix decomposition. Corrected by retaining the exact matrix with matrixAutoUpdate disabled; focused retest passes. This is a real fixed helper defect; the earlier failure remains recorded.
- Packed material height (red) and roughness (green) into one shared data texture per surface family, preserving shader channel values. This removes three redundant 1024-square GPU textures (~16 MiB including mip chains versus the first detail pass). Final procedural PBR sets use six 1024-square RGBA textures (~32 MiB including mip chains), versus three former 512-square textures (~4 MiB): about +28 MiB for these map sets. This is an estimate, not measured total GPU memory. No mesh/image downloads or paid generation added; there is additional CPU work at first construction.
- Refreshed GitHub status: d442671 Pages deployment 34694247060 succeeded; CI 34694247616 completed with failure in Run checks and tests. This supersedes yesterday's unknown/in-progress CI status. It is the existing live baseline, not a test result for this local candidate.
- Full Blueprint publication validation still stops at Review is stale: AGENTS.md. The prior release receipt is not rewritten to certify unrelated dirty source. Global refresh remains null; no hosted Blueprint or game publication claimed.

## Final texture-resolution checkpoint

The preceding 1024-map figures are an intermediate pass, superseded by the final 512-pixel maps sampled from the same 1024-unit pattern. World-scale courses and paving remain identical. Fixed Home Base, forecourt and services views were inspected; no material damage to normal gameplay richness was observed. Six 512 RGBA map textures with mip chains total ~8 MiB versus ~4 MiB for the replaced maps: +4 MiB, plus ~1.4 MiB for the new room/contact maps. The intermediate 1024 textures consumed ~32 MiB for those map sets. No total GPU-memory measurement or device acceptance is inferred. Both resolution checkpoints are retained privately.

## Final local result


| View width / location | Draw calls before → after | Triangles before → after | Triangle change |
|---|---:|---:|---:|
| 1280 arrival | 1,673 → 1,034 | 7,876,960 → 5,990,378 | -24.0% |
| 1280 home | 680 → 339 | 3,872,563 → 1,953,413 | -49.6% |
| 1280 aerial | 1,709 → 1,188 | 7,886,848 → 8,100,894 | +2.7% |
| 390 arrival | 709 → 406 | 3,878,737 → 2,016,145 | -48.0% |
| 390 home | 261 → 183 | 3,865,235 → 1,242,873 | -67.8% |
| 390 aerial | 1,645 → 1,028 | 7,824,272 → 6,893,918 | -11.9% |

These are renderer workload counts at identical views, not FPS guarantees. In the final run, desktop Home Base sampled 16–20 FPS versus 14–15 before; the phone-sized Home Base sampled 60 versus 18–19. Other runs fluctuated considerably, and no physical phone or school device was tested. Aerial desktop triangles rose 2.7% because the entire richer scene is visible.

Local first-ready time: desktop 4.11s → 4.14s; phone viewport 3.28s → 5.05s. The measured loaded-resource increase was only 11.8 KiB of code; no new mesh/image downloads or credit spending. New generated PBR maps add an estimated 4 MiB for the stone/paving map sets plus roughly 1.4 MiB for room/contact maps including mip chains over the replaced maps; total GPU memory was not measured. CPU texture creation remains an optimisation opportunity. Existing loaded resources total roughly 66 MB before accounting for browser cache reuse.

## Final checks and limits

Source checks and six unit tests passed. The full browser run passed 35 of 36 scenarios; the new batching test caught a transparent-transform defect. The correction passed its targeted retest, so all 36 scenarios are covered across the run and retest. Existing routes/collisions, Home Base, Studio save/return, desktop/phone Chapel reflection, EST controls and startup passed. The initial failure is preserved.

Blueprint TypeScript and five focused plan/routing tests passed. Desktop/phone reader checks passed. Full Blueprint publication validation still stops on an existing stale AGENTS.md review receipt; no release guard was bypassed or review receipt fabricated. Baseline Pages deployment succeeded, but its hosted CI subsequently failed. Detailed remote failed-log retrieval was unavailable due an API connection error.

**Remaining hero gap:** this is a developing pilot, not an 80–90% fidelity pass. More natural foliage and tree bark, less repetitive roof/material detail, richer coherent glazing and stronger environmental dressing remain. Exact silhouette comparison against the requested three-panel image is incomplete: /mnt/data/image.png and /mnt/data/Campus.jpeg were unavailable, and this session had no read_thread tool. Retained approved canonical campus/corridor originals were inspected; they are not asserted to be the missing attachments.

## Reusable standard and next destination

Use shared PBR surface sets, real reveal/soffit geometry, inexpensive room impressions, contact shading, exact static material batching and spatial instance culling; retain transparent sorting and full-detail near views. Compare identical player views and report geometry, loading, memory and device limits separately from visual acceptance.

Next recommended destination after ECC acceptance: **Avatar Studio exterior**, following CE-STUDIO-CONCEPT-01. The separate avatar/wardrobe project remains paused. Supporting destinations follow; background receives the cheapest suitable detail without an uncontrolled world rewrite.

[Full workload data](/career-empire-blueprint/evidence/ecc-hero-20260913/workload-comparison.json) · [Retained approved campus reference](/career-empire-blueprint/references/current/ecc-career-campus.png)

Saved game checkpoint: a2794e42c359ed930124e34b459d71bcc35216ef, branch visual/ecc-hero-pilot-20260913. Not pushed. Exact source and asset hashes: private/production-evidence/2026-09-13/ecc-hero-pilot/final-source-receipt.json. Existing complete [ECC specification and Chapel role](ecc-campus-hub-specification-20260910.md) remains authoritative for gameplay.

## Visual rubric assessment

Integrator assessment, not Tania acceptance: silhouette/layering 1→2; materials 1→2; architectural depth 1→2; landscaping 2→2; paving integration 1→3; lighting/shadow/AO 1→2; palette 2→3; dressing 1→2; overall richness 1→2 (0 absent, 1 blockout, 2 developing, 3 close, 4 reference-level). No mathematical conversion to the 80–90% target. The missing exact three-panel source prevents a definitive silhouette comparison.

## Fixed-view evidence

Before (actual local render of exact public baseline d442671):

![Before ECC forecourt](/career-empire-blueprint/evidence/ecc-hero-20260913/ecc-before-forecourt-1440.png)

After (actual local candidate, not published or visually accepted):

![After ECC forecourt](/career-empire-blueprint/evidence/ecc-hero-20260913/ecc-after-forecourt-1440.png)

## Close verification

Final local candidate a2794e4 has a clean game working tree and a local-only manifest: all 51 listed runtime/media file hashes match, with no test-only camera hook in shipped source. Final desktop/phone reader checks cover Start Here, Visuals, World and Delivery plus the generated pilot document and portable comparison: zero page errors or horizontal overflow; all comparison images load. Full browser run status and corrected-helper retest status are retained separately.

At close, a fresh remote main check failed DNS resolution for github.com. Preserve the earlier session verification of d442671 rather than advancing a remote checkpoint. Detailed baseline CI log retrieval also failed API connectivity. No new hosted source, recovery push or publication is asserted.

Closing scan: 10 registered/discovered folders, zero coverage failures within that registry, 160 retained intake observations and 10 pending change records (including this pilot). The independent September 12 release-candidate clone is not in that registry or its linked-worktree discovery; this task verified it manually by remote identity, Git baseline/current source, manifest and runtime tests. Automatic monitor coverage of that clone remains a separate tracking gap. No global refresh success or blanket integration approval.

## Tania visual review — 13 September 2026

Tania reviewed the local pilot against the attached approved campus/town imagery and said it is still below that standard. Assessment: agree; a2794e4 remains an improved blockout, materially below the approved hero target. Technical and performance passes are not visual acceptance. No visual acceptance or deployment is implied.

Develop one substantially higher-quality playable ECC slice: convincing native foliage, textured sandstone and paving, architectural depth and glazing/interior detail, integrated landscape beds, warm light and contact shadows. Preserve layout, Chapel/Admin/Services connection, gameplay and useful batching. Compare at a fixed normal player view before rollout; assess physical-device performance separately. This is substantial asset work, not a final minor refinement.

The newly supplied screenshot is retained as `private/production-evidence/2026-09-13/ecc-hero-pilot/tania-quality-reference.png`. The approved canonical campus/corridor originals were already available. The exact older three-panel attachment remains inaccessible; existing source checkpoints remain unchanged. This feedback update makes no new implementation, benchmark, remote audit or publication claim.

## Courtyard slice — approved implementation continuation

Tania explicitly approved the substantial architecture, foliage, materials and lighting pass on one playable ECC courtyard view. Continue existing change 47; preserve layout/gameplay and batching. Baseline is local a2794e4 (below target), not the older public blockout. Implement real recessed Admin/Services room impressions, refined roof and wall materials, architecture detail, layered fine-leaf vegetation inside existing beds and courtyard lighting depth. Use identical player/camera settings for evidence; do not certify fidelity through technical tests alone. No asset purchase, generation credits, deployment or wider rollout in this step.

Courtyard work checkpoint: actual recessed Admin/Services rooms and apertures, roof/timber detailing and slatted links implemented; photographed CC0 Poly Haven Sandstone Blocks 08 (Rob Tuytel), 1K diffuse/normal/packed AO maps, source hashes retained in game assets/courtyard/provenance.json. Fine geometry native foliage replaces the pilot beds and two existing courtyard-facing Arrival beds only; four tree roots remain inside existing obstacles. No wider building rewrite.

Rendering defect found in local Three.js source: DirectionalLightShadow inherits LightShadow.updateMatrices, which does not rebuild the projection matrix. The original world changed shadow camera bounds from default ±5 to the intended campus extents without calling updateProjectionMatrix. Corrected in the environment application; visual and performance verification underway. Keep historical performance figures as historical: broader actual shadow coverage can add real rendering cost. Start scan: 10 registered folders, zero coverage failures, 161 retained intake observations, 10 pending changes. Independent game clone is manually verified and still outside the old registry.

Correction to the preceding shadow hypothesis: local WebGLShadowMap source (three.module.js, shadow-map allocation) calls shadow.camera.updateProjectionMatrix. The missing call at world setup is NOT an established rendering defect; renderer initialization already applies the configured bounds. Explicit update is unnecessary and will be removed. Runtime shadow output is being investigated. Do not repeat the earlier diagnosis as verified.

Courtyard rendering checkpoint: the shadow-camera hypothesis was ruled out by WebGLShadowMap's initialization code and the runtime projection matrix; the unnecessary explicit update was removed. Changed the Flourishing sun/fill balance instead. Testing a courtyard-bounded depth-based contact-occlusion composite with direct rendering on Low quality/unsupported float targets; tested sky colour preservation and edge stability. This is an experimental rendering pass until the matched-view measurements justify retention. Original dynamic shadow map remains 2048.

Seven of nine focused gameplay scenarios passed in the first run. Arrival walking and saved-avatar startup hit timing limits while independent screenshot renders were also running. These failures remain recorded; rerun in isolation before claiming a pass. No changed collision envelopes were introduced.

## Courtyard slice — final local checkpoint, 13 September 2026

Actual recessed Admin/Services rooms and glazing, photographed sandstone with normal/AO/roughness maps, roof/timber/slatted-link detail, four fine-leaf native trees and layered shrubs/grass in the ECC beds and two existing foreground beds. Flourishing sunlight/fill revised. Existing collision footprints, connected Chapel/Admin/Services, original GLBs, controls, quiet reflection and EST retained.

This is a local playable iteration and remains below the approved hero reference. Overall architectural and landscape composition, convincing interiors/reflections and natural foliage still need further art work. No 80–90% fidelity, physical-device acceptance, wider rollout or deployment is claimed.

| View | Draw calls before → after | Triangles before → after | Change | Ready time before → after | FPS samples before → after |
|---|---:|---:|---:|---:|---|
| 1440 px | 352 → 358 | 1,800,401 → 1,917,123 | +6.5% | 2.58 → 2.70 s | [31, 37, 37] → [32, 33, 33] |
| 390 px | 224 → 230 | 929,365 → 823,987 | -11.3% | 2.00 → 2.16 s | [59, 60, 59] → [59, 56, 60] |

Local Chromium/Metal, DPR 1, Auto, Flourishing; identical player [0, -2.8], yaw 0, normal walking camera. Three one-second samples after six seconds settling. Draw/triangle counters describe the main camera render and exclude shadow-pass work, consistently with the baseline. Phone figures simulate a viewport on the Mac, not a physical phone. Runs varied substantially; do not infer a guaranteed FPS or a network-loading speedup.

Added encoded resources: 481,637 bytes (approximately 470 KiB); three 1K JPEG maps and one reusable geometry module. Estimated added material-map GPU allocation ~12.5 MiB including mipmaps, plus reflection-map/geometry costs; total GPU memory unmeasured. No paid assets or generation credits. Sandstone Blocks 08 by Rob Tuytel, [Poly Haven](https://polyhaven.com/a/sandstone_blocks_08), CC0; upstream hashes and provenance retained beside the assets.

Ten distinct focused browser scenarios passed across the initial seven passes and the isolated four-test rerun (one overlap): paths/collisions, arrival-to-Studio/save/reload, startup/avatar choices, phase/movement, loading failure handling, desktop/phone Chapel and the new courtyard-link/quality/resize/return check. The initial run retained two timing failures during concurrent screenshot work; both passed in isolation. Source checks and module syntax passed. These are scoped checks, not a claim of a fresh full-repository CI run.

Rejected experiments: depth-based screen-space occlusion had insufficient benefit for its cost and introduced edge artefacts; removed from shipped code. The suspected shadow-camera initialization defect was ruled out by the actual renderer code/runtime matrices; unnecessary update removed. The final foliage uses four nondegenerate triangles per folded leaf, preserving the silhouette while reducing redundant geometry; no new full-screen render targets remain.

Reusable standard: real apertures and inexpensive rooms behind glass; shared photo-based PBR maps with provenance; cached, instanced, fine-leaf vegetation; material-level AO and directional light; retain a fixed normal-player comparison and measure both image and cost.

Next: Keep the next visual work on this same ECC courtyard: close the remaining interior/glass and natural landscape composition gap, and verify sustained walking performance on school hardware before calling it the HERO benchmark. Avatar Studio exterior follows only after ECC acceptance; avatar/wardrobe and world-state timing remain parked.

Access: supplied 13 September screenshot and retained original concepts available. Original /mnt/data/image.png and /mnt/data/Campus.jpeg and read_thread remain unavailable. GitHub main d442671 verified again; its Pages run succeeded and existing hosted CI failed. Independent current game clone remains outside the older scan registry and was manually verified. Global refresh stays null; retained backlog and stale Blueprint publication reviews are not cleared.

Saved game checkpoint: `69cf624bbfe9cbe7b6e676535a2b109cf3b5def8`, branch `visual/ecc-hero-pilot-20260913`.

![Previous local courtyard](/career-empire-blueprint/evidence/ecc-hero-20260913/courtyard-baseline-forecourt-1440.png)

![Current local courtyard](/career-empire-blueprint/evidence/ecc-hero-20260913/courtyard-after-forecourt-1440.png)

Close verification: comparison slider, all reference/game images, Overview, Visuals, World, Delivery and generated pilot document passed at 1280 and 390 pixels with no horizontal overflow or page errors. Closing registry scan: 10 monitored folders, zero coverage failures within that registry, 162 retained intake observations and 10 pending changes. Current independent game clone was manually verified; no all-source completion or publication is inferred.

## Production-method correction following Tania’s challenge

Tania challenges why the courtyard was produced and presented when it still fell short of the approved hero reference. Correction: the agent preserved too much of the blockout presentation, conflating gameplay/layout preservation with retention of the simplified visual construction. It continued incremental detail work after screenshots showed the overall approach was insufficient, and used implementation/test completion as the stopping point instead of the approved visual result. This is a production-method and acceptance-gate failure, not evidence that the user prompt was unclear or that browser rendering requires this quality ceiling. Local 69cf624 remains an unaccepted intermediate build; the requested hero-quality demonstration has not been achieved. Retain useful implementation as a fallback, but do not repeat another small polish pass or claim the visual task complete. A materially different asset-production approach must first demonstrate the target in the fixed playable view; no new implementation is started by this discussion.

## Reassessment with recovered triptych — 13 September 2026


13 September 2026. Reassessment requested by Tania; this is a recommendation and source-record update, not a new implementation or appearance approval.

The strongest route is to retain the existing game and author one coherent, detailed ECC arrival courtyard as a modular 3D environment. Use the middle panel of the newly attached real-life/concept/game comparison as the specific ECC design target. Preserve the real campus recognition cues and connected layout; use the wider town hero art for overall material, landscape and lighting consistency.

## What the comparison shows

The current playable view still has broad uniform surfaces, heavy rectangular frames, unconvincing glazing and rooms, exposed empty paving and foliage that reads as repeated geometry. Its arrangement and illumination do not create the layered, sheltered garden setting in the concept. Adding more separate details has not resolved the composition.

The middle panel supplies a specific composition: curved sandstone Chapel with its tree window, gabled Admin entrance and crest, blue/charcoal framing, terracotta roof planes, connected shaded walkways, a welcome sign embedded in rich planting, patterned warm paving, irregular native tree canopies, and warmly lit entrances. That local reference should govern ECC; a generic larger modern campus would change the design.

## Recommended production method

1. **Set the reference and comparison view.** Use the upper arrival concept as the primary composition, with the Chapel garden and connected-layout views checking adjacent space. Retain the approved normal walking camera for acceptance. Add a comparable reference camera for diagnosis, clearly labelled, and check the scene while moving; do not solve the mismatch with a flattering camera or a flat backdrop. Concept views are design evidence, not surveyed plans. Preserve established ECC recognition, layout and functional entrances when reconciling uncertain dimensions.
2. **Author a coherent environment in editable 3D source.** A Blender master scene is a suitable working format. Import the existing layout and collision proxies as guides; retain useful meshes, exact crest and gameplay anchors. Selectively remodel the visible architectural shell where its simplified shapes prevent the target: wall and window depths, believable structural proportions, roof intersections/eaves, curved Chapel masonry and shaded links. Use modular pieces and intentional material mapping. Merely reproducing the same primitive construction in Blender or saving it as GLB will not improve its quality.
3. **Use assets that already demonstrate the required quality.** Custom architectural work is necessary for ECC identity. Evaluate existing assets and well-made native vegetation, rocks and surface textures at player distance. Choose botanical silhouettes, branching, canopy gaps and layered planting composition deliberately. Reuse a small set of good assets with controlled variation and instancing. Generated geometry or image-to-3D output can be candidates, but must earn inclusion through actual model inspection; they are not assumed to preserve architecture, produce clean hidden surfaces or meet the target automatically. No asset vendor, paid service or resource spend is selected by this recommendation.
4. **Establish the full look in the game early.** Export the bounded courtyard into the existing renderer and develop materials and lighting together: warm sandstone at correct texture scale, credible roof and frame finishes, glass that balances reflection with interior visibility, shallow furnished rooms, directional sun, softer fill and contact shading. Baked surface occlusion and selected indirect-light detail can help; do not hard-bake one afternoon's shadows into assets that must support other world phases. Verify material export and runtime appearance; an offline render is diagnostic evidence only.
5. **Make visual quality and performance simultaneous acceptance conditions.** Compare unedited fixed-player screenshots and a short walk through the scene with the approved concept. Check silhouette/layering, materials, depth, planting, paving, light, palette and dressing. Check nearby angles, functioning doors, Chapel reflection/return and clear routes. Establish device-specific frame-time, load and memory budgets before expanding the scene; profile repeatedly during assembly. Optimise repeated assets, unseen/distant detail, texture and mesh delivery, shadow coverage and LODs before sacrificing the normal player view. Retain both pre- and post-optimisation captures. Physical school hardware remains necessary for performance acceptance.

The first deliverable is a small playable ECC environment demonstrating the intended visual language, including the approach from the welcome sign to Admin and the adjacent Chapel edge. All visible elements needed for that view should be designed together. This is not a request to remake the whole campus or turn a single picture into a non-walkable stage set. Extend the proven kit to the connected ECC hub after it meets the visual and performance criteria; Avatar Studio exterior is the next HERO destination afterward. Supporting and background areas then use the established palette with lower-cost geometry and distance detail.

## Why this route

The current game already imports GLB assets. A richer authored asset workflow can therefore be evaluated without replacing movement, activities or the engine. Three.js documents GLTFLoader support for compressed meshes, compressed textures and GPU instancing; these are available techniques to assess against the project's installed version, not proof that any particular scene will run well. glTF supports material normal, roughness and occlusion data. Sources checked: https://threejs.org/docs/pages/GLTFLoader.html and https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html .

Further incremental decoration of the current construction has weak evidence after two below-target iterations. An engine migration would add integration work before addressing the demonstrated asset/composition gap. A generated still or offline beauty render cannot prove the requested playable outcome. The asset-authoring approach is my recommendation; it is not a guarantee that changing tools will achieve the look.

The unresolved production risk is whether the available asset-authoring process can deliver convincing architecture and natural planting at the required quality. A single courtyard proof should resolve that before wider work. If it cannot, the next resource decision should be a concrete shortlist of suitable assets or a scoped 3D environment-artist brief, with examples and costs, rather than another below-target polish pass. No purchase, hiring or credit use is authorised by this assessment. The 80–90% ambition remains a visual direction, not a measured fidelity score or a promise.

## Current evidence and limits

The existing game checkout is clean at local 69cf624bbfe9cbe7b6e676535a2b109cf3b5def8. It remains an unaccepted intermediate build. Reviewed its architecture/foliage source and the retained 1440 px after screenshot; no game assets or code were changed in this reassessment. Existing measurements and gameplay receipts remain historical evidence; no new runtime benchmark, remote release check or deployment was performed.

The newly supplied Downloads PNG shows the full real-life/concept/game triptych and resolves access to the visual comparison content for this discussion. It does not establish byte identity with the old /mnt/data/Campus.jpeg, and the exact old /mnt/data paths remain unavailable. Retained full-size concept originals remain available. Global refresh and prior source checkpoints must not be advanced.

Reference evidence: `private/production-evidence/2026-09-13/ecc-hero-pilot/tania-ecc-triptych-reference.png`; SHA-256 `56c33b5b01c72591f250cc8c82b4d72412cfbdec49e90b1ea508bb20b1818383`. Recommendation logged under existing CE-CHANGE-20260913-47. No new Blueprint or game implementation. Start scan: 10 monitored folders, zero registry coverage failures, 163 pending intake observations, 10 pending changes; independent game clone coverage remains a gap.

## Coherent courtyard rebuild authorised — 13 September 2026

Tania authorises the recommended bounded ECC arrival-courtyard visual rebuild, preserving game mechanics and connected layout. Rework visible architecture, foliage, materials and lighting as one coherent scene using the approved triptych middle panel. Keep current 69cf624 as recoverable baseline; author editable 3D source and integrate in the actual game repository. Record under existing change 47. Verify actual player view and nearby movement, gameplay routes and performance before promotion. No world rewrite, asset purchase, hiring, generation-credit spend, push or deployment is selected. Existing local concepts suffice; original /mnt/data identity and global refresh gaps remain.

Tania adds two approved changes during the rebuild: move the marked ECC crest/welcome sign to the right side of the forecourt; include the newly supplied iconic Chapel entrance reference, showing tree-patterned glass and the figure in front. Source retained as ecc-courtyard-rebuild/chapel-recognition-source.png; SHA-256 920ffad8be0c46c3a6e1967e8d7c84331dab1c41c4443df68236150c7ad52b3d. Home Base must still return to the welcome sign after relocation. These are bounded layout/recognition changes, not wider map approval.

### Rebuild progress — authored master and actual game checks

The approved visual rewrite is in progress in the existing game checkout, based on 69cf624. An editable Blender master and game GLB now contain a unified Chapel/Admin/Services shell, tiled roofs, real recessed rooms, covered connections, bevelled stone/paving and planted forecourt beds. The welcome sign and Home Base destination are on the right. The user-supplied Chapel photograph is retained exactly; the latest integration uses its tree-glass/figure region as the entrance recognition surface. The earlier approximate sculptural experiment is retained in the v2 master, not claimed as an exact reconstruction.

Desktop control was explicitly authorised. Blender native control works; shell-started Blender and Playwright Chromium were blocked by macOS sandbox process/GPU access. The existing in-app browser is being used for actual scene checks. Full CI source/unit stages pass, but all 37 automated browser cases failed at browser launch before application assertions. Seven production Rapier routes, building doorway/wall/pond checks, and manual Chapel/reflection entry pass in the actual browser; these are scoped verification, not a full CI pass.

One built-in ImageGen call produced a reception back-wall texture used behind actual recessed room geometry. This is an asset, not gameplay evidence. No asset purchase, external API key, hiring or paid subscription was selected. The earlier scope note saying no generation-credit spend was selected referred to the planning decision; built-in generation was subsequently used and is now explicitly recorded. Preserve prompt, original and derived asset hashes.

Photographic CC0 sandstone and garden reflection assets are integrated. Native foliage is authored geometry with instancing; lower geometry shrubs reduce cost. The first compressed master is approximately 2.1 MiB versus 8.8 MiB raw, preserving the visible geometry. Initial screenshots exposed incomplete roof-end closures, jagged opening boundaries and overly dark surfaces; these are being corrected before final evidence. Initial performance samples taken while Blender was processing and at inconsistent viewport settings are excluded from the comparison. No visual acceptance or deployment is claimed.

## Authored courtyard v4 — local rebuild checkpoint

Authored ECC courtyard rebuild is now a local playable quality candidate: editable Blender v4, coherent connected shell and tiled roofs, recessed rooms and photo-backed interiors, native planting, revised materials/light, right-hand welcome sign/Home Base and the supplied Chapel recognition photograph. HERO acceptance is still open; no deployment.

## What changed

- Connected curved Chapel, gabled Administration and Student Services rebuilt as a coherent architectural asset. The final main roofs run across the wings, with real tiles, enclosed ends, soffits, slim covered links, recessed glazing and room geometry.
- Photographic sandstone, bevelled paving and coping, restrained paving grain, warm interior light and garden HDR reflections. Generated reception back-wall imagery sits behind actual room geometry; it is a game asset, never gameplay evidence.
- Layered strappy groundcover, fine-leaf shrubs, branching eucalypts, garden rocks and two additional forecourt beds. Existing useful rocks, crest and surrounding campus assets are retained.
- The welcome sign is on the **right**, and Home Base returns to it at (4.9, −1.7).
- The **supplied Chapel photograph** provides the iconic tree-glass and figure surface beside the entrance. Original image bytes are retained. This is a photographic surface, not an exact free-standing 3D sculpture; the 304 × 356 source limits close-up clarity.
- Existing movement, destinations, avatar interfaces, Studio save/return, Chapel reflection and EST remain. The shared Flourishing sun/fill adjustment also affects the surrounding outdoor world. Other phase presets and curriculum/state triggers remain unchanged.

## Actual evidence

[Before screenshot](../evidence/ecc-hero-20260913/rebuild/ecc-rebuild-before.png) · [Rebuilt screenshot](../evidence/ecc-hero-20260913/rebuild/ecc-rebuild-after.png) · [Phone view](../evidence/ecc-hero-20260913/rebuild/ecc-rebuild-phone.png) · [Interactive comparison](../evidence/ecc-hero-20260913/rebuild/ECC-courtyard-rebuild-review.html).

Before and after use the actual game at 1440 × 900, DPR 1, Avery at (0, 0.16, −2.8), normal walking camera, Flourishing / Auto. Screenshots are unretouched. The previous source is 69cf624. The review harness adds measurement controls only; no camera or scene alteration is used for the comparison. The final screenshot is taken directly from the production page.

## Performance and loading

| Measurement | Previous courtyard | Rebuilt courtyard |
|---|---:|---:|
| Visible triangles | 1,917,123 | 2,284,884 |
| Draw calls | 358 | 340 |
| Short desktop FPS sample, median | 53.5 | 41.5 |
| Sample FPS range | 51–60 | 32–47 |

The rebuild adds about **19% triangles** and uses about **5% fewer draw calls**. New runtime assets and their loading modules total **5.82 MB**. The architecture GLB is **2.22 MB**, reduced from **9.25 MB** without simplifying its geometry; WebP reduces transport size for the new 1024-pixel paving maps. These are file sizes, not a claim about download time or GPU memory reduction.

Frame rates varied across short desktop runs; an earlier rebuilt sample reached 60 FPS. The final recorded comparison above is retained rather than selecting the fastest result. These are eight-second samples on this Mac, not a sustained school-hardware or physical-phone benchmark. Cached localhost readiness was about 1.2 seconds for the rebuild, but cache state and range requests make it unsuitable as an internet-load comparison. Browser network totals are retained in the raw evidence and must not be treated as an exact cold payload size.

## Verification and limits

Seven real-physics routes pass: Studio, reception, Careers, EST, northern campus, new Home Base and Chapel approach. Doors are reachable while the tested wall and pond remain solid. Manual desktop checks cover Chapel entry, reflection and return, Studio save/return and the moved Home Base. At 390 × 844, compact settings, Low quality, Growth selection, Home Base and Chapel entry work; this is desktop viewport testing.

Source and module syntax checks pass. The CI source/unit stages passed (six unit tests). All 37 automated browser cases were blocked at browser launch by the macOS sandbox, before application assertions. Scoped browser/physics checks do not replace a full CI pass. No deployment or physical-device acceptance is claimed.

## Gap to the hero target

The rebuild establishes more coherent architecture, room depth, a planted approach and warm light. It still needs stronger species variety and natural variation in the planting, more convincing close-up interior dressing and a higher-resolution/fully modelled Chapel recognition treatment to stand beside the reference at close range. Its overall art quality remains a review candidate. Passing technical checks does not close the HERO acceptance gate.

## Blueprint and reusable standard

The canonical Blueprint records the authorisation, both requested changes, source photo, generation provenance, staged progress, actual screenshots, rejected experiments, editable master, compression recipe and verification limits under CE-CHANGE-20260913-47. The governing hero-fidelity standard and three tiers are retained. Global refresh stays incomplete; old /mnt/data byte identities, broader source refresh, hosted CI and independent-clone monitoring remain unresolved.

Reusable work: editable geometry in metres; separate gameplay collision contract; real window/room depth with economical background textures; shared photo PBR maps and environment reflections; instanced native foliage; material batching; compressed GLB and WebP transport; same-camera evidence before promoting a visual standard. Production source and complete asset provenance are retained canonically.

**Next environment:** Avatar Studio exterior, after ECC visual and target-device acceptance. Supporting paths/landscape follow the accepted kit; background buildings use progressively cheaper geometry and distant representations. No whole-world rewrite is authorised by this pilot.

[Walk the local courtyard](http://127.0.0.1:4285/playable-3d/?view=ecc-courtyard). The local preview requires its server to remain running. Nothing in this rebuild has been published.

The final model corrects the roof orientation in the actual exported geometry; v3 protruding-end screenshots are rejected. Sawn-paving grading replaced the overly contrasting trial. Larger sips JPEG recompression was rejected; final WebP source derivatives are documented. Retained controls and routes were checked again against final geometry. No claim of full CI, physical-device approval, 80–90% achievement, public Blueprint reader release or game deployment.


### Final local checkpoint — 13 September 2026

Game source saved at af04666d27a1521c575839c5ab8b3ef69f98760e in the existing live-game clone; no push or deployment. All 31 scoped Blueprint tests pass. One stale test now checks the approved governing standard without implying acceptance of an individual build; an original private source-file location was removed from exported operations and retained privately. The source-bound AGENTS review receipt still gates full Blueprint release validation.

Closing registry scan: 10 registered folders, five discovered working copies, zero coverage failures within that registry, 166 retained pending intake observations and 10 pending changes. The independent game clone still requires manual verification; global refresh remains incomplete.

The review HTML is saved with checked local image references. Opening it in the browser was blocked by the browser security policy; no alternate-origin workaround was used. The actual playable game and screenshot output were verified directly. The review was also offered through the file panel (queued, not claimed visibly opened). Final source/evidence hashes and check limits are in the private rebuild final-receipt.json.


## Courtyard accepted; wider rollout authorised

Next level good. that's a yes yes yes from me. Can you go ahead with that standard for the rest?

Appearance of af04666 is accepted. Current rollout details: approved-standard-rollout-20260913.md. Earlier “acceptance open” assessments above are retained as history and superseded by this explicit approval.


## Verified live checkpoint — supersedes earlier pending-release notes

Tania-authorised campus release is live and verified at 61826d685d434ceb8ecedaf7adf5be5d7280b651 (2026-09-13T06:50:00Z); reviewed candidate b876b64238c5c6860919e66b618d4c6fe9b9ac9b, PR #11.

English/Media retains its curved oval-facing facade with clearer glass and art/film/drawing displays. SPACE reveals two practice half courts, hoops and timber flooring. Campus glazing is clearer. Overlapping path geometry and six obsolete display ramps were removed to repair marked flicker. The accepted campus rollout, completed EST native-video repair and completed cleaned-crest/glass-signage receipt are included. Working gameplay, connected Chapel/Admin/Services and Home Base remain intact.

Source/package checks (78 assets and 28 reachable modules), 14 unit tests, eleven real-physics routes and actual full-size browser views passed. All 78 published release files match the checked source; the deployed game was inspected in the browser. Final candidate hosted CI: 24 browser tests passed, one arrival-walk timeout, 12 not run. Prior diagnostics established severe GPU-free rendering stalls; the full suite has NOT passed. Reduced-graphics experiments were removed from final tests. Sustained physical school-device performance remains unverified.

Live game: https://emmanuel-ict-support.github.io/GTCEM-Career-Empire/playable-3d/

Keep the newer crest sharpness/sign positioning and Chapel glazing/metal-figure follow-up separate until its owner completes and verifies it. Review sustained performance on a representative school laptop and phone; then reuse the approved architecture/material/planting standard for future destinations by fidelity tier. Preserve paused avatar/wardrobe and curriculum-state timing.

Global refresh remains incomplete (lastSuccessfulRefreshAt is null). Retain missing /mnt/data source byte-identity checkpoints, the independently verified September 12 game-clone monitoring gap, and pending canonical reader integration/review receipts. Game deployment does not publish the Blueprint reader.

The first automatic merge review rejected publication over validation prerequisites. Tania then confirmed that she did not intend to block the already requested merge; the same exact candidate merged successfully. No branch protection was changed. Failure history and renewed authorisation are preserved in the evidence.
