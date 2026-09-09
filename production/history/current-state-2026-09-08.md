# Current State – 8 Sep 2026

Career Empire remains an experience-first career-and-life simulation for Year 12 Careers and Employability: identity, meaningful choices, supported learning, application, feedback, recovery and visible personal/community growth. The approved Design Atlas decisions remain in force. This is the current implementation record inside the existing Blueprint, not a replacement vision or competing blueprint.

The playable direction is **Three.js + Rapier, with Blender for asset production and visual world editing**. The current town has modular ground, 36 replacement trees, a new Home Base exterior opening Avatar Studio, an EST hall, walking and saved local profiles. The reference Tripo avatar is imported and playable in a fixed shirt prototype. The approved reusable wardrobe is **not finished**: both separate-shirt production runs fail fit, despite successful skinning/export. A measured asset specification and two scripted pipelines now exist; they are prototypes, not an automatic production guarantee.

The newer 120k-triangle Home Base is deployed; the earlier 24k model is superseded. The Blender master contains the actual playable scene, while Tania's edited buildings/layout remain separate review work. The 3D hall's module handoff is currently broken on public Pages: it requests an old `/existing/…` path returning 404. The existing EST module returns 200. The teacher EST matrix is implemented locally, but its implementation is absent from the public dashboard source checked today. These are immediate integration priorities, not reasons to discard the existing learning platform.

## Status and evidence rules

- **IMPLEMENTED** — present in inspected source/assets; state whether deployed, local or review-only. This does not imply visual acceptance, classroom effectiveness or complete persistence.
- **IN PROGRESS** — concrete work exists with unmet checks.
- **PLANNED** — retained direction or recommended work; no implementation claimed.
- **SUPERSEDED/ABANDONED** — replaced implementation or rejected approach; preserve historical evidence.
- **OPEN DECISIONS** — unresolved owner choice or acceptance threshold. Approval and implementation status are separate.

Evidence below combines direct file/source inspection, current remote revision/HTTP checks, and explicitly attributed earlier test reports. This update did not rerun game playtests or inspect real student records. The Blender task is still evolving; named files and checks are dated snapshots.

## Source of truth and project boundaries

| Surface | Current authority |
|---|---|
| [Existing Blueprint](https://career-empire-3d-blueprint-v2.taniabyrnes.chatgpt.site/) | Canonical design/current-production record. This update edits its existing source. `data/operations.json` owns current status/queue; `data/blueprint.ts` owns preserved decisions, mappings and build history. |
| [Organisation game](https://github.com/Emmanuel-ICT-Support/GTCEM-Career-Empire) / [playable world](https://emmanuel-ict-support.github.io/GTCEM-Career-Empire/playable-3d/) | Remote main verified at `a17ff157174b991998f1ba7023cbd25a001fc21c`. Matching local game-live checkout inspected. |
| Megatrends / [existing learning platform](https://emmanuel-ict-support.github.io/GTCEM-Career-Empire/) | Existing HTML learning modules, auth/evidence services and 2D work. Mac checkout has substantial uncommitted work; local presence is not deployed parity. |
| Earlier Design Atlas | Retained approved decisions and historical experience model. Its README still calls it the source of truth; for current production use this V2 Blueprint. Do not silently overwrite either approval history. |
| Personal GitHub fork, older Blueprint-hosted 3D and Babylon experiments | Historical/separate implementations. A merge/import there does not prove organisation Pages deployment. |
| Private recovery repository | Source/history/evidence mirror, not an active game deployment or proof of a restored school database. No public game repository is changed by this audit. |

## Playable map and renderer

**IMPLEMENTED — deployed source:** Three.js renderer, ACES tone mapping, Rapier character/collision handling, keyboard/tap movement, follow/aerial camera, Home Base/EST destinations, local avatar profiles and quality controls. `world.js` assembles the town; Blender is the production/editor tool, not a replacement browser engine.

The captured flourishing town contains **729 two-unit tiles** (437 grass, 72 path, 152 asphalt, 68 plaza), 13 road/curb overlays, planters/flowers, pond/bank, five fountain pieces, eight lamp assemblies and four benches. The generated whole-map ground plate is unused. Render tiles and simplified physics colliders are separate. Trees outside the existing tile boundary remain a known layout issue.

All **36 trees** now use imported near/far assets with shared materials and instanced rendering. Near detail enters at 24 units and leaves at 28; updates run four times a second. Download failure retains procedural fallback scenery. Phase changes during loading are handled.

The current EST exterior is at `(0, 0, -14)`. Home Base is centred at `(-17, 0, 5)`, rotated 90 degrees and uniformly fitted to the existing **4 × 7.2** collision footprint. Only these two building destinations are established in the current town. The inspected modern tower was excluded because no appropriate lot existed; its existence does not approve map expansion.

**SUPERSEDED/ABANDONED:** Phaser/2D as the main forward visual-world direction; it remains a useful historical/reference implementation, not deleted or wholly migrated. HTML learning content, identity requirements, rewards and selected art remain reusable. 2D layers/sprites do not become 3D rigs or clothing automatically. Babylon and the old Blueprint prototype are not the canonical playable route.

## Avatar and reusable digital-tailor pipeline

**IMPLEMENTED — deployed prototype:** `characters.js` loads `player-uniform-shirt-20260908.glb` for `body: tripo`. The preserved base is `player-tripo-20260908.glb`, derived from supplied `Walking+animation.glb`: approximately 76.6 MB / 1.94M triangles became **4,779,700 bytes / 67,875 triangles**, with 41 joints and the original walk. The dressed export is **8,497,616 bytes / 133,000 triangles**, seven meshes and one skin. Idle is a static walk-frame fallback, not a newly authored idle clip. Earlier ground-offset/bounds fixes are implemented.

**IMPLEMENTED — distinct capability:** modular Body A/B provide existing wardrobe/colour controls. The simple Tripo character does not have equivalent interchangeable clothing, hair or facial expressions. Profiles are browser-local; field migration from the older avatar maps to modular bodies, not conversion of its artwork. Cross-device/signed-in shared appearance is not established.

**Approved direction, IN PROGRESS:** students customise one persistent character and use it through Studio, town and learning. Clothing is fitted once per supported master/body, selected as components, and reconstructed from saved choices; exporting every outfit permutation as a different character is superseded. The 8 September explicit top-slot approval is **one School shirt with tie**; equip hides the black base top, keeps body/arms/head, and unequip restores the base top. Shirt fabric needs HEX control without unintentionally recolouring tie/buttons. Do not permanently remove canonical body geometry to conceal failed fitting.

**IMPLEMENTED — pipeline prototype:** specification v0.1, `pipeline.py`, GLB inspector, run configurations, measured `master-spec.json`, geometry/weight capture, validation reports and sub-1000-character Tripo templates exist. A private snapshot is retained with this Blueprint under `private/production-evidence/2026-09-08/late-day-audit/pipeline/`. Original production package remains in the 8 September asset-pipeline task; its paths need configuring when moved. This is not yet certified for arbitrary garments.

The digital tailor uses the **actual master mesh, armature hierarchy, rest/bind matrices, weights, scale, orientation, UVs and materials**. Measured height is 0.9740707874 native units; the game targets 1.7, a conversion of 1.745253037. These are measured asset/game units, not invented anatomical centimetres. The modeled black T-shirt is not a hidden bare torso. Collar, shoulder seam, underarm, sleeve/cuff and hem profiles must identify accepted contours/vertices and clearances, not merely guessed joint positions. The proposed 0.004 × height clearance is a fitting parameter, not a measured body fact.

The script performs import/audit, bounded pose alignment, fitting, nearest-face weight transfer, influence normalization (maximum four), binding, sampled walk/intersection checks, export and structural round-trip inspection. A garment shares the master's normalization root. Separate component exports contain garment plus bind skeleton, no body or duplicate animation.

| First production run | Actual result |
|---|---|
| Shirt run 001, sleeves-down input | **FAIL**: 92,762 triangles; 41-joint skin/export succeeds, but rest has 4,526 intersecting garment triangles and worst sampled walk frame has 5,091. |
| Shirt run 002, T-pose input | **FAIL**: 88,759 triangles, 30,967 boundary edges and fragmented regions; no unweighted vertices, but 2,356 intersecting garment triangles at rest and 2,967 at worst sampled walk frame. |
| Live fixed dressed prototype | Published for review before the component correction; shoulder/rear-wrist limitations and removed covered geometry prevent treating it as the completed wardrobe. |

**IN PROGRESS:** landmark-specific fitting, reversible base-top policy in runtime, fabric/material separation, full equip/unequip/HEX/save/reload/walk acceptance. Stress poses, containment/self-intersection coverage, certified glTF validation and target-device budgets remain incomplete. Integer-frame intersection sampling alone cannot certify all movement.

The older reported **HERO-001** (19-bone, ~2.18 MB candidate) is a separate unrecovered handoff asset, not the now-imported 41-joint master. Its missing binary remains a historical gap; recovering it is no longer the prerequisite for beginning the approved current-shirt run.

## Separate building/environment pipeline and replacements

**IMPLEMENTED — prototype:** inspect geometry, UV/material connections, texture resolutions, pivots, native scale, orientation and renderer compatibility; preserve source, ground by actual bounds, apply explicit transforms and export/audit. Buildings/trees/props use a static profile, not avatar weight transfer. Door clearances, colliders and LODs need asset-specific rules.

**Home Base / Avatar Studio: IMPLEMENTED — deployed.** `city.glb` replaced the old cloned EST exterior. First release `8fc60db` used 23,999 triangles and ~0.43 MB. Latest `a17ff15` replaces it with the **119,999-triangle / ~10.2 MB** welded candidate retaining the original 4K colour texture. Home Base still opens Avatar Studio. This is a current functional exterior, not acceptance of a final purpose-designed Avatar Studio building.

**Town Hall: IN PROGRESS / PLANNED replacement.** The current functional EST exterior is retained. Selected civic imagery and earlier Hunyuan/Tripo Town Hall candidates inform the intended landmark; neither a final Town Hall replacement nor a new full 3D interior-to-learning journey is established by this audit. Do not rename the city Home Base replacement as a completed Town Hall.

**Blender editing: IMPLEMENTED — local workbench.** `career-empire-world-MASTER.blend` and `WORKING.blend` now contain captured actual game geometry/materials, individual editable tiles/trees and a separate EST Interior scene. Textures are packed. The capture reopened with 979 outdoor transforms within 0.000001 and all 44 source playable files unchanged (prior workbench validation). The earlier crude reconstruction is superseded.

Tania's edited town adds two ~1.76M-triangle building imports; moves trees/Home Base; raises pond/bank 10 cm; removes one road-line overlay. Town-only export **v002** has ~4.10M triangles; **v001 is superseded** because it also included the interior. Later `career-empire-world-Tania-GROUNDED.blend` and `grounding-verification.json` record corrected bounds-based heights for affected trees, both imports and Home Base. Later chat still reports tree 021/building placement problems in another saved variant. These are different files: select and revalidate the intended latest working file before integration. No edited whole-world candidate is deployed.

Game coordinates `(x,y,z)` map to Blender `(x,-z,y)` for this workbench. GLB export must preserve the chosen conversion, origins and transforms. The Tripo Bridge chat reports a connected transfer and tiny imported building; transfer does not establish correct scale. Avoid guessed scale multipliers as final production measurements. Grounding by Location Z alone is not universal: mesh origins and parent transforms matter.

**Export workflow:** preserve master/original → edit a working copy → select only intended scene/assets → export versioned GLB → inspect round trip/materials/bounds → integrate approved individual assets/transforms into the game → test collisions, triggers, LODs, movement and loading. Importing the whole Blender town on top of `world.js` would duplicate ground/props and omit gameplay systems. The authoring snapshot does not reproduce runtime physics, phase changes, avatar logic, tree LOD or all lighting/fountain animation.

## Visual target, failed routes and quality lessons

Preserve the selected ElevenLabs Town Hall approach/entry imagery/video: convincing depth, coherent architecture, readable entrance, warm interior, grounded character movement, tactile stone/glass, rich planting and restrained cyan technology. Contemporary buildings form the everyday family; the civic landmark may retain its distinctive classical silhouette. Daytime remains the default; a night concept does not change that. The separate `Avatars.mp4` is a 2D sprite demonstration, not a tested 3D wardrobe or rig.

**SUPERSEDED/ABANDONED approaches:** generated whole-map plates; uncontrolled bulk building generation; naive shirt scale-and-weight transfer; direct giant-model drop-ins; automatic stripping of material maps or aggressive decimation to hit file-size targets. Individual controlled assets are preferred because footprint, entrances, collisions, materials, replacement, repeat use and budgets can be checked independently.

Historical scorecard (reported, not freshly remeasured): Hunyuan 005–009 ~50k-face blockouts are candidates; Tripo Town Hall ~1.89M triangles/base colour only and Meshy Lite ~527k triangles/untextured fused landscaping did not provide ready-to-use buildings. This is a project trial finding, not a universal claim about either vendor. Tripo now supplies concrete avatar, shirt and building inputs; Blender is the deterministic processing stage. METATAILOR remains an optional unproven alternative, not the chosen production dependency; current support/cost must be rechecked before any trial.

The supplied city source is **1,759,471 triangles / 56.6 MB**, with one 4K base-colour image and no normal/roughness/metallic maps. It must not be blamed for losing maps it never had. Ordinary 120k/40k decimation tears its fragmented topology; a measured 0.00001-unit weld before reduction produced the better 120k candidate. The 40k result is rejected. Earlier tree processing did remove PBR links and reduce 4K textures to 1K; the preservation pipeline proves those maps can survive export.

Diagnose blurry/Play-Doh appearance with matched source/export/game cameras and lighting: UV density, texture resolution and decoded memory, normals/tangents, roughness, mipmaps, anisotropy, exposure, environment light and screen resolution. Imported custom normals need correction after deformation. Compression reduces transfer bytes, not necessarily triangles or GPU memory; a full-quality city round trip grew to ~74.9 MB from split attributes. Four 4K RGBA maps can require ~256 MiB before mipmaps. Preserve quality first, then compare asset-specific LOD/texture options.

World/scenery loaders support local Draco decoding; the character loader does not. Do not export unsupported Draco, Meshopt or KTX2 requirements without runtime support/tests. Blender exports of arbitrary shader nodes are not guaranteed to match browser materials.

## Loading and performance

**IMPLEMENTED:** startup loads only the selected avatar; alternative bodies load when selected, EST interior on approach/entry, scenery after entry, with messages/retries and fallbacks. `28ad5b1` reported 2.6–6.7 MB of unused avatar/hall downloads avoided, with six unit and 25 browser tests passing. This is avoided payload, not a universal load-time guarantee.

The first scenery release reported **1.09 MB** added background payload and 59–60 fps on the local Mac, with 27 browser and six unit tests passing. That payload/performance description is **superseded for the current city building**: the 120k replacement is ~10.2 MB itself. Its publishing task reported 51–53 fps locally and **29 fps** in the public in-app check. These different environments are not a controlled before/after benchmark. Physical school-device testing, sustained frame times, texture memory and time-to-control remain open. The old proposed ≤200k visible triangles/≤100 draw calls limits were not achieved standards; do not strip visual quality to pretend otherwise.

## EST Prep and teacher dashboard

**IMPLEMENTED — existing learning platform:** CORE (what to say), TERM (language), VTCS (verb/topic/context/structure) and BOSS (final response), with established training/feedback, objective and written-response/evidence mechanisms. Existing data includes stage credits/readiness and 10% simulated tax. Those local settings are not approval of a universal V2 reward formula.

**IMPLEMENTED — 3D navigation, IN PROGRESS — handoff:** hall stations call `openModule` and `ESTPrep.openStage`. Direct inspection of public `app.js` confirms `frame.src='/existing/modules/est-prep/index.html'`; that resolved public URL returned **404**, while the current repository's `/modules/est-prep/index.html` returned **200** on 8 September. The correct URL plus authentication/demo context, stage IDs, return flow and progress persistence must be integrated and tested; entering the hall alone is not an EST completion loop.

**IMPLEMENTED — local teacher matrix, not verified deployed:** Megatrends `dashboards/dashboard.js`, `dashboard.css` and `teacher.html` contain student rows, captured active time, Q/A counts, auto-marked percentages, written-answer status columns, class comparison, student drill-down and rapid Approve/Reject/Needs Review. Sticky columns were narrowed for usable horizontal scrolling. Public `dashboards/dashboard.js` returned 200 but lacked `buildTeacherESTPrepDataset`, so do not call this new matrix live.

The adapter reads `student_module_progress`, `assessment_evidence` and `student_response_reviews`. Reviews persist only for saved review records; demo/evidence-only rows are inspect-only with disabled actions. Time uses available `duration_seconds`, not full session attendance; absent data is not zero work. Earlier focused dashboard checks passed; its full test run reported 15 passing and two unrelated Avatar Studio failures. Keep that distinct from the separate 3D repository's passing suite. A real student/class permission and save/reload test has not been established here.

## Curriculum, journey, stages and payoffs — approved vision retained

The Student Experience remains the shared unit connecting journey, curriculum, learning depth, world state, buildings and payoffs. Every activity must declare learning/engagement purpose, required/optional status, time, access/catch-up, what the learner does, why a 17-year-old would care, evidence produced, personal payoff, progression payoff, world change and teacher check. Engagement-only activities are valid when labelled; cosmetics do not manufacture curriculum evidence.

Keep exact many-to-many syllabus/detail links, reciprocal views, repeated coverage, learning depth (Expose/Teach/Practise/Apply/Reinforce) and honest unmapped gaps. **Unit 3 stays Semester 1; Unit 4 stays Semester 2.** Assessment mapping stays separate. A candidate mapping is not proof of taught, assessed or mastered content. The earlier Atlas names the 2026 syllabus; this V2 currently holds 82 points/115 details from the 2027 syllabus alongside 2026 sample timing/program documents. Flag the delivery-year/edition reconciliation before classroom use; do not silently replace the approved records or treat a syllabus as annual EST-selected content.

**IMPLEMENTED — art previews:** Disrepair → Growth → Flourishing changes materials and stage decoration (boards/cracks/scaffolding as applicable). The public scene defaults to flourishing with manual selection. **PLANNED:** earned personal/class progression and integrated town restoration. These are not the same feature.

Retain experience → need to learn → supported instruction → application → feedback/consequence → recovery/transfer, with a whole-year emotional arc inspired by the hero's journey, not a childish fantasy RPG. Preserve agency, plural success, recoverable setbacks, Christian-school context and Evidence Before Expansion. The proposed worked example “The opportunity I might miss” remains unapproved for build; this audit does not silently make it the first chapter.

Tax from simulated earnings contributes to class-owned improvements. **OPEN DECISIONS:** stage triggers versus tax-funded upgrades, rates/costs, authority to spend, carry-over, absence/uneven progress, and relationships/wellbeing/capability/contribution outcomes. Personal, progression and community payoffs stay distinguishable. Buildings house experiences; old shop/CPD/cinema/nightclub names do not create an approved construction list. Same-class presence is a retained future direction; chat, trading, rankings and cross-school participation retain separate decisions.

## Conflicts resolved or explicitly left open

1. Old bald-base asset path / unimported avatar and “recover hero first” were stale: a different measured Tripo master and fixed shirt are deployed; interchangeable clothing is unfinished.
2. “Home Base clones EST” and “1.09 MB scenery” describe the earlier release, not the latest 120k city replacement.
3. “City candidate not deployed” in its immutable production report is superseded by `a17ff15`; quality/performance acceptance remains open.
4. Separate tie advice is superseded by Tania's explicit combined shirt/tie approval; run failure remains valid.
5. Correctly weighted/exported is not correctly fitted. Both separate-shirt runs remain FAIL.
6. Local matrix and hall entry are not proof of deployed teacher review or working EST handoff; public-source checks establish the gaps above.
7. Grounded workbench copy and later ungrounded saved edits coexist; select the intended file and revalidate, rather than claiming every working variant is fixed.
8. Current 3D direction preserves learning/vision from Phaser/2D; it does not imply all legacy systems migrated.
9. 2026 versus 2027 curriculum edition, Town Hall/Avatar Studio final assets, performance thresholds and economy-stage interaction remain OPEN DECISIONS.

## Next Production Steps

1. **Finish one selectable uniform top.** Owner: avatar integrator; Tania accepts appearance. Use the measured 41-joint master, approved shirt/tie slot and reversible base-top visibility. Pass collar/shoulder/cuff/hem, clipping, supported animation, fabric HEX, equip/unequip, save/reload and Studio/town consistency. Keep failed components quarantined.
2. **Repair the 3D → EST bridge.** Owner: game integrator. Replace the obsolete route in a bounded game change; test all four stations, demo/auth context, activity completion, saved evidence and return to the same avatar/world. A 200 response alone is insufficient.
3. **Reconcile and release the existing teacher matrix.** Owner: learning-platform maintainer with Tania. Review the uncommitted local diff, preserve unrelated work, verify real-record review persistence and inspect-only fallbacks, then validate the complete student → teacher → resume loop.
4. **Accept one building at a measured performance budget.** Owner: environment integrator with Tania. Compare the 120k Home Base on named school hardware; preserve source/PBR quality while testing LOD/texture alternatives. Select the intended grounded Blender copy and intended Avatar Studio/Town Hall assets; integrate individual approved replacements with correct doors/scale/collisions, not the whole 4.1M-triangle town.
5. **Align one complete learning experience and its payoff.** Owner: Tania with implementation support. Resolve curriculum year/edition, retain semester boundaries, choose/approve the experience and evidence checks, then specify personal/progression/community payoff and only the stage/treasury rules needed for it. Prove engagement and learning separately before expanding.

## Evidence index

Current game source at the verified commit: `playable-3d/{app,world,characters,profiles,scenery}.js`, assets and `docs/production/{tripo-avatar-20260908,uniform-shirt-live-20260908,scenery-models-20260908}.md`. Local teacher evidence: Megatrends `dashboards/{dashboard.js,dashboard.css,teacher.html}`, `modules/est-prep/est-prep-data.js`, `tests/e2e/teacher-est-dashboard.spec.js`. Existing Blueprint records, style references, handoff, previous current-state/production-plan and earlier Atlas README were inspected.

Pipeline evidence: specification, master-spec, slot policy, run 001/002 validation and city-building validation. Workbench evidence: README, review, capture and grounding records. Private evidence copies carry original paths and SHA-256 hashes in `private/production-evidence/2026-09-08/late-day-audit/manifest.json`; earlier V2.6 documents are retained there as historical snapshots. Public summary contains no student records or credentials.

Relevant conversations reviewed: “Update game blueprint”; “Consolidate Career Empire 3D”; “Build Career Empire asset pipeline”; “Update Career Empire 3D world”; “Optimize playable-3d startup”; “Refine Career Empire Blender master”; “Blender World Editing”; “Add Blender To Tripo”; “3D Production Strategy”; “Implement EST Prep progress view”; “Map 2026 careers curriculum”. Claims from prior tests are attributed as reports, not reruns by this audit.
