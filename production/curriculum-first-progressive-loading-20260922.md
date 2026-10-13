# Curriculum-First Progressive Loading

Approved by Tania on 22 September 2026 in the explicit Improve Game Loading continuation request.

Optional cosmetic/customisation assets must never block the core world or curriculum experiences. Start with core world/navigation and essential interaction systems. Load only the saved active avatar and its selected outfit, using a lightweight temporary fallback while unavailable, without overwriting saved preferences. Avatar Studio remains optional and on demand, with metadata/thumbnails before selected full 3D assets. A slow or failed Studio must leave curriculum access available and explain that it is getting ready.

## Investigation and implementation in progress

Source baseline: published game main 0886faf8f37f898d072f678b517f826ac07a197b, fetched on 22 September. Older pants-game checkout is historical; isolated fix/curriculum-first-20260922 preserves current main and unrelated local hair refinements.

Current code already loads only the active profile and its worn assets. Confirmed blockers: all three room entry handlers await ensureCampus, coupling learning to distant tree/detail/environment downloads; failed avatar startup loops behind the loading overlay. EST room preparation also waits on an optional video poster.

Plan: remove the room/campus dependency, detach poster readiness, use a temporary built-in avatar while the selected model loads, preserve stored profile and late-load navigation intent, retain safe exterior boundaries until scenery colliders are ready, and show friendly Studio readiness feedback. No new art, curriculum content, or unrelated gameplay redesign.

Validation pending: reproduce missing decoration, failed/slow saved avatar, failed/slow Studio and poster; check EST module, Careers, Chapel, return, movement, saved-profile integrity, selected-only downloads and first-frame timing. Publication, hosted CI and physical-device acceptance are separate and not claimed.

Security/privacy: only existing local profile reads and static asset loading change. No new collection, external provider, account, tenancy, permission, logging, analytics, AI or retention change. Existing assessment gaps remain separate.


## Local implementation checkpoint — 22 September 2026

The baseline browser reproduction failed to enter EST when one decorative tree asset was unavailable. Local fix removes full-campus gates from EST, Careers and Chapel, detaches the optional video poster, and opens with a download-free temporary avatar while the saved active model/outfit loads. Saved profile bytes remain unchanged during fallback and same-profile retry. Studio waits on its own resources and selected preview without stopping navigation, with the requested friendly readiness message and late-entry cancellation. Existing metadata/thumbnails and selected-only garment loading are retained.

Safe exterior boundaries are retained until scenery colliders are ready. Destination buttons enter learning rooms immediately; returns use the safe Arrival area if exteriors are still unavailable. Home Base and flyover still wait for full exterior readiness. English/Media, SPACE and Home Economics have no existing enterable curriculum interiors in this flow; no new gameplay is invented.

First local browser suite: 12/12 passed. Unit suite: 42/42 passed. Final wardrobe, EST-media and repeat failure regression is running. No new GLB, texture, curriculum, teacher, database or service changes. Only the temporary fallback uses built-in geometry. Game and Blueprint reader publication, hosted CI and physical-device acceptance remain separate and are not claimed.


## Final local validation — 22 September 2026

Saved game source **93986277de8183a261402be660aa51db15527952**. Twenty distinct focused browser scenarios and 42 unit tests pass; final six failure/retry scenarios pass with the explicit Retry saved avatar button. Package verification: 168 exact hashes, 36 reachable modules. Controlled eight-second avatar-delay comparison: first frame 8,676 ms before and 863 ms after; not a physical-device/public-network guarantee. Saved garment failure, current-room replacement, unchanged stored profile, module entry, Studio cancellation and media all checked. Original assets remain unchanged.

Canonical material/integration contracts, regenerated record parity, 26 focused Blueprint tests and TypeScript pass. Full Blueprint validation stops at stale AGENTS.md release-review hash; no review stamp was silently refreshed and no public reader/build success is claimed. Game and reader deployment remain pending. Evidence: private/production-evidence/2026-09-22/curriculum-loading/receipt.json. Earlier in-progress notes above are historical checkpoints.


### Review delivery checkpoint

Source commit 93986277de8183a261402be660aa51db15527952 pushed to existing game repository branch fix/curriculum-first-20260922. Draft PR creation rejected by automatic approval review: explicit user approval required for the external GitHub PR action; repository trust/privacy not established by the reviewer. No PR created, no merge or deployment. Ask Tania for approval to create the draft PR.


## Draft PR created — 22 September 2026

Tania explicitly approved draft PR creation after the approval-review block. Draft PR #29 created: https://github.com/Emmanuel-ICT-Support/GTCEM-Career-Empire/pull/29. Source 93986277de8183a261402be660aa51db15527952. Prior PR-creation block is resolved. No merge or live deployment; existing local validation remains unchanged. Next: review the draft and hosted checks; publication remains a separate step.


## Curriculum-first loading published and verified — 22 September 2026

Tania explicitly authorised merge to live. PR #29 merged at 2026-09-22T09:50:49Z to 3cba2aef347beadd1115eeb27d11809ae568b810; its tree matches tested source 93986277de8183a261402be660aa51db15527952. Pages deployment 35712692629 succeeded. Four changed public runtime files plus release-manifest match exact hashes. Fresh public Chromium desktop and 390px fault-injected runs pass EST/module, Careers, Chapel, movement, profile preservation and Studio normal/deferred/failure checks; first frames 4.597s and 2.850s respectively. The fault run deliberately blocks saved avatar, Studio, decorative tree and video poster. These are browser checks, not physical-phone guarantees. Two additional local hair/shoe flows pass in 30.4s. PR CI has the same full-campus-readiness timeout as prior main (42 unit/23 browser pass; 44 not run); postmerge CI remains in progress, no full pass claimed. No new artwork or further runtime changes. Separate Blueprint reader is not published and review hashes remain stale. Earlier draft/unmerged/no-deployment notes are historical. Evidence: private/production-evidence/2026-09-22/curriculum-loading/live/release-receipt.json.
