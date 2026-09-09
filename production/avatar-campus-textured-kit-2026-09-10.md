# Avatar Campus — textured modular kit

**Current whole-item review:** [Asset packages and their parts](asset-batch-review-2026-09-10.md). Review a complete building/scene as one item. Its unflagged parts are included in overall approval; no separate wall or flower decisions. The Studio is not yet assembled or accepted.

CE-CHANGE-20260910-23 / CE-ENV-KIT-01. Tania authorised “yes good textured kit production please” on 10 September 2026. Stage 2 is built as a review candidate; appearance acceptance remains Tania's. No live game was changed.

[Explore the isolated 3D workbench](/career-empire-blueprint/evidence/avatar-campus-kit-20260910/index.html) · [Download 14 modules and textures](/career-empire-blueprint/evidence/avatar-campus-kit-20260910/campus-kit-v0.1.zip) · [Measured manifest](/career-empire-blueprint/evidence/avatar-campus-kit-20260910/kit-manifest.json) · [Export checks](/career-empire-blueprint/evidence/avatar-campus-kit-20260910/validation.json)

![Actual exported kit and small facade specimen](/career-empire-blueprint/evidence/avatar-campus-kit-20260910/kit-overview.png)

## Result and visual source

The approved Avatar Studio pavilion controls the restrained limestone/navy/timber/glass family. The exact original concept remains CE-STUDIO-CONCEPT-01, not this new asset render. Fourteen UV-mapped modules have separate GLBs; the specimen shows joins without creating a finished building. Native plants, solar roof details, complete roof/interior, branding and precinct landscaping belong to later stages. The existing schoolboy and blazer records are untouched; blazer remains paused.

Stone and timber have authored tileable 512px basecolor/roughness/normal maps. The warm coursed wall has modeled staggered joints and bevels; timber has longitudinal grain. Navy is satin PBR; window glass uses transmission and the entry frame stays open. Original project 1024px paving is reused byte-for-byte. No external generation or paid service was used. Editable packed Blender master and build/check scripts are retained in canonical private evidence under 2026-09-10/textured-kit/source.

## Stage 1 check carried forward

Actual prototype placement (-17,0,5), original trigger and source hashes remain from the [dimensioned study](avatar-precinct-layout-stage1-2026-09-10.md). All four camera captures were inspected. The 85 sampled route-centre points from (-4,5) to (-12.4,5) clear the fountain radius with player allowance and the measured Studio boundary. The endpoint lies in the existing trigger. A 3.2m-wide proposed ramp rises .24m over 6m. The legacy opaque cyan glazing and decorative steps are visibly unfinished; neither is accepted by this check.

[A arrival](/career-empire-blueprint/evidence/avatar-campus-kit-20260910/layout-A.png) · [B entry](/career-empire-blueprint/evidence/avatar-campus-kit-20260910/layout-B.png) · [C chase](/career-empire-blueprint/evidence/avatar-campus-kit-20260910/layout-C.png) · [D overhead](/career-empire-blueprint/evidence/avatar-campus-kit-20260910/layout-D.png) · [Layout calculations](/career-empire-blueprint/evidence/avatar-campus-kit-20260910/layout-check.json)

This is an isolated source/geometry review, not a full-runtime walking/collision test. Other props, physics, camera obstruction and school devices remain later gates.

## Reusable pieces

Dimensions below are Blender X/Y/Z in metres. GLB exports are Y-up with front +Z; source Blender is Z-up with front -Y. Ground-centre pivots are retained; canopy/fascia geometry is elevated relative to its ground pivot. Do not inherit the old whole-Studio rotation without mapping coordinates.

| Module | Actual X × Y × Z | Triangles | Placement / limits |
|---|---|---|---|
| wall-2m | 1.992 × 0.24 × 3.0 | 2388 | Snap X at +/- half width; base Z=0, height3m. |
| wall-1m | 0.992 × 0.24 × 3.0 | 1332 | Snap X at +/- half width; base Z=0, height3m. |
| pier | 0.392 × 0.4 × 3.0 | 804 | Base-centre pivot, 3m high. |
| window-2m | 2.0 × 0.14 × 3.0 | 308 | Transmission glass, 12mm visual thickness, explicit navy frame. |
| entry-2m | 2.0 × 0.14 × 3.0 | 132 | 1.76m clear width / 2.88m clear height; no door leaf or threshold collision. |
| fin-screen-1m | 1.0 × 0.215 × 3.0 | 396 | 1m snap spacing including side clearance; geometry width1m rail. |
| canopy-2m | 2.0 × 1.6 × 0.24 | 748 | Pivot at facade ground line; spans front -Y1.6m at underside3.02m. |
| fascia-2m | 2.0 × 0.2 × 0.24 | 44 | Pivot at ground line; fascia bottom3.10m. |
| post | 0.12 × 0.12 × 3.0 | 44 | 3m high; cap contact to canopy requires .02m shim or adjusted canopy. |
| paving-2m | 2.0 × 2.0 × 0.08 | 44 | Walking face Z=0; 2m grid. |
| ramp-3p2x2 | 3.2 × 2.0 × 0.16 | 12 | 3.2m width; run2m; rise.08m. Repeat with Y+2/Z+.08; three give6m/.24. No compliance certification. |
| landing | 3.2 × 1.2 × 0.24 | 44 | Top .24m; width3.2m depth1.2m. |
| planter | 1.6 × 0.8 × 0.6 | 220 | 1.6 x .8m; soil inset, planting is later precinct stage. |
| bench | 1.6 × 0.52 × 0.47 | 220 | 1.6 x .52m, seat top.47m. |

The unique set is 6,736 triangles. Repeated modules in the specimen render 19,568 triangles with 84 draw calls in the inspected Three.js scene, including glass passes and review ground. Separate exports duplicate embedded materials for portability; future runtime integration should share materials/instances. This is not an optimisation or school-performance acceptance claim.

Canopy-to-post contact is demonstrated using a -.02m vertical canopy offset. Wall/entry/window bays meet at 2m centres. Three ramp segments use 2m run/.08m vertical offsets and meet the .24m landing. The kit does not create colliders, a navmesh, door interaction or building integration. Those require the next assembly stage.

## Verification and defects corrected

Every GLB was reimported into Blender 5.2.1; dimensions match within 0.2mm, every primitive has UVs and normals, embedded texture/material data survives export, the window has transmission, entry has no blocking glass and exported ramp endpoints meet the stated rise/run. The first render exposed black maps; the image-write order was corrected, all exports rebuilt and final coloured maps/render/browser views reinspected. Geometry-only success was not treated as a visual pass.

[Final desktop engine view](/career-empire-blueprint/evidence/avatar-campus-kit-20260910/kit-desktop.png) · [Mobile view](/career-empire-blueprint/evidence/avatar-campus-kit-20260910/kit-mobile.png). Browser loading and overflow checks passed at 1440px and 390px with no page errors. Local headless preview FPS is diagnostic only; the school-device benchmark remains unverified. Rendered glass appearance is a candidate for review, including sorting and cost on target devices.

## Integration and next action

Current Start Here/action, roadmap, world/building and look-and-feel placements link the kit; visual register and exact output hashes, material record 23, workflow checklist, handoff, README and AGENTS are updated. The 17 protected V2 decisions, four production approvals, curriculum, experience mappings and proposed learning pilot remain unchanged. New kit evidence is separate from the six original concept/built references. Existing session protocols and Definition of Done remain in force.

Next: review exact asset versions in [batches of up to 10](asset-batch-review-2026-09-10.md), with individual approvals, changes or holds. Any full Studio assembly requires a separate next-step instruction. No Studio construction, live game deployment or classroom acceptance is implied.

Publication: the candidate kit is independently verified live. All 174 files match the guarded manifest; full local/live reader smoke and targeted desktop/mobile gallery/workbench checks pass. 57 Blueprint tests, TypeScript, focused lint, normal and Pages builds passed. Remote CI activation remains outside required scope.

First verified kit source: `007ebb2c69caa3230c707b0924e077e21ee2a9eb`; public delivery: `3316eb9d56e5491b2e4f32b4f1c6d6587926119b`; record SHA-256: `88d06b19e3666067208d99cb74c948140719c34b8c2b4b223cedc4fa9b10a880`. The final metadata close-out has its own public manifest and a separate private verification receipt, avoiding self-referential hashes. Documentation integration is complete; kit appearance acceptance is not inferred.
