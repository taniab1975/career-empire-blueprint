# Avatar Studio precinct — Stage 1 dimensioned layout

CE-CHANGE-20260910-22 / CE-ENV-LAYOUT-01. Started after verified V2.12 publication on 10 September 2026. Owner: environment integrator; Tania accepts the appearance/placement. This is a review candidate, not an approved map, textured kit, finished precinct or deployed game change.

![Dimensioned approach candidate](/career-empire-blueprint/evidence/avatar-precinct-stage1-20260910/dimensioned-approach.svg)

[Open the full-size diagram](/career-empire-blueprint/evidence/avatar-precinct-stage1-20260910/dimensioned-approach.svg) · [Measured geometry and proposed camera coordinates](/career-empire-blueprint/evidence/avatar-precinct-stage1-20260910/layout-study.json)

## What the source comparison found

| Item | Existing source | Stage-one treatment |
|---|---|---|
| Studio centre | Earlier candidate (-15, 7); runtime (-17, 5), rotated -90 degrees around Y | Keep the working runtime anchor (-17, 5) in this study. Do not relocate the live building. |
| Exported model envelope | X -21.400 to -12.045; Y 0 to 4.851; Z 0.500 to 9.500 | Measured from GLB vertices transformed into runtime coordinates; includes canopy/plinth/solar, not just walls. |
| Studio trigger | -13.6 < X < -10.8; 3.55 < Z < 6.45 | Keep landing (-12.4, 5), matching current Home Base teleport and inside the existing trigger. |
| Building collider | X -20.6 to -13.4; Z 1.9 to 8.1 | Landing is outside the blocker. Mesh silhouette and collider are different; do not treat either as an accepted footprint. |
| Original path start | (0, 5), inside fountain collider centred (0, 4), radius 1.8 | Pick up at west plaza edge (-4, 5); maintain a 3.2 m clear path to (-12.4, 5). |
| Original boundary | Max X 4; plaza extends to X 4.5 | Candidate max X 5.5 includes the missing half metre plus 1 m margin. Other limits retained. |
| Height transition | Exported raised plinth and decorative entry steps | Propose 0.24 m rise over 6 m; a step-free mesh/collision solution remains to be built and tested. |

The source GLB has 53 independent mesh nodes. Measurements use their actual float-position data plus node scale/rotation/translation and the runtime -90-degree Y rotation/translation, rather than inferring dimensions from a concept image.

## Candidate geometry and cameras

Route: (-4, 5) → (-6.4, 5) → (-12.4, 5). Length 8.4 m. At current 2.8 m/s walking speed this is a theoretical 3.0 seconds, below the earlier eight-second empty-walk target; this is arithmetic, not a timed playtest. The conservative path-edge clearance to the fountain is 0.723 m before the player capsule. Actual planting/prop collision still needs a full workbench pass.

The proposed level transition rises from Y 0 to Y 0.24 between X -6.4 and -12.4. This is a virtual-world candidate, not a certified accessibility solution. Keep the entry interaction rather than claiming the avatar can physically walk through the current solid portal/glass mesh.

| Camera | Position X, Y, Z | Look at X, Y, Z | Purpose |
|---|---|---|---|
| A | -4, 1.65, 7.8 | -13.3, 1.8, 5 | Plaza arrival at player-eye height |
| B | -8, 1.65, 6.8 | -13.3, 1.8, 5 | Near approach, door and planting relationship |
| C | -6.4, 3.25, 5 | -13.5, 2.1, 5 | Match current Home Base chase view |
| D | -7, 28, 10 | -10, 0, 6 | Aerial dimension review |

These are repeatable proposed camera coordinates; no new player-height render is claimed yet. A/B deliberately distinguish eye-height review from the current 3.25 m chase camera. Use the same geometry for all subsequent captures.

## Appearance and next bounded action

The approved originals CE-CAMPUS-01, CE-CAMPUS-02 and CE-STUDIO-CONCEPT-01 still control limestone/pale brick, navy, timber fins, glass, native gardens, shade and restrained teal. This schematic does not replace the approved semi-realistic pavilion. No character, wardrobe, film or paid generation occurred.

Next: load this candidate into the isolated workbench and inspect cameras A–D, entrance readability, collision clearance and height transition. Resolve those layout findings before the textured modular kit. Then build Studio → garden/path/plaza precinct → matched player-height and named school-device review → Tania acceptance → deliberate game release. Do not perform the whole world update in one pass. Blazer stays paused; Arrival → EST Prep → Civic Heart follows accepted precinct quality.

## Source and visual register

The original coordinate sketch remains unchanged and historical relative to this measured review candidate. The runtime/model remain unchanged. Source identities (existing active game checkout):

- `data/world/ecc-campus-avatar-precinct-v1.json` — SHA-256 `550f7df6df49a146ccf6c3c23c7bc2c8e2392e8815714d87fad4714d6fc15e62`
- `playable-3d/world.js` — SHA-256 `7aec2181a9975a356feac765eeebee56be1cd927ed81a429c82cc34d6ce3cbfa`
- `playable-3d/app.js` — SHA-256 `37436168527238cf651aa9625892ba4bb04c0c301bfcaf2081c5398c7b40eb6c`
- `scripts/build_avatar_studio.py` — SHA-256 `b31d65e48a7b27d6a80119203c54519db856bb6bbf4bac3b1cc3477cf64e702a`
- `playable-3d/assets/scenery/ecc-avatar-studio-v1.glb` — SHA-256 `1a6e8803e5949919396adf13b82c301af62184aaddd54076e83dbe29d273c631`

Stage-one output hashes:

- `dimensioned-approach.svg` — SHA-256 `9a62289a3fee9210eff4a94661a600da884ad8c95b3421f45fe082491142bad2`
- `layout-study.json` — SHA-256 `6f95c807aad886a8f51e9cf8e10a8cbb2485a24b3a17d8d65ec5587343be3449`

Verification: GLB/route/trigger arithmetic checked; diagram visually inspected at full size. 57 Blueprint tests, TypeScript and focused lint pass. Static world/roadmap/visuals/Start Here reviewed at 1280 and 390 CSS pixels without overflow. A static-document link lint finding was corrected by explicitly opening the reference document separately. Runtime camera/collision review is still pending.
