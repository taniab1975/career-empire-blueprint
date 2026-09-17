# Comfortable outdoor walking camera — 11 September 2026

Tania authorises the next walking-camera step following approval of Media/oval revision2. Outdoor follow distance changes from 4.3 to 6.4 scene units; camera height 3.1, target height 1.25 with 0.6 forward lead. Removes the special Studio-approach distance/aim jump. Existing smoothing remains. This keeps the complete avatar and feet comfortably visible on desktop and phone.

The first visual regression check found the old Chapel exit yaw placed the wider camera inside the Chapel doorway. Outdoor return now uses a 1.1-radian forecourt angle, clearing both doorway and freestanding sign. The stale Opening the Chapel toast is cleared on leaving. No Chapel interior/EST film/Studio editing-camera changes. Index script version changed to load the current camera source reliably.

Validation uses an isolated browser profile, actual walking and pointer dragging, full-body projected head/feet margins, Studio approach and Save & return, reload persistence, EST and Chapel entry/return, desktop 1440x900 and phone 390x900. Test-only inspection is injected by browser routing, not shipped in the game. Final screenshots/check results and exact sources are saved in private/production-evidence/2026-09-11/walking-camera. Initial failed visual doorway framing is documented above.

Approved Stage1 and SPACE/Media surroundings remain byte-identical and banked separately. This local runtime now differs from the old published manifest only in app.js and index.html; the historical release manifest is intentionally preserved until a real release. No game or Blueprint publication and no new whole-campus acceptance inferred. Interior camera modes retain their existing specialised framing.

Next: review this outdoor camera, combine approved environment choices into the game, run complete movement/entrance/Studio/EST/Chapel checks, then final combined review before publication to Emmanuel-ICT-Support/GTCEM-Career-Empire. Wider building production stays paused; no new models or wardrobe work.

Game development checks pass; all 74 Blueprint tests pass. Main desktop/mobile suite passes; a focused Chapel return retest covers its final angle and stale-toast correction. No final combined-world release test is claimed.

Close scan covers 11 folders/six worktrees with zero coverage failures. 142 retained intake observations and eight pending integrations remain; global refresh remains incomplete. Final runtime diff is limited to app.js/index.html, and accepted surroundings approval hashes still match exactly.


## Walking camera approved — 11 September 2026
Tania: Yes much better. Bank the current outdoor camera and Chapel return with exact app/index hashes in walking-camera/approval.json. Next: combine approved environment and camera for integrated in-game review and regression checks. No publication authorised by this acceptance.
