# ECC Admin glass signage — 13 September 2026

Supplied cleaned ECC crest replaces the Admin gable crest; front Emmanuel sign now uses translucent teal glass in the original frame, with subtle iridescence, polished edges and stainless standoffs. Matching glass face on the existing Admin fascia retains ADMINISTRATION wording. Building geometry/style, original structural fascia, welcome frame/base/location and colliders are preserved.

The requested modern campus reference informed the restrained cyan/teal finish, fine edging and integration with warm stone and blue steel. No building redesign or new mechanics.

## Exact implementation

- `playable-3d/ecc-preview/admin-signage.js`: physical glass materials, original-frame front panel, Admin fascia glazing, edge details, fixings, and both crest placements.
- `playable-3d/ecc-preview/assets/admin-signage/cleaned-ecc-crest-source.png`: supplied PNG copied byte-for-byte. It contains an opaque grey checkerboard; a rendering-only exterior mask removes that checker without repainting source pixels or removing the crest lettering. Original source file remains intact.
- `playable-3d/ecc-preview/authored-courtyard.js`: minimal integration replaces the two former crest planes and Admin label with the signage module. All concurrent window/material edits retained.

The front panel is 1.44 × 1.76 m inside the original frame. Top crest remains .71 × 1.01 m at its original position; front crest fits the glass face at 1.04 × 1.477 m. Glass is alpha-blended with environment reflection, clearcoat and restrained thin-film iridescence; it does not add a costly second full-campus refraction render. The first full-transmission experiment was replaced after local inspection. No extra glow lights.

## Evidence and checks

Actual courtyard, Home Base/oblique, aerial, phone (390 × 844), and phone Low/Growth screenshots retained in `private/production-evidence/2026-09-13/ecc-admin-signage`. Both supplied reference images remain there unchanged. Source receipt lists exact hashes and saved module copies. Geometry GLB equals approved rollout bytes; welcome position, obstacles and garden-bed declarations match the pre-task snapshot.

Source checks and all 14 unit tests pass. Browser scenery loads ready with no scenery errors; phone has no horizontal overflow. Existing Rapier initialization deprecation warning remains. These are local browser checks, not a full browser CI pass or sustained physical-device benchmark. Appearance acceptance remains the user's.

[Play the local courtyard](http://127.0.0.1:4285/playable-3d/?view=ecc-courtyard). Current signage is implemented in the actual playable repository; this task does not claim it live yet. The concurrent campus release owns deployment and must include the new module/PNG and refresh its source manifest. Initial monitor run found another scan lock; no lock removed or global refresh claimed.


## Actual playable views

![Courtyard signage](../evidence/ecc-admin-signage-20260913/ecc-signage-courtyard.png)

![Home Base glass panel](../evidence/ecc-admin-signage-20260913/ecc-signage-home.png)

![Phone-sized Home Base](../evidence/ecc-admin-signage-20260913/ecc-signage-phone.png)

Closing registry scan: ten folders, five working copies, zero in-registry coverage failures, 172 pending intake observations and twelve pending changes. This is not a global refresh. Seven scoped Blueprint asset/production-plan tests pass; generated records match canonical sources. Release task isolated the early unfinished import and has the final signage receipt for combined inclusion. No signage publication claimed.


## User correction in progress
User reports blur, marks a nearer courtyard position for the whole glass sign/base angled outward, and clarifies Chapel artwork belongs in flush wall glazing while the separate metal statue stands outside looking into it. Scope: sharpen print/crest rendering, relocate entire monument with collider/Home Base consistency, correct exterior window/statue. Interior photos retained for later; current pass stays exterior despite optional permission to expand. Reference-derived isolated glass texture will be reconstructed; not an exact scan. No revised acceptance or publication claimed. Evidence: private/production-evidence/2026-09-13/ecc-signage-chapel-correction.

Confirmed exterior sequence from user: looking at Chapel, window with freestanding statue first, then cross cut out of limestone wall, then unchanged entrance. Applied to original v4 master; all 2,253 non-target original meshes retain exact source geometry/transforms. The 533 Chapel wall courses and four projecting window surround pieces are the targeted aperture correction; five original welcome monument pieces move together. Generated glass artwork is reference-derived, not an exact scan.


## Completed local exterior correction — 13 September 2026
Confirmed outside left-to-right order: flush woman/tree glass and separate metal statue looking into it, then real cross aperture through limestone, then unchanged Chapel entrance. Recut only the Chapel wall courses and removed the projecting photo surround. The woven-metal figure and isolated glass artwork are reference-derived reconstructions, not exact scans. Interior references are archived for later. Existing trees and the path light can partially obscure these landmarks from some player positions.

The complete welcome sign/base moved from (4.9, 6.4) to (2.6, 7.6), rotated outward about 26 degrees. Its collider and Home Base destination follow the same shared layout. Crest checker removal occurs before mipmap generation; printed crest and larger Administration lettering use crisp unlit cutouts. Original crest PNG remains byte-for-byte intact.

Files: `playable-3d/ecc-preview/landmark-layout.js`, `admin-signage.js`, `authored-courtyard.js`, `playable-3d/app.js`, `playable-3d/world.js`, `playable-3d/ecc-preview/assets/authored-courtyard/ecc-exterior-v5-compressed.glb`, and `chapel-etched-glass-v2.png`. Editable source: `private/production-evidence/2026-09-13/ecc-signage-chapel-correction/ECC-courtyard-exterior-v5.blend`. Exact hashes and snapshots: `revision2-receipt.json` in that evidence folder. This revision supersedes the earlier geometry/location-preservation claims for the specifically requested Chapel and monument changes. All 2,253 untargeted original mesh geometries/transforms remain unchanged.

Validation: 14 game unit tests and source dev check pass. Actual Rapier routes to Home Base, past the welcome sign and toward Chapel pass; the moved rotated monument blocks crossing correctly. Desktop courtyard, Home Base and Chapel exterior visually inspected; 390x844 viewport has no horizontal overflow. No scenery errors. No sustained physical-device performance claim. Appearance remains for user review. This follow-up is local and has not been published; the prior completed signage receipt was published separately.

[Play Chapel exterior](http://127.0.0.1:4285/playable-3d/?view=chapel-exterior) · [Play courtyard](http://127.0.0.1:4285/playable-3d/?view=ecc-courtyard)

![Corrected exterior](../evidence/ecc-admin-signage-20260913/revision2/after-chapel.png)
![Moved glass monument](../evidence/ecc-admin-signage-20260913/revision2/after-home.png)


Revision 3 user feedback: move doorway to marked right-hand arc, bring window/cross onto front, fix excess masonry opening above door, and shorten cross upper arm using ECC-Chapel-2.jpg. Applied doorway tangent at 1.19 radians and wall opening fitted to frame; window/statue advance to -0.13 radians; cross centre 0.50 radians, top 3.15m, arms 2.10–2.70m, bottom 0.60m. Local visual verification in progress. This supersedes revision 2 unchanged-door claim.


Revision3 complete locally (13 September): moved Chapel entry to marked right-hand arc with tangent frame and fitted stone header; window/statue brought onto front; reference-shaped cross has shorter top, wider arms and longer lower stem. Actual physics verifies approach to relocated threshold, Home Base and courtyard routes. Existing unfinished-interior collision remains; Chapel destination button still opens existing interior. Latest source/master/hashes and view: private/production-evidence/2026-09-13/ecc-signage-chapel-correction/revision3/receipt.json. This supersedes revision2 doorway and opening positions. Final appearance review/publication remains open. Closing scan: 10 folders, 5 working copies, no registry coverage failures; 174 pending intakes and 12 pending changes remain (no global refresh).

![Revision3 Chapel](../evidence/ecc-admin-signage-20260913/revision3/chapel.png)


Revision4 feedback: match the pale patch and lower smooth patch visible through the cross to recessed wall brickwork; shift the complete Chapel pergola so its post clears the cross. Implement matching recessed limestone courses and limestone reveals; shift all Chapel-side pergola members and colliders 0.90m right. Visual check pending.


Revision4 complete locally (13 September): matched the pale/smooth cross-recess patches to limestone courses and reveals, and shifted the complete Chapel pergola 0.90m right so its post clears the cross from the courtyard. Previous doorway, window/statue, cross proportions and signage retained. Actual physics verifies approach to relocated threshold, Home Base and courtyard routes. Existing unfinished-interior collision remains; Chapel destination button still opens existing interior. Latest source/master/hashes and view: private/production-evidence/2026-09-13/ecc-signage-chapel-correction/revision4/receipt.json. This supersedes revision3 recessed lining/backing and pergola position. Final appearance review/publication remains open. Closing scan: 10 folders, 5 working copies, no registry coverage failures; 174 pending intakes and 12 pending changes remain (no global refresh).

![Revision4 Chapel](../evidence/ecc-admin-signage-20260913/revision4/chapel.png)


Revision5 user feedback: cross blends into matching masonry; stray vertical lines beside lower opening. Remove overlapping liner planes, retain the real stone reveals, deepen and shade the matching masonry backing, and trial restrained warm recess lighting. Preserve pergola/window/statue/door positions. Check actual player views before closing.


Revision5: cross contrast restored using deeper shaded limestone backing and restrained warm light; stray original door handles moved into relocated doorway. Pergola/other positions and colliders unchanged. Two courtyard angles visually verified; development source checks pass. Prior revision4 route/collision checks remain applicable (no collision changes). Correct root cause of marked lines: the two brushed-metal handles stayed at the former Chapel doorway; both are now transformed with the door. Temporary doorway-shadow suppression was removed. This supersedes revision4 low-contrast recess and the provisional liner/shadow diagnosis. Exact master, assets, hashes and screenshots: private/production-evidence/2026-09-13/ecc-signage-chapel-correction/revision5/receipt.json. Appearance review and publication remain open.

![Revision5 Chapel](../evidence/ecc-admin-signage-20260913/revision5/chapel.png)


## Verified exterior publication and interior hold

Tania-approved campus plus revision5 Chapel exterior and Administration/welcome signage are live and verified at 1ca602a59ef16a1dc64f79e9185a9e395f81a023 (2026-09-13T08:38:14Z), PR #12; reviewed candidate 754f3fcd8c2aeb07d5c2b91a441d00b2fc398343.

Sharper Administration/crest print; complete welcome monument moved and angled with matching Home Base and collision; flush Chapel woman/tree glass with separate metal figure; corrected recessed cross, doorway and pergola. The earlier clear Media windows, SPACE practice courts and paving repairs remain published.

81 published manifest files match the committed candidate. Package check resolves 29 local modules; source checks and 14 unit tests pass. Saved revision5 physics evidence covers four routes and moved-sign collision. Actual candidate and live exterior/Home Base views inspected, with no scenery errors. Full hosted graphics suite retains known timeouts and no full pass is claimed; sustained school-device performance is unverified.

NEW Chapel interior work is excluded. The released Chapel interior module is byte-identical to prior live 61826d6; newer local app.js, chapel.js and world.js work remains untouched. Do not publish new Chapel interior work until Tania explicitly approves that release. Stop further development in this task until Tania returns with news from the avatar software people. Preserve paused avatar/wardrobe and curriculum-state timing.

Global refresh stays incomplete; retained missing-source byte-identity checkpoints, independent game-clone monitoring gap, and pending canonical reader review/export release remain separate. Game publication does not publish the Blueprint reader.

Live Chapel exterior: https://emmanuel-ict-support.github.io/GTCEM-Career-Empire/playable-3d/?view=chapel-exterior
