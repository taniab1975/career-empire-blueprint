# Material-change register — 2026-09-17

Generated from data/operations.json. One canonical register; do not edit this view directly.

## CE-CHANGE-20260924-85 — Juniper stall clarity and gameplay navigation

- **date:** 2026-09-24
- **domain:** Market visuals and campus navigation
- **source:** Tania requests recognisable food, shallower counter, staff clearance and uncrowded My Life; follow-up removes Home Economics sign. Follow-ups request visible queue observation, readable sign and plan -> watch queue -> Mara discussion.
- **owner:** Career Empire stall refinement task
- **status:** Published and publicly verified; student playtest next
- **rationale:** Make food and staff readable on approach and keep My Life accessible.
- **dependencies:** CE-CHANGE-20260923-80 / CE-CHANGE-20260924-83
- **supersededRecord:** None
- **designApproval:** Tania explicitly requests send to live and optimise for student testing; checks market signs, removed Home Economics sign and My Life placement. Tania explicitly approved publishing despite known hosted-test limitation after its outcome was explained.
- **implementation:** Native rice bowls and kraft bags; narrower/lower counter and matching collisions; clear Mara/Sam packing and front collection positions; My Life beside Town/Avatar Studio; old building sign removed with Market Courtyard heading and retained market entrance. Nine-second visible observation/trials, mounted sign text; direct trial after planning without Mara gate, explicit queue-first prompt and posttrial Mara discussion; historical saves supported. Static food geometry batched by material and shared across servings; trial overlay hides nonessential labels and separates customer labels.
- **deployment:** PR32 merge8863c0bce72d08e9798803155fd00f710f703607; Pages35961928451 SUCCESS.11 changed public runtime hashes equal tested9791678. Known hosted CI exception explicitly approved by Tania.
- **testing:** Nine distinct browser scenarios across scoped runs, final seven pass after collision refinement;76 unit tests;183 working-copy hashes and source checks pass. Screenshots inspected. Latest flow: seven targeted browser checks and34 market unit tests pass, including direct trial without shared event, save replay and payment safeguards; source checks pass. Release run13 browser checks pass,77 unit tests pass; staged183 exact assets/47 modules. Fixed-view market draw calls317 to185 with identical465634 triangles. Local blocked-optional first frames580ms desktop/552ms phone. Final sign-focus verification underway. Final5 sign/entrance checks and1 phone-camera trial pass; screenshot confirms unobstructed phone queue. Sparse economy-lab omission locally repaired. Hosted final35960931478:77 unit/23 browser pass, then existing hair-shoes.spec.js:32 campus-ready timeout matching current production35957146437. Candidate local wardrobe2/2 passes. No full hosted pass. Public1280/390 browser checks pass: navigation/HUD, Market Courtyard sign, direct market trial, zero console errors; screenshots inspected. Public first frames2929/6993ms; isolated phone repeat {'width': 390, 'firstFrameMs': 3038}. Timings variable, no general load improvement claimed. Market rendering317 to185 calls, same geometry.
- **taniaAcceptance:** Awaiting local visual review; no physical-device acceptance.
- **evidence:** docs/production/market-stall-refinement-20260924.md / private/production-evidence/2026-09-24/market-stall-refinement/
- **nextAction:** Tania student playtest using live link and existing Feedback button. Preserve approved release; hosted wardrobe timeout remains separate follow-up.

## CE-CHANGE-20260924-84 — My Life dashboard becomes the landing page

- **date:** 2026-09-24
- **domain:** Tracker navigation and presentation
- **source:** Tania approves replacing the decorative landing with My Life dashboard, 24 September 2026: OK then do that.
- **owner:** My Life tracker task
- **status:** Implemented locally; browser verification blocked
- **rationale:** Make saved work, next steps, money/belongings and shared-project progress directly useful on arrival.
- **dependencies:** CE-CHANGE-20260924-83
- **supersededRecord:** None
- **designApproval:** Dashboard-first direction authorised; final visual acceptance pending.
- **implementation:** My Life is now the normal landing dashboard rather than a modal behind a decorative 3D overview. Four cards show latest saved work, next practice step, money/personal belongings and current simulated class-project funding. Continue resumes the latest active saved item without discarding unsaved editor text. Navigation opens full-page tracker sections. Home Base remains optional via Visit Home Base, with 3D code loaded only on request; money/work access no longer depends on 3D startup. Existing rules, balances, work schema, history and storage keys are unchanged.
- **deployment:** Existing local preview only; no public deployment.
- **testing:** 26 existing economy/receipt/work-store tests pass. JavaScript syntax and HTML references checked. Browser inspection attempted but denied by unavailable browser security/policy-check service; no workaround or desktop/mobile visual pass claimed.
- **taniaAcceptance:** Direction accepted; new layout not yet reviewed.
- **evidence:** docs/production/my-life-tracker-20260924.md / private/production-evidence/2026-09-24/my-life/dashboard-validation.json
- **nextAction:** Verify responsive layout and navigation when browser security service is available.

## CE-CHANGE-20260924-83 — My Life: local work library, belongings and progress foundation

- **date:** 2026-09-24
- **domain:** Local player tracking, saved work and economy presentation
- **source:** Tania requests a production-ready asset/economy/progress/work tracker and accepts proceeding with the proposed local/demo-first My Life foundation, 24 September 2026.
- **owner:** My Life tracker task
- **status:** Local implementation and store tests complete; browser verification blocked; not production-ready
- **rationale:** Build dependable save-and-resume behaviour without prematurely connecting student accounts or conflating work with assessed evidence.
- **dependencies:** CE-CHANGE-20260924-82 / CE-CHANGE-20260924-81 / CE-CHANGE-20260917-73
- **supersededRecord:** None
- **designApproval:** Local foundation authorised. Final presentation, real student deployment and safety approval are not inferred.
- **implementation:** My Life local tracker now has Overview, Money, Belongings, Progress, My work and Our world. Work supports titled plain-text notes/drafts/reflections, explicit save status, resume of latest active work, up to 100 preserved versions/item, preview/copy of earlier versions, reversible archive, title search, backups, current-text downloads and validated merge-as-copies imports. Money keeps prior values/schema, now requires successful persistence before showing a transaction; same-origin Web Locks used where available. Review mode never reads/writes the normal work slot. Belongings has three illustrative SVG image cards alongside the existing 3D objects. Class-world funds remain a labelled simulation; active global UI/display removed and historical ledger entries preserved.
- **deployment:** Existing local Economy Lab only. No public publication.
- **testing:** 26 Node tests pass (15 existing economy/receipt checks and 11 work-store checks). Covers revision reload, archive/restore, unchanged-save deduplication, quota failure, stale-tab conflict, corrupt-save preservation, nonpersistent review, import duplicate/collision handling, validation/limits and storage-key isolation. JavaScript syntax and HTML ID/reference checks pass. Interactive browser verification attempted twice but denied because the browser security-check service was unavailable; no workaround used. New screens, file downloads/import UI, native locks and phone layout are not browser-verified this turn.
- **taniaAcceptance:** Proceeding authorised; outcome/presentation review pending.
- **evidence:** docs/production/my-life-tracker-20260924.md / private/production-evidence/2026-09-24/my-life/validation.json
- **nextAction:** Complete interactive desktop/phone verification when browser policy service is available, then review identity, class isolation, adapters and work lifecycle before classroom deployment.

## CE-CHANGE-20260924-82 — Class-world investment and work opportunities in the curriculum plan

- **date:** 2026-09-24
- **domain:** Curriculum planning, shared-world economy and scope decisions
- **source:** Tania clarifies personal Home Base purchases, same-class world upgrades, cinema and green-energy job possibilities, then explicitly requests their inclusion in the Blueprint curriculum plan, 24 September 2026.
- **owner:** Career Empire curriculum planning
- **status:** Canonical planning updated; scenario design and runtime integration pending
- **rationale:** Connect world investments to Megatrends, labour-market investigation, budgeting, teamwork and application opportunities without fixing projects or inventing curriculum credit.
- **dependencies:** CE-CHANGE-20260924-81 / CE-CHANGE-20260917-73
- **supersededRecord:** None
- **designApproval:** Direction confirmed; specific scenarios, costs, assets and implementation remain proposed.
- **implementation:** Expanded existing CE-EXP-V2-07 and linked Megatrends/sample-timing notes: a same-class shared 3D world, progressive collective investments and changing work opportunities; personal Home Base ownership separate. Repair, cinema and green energy remain candidate scenarios. Global/cross-school participation deferred under the Department safety assessment.
- **deployment:** Documentation/source updates only; no public reader or game deployment.
- **testing:** 23 curriculum/Blueprint tests passed; TypeScript check, integration structure and generated export parity passed. Public publication and existing release-review gates remain separate.
- **taniaAcceptance:** User requests recording these ideas; no final scenario or asset acceptance inferred.
- **evidence:** docs/production/class-world-curriculum-20260924.md
- **nextAction:** Choose one bounded project scenario and specify research, costs, work implications, visual consequences and teacher-reviewed evidence before prototyping.

## CE-CHANGE-20260924-81 — Economy Lab: scene-first player panel and transaction feedback

- **date:** 2026-09-24
- **domain:** Local economy presentation and visible feedback
- **source:** Tania requests continuation and explicitly corrects the implementation target to the existing Economy Lab at localhost:8792/economy-lab/, 24 September 2026.
- **owner:** Economy Lab presentation task
- **status:** Locally implemented and scoped-tested; awaiting presentation review
- **rationale:** Make existing economy balances, receipts and world consequences accessible without changing agreed rules or connecting student accounts.
- **dependencies:** CE-CHANGE-20260923-80
- **supersededRecord:** None
- **designApproval:** Implementation authorised for the existing lab; new presentation is a candidate awaiting review.
- **implementation:** Existing Economy Lab upgraded locally: scene-first full-height layout; compact available/saved/scenario-wellbeing HUD; My life modal with Overview, Earn & try, My space, Save & give and History; J shortcut and Escape; net-pay/tax/spend receipts in the panel and world; reconstructed running balances; four animated scene viewpoints with reduced-motion support; existing owned objects/fund effects retained. No pricing, reward, tax, saved schema, campus or separate Night Market changes. Review mode avoids writing the user save.
- **deployment:** Local preview restored at its existing address; no public deployment.
- **testing:** 15 Node tests pass (12 existing economy invariants plus three receipt tests). Desktop and 390x844 browser checks observed pay/tax, one-time reward buttons, desk purchase and focused 3D view, savings, local/global giving, running receipt history, failure/reflection/free retry, keyboard opening and review reload. Phone DOM width/scroll width both 390px; modal width/scroll width both 356px. Captured browser warning/error log empty. Existing-save reconstruction is unit tested; blocked/cross-tab/browser-storage-failure paths source reviewed, not browser fault injected. No physical-device or hosted-CI claim.
- **taniaAcceptance:** Target correction confirmed; final visual acceptance pending.
- **evidence:** docs/production/economy-lab-presentation-20260924.md / private/production-evidence/2026-09-24/economy-lab-presentation/validation.json
- **nextAction:** Review the Economy Lab presentation. Separate Night Market work and campus/account integration remain distinct.

## CE-CHANGE-20260923-80 — Login-independent 3D economy: discovery and local prototype

- **date:** 2026-09-23
- **domain:** Economy, progression and visible world consequences
- **source:** Tania explicitly requests staged scoring/economy design and appropriate local prototype, 23 September 2026. Follow-up: supplied hub metrics/navigation screenshots; explicitly requested productive failure and rewards independent of progress, wealth and wellbeing. Tania emphasises engagement before overt curriculum, an emotional opening and attachment inspired by Tamagotchi/Pokémon; discussion only.
- **owner:** Career Empire economy task
- **status:** Local economy and Sunday Markets integration implemented; unpublished
- **rationale:** Inspect retained old and current mechanics; design and demonstrate saved practice money and visible consequences without student accounts.
- **dependencies:** CE-CHANGE-20260922-79
- **supersededRecord:** None
- **designApproval:** User authorises investigation and appropriate prototyping; proposed rates, rewards and visuals are not final design acceptance.
- **implementation:** Existing isolated game prototype now includes daytime Sunday Markets, Home Economics entrance/return, optional discovery guide, Initiative reference sheet, revision-3 agency/trials/consolidation and explicit versioned My work transfer. Existing local economy lab remains separate. See Sunday Markets integration note for source, tests and limits.
- **deployment:** Not deployed. Local game worktree and My Life lab only; public game unchanged.
- **testing:** 36 game unit checks and 15 work/bridge checks passed. Nine initial browser checks and seven final browser checks passed, including full desktop keyboard shift, review transfer and campus return. Desktop/390 module flows and normal My work bridge passed. Two additional complete keyboard journeys including crew pass and campus return passed at1280/390. Blueprint scoped tests28/28 and export parity pass; existing stale AGENTS review gate retained. No full CI or physical-device claim.
- **taniaAcceptance:** 23 September: Tania supports the phone/journal access proposal and a complete event-led introductory experience for testing. Exact event, values, artwork, curriculum mapping and current-world implementation scope remain unapproved. Confirmed opening constraint: represent Careers and Employability and the coming year honestly; engagement must not set false adventure-game expectations. Confirmed: plentiful game skill badges are separate from real-world portfolio/résumé evidence; no automatic transfer. Night market setting and bounded opening direction selected, 23 September; detailed first-version brief remains draft. 24 September: explicitly authorises all discussed local daytime market, entrance, optional guide and Initiative/My work integration plans; visual and learning acceptance remain pending.
- **evidence:** docs/production/local-economy-20260923.md / private/production-evidence/2026-09-23/local-economy/validation.json / docs/production/night-market-introduction-20260923.md / docs/production/sunday-markets-integration-20260924.md
- **nextAction:** Review the complete local Sunday Markets experience; reconcile authoritative release source and production tracker hosting before separately authorised publication.

## CE-CHANGE-20260922-79 — Curriculum-First Progressive Loading

- **date:** 2026-09-22
- **domain:** Core loading and curriculum access
- **source:** Tania explicitly requests implementation and an approved decision in Improve Game Loading continuation, 22 September 2026.
- **owner:** Career Empire loading task
- **status:** Approved; merged, deployed and verified live
- **rationale:** Optional decoration and cosmetic assets must not prevent access to learning.
- **dependencies:** None
- **supersededRecord:** None
- **designApproval:** Approved by Tania, 22 September 2026: curriculum-first progressive loading, temporary avatar fallback and on-demand Studio.
- **implementation:** Room entry no longer awaits campus scenery; video poster detached; download-free temporary avatar replaced by saved model without relocation; Studio readiness feedback and cancellation preserved; safe return to Arrival while scenery unavailable. Explicit Retry saved avatar button is available on failure, and model construction preserves the current actor until successful. Emergency direct EST fallback URL corrected. Saved source 93986277de8183a261402be660aa51db15527952.
- **deployment:** PR #29 merge 3cba2aef347beadd1115eeb27d11809ae568b810; Pages 35712692629 success; four changed public files plus manifest hash-verified.
- **testing:** 20 distinct focused Chromium scenarios passed across scoped runs; final six fault/retry cases pass after explicit retry control. 42 unit tests; 168 exact release hashes and 36 reachable modules; source checks pass. Controlled eight-second avatar delay: first frame 8676ms to 863ms. Blueprint 26 focused tests, TypeScript and scoped material/integration contracts pass; full gate fails on stale AGENTS.md release review. No full hosted CI or physical-device claim. Desktop 1280 normal flow and phone-sized 390 fault-injected flow passed; first frame 4597ms and 2850ms respectively. EST module, Careers, Chapel, movement, saved profile, Studio normal/deferred/failure tested. No page errors. Two hair/shoe scenarios passed in 30.4 seconds on exact release; 168 committed asset hashes and 36 reachable modules pass. PR run 35704465070: 42 unit and 23 browser passed, same hair/shoes campusReady failure as prior main run 35593340525, 44 not run. Postmerge run 35712693386 still in progress at close; no full CI pass claimed.
- **taniaAcceptance:** Tania approved the rule, draft PR, then explicit merge to live. Physical-device/student acceptance remains separate.
- **evidence:** docs/production/curriculum-first-progressive-loading-20260922.md / private/production-evidence/2026-09-22/curriculum-loading/receipt.json / https://github.com/Emmanuel-ICT-Support/GTCEM-Career-Empire/pull/29 / private/production-evidence/2026-09-22/curriculum-loading/live/release-receipt.json / docs/production/startup-asset-gate-20260924.md
- **nextAction:** 24 September startup follow-up published via PR #30 / 4c26d21; Pages 35944433432 success, four public hashes and desktop/390px public browser checks pass. Await Tania live/physical-device review. Hosted CI still running at last check; Blueprint reader release remains separate.

## CE-CHANGE-20260921-78 — Dress ups hair and shoes

- **date:** 2026-09-21
- **domain:** Avatar wardrobe
- **source:** Tania asks to do hair and shoes; then explicitly instructs publication and conditional retirement of the temporary wardrobe worktree through her Mac storage task. Follow-up: more natural Pixar-like hair with existing movement retained.
- **owner:** Career Empire wardrobe task
- **status:** Original release live; short style accepted for now; three-style matte finish ready for local review
- **rationale:** Complete student identity choices using fitted finished styles and hex colours.
- **dependencies:** CE-CHANGE-20260921-77
- **supersededRecord:** None
- **designApproval:** Authorised hair/shoe implementation and subsequent live publication; physical-device and appearance feedback remain separate.
- **implementation:** Four hairstyles and four shoe styles on the unchanged canonical body; separate rigged GLBs, four section thumbnails, independent stored colours, selected-only downloads and body-only height normalization. Local refinement d4d17feed3a9d3b2fda9cf963db8c1be584a303e updates four hair GLBs/thumbnails and hair-only cache keys; 14 other assets unchanged. Reference-led finish 23f886a4cc671465081101283cd5e7fb28347273 preserves core positions/faces/weights and adds strand maps, separate skin-weighted outer locks/wisps and matching thumbnails. Ponytail-only correction 986398b387726084155f53adab21d58b25ecfa02: connected root, curved hairline, swept fringe and layered waves; 17 protected files unchanged. Reused short-hair trial 62ad98605170e0caab7ce1ea9c8443fcc4b845b8: cleaned source schoolboy hair geometry/UV detail, fitted copy, neutral tonal map and matte material. Eighteen donor/body/clothing/shoe/other-hair files unchanged. Interim finish d1e9dceedbeb9245364ea78bbc28ce7056109a46: Soft curls, Side-part bob and Ponytail get matte materials, neutral lock values and self-occlusion shading. Exact fitted geometry, normals, UVs, weights and rig preserved. Sixteen protected assets unchanged.
- **deployment:** PR #28 merge 0886faf8f37f898d072f678b517f826ac07a197b; existing Pages run 35593339697 successful. 22 fresh public file/manifest hashes match; 147 unchanged files inherit prior receipt.
- **testing:** 42 local unit/63 serial browser passed before final sole refinement; final 47 poses x 40 comparisons zero finite-edge crossings, eight GLB round trips, 4 local + 4 public wardrobe and 4 public normal-game scenarios pass. Cold usable view 1.900-4.277s. Hosted main 35593340525: 42 unit/23 browser passed; 600-second campus-readiness timeout after Save/return; 39 not run. Physical phone unverified. Final local hair refinement: 47 poses × 20 zero crossings; four GLB round trips; four focused Chromium/WebKit cases passed. Latest strand finish: 47×20 zero crossings including new layers, four round trips, four focused browser cases; 14 other assets unchanged. Exact final ponytail correction: 47×5 zero crossings, one GLB roundtrip, 4/4 final focused browser cases and 168 staged hashes/36 modules pass. Front/sides/rear/walk reviewed; sculpted finish remains below soft reference. Exact reused-short trial: 47 poses ×5 zero crossings after nape correction; one canonical 41-bone roundtrip; four Chromium/WebKit cases in 1.1m; 168 staged hashes/36 modules. Front/sides/rear/walk and brown/blond/dark/blue visual review recorded. Final three-style material pass: exact geometry/skin/rig accessor preservation, three 41-bone reimports, four focused Chromium/WebKit desktop/phone-size cases in 54.3s; 168 staged hashes/36 modules and source checks pass. Prior 47-pose collision evidence carries forward through geometry identity, not a new simulation.
- **taniaAcceptance:** Short sweep accepted for now with explicit chunky/flat reservations. User requests changes to curls, bob and ponytail; interim finish completed, final appearance acceptance remains with Tania.
- **evidence:** docs/production/hair-shoes-20260921.md / private/production-evidence/2026-09-21/natural-hair/proof-summary.json / private/production-evidence/2026-09-21/strand-hair/proof-summary.json / private/production-evidence/2026-09-21/ponytail-shape/proof-summary.json / private/production-evidence/2026-09-21/reused-short-hair/proof-summary.json / private/production-evidence/2026-09-22/matte-hair-styles/proof-summary.json
- **nextAction:** Tania reviews the local interim finish at port8786, hair=matte-styles-20260922, commit d1e9dceedbeb9245364ea78bbc28ce7056109a46. Bob is visibly open in portrait view. Short sweep is accepted for now, with reservations; three revised finishes remain for appearance review. Original live release unchanged; no new publication. Physical-device/student acceptance and prior hosted campus-readiness timeout remain separate.

## CE-CHANGE-20260921-77 — Approved wardrobe and faster first-play entry

- **date:** 2026-09-21
- **domain:** Avatar wardrobe and release
- **source:** Tania explicitly requests live publication and desktop/laptop/mobile checks, then confirms she will perform the final physical-phone check.
- **owner:** Career Empire wardrobe release task
- **status:** Published; live desktop and mobile-browser checks passed; physical phone and hosted CI follow-up remain
- **rationale:** Make the accepted wardrobe available to students with efficient loading and preserved profiles.
- **dependencies:** CE-CHANGE-20260917-76
- **supersededRecord:** None
- **designApproval:** Tania approves the latest local wardrobe and authorises live publication.
- **implementation:** Four tops/pants, cards and hex colours with unchanged canonical body. Dress ups label. Selected character and Arrival Gardens first, background original campus textures/scenery, guarded movement/destinations and in-place retry.
- **deployment:** PR #25 and #26 retained; first-play PR #27 merge 596f27bfb12d55e6036270595f8562001fa59e08 built on existing Pages at 2026-09-21T09:39:01Z.
- **testing:** 40 unit; eight final local Safari checks; four live normal-game and six live wardrobe checks passed. Cold usable view: desktop 5.243-5.925s, phone-size 2.617-8.561s; cached 2.742-3.883s. 13 changed public files/manifest freshly match, 140 unchanged hashes inherit earlier full receipt. Hosted CI: 23 browser passed, full-campus timeout, 37 not run.
- **taniaAcceptance:** Local clothing approved; student/device acceptance pending.
- **evidence:** docs/production/wardrobe-release-20260921.md / docs/production/avatar-wardrobe-strategy-20260920.md / private/production-evidence/2026-09-21/wardrobe-release/receipt.json / private/production-evidence/2026-09-21/first-play/first-play-receipt.json
- **nextAction:** Tania performs physical-phone/student acceptance. Investigate separate hosted full-campus timeout and reconcile reader surfaces before separate Blueprint publication.

## CE-CHANGE-20260917-76 — Detached flyover camera for recording the campus

- **date:** 2026-09-17
- **domain:** Camera and navigation
- **source:** Tania requests flyover/bird’s-eye navigation with smooth controls and exact return, preserving current gameplay and lazy Studio.
- **owner:** Career Empire game and Blueprint maintainer
- **status:** Published and live-verified
- **rationale:** Record freely without moving the player or creating competing camera controls.
- **dependencies:** Existing shared Three.js camera and central app input/render loop / Current phone-loading and teacher release retained
- **supersededRecord:** None
- **designApproval:** Implementation explicitly requested; visual acceptance pending.
- **implementation:** Town-only detached camera, WASD/QE, drag/arrows, speed slider, eased motion, clean view, touch recovery and exact saved camera restoration.
- **deployment:** PR23 merge 12d782e917ca04296b49f0d44a9679bec5874155; Pages 35225886485 success; five public hashes and desktop/touch browser behaviour verified.
- **testing:** Four final native Chromium scenarios passed (24.6s); 35 existing unit tests, source checks, syntax, whitespace and all 131 working-copy release hashes passed. Screenshots inspected; no full hosted CI or physical-device acceptance. Live desktop/phone-emulation controls and five public hashes pass; hosted CI completed / failure.
- **taniaAcceptance:** User reviewed local preview: love it; explicitly requested live publication.
- **evidence:** docs/production/flyover-20260917.md / private/production-evidence/2026-09-17/flyover/receipt.json / private/production-evidence/2026-09-17/flyover/flyover-campus.png / private/production-evidence/2026-09-17/flyover/flyover-phone.png / private/production-evidence/2026-09-17/flyover/live-receipt.json
- **nextAction:** Use Flyover on the live campus; physical-device acceptance and hosted CI remain independent.

## CE-CHANGE-20260917-75 — Reduce phone opening downloads with device-specific assets

- **date:** 2026-09-17
- **domain:** Startup performance
- **source:** Tania: slow to open; 76 is still pretty long; iPhone 17 on mobile data.
- **owner:** Career Empire game and Blueprint maintainer
- **status:** Published and live-verified; physical iPhone outcome pending
- **rationale:** Initial lossless packing alone was inadequate. Preserve desktop and provide smaller phone derivatives without removing campus features.
- **dependencies:** Existing Meshopt decoder / Unchanged original tree assets and current teacher release
- **supersededRecord:** None
- **designApproval:** Bounded loading fix for reported live issue; appearance and gameplay preserved.
- **implementation:** Phone-only texture/model derivatives, same-origin loader selection, unchanged avatar rig/animations and transient startup cache.
- **deployment:** PR22 merge 82ba1d1ad0a8d5d54a38f96a6adf9722896a05f5; Pages 35189675710 success; all 40 changed public hashes and phone/desktop browser behaviour verified.
- **testing:** 35 unit and source checks passed; all 11 focused native-graphics scenarios passed; 40 live hashes and phone/desktop behaviour verified. Hosted CI 35189676385: 35 unit/23 browser passed, existing line-8 startup timeout failed, 25 not run. Physical iPhone timing pending.
- **taniaAcceptance:** User requested slow-opening repair and confirmed iPhone 17/mobile data; actual phone timing and acceptance not yet supplied.
- **evidence:** docs/production/phone-opening-20260917.md / private/production-evidence/2026-09-17/phone-opening/asset-proof.json / private/production-evidence/2026-09-17/phone-opening/phone-geometry-proof.json / private/production-evidence/2026-09-17/phone-opening/phone-mobile-comparison.json / private/production-evidence/2026-09-17/phone-opening/phone-assets.json / private/production-evidence/2026-09-17/phone-opening/phone-extra-assets-proof.json / private/production-evidence/2026-09-17/phone-opening/phone-after.png / private/production-evidence/2026-09-17/phone-opening/live-receipt.json
- **nextAction:** User tests fresh live default entry on iPhone mobile data; retain full-CI and physical-device proof boundaries.

## CE-CHANGE-20260917-74 — Two supplied teacher NPCs wander and react on the oval

- **date:** 2026-09-17
- **domain:** Campus NPC characters
- **source:** Tania supplied both GLBs, selected Middleton reaction cycle and clarified both teachers are required.
- **owner:** Career Empire game and Blueprint maintainer
- **status:** Published and live-verified; full hosted CI and physical-device acceptance remain separate
- **rationale:** Add the actual supplied teachers as independent NPCs without Studio startup cost.
- **dependencies:** Supplied GLBs / Existing Three.js/Rapier world and delayed Studio loading
- **supersededRecord:** None
- **designApproval:** Both supplied identities confirmed; Middleton cycle explicitly selected. Psandodakis uses supplied reaction clips.
- **implementation:** Two bounded wandering capsules, independent reactions, lazy optional asset loading and 2K game textures.
- **deployment:** PR21 merged as e36aee182049f2960e6d181b08c6d3df18b3e595; Pages 35185589217 success; six changed public hashes match.
- **testing:** Saved final-asset browser regression passed: seven reactions, five simulated minutes of two-NPC wandering/collision, mobile tap, Studio pause and retry. All 35 unit tests, source check and 97 working-copy manifest hashes pass. No hosted/physical-device certification.
- **taniaAcceptance:** Both identities/inclusion confirmed and live publication explicitly requested; no physical-device certification.
- **evidence:** docs/production/teacher-npcs-20260917.md / private/production-evidence/2026-09-17/teacher-npcs/teachers-validation.json / private/production-evidence/2026-09-17/teacher-npcs/asset-inspection.json / private/production-evidence/2026-09-17/teacher-npcs/live-receipt.json
- **nextAction:** User can meet both teachers on the live oval; retain pre-existing hosted startup timeout and school/device validation gaps.

## CE-CHANGE-20260917-73 — Adopt WA Department questionnaire as the assessment baseline; defer CEWA

- **date:** 2026-09-17
- **domain:** School deployment assessment strategy
- **source:** Tania: just use the WA one as the new base test; do not worry about CEWA for now. Supersedes earlier Both sector scope.
- **owner:** Tania / product owner; Blueprint maintainer
- **status:** Direction adopted; assessment preparation incomplete
- **rationale:** Use the supplied WA questionnaire as the governing assessment test. ST4S remains optional reference; CEWA is explicitly deferred. Existing critical security/privacy findings remain actionable.
- **dependencies:** CE-CHANGE-20260917-70 / CE-CHANGE-20260917-72
- **evidence:** docs/production/wa-assessment-route.md / private/production-evidence/2026-09-17/wa-assessment-route/source-provenance.json
- **nextAction:** Confirm current WA form and proportionate evidence requirements; draft truthful responses, validate live Supabase and remediate critical authentication/tenant issues before student use.
- **supersededRecord:** CE-CHANGE-20260917-70
- **designApproval:** Latest Tania direction adopts WA only for now and supersedes earlier Both sector scope. No security control or legal declaration is passed by this decision.
- **implementation:** WA 75-question / 24-data-category baseline, mapped feature checks, Department outcome and school permission; CEWA deferred.
- **deployment:** Local governance change only; no website, game, database or assessment submission by this change.
- **testing:** Pending scoped route derivation, register coverage and preservation checks.
- **taniaAcceptance:** WA-only assessment direction accepted; questionnaire answers, declaration and school use not approved.

## CE-CHANGE-20260917-72 — Publish ST4S governance reader and repair bounded publication validation

- **date:** 2026-09-17
- **domain:** Blueprint publication and governance
- **source:** Tania: publish and submit please; clarified Submit Blueprint changes on 17 September 2026.
- **owner:** Blueprint maintainer
- **status:** Blueprint reporting published and verified; product ST4S readiness remains blocked
- **rationale:** Publish the existing ST4S framework as an honest readiness report while retaining unresolved product controls and unrelated work.
- **dependencies:** CE-CHANGE-20260917-70
- **evidence:** private/production-evidence/2026-09-17/st4s-publication/validation.md / private/production-evidence/2026-09-17/st4s-publication/first-live-receipt.json
- **nextAction:** Retain product remediation and remaining live Supabase evidence backlog; Blueprint reporting publication does not authorise school deployment.
- **supersededRecord:** None
- **designApproval:** Explicit publication request; no new game design approval.
- **implementation:** Typed existing Chapel publication extension; restore missing pending record-68 surfaces; preserve original approval fixtures plus newer decisions; allow generated ST4S public register.
- **deployment:** First ST4S reader release b4420d549f9323f0aa5b8e279eb09bda329c9846 built and verified live; source 55bb6e5eb42a0a961494424fe31beb881796dd10. No game/database deployment or formal ST4S submission by this task.
- **testing:** 86 full tests, type/lint checks and both guarded builds pass. Live desktop/390px dashboard, Gates, sources, reports and clipboard pass; exact relevant bytes match and private URLs return 404.
- **taniaAcceptance:** Publication authorised; formal ST4S assessment explicitly outside this request.

## CE-CHANGE-20260917-71 — Saved-avatar startup and on-demand Studio resources

- **date:** 2026-09-17
- **domain:** Avatar startup performance
- **source:** Tania explicit 17 September request continuing Avatar Changes Causing Slowdown
- **owner:** Career Empire game and Blueprint maintainer
- **status:** Published and live scoped checks passed
- **rationale:** Remove editor preview work from ordinary startup while preserving saved profile behavior.
- **dependencies:** Existing saved profile and avatar loader / Existing pants-game checkout; preserve unrelated edits
- **supersededRecord:** None
- **designApproval:** User requested this bounded loading change; no visual redesign.
- **implementation:** Defer Studio scene and OrbitControls, guard delayed entry, retain saved avatar and pants draft.
- **deployment:** PR20 merge b4b22db1f3a0a4f1174ade4fbc94205ce3d4e166; Pages 35178863849 succeeded; four served source hashes match.
- **testing:** 35 unit tests, seven native Chromium scenarios and development source checks pass.
- **taniaAcceptance:** Implementation requested; physical-device and publication acceptance not claimed.
- **evidence:** docs/production/avatar-startup-20260917.md / private/production-evidence/2026-09-17/avatar-startup/browser-tests.json / private/production-evidence/2026-09-17/avatar-startup/live-receipt.json
- **nextAction:** Retain existing campus and selected-model cost limits; physical-device and full hosted suite remain separate.

## CE-CHANGE-20260917-70 — Integrate school deployment and ST4S readiness into production governance

- **date:** 2026-09-17
- **domain:** School Deployment, Security, Privacy & ST4S Readiness
- **source:** Tania explicit 17 September request continuing Security readiness review; governing attached Supplier Guide 2026.1 v1.0.
- **owner:** Blueprint maintainer; Tania accountable for assigning security/privacy owners
- **status:** Blueprint reporting published and verified; product ST4S readiness remains blocked
- **rationale:** School deployment needs evidence-led security, privacy and safety gates throughout feature delivery.
- **dependencies:** Existing V2.8 and subsequent governance / Supplier Guide 2026.1 v1.0 / Live Supabase metadata/configuration and independent review evidence
- **supersededRecord:** None
- **designApproval:** Explicitly authorised governance workstream; preserve all protected decisions and unrelated production work.
- **implementation:** Added workstream, 324 guide/project control records, 45 evidence records, 14 audit tasks, shared derived dashboard, six stage gates, mandatory feature impact checks and prompt/session/DoD integration. Read-only source inventory and primary-region UI observation completed; live configuration remains partly unverified.
- **deployment:** First ST4S reader release b4420d549f9323f0aa5b8e279eb09bda329c9846 built and verified live; source 55bb6e5eb42a0a961494424fe31beb881796dd10. No game/database deployment or formal ST4S submission by this task.
- **testing:** 86 full tests, type/lint checks and both guarded builds pass. Live desktop/390px dashboard, Gates, sources, reports and clipboard pass; exact relevant bytes match and private URLs return 404.
- **taniaAcceptance:** Requested scope authorised; no compliance or school approval inferred.
- **evidence:** docs/production/st4s-readiness.md / docs/production/st4s-controls.md / docs/production/st4s-backlog.md / private/production-evidence/2026-09-17/st4s-readiness/validation.md / private/production-evidence/2026-09-17/st4s-publication/first-live-receipt.json
- **nextAction:** Retain product remediation and remaining live Supabase evidence backlog; Blueprint reporting publication does not authorise school deployment.

## CE-CHANGE-20260917-69 — Extend steward coverage to verified independent game copies

- **date:** 2026-09-17
- **domain:** Workflow monitoring
- **source:** Existing scheduled steward authorisation to inspect coverage and reconcile supported tracking gaps; turn-scoped canonical write and network access granted.
- **owner:** Career Empire steward
- **status:** Monitoring registration; guard installation and reader reconciliation remain open
- **rationale:** Git-linked discovery omits independent game clones.
- **dependencies:** Install expected guards only with access to each game copy. / Retain initial baselines as unreviewed. / Verify affected reader surfaces before publication.
- **evidence:** docs/production/steward-check-20260917.md
- **nextAction:** Check the expanded scan, install missing guards in the identified game copies with permission, then reconcile stale current-plan fields against release evidence.
- **supersededRecord:** None
- **designApproval:** No new design or production approval.
- **implementation:** Add two verified independent game copies to the existing private registry; do not modify game files.
- **deployment:** Local governance maintenance only; no commit or publication.
- **testing:** Exact local Git identities and GitHub main identities checked; live Pages TLS verification blocked.
- **taniaAcceptance:** No new acceptance inferred.

## CE-CHANGE-20260916-68 — Research reusable animated garment workflow

- **date:** 2026-09-16
- **domain:** Avatar clothing workflow research
- **source:** Tania requests written research: animated base into MD, recover T-pose, fit garments, export garment only to Blender; find an alternative to re-rigging dressed outfits.
- **owner:** Career Empire maintainer
- **status:** Research documented; same-rig MD round trip untested
- **rationale:** Avoid independently regenerating skeletons for each dressed outfit.
- **dependencies:** Preserve selected Textured done lineage and unmasked full-body master. / EveryWear must preserve the imported Tripo skeleton in a bounded test.
- **evidence:** docs/production/clothing-workflow-research-20260916.md
- **nextAction:** Prove one garment on the same rig using EveryWear; research does not authorise a new game release.
- **supersededRecord:** None
- **designApproval:** Research requested; no approval of a new master or full wardrobe implementation.
- **implementation:** Written workflow and fallback only; no asset edits.
- **deployment:** No game or Blueprint reader publication in this research task.
- **testing:** Official written documentation and public community workflow reviewed; no MD round trip performed.
- **taniaAcceptance:** Workflow recommendation awaits practical trial.

## CE-CHANGE-20260916-67 — Publish matching-body pants outfit test

- **date:** 2026-09-16
- **domain:** Avatar Studio and clothing workflow
- **source:** Tania: ok upload into the game lets test.
- **owner:** Pants compatibility task
- **status:** Game published and live verified; user appearance test pending
- **rationale:** Prove the MD-to-Tripo dressed outfit in the existing game after correcting covered-body clipping.
- **dependencies:** Keep matching Tripo rig and corrected body/pants together; no pants-off on masked body.
- **evidence:** docs/production/pants-test-20260916.md / private/production-evidence/2026-09-16/pants-game-release / https://emmanuel-ict-support.github.io/GTCEM-Career-Empire/playable-3d/?outfit=pants
- **nextAction:** Tania tests the live outfit; retain matching body and pants together. Whole-reader integration and publication remain separate.
- **supersededRecord:** None
- **designApproval:** User requests test upload; final garment appearance not accepted.
- **implementation:** Pants test body option, unsaved Studio deep link, authored walk speed, protected fixed outfit, exact corrected GLB.
- **deployment:** PR19 merged as b780fe1c4ddf5fcb59edcbcf2b329149652c9e70. Pages run 34994192649 succeeded; all six changed served files match candidate.
- **testing:** 35 units, source and 93-file/31-module checks pass. Actual local desktop/390px and live desktop Studio, walk/turn, save to town, movement and reload pass. Hosted CI in progress; physical devices untested.
- **taniaAcceptance:** Requested upload for testing; user test pending.

## CE-CHANGE-20260914-52 — Resetting demo shop at Careers and student feedback form

- **date:** 2026-09-14
- **domain:** Careers demonstration and student feedback
- **source:** Tania requests $100,000 auto-resetting demo shop; clarifies separate Careers Advice Centre; adds bottom-right good/awful/suggestions feedback form.
- **owner:** Demo shop and feedback task
- **status:** Published and live verified; reader integration separate
- **rationale:** Enable repeated store demonstrations without changing student finances and collect development feedback through the existing teacher channel.
- **dependencies:** None
- **supersededRecord:** None
- **designApproval:** User authorises the features and separate Careers destination; existing assets reused. No final appearance acceptance claimed.
- **implementation:** Memory-only demo wallet with reset; separate Careers room/desk using existing interior model; three-question modal routes to feedback_reports teacher inbox.
- **deployment:** PR18 merged as 337d75a551c71631fef5abd7e41156c83c7b1d14. Pages run 34818896040 success; ten live files match tested source.
- **testing:** 33 unit tests; actual desktop and 390px desk purchases/reset/return/door; form empty/Escape and mocked delivery/error/offline; live endpoint zero-row HTTP 200. No live test submissions or physical-device certification.
- **taniaAcceptance:** Features requested; final result not yet reviewed by Tania.
- **evidence:** docs/production/demo-shop-feedback-20260914.md / https://github.com/Emmanuel-ICT-Support/GTCEM-Career-Empire/pull/18
- **nextAction:** Use the live demonstration and existing teacher feedback inbox. Pending whole-reader integration and physical-device acceptance remain separate.

## CE-CHANGE-20260914-51 — Restore Initiative answer buttons when reviewing completed videos

- **date:** 2026-09-14
- **domain:** EST CORE activity reliability
- **source:** Tania requests Initiative button repair and clarifies the controls as Shows initiative / Needs more initiative beside the videos.
- **owner:** Initiative repair task
- **status:** Published and verified live; reader integration separate
- **rationale:** Completed-step review disabled all choices using earned answers and suppressed its feedback/Next overlay.
- **dependencies:** None
- **supersededRecord:** None
- **designApproval:** Existing content and styling must be preserved; no redesign requested.
- **implementation:** Separate reviewAnswer/reviewing state from earned answers; repair retries, progression and old saved review; content script cache key refreshed. Source 4f74d00.
- **deployment:** PR17 merged as 2dfdd557acdb04ee9f0739fb6f7af37e4315f577. Pages run 34813902444 succeeded; both changed runtime files match source.
- **testing:** 24 combined unit tests and source checks pass. Live saved 3/3 review, all three cards, wrong retry and Finish Step 1 verified without runtime errors. Hosted browser CI: 23 passes, startup-performance timeout, 16 not run; no physical-device claim.
- **taniaAcceptance:** Bug repair requested; no user acceptance of final candidate yet.
- **evidence:** docs/production/initiative-video-controls-20260914.md / https://github.com/Emmanuel-ICT-Support/GTCEM-Career-Empire/pull/17
- **nextAction:** Refresh the live demo to use the repair; preserve separate reader integration and hosted-performance follow-ups.

## CE-CHANGE-20260914-50 — Correct annotated garden clearance and visual defects

- **date:** 2026-09-14
- **domain:** Campus gardens, movement clearance and first-day controls
- **source:** Tania supplied seven annotated screenshots and explicitly authorised all corrections, specifying smaller rocks contained inside beds.
- **owner:** Annotation review task
- **status:** Implemented and verified local candidate; not published
- **rationale:** Keep rocks and seating out of walking routes and planted-bed edges; remove duplicate surfaces and reduce screen obstruction.
- **dependencies:** CE-CHANGE-20260913-47
- **supersededRecord:** Earlier annotation review-only hold is superseded by Tania’s explicit implementation request.
- **designApproval:** Implementation authorised; final appearance is available for Tania to review.
- **implementation:** Contained rocks, relocated benches, resized fountain-side bed, duplicate model pieces removed, shallow pond edge and ripples, collapsible mission card.
- **deployment:** Local preview only; public game remains at 7388cfa.
- **testing:** 18 unit tests and source checks passed; five actual-physics routes passed; nine courtyard rock bounds have 15cm edge clearance. Desktop and 390px panel expansion and Escape verified.
- **taniaAcceptance:** No final revised-appearance acceptance claimed.
- **evidence:** docs/production/annotation-corrections-20260914.md
- **nextAction:** Review the corrected playable preview; publish only the reviewed correction through the normal game release process.

## CE-CHANGE-20260913-49 — Refine ECC signage and Chapel exterior/interior

- **date:** 2026-09-13
- **domain:** ECC visual assets, Chapel architecture and lighting
- **source:** Tania ECC signage request, annotated exterior corrections, supplied Chapel interior photos and final direct publication approval
- **owner:** ECC signage and Chapel task
- **status:** Game signage, exterior and separately approved interior published; source hashes verified, live browser recheck blocked; reader integration separate
- **rationale:** Retain real ECC recognition and accepted building style; improve crest clarity, glass materials, exterior arrangement and serene reference-led Chapel interior.
- **dependencies:** CE-CHANGE-20260913-47
- **supersededRecord:** Earlier provisional Chapel positions and long ceiling-spine interpretation; superseded evidence preserved.
- **designApproval:** Final exterior revision5 and corrected broad interior explicitly accepted by Tania.
- **implementation:** Sharper cleaned crest, angled glass welcome sign/base, flush tree/woman window and separate statue, recessed cross and corrected door/pergola; bounded clerestory, warm reflections, 98 seats and ceiling camera.
- **deployment:** Tania-approved Chapel interior is live and published-source-verified at 7388cfa3bca6b58a06a88bf18f65e6d49dc17501 (PR #13, candidate fcccb9e). Broad side-perspective room, bounded raised clerestory, timber ceilings, warm pendants/strip lights and reflections, 98 upholstered seats, original rainbow cross and ceiling camera. All 83 public release asset hashes match. 18 unit tests and seven real-physics routes pass. Local entry, ceiling/overview and reflection/Studio return checks pass without captured scenery/runtime errors. Fresh live browser navigation is blocked by an unavailable browser security-check service; no bypass attempted. Actual published files match the tested build. Hosted CI passed 24 browser tests then hit the previously recorded arrival-screen 180-second timeout; 12 did not run. No full CI or sustained school-device certification claimed.
- **testing:** 18 unit tests, 83 published hashes, seven Chapel routes and local browser checks pass. Live browser recheck blocked by unavailable browser security service. Hosted 24 browser passed, one known arrival timeout, 12 not run. Physical-device benchmark unverified.
- **taniaAcceptance:** great! love it send to live if all good to go
- **evidence:** docs/production/ecc-admin-signage-20260913.md / docs/production/chapel-interior-upgrade-20260913.md
- **nextAction:** Pause further development until Tania returns. Retain avatar supplier and curriculum timing holds; Blueprint reader/global-refresh gaps remain separate.

## CE-CHANGE-20260913-48 — Repair cold mobile EST film playback

- **date:** 2026-09-13
- **domain:** EST playback reliability
- **source:** Tania explicit mobile EST diagnosis and minimal-fix request, 13 September 2026
- **owner:** EST repair task
- **status:** Implemented locally; physical-phone and publication verification pending
- **rationale:** Full Blob download and awaited metadata delayed start and lost direct iOS user-gesture execution.
- **dependencies:** CE-CHANGE-20260913-47
- **supersededRecord:** Only the full-buffer workaround in EST wall playback; accepted content and design retained.
- **designApproval:** No redesign requested or performed.
- **implementation:** Native range streaming and synchronous tapped play/restart; import cache keys and regression tests.
- **deployment:** Local only; concurrent campus release must include fix and refresh manifest.
- **testing:** Source check, four focused tests, 14 project unit tests and scoped Chromium desktop/390px checks pass; full CI launch blocked, physical iPhone/seek check pending.
- **taniaAcceptance:** Phone confirmation pending.
- **evidence:** docs/production/est-mobile-video-20260913.md
- **nextAction:** Carry fix into verified release; test cold start, sound, seek, restart and return on phone.

## CE-CHANGE-20260913-47 — Hero fidelity becomes the playable standard; ECC pilot

- **date:** 2026-09-13
- **domain:** Environment visual standard, architecture and performance
- **source:** Tania governing-standard request, below-target review and explicit substantial courtyard-pass approval, 13 September 2026
- **owner:** Career Empire environment integrator
- **status:** Governing standard approved; local courtyard iteration verified; final fidelity open
- **rationale:** Hero artwork governs playable richness; browser optimisation is engineering, not indiscriminate simplification.
- **dependencies:** CE-ENV-01 / CE-ECC-HUB-01
- **supersededRecord:** Earlier proposed-only environment standard and per-batch pilot approval gates; previous work remains preserved.
- **designApproval:** Approved governing standard and autonomous reversible ECC pilot; finished appearance not yet accepted.
- **implementation:** Courtyard slice saved locally at 69cf624: real recessed rooms, photographed PBR stone, native foliage and revised light; ten focused browser scenarios covered. Still below hero target, not published.
- **deployment:** Not pushed or published. Live d442671 Pages succeeded; its existing hosted CI failed at Run checks and tests.
- **testing:** Source checks, six unit tests, full browser run 35/36 plus corrected-helper retest 1/1; all 36 scenarios covered. TypeScript and five focused Blueprint tests pass; desktop/phone reader checks pass. Full Blueprint publication validation remains blocked by stale AGENTS.md review receipt.
- **taniaAcceptance:** Current explicit direction, not final candidate acceptance.
- **evidence:** docs/production/ecc-hero-pilot-20260913.md
- **nextAction:** Review fixed-view pilot evidence, recover exact missing three-panel reference, and refine remaining foliage/roof/glazing richness with physical-device performance checks before final ECC fidelity acceptance.
- **chapelInteriorPublication:** [object Object]

## CE-CHANGE-20260911-46 — Assemble and lock approved world environment and camera

- **date:** 2026-09-11
- **domain:** World Environment / combined integration
- **source:** Tania: ok lets do that and lock it in.
- **owner:** Career Empire maintainer
- **status:** Local combined candidate; recovered polish steps outstanding
- **rationale:** Bring individually approved environment and camera into one playable game.
- **dependencies:** CE-CHANGE-20260910-40 / CE-CHANGE-20260911-43 / CE-CHANGE-20260911-44 / CE-CHANGE-20260911-45
- **supersededRecord:** None
- **designApproval:** Preserve exact accepted atmosphere, surroundings and outdoor camera decisions.
- **implementation:** Runtime environment adapter, accepted building copies/textures, shared grass stages, Media collision and combined aerial view. Home Base now returns to ECC welcome sign; missing edge/material/arrival review and smooth transitions explicitly reinstated. Follow-up: walkable oval and connecting grass, west/south eucalypt belt and exterior collisions implemented locally on 12 September.
- **deployment:** Local checkpoint; no public release claimed.
- **testing:** Combined desktop/mobile gameplay and stage checks saved in combined-world evidence.
- **taniaAcceptance:** Individual components accepted; combined version prepared for review.
- **evidence:** docs/production/combined-world-20260911.md
- **nextAction:** Complete recovered campus-edge/material blending and welcome/Chapel arrival composition checks, plus smooth development-stage transitions; then final combined review before release.

## CE-CHANGE-20260911-45 — Comfortable full-body outdoor walking camera

- **date:** 2026-09-11
- **domain:** World Environment / camera
- **source:** Tania: ok next please go ahead, after proposal to adjust walking camera and check movement/entrances/Studio save-return.
- **owner:** Career Empire maintainer
- **status:** Walking camera approved and banked locally
- **rationale:** Keep feet visible and outdoor framing steady through Studio approach and building returns.
- **dependencies:** CE-CHANGE-20260911-44
- **supersededRecord:** None
- **designApproval:** Tania: Yes much better, in response to walking-camera-1.
- **implementation:** Wider outdoor follow, lower aim, consistent Studio approach and corrected Chapel exit yaw.
- **deployment:** Local runtime candidate only; prior release manifest retained.
- **testing:** Desktop/mobile walking, turning, Studio save/reload and EST/Chapel returns checked in isolated browser.
- **taniaAcceptance:** Outdoor walking camera accepted.
- **evidence:** docs/production/walking-camera-20260911.md / private/production-evidence/2026-09-11/walking-camera/approval.json
- **nextAction:** Assemble approved atmosphere, surroundings and walking camera for a combined in-game review; run integrated movement, entrance, Studio save/return, EST and Chapel checks before publication.

## CE-CHANGE-20260911-44 — English and Media glass, orientation and shared grass oval

- **date:** 2026-09-11
- **domain:** World Environment / ECC buildings
- **source:** Tania supplies English and Media photographs/aerial; mural faces SPACE, both face Aussie-rules oval; added land continues stage grass; pause wider surrounds after this. Tania clarifies recognisable rather than identical; compact placement nearer admin permitted.
- **owner:** Career Empire maintainer
- **status:** Revision2 appearance approved and banked locally
- **rationale:** Make English and Media recognisable and orient it correctly to accepted SPACE.
- **dependencies:** CE-CHANGE-20260911-43
- **supersededRecord:** None
- **designApproval:** Sharper representative mural and compact Media/SPACE/admin composition accepted.
- **implementation:** Revision2: sharp distinct mural atlas faces, larger comparable SPACE/Media, compact west/southwest relationship to admin and smaller extended grass footprint.
- **deployment:** Separate local preview only; no publication.
- **testing:** Four desktop views, three stages, toggle and mobile pass; saved evidence and canonical checks.
- **taniaAcceptance:** Tania: Great! whats nexg, after current media-oval-2 preview.
- **evidence:** docs/production/media-oval-20260911.md / private/production-evidence/2026-09-11/media-oval-revision2/ / private/production-evidence/2026-09-11/media-oval-revision2/approval.json
- **nextAction:** Next bounded step: comfortable whole-body walking camera, preserving movement and entrances. Keep approved surroundings banked; final combined-world review/regressions before publication.

## CE-CHANGE-20260911-43 — Refine SPACE from supplied building photographs

- **date:** 2026-09-11
- **domain:** World Environment / ECC buildings
- **source:** Tania: try again with buildings; supplied SPACE4.jpg, Space 3.jpg and SPACE 4.jpg; clean image first then 3D. Tania subsequently corrects foyer to opposite-facing rear corner beyond grey and cream/red side wall.
- **owner:** Career Empire maintainer
- **status:** SPACE revision3 geometry accepted; banked locally
- **rationale:** Replace the overly simple SPACE silhouette with a recognisable reference-led exterior.
- **dependencies:** CE-CHANGE-20260911-42
- **supersededRecord:** None
- **designApproval:** Tania: Yes good, then requests English and Media.
- **implementation:** Revision 3 clean image reference and actual rear-facing foyer geometry; wrong left-front foyer removed.
- **deployment:** Local separate preview only; no publication.
- **testing:** Source syntax and browser checks recorded with SPACE revision2 evidence.
- **taniaAcceptance:** Accepted revision3 geometry and rear-foyer relationship.
- **evidence:** docs/production/space-revision2-20260911.md / private/production-evidence/2026-09-11/space-revision3/ / private/production-evidence/2026-09-11/media-oval/space-acceptance.json
- **nextAction:** Review the English and Media glass, painted end toward SPACE and shared oval; bank the candidate and pause wider surroundings modelling as requested. Whole-body walking camera remains pending.

## CE-CHANGE-20260911-42 — Recover ECC session and resume surroundings review

- **date:** 2026-09-11
- **domain:** Recovery / World Environment & Ecosystem
- **source:** Tania requests evidence-first disconnected-session recovery and continuation of canonical plan.
- **owner:** Career Empire maintainer
- **status:** Local recovery verified; Stage 2 preview under review
- **rationale:** Restore missing temporary worktree from saved evidence without repeating completed work.
- **dependencies:** CE-CHANGE-20260910-40 / CE-CHANGE-20260911-41
- **supersededRecord:** None
- **designApproval:** Retain exact Stage 1 approval; no Stage 2 acceptance inferred.
- **implementation:** Restored original worktree and exact approved preview; separate reference-derived surroundings study.
- **deployment:** No new game or Blueprint publication.
- **testing:** 39 local manifest hashes and public manifest match; preview browser checks tracked in recovery evidence.
- **taniaAcceptance:** Recovery and continuation requested; proposed surroundings await review.
- **evidence:** docs/production/ecc-session-recovery-20260911.md
- **nextAction:** Review Stage 2 skyline and surroundings at fixed views; preserve banked Stage 1. Whole-body walking camera remains pending for combined upgrade.

## CE-CHANGE-20260911-41 — Clear EST entry and readable briefing/source documents

- **date:** 2026-09-11
- **domain:** EST navigation / media accessibility
- **source:** Tania requests clearer EST entry, larger video and readable SCSA scrolling document sources. Follow-up explicitly requires no autoplay, wall play control, working seeking/restart and three separate CORE/TERM/VTCS documents; another task is fixing the film.
- **owner:** Blueprint maintainer / environment designer
- **status:** Live and independently verified
- **rationale:** Remove hidden entry and viewing steps and make source media readable.
- **dependencies:** CE-CHANGE-20260910-39
- **supersededRecord:** None
- **designApproval:** User requests navigation and readability correction.
- **implementation:** Clearer EST Lab film with preserved Revision 3 immediate wall Play, no autoplay, seek/restart, Back to EST video and CORE/TERM/VTCS document viewer.
- **deployment:** Published game f43672660b3191eda9b910fc98aafdfae44e3945; live runtime/document hashes and exact replacement MP4 verified. Desktop/mobile immediate Play, no autoplay, seek/restart, Back to EST video and source viewer passed.
- **testing:** All 40 live file hashes including the exact MP4 match. Public desktop/mobile immediate Play, no autoplay, seeking/restart, Back to EST video, all source documents and zoom passed. Local Blueprint tests/types/lint/builds passed; hosted CI tracked separately.
- **taniaAcceptance:** Requested fix; no final appearance acceptance inferred.
- **evidence:** docs/production/est-access-20260911.md / private/production-evidence/2026-09-11/est-access/manifest.json / private/production-evidence/2026-09-11/est-access2/manifest.json / private/production-evidence/2026-09-11/est-access3/manifest.json / docs/production/est-release-20260911.md / private/production-evidence/2026-09-11/est-release/game-live-result.json / private/production-evidence/2026-09-11/est-release/game-live-hashes.json
- **nextAction:** Review Stage 2 skyline and surroundings at fixed views; preserve banked Stage 1. Whole-body walking camera remains pending for combined upgrade.

## CE-CHANGE-20260910-40 — Five staged campus atmosphere reviews before one world release

- **date:** 2026-09-10
- **domain:** World Environment & Ecosystem / Buildings & ECC Campus
- **source:** Tania: do the campus upgrades one at a time, add real campus building references behind/around ECC, settle upgrades before one combined world/Blueprint release; then full boy/girl/changeable-clothes avatar project, Chapel Easter eggs/side quests, then serious curriculum and world-entry experiences.
- **owner:** Blueprint maintainer / environment designer
- **status:** Stage 1 approved and banked; Stage 2 review in progress
- **rationale:** Improve whole-campus atmosphere coherently before advancing to the larger avatar and experience projects.
- **dependencies:** CE-CHANGE-20260910-39
- **supersededRecord:** None
- **designApproval:** Authority to develop five successive review candidates, not acceptance of any lighting or campus variant.
- **implementation:** Stage 1: isolated lighting comparison reusing the exact current campus source. Subsequent stages: sky/horizon, edges, materials/planting, source-backed surrounding ECC buildings. Arrival composition checked throughout.
- **deployment:** No live game or public Blueprint publication during individual candidate reviews. One combined world/public Blueprint release after selections are settled.
- **testing:** Nine fixed-view lighting comparisons, three preset switches, phone layout and unchanged live-runtime hashes verified. Preview-only; no integrated gameplay or device-performance acceptance claimed.
- **taniaAcceptance:** Tania explicitly approved revision4 lighting, skies/clouds and plant growth including ECC beds on 11 September.
- **evidence:** docs/production/campus-atmosphere-upgrades-20260910.md / private/production-evidence/2026-09-10/world-atmosphere-v1/stage1/manifest.json / private/production-evidence/2026-09-11/stage-atmosphere-revision4/approval.json
- **nextAction:** Review Stage 2 skyline and surroundings at fixed views; preserve banked Stage 1. Whole-body walking camera remains pending for combined upgrade.

## CE-CHANGE-20260910-39 — ECC Chapel, arrival sign and paving, and EST wall briefing

- **date:** 2026-09-10
- **domain:** World Environment & Ecosystem / Buildings & ECC Campus
- **source:** Tania explicitly authorised interior construction and placement plus sign repair, then requested the 3D version match the accepted A Place to Pause concept as closely as possible. Tania additionally requests fixing Career Empire fence posts, removing blue entry-paver markers and placing the existing four-system EST Lab video on the wall behind the four PCs in the same upload.
- **owner:** Blueprint maintainer / environment designer
- **status:** Live and independently verified
- **rationale:** Extend the accepted ECC exterior with a peaceful, recognisable Chapel interior, retaining the actual coloured cross and tree-glass imagery; remove coplanar sign overlap.
- **dependencies:** CE-CHANGE-20260910-38
- **supersededRecord:** None
- **designApproval:** Tania explicitly authorised building and placement, then accepted the generated A Place to Pause board as the visual target: amazing please make the 3d image as close as possible to that version.
- **implementation:** Walkable ECC Chapel, corrected original-game sign/posts, cleared entry pavers and existing four-system EST Lab video on rear wall; existing campus and avatar retained
- **deployment:** Live game 04c0351df1c0a6e69a2ee69346047e381da83985; Pages deployment succeeded; exact source/media hashes and desktop/mobile live checks passed.
- **testing:** Six unit tests and 35 browser scenarios checked locally across main run/retests; live Chapel/EST playback and return, both buildings and phone layout verified. Hosted CI tracked separately.
- **taniaAcceptance:** Explicit authority to build and place interior once ready, plus fix sign.
- **evidence:** docs/production/ecc-campus-hub-specification-20260910.md / private/production-evidence/2026-09-10/chapel-v1/asset-provenance.json / public/evidence/chapel-20260910/chapel-built-desktop.png / private/production-evidence/2026-09-10/chapel-v1/game-live/hashes.json / private/production-evidence/2026-09-10/chapel-v1/game-live/checks.json
- **nextAction:** Review the live Chapel and EST briefing; separately scope any additional Chapel activities.

## CE-CHANGE-20260910-38 — ECC campus, right-hand EST Prep and original-game access

- **date:** 2026-09-10
- **domain:** World Environment & Ecosystem / Buildings & ECC Campus
- **source:** Tania: Ok great let’s go ahead with that. one complete exterior candidate in a separate preview; user accepts preview for now and explicitly requests live placement plus EST relocation into another empty building. Tania confirms: Yes first building on right please. User additionally requests Original Career Empire link and reports both outer buildings missing.
- **owner:** Blueprint maintainer / environment designer
- **status:** Published and independently verified
- **rationale:** Build one complete source-backed exterior candidate for visual and walking review.
- **dependencies:** CE-CHANGE-20260910-37 / CE-CHANGE-20260910-36
- **supersededRecord:** None
- **designApproval:** Concept visual direction accepted; explicit authority for one complete exterior candidate in a separate preview.
- **implementation:** Accepted ECC exterior integrated locally; First Workplace renamed EST Prep with new approach and return point; original-game sign/link added; complete scenery awaited before opening.
- **deployment:** Live game 9c593f62ead4834df0b74af420c82b32d18a586b; exact hashes and public gameplay checks passed.
- **testing:** Six unit tests; 30 browser tests plus corrected two-test scenery retest; live map/EST entry-return/original-game/mobile checks pass. Blueprint 73 tests and 14 local/live reader checks pass.
- **taniaAcceptance:** Exterior candidate accepted as OK for now; user requests placement in live game.
- **evidence:** docs/production/ecc-campus-hub-specification-20260910.md
- **nextAction:** Create Chapel interior concept from supplied photos before 3D interior production.

## CE-CHANGE-20260910-37 — ECC Campus Hub visual and functional specification

- **date:** 2026-09-10
- **domain:** World Environment & Ecosystem / Buildings & ECC Campus
- **source:** Tania, 10 September 2026, continuing ECC Campus Design Concept: inspect actual ECC Branding assets and combined Admin/Student Services/Chapel video, inspect live game and canonical direction, deliver visual + functional specification before modelling; use existing canonical Blueprint and checkout.
- **owner:** Blueprint maintainer / environment designer
- **status:** Specification and three concept drawings saved; design review and publication pending
- **rationale:** Make the next ECC destination recognisable through a connected hero complex and selective campus cues rather than a full campus recreation.
- **dependencies:** CE-ENV-01 / CE-CHANGE-20260910-36 / CE-CHANGE-20260910-34
- **supersededRecord:** None
- **designApproval:** User authorises specification and evidence inspection; final design and implementation remain unapproved.
- **implementation:** Source inventory, 11 image contact sheets, two timeline sheets, fresh live inspection and complete nine-part specification. No models or game files changed. Follow-up: three generated concept views (arrival, connected layout, Chapel quiet garden), using supplied original ECC logo and historical hologram as references; no 3D generation.
- **deployment:** No ECC game build or publication.
- **testing:** All 62 images and 20 video samples plus two full-size details inspected. Live arrival/aerial/EST/Studio inspected; three live source hashes match d85de992. Eighteen reader checks across nine routes at 1280/390 widths and two full specification checks passed without page overflow. All 73 Blueprint tests, TypeScript, focused lint, export consistency and production build passed. No new game regression or hosted CI claim. Concept follow-up: final three PNGs visually inspected; initial arrival draft superseded to remove invented mottos. Crest redraw/lettering and cross-view geometry remain illustrative, not final production assets.
- **taniaAcceptance:** Tania enthusiastically likes the concept appearance and asks about 3D feasibility. This accepts the visual direction in principle; no explicit modelling or publication instruction yet.
- **evidence:** docs/production/ecc-campus-hub-specification-20260910.md / private/production-evidence/2026-09-10/ecc-campus-hub/reader-checks.json / private/production-evidence/2026-09-10/ecc-campus-hub/document-checks.json / private/production-evidence/2026-09-10/ecc-campus-hub/tests-final.log
- **nextAction:** Review arrival, connected layout and Chapel garden concepts, including prominent ECC welcome, before any 3D generation.

## CE-CHANGE-20260910-36 — Landscaped campus with two existing building replacements and earlier arrival start

- **date:** 2026-09-10
- **domain:** World Environment & Ecosystem
- **source:** Tania requests whole-map paths, grass and greenery; concept first using existing assets, legacy water allocations and shade assets; future game start farther back before welcome sign. Tania now accepts the direction, authorises selection of two existing buildings facing paths, preserves town hall for future ECC, and explicitly requests live publication.
- **owner:** Blueprint maintainer
- **status:** Authorised campus update published and independently verified
- **rationale:** Agree a coherent layout from existing models before applying the broader map update.
- **dependencies:** CE-CHANGE-20260910-34 / CE-CHANGE-20260910-35
- **supersededRecord:** None
- **designApproval:** Landscape concept accepted for this pass; existing Careers Advice Centre and First Workplace selected under delegated choice. Town hall retained; no wider batch acceptance.
- **implementation:** Private whole-map scene with connected paving, lawn areas, approved instanced plants, two reused garden pergola/bench groups, existing pond/fountain and proposed clipped legacy northern water edge. Proposed spawn (-7,23.3), previously (-7,14); live game unchanged.
- **deployment:** Published to existing game main at d85de9920f23f9f18288c42eed2e86dcfc9da1b1; release manifest/source/asset hashes and actual live browser verified.
- **testing:** 31 browser tests and six unit tests passed; final doorway-offset regression passed. Actual live start, both building assets, movement, Studio save/return/reload and mobile checked. 20 live runtime/asset hashes match. Separate reported avatar gait is not changed or resolved.
- **taniaAcceptance:** Landscape direction accepted; two existing building selections and game publication explicitly authorised. Future ECC and other batch items remain separate.
- **evidence:** docs/production/map-landscape-concept-20260910.md
- **nextAction:** Tania can play the updated campus; next retain the separate gait follow-up and scope the future ECC replacement when requested.

## CE-CHANGE-20260910-35 — Playable school avatar polish and elbow repair

- **date:** 2026-09-10
- **domain:** Avatar runtime
- **source:** Tania, 10 September 2026: update the actual in-game school-uniform avatar using both supplied references; preserve identity, proportions and rig, repair elbows, verify movement and record evidence in the canonical Blueprint. Tania then approved the playable result: “Yey he is much better! Please go ahead and update to live”.
- **owner:** Game and Blueprint maintainer
- **status:** Approved avatar published and independently verified
- **rationale:** Explicit bounded avatar repair alongside environment milestone; not a wardrobe redesign.
- **dependencies:** CE-PLAN-01
- **supersededRecord:** None
- **designApproval:** Tania explicitly approved this exact locally tested avatar result on 10 September 2026.
- **implementation:** Intact user-supplied model with only two forearm rotation tracks corrected; original materials restored.
- **deployment:** Live game 78c6278ec75b53b8a312752f939dc4862a84e017; all seven runtime/asset hashes matched.
- **testing:** Six unit tests and all 30 browser tests pass (initial plus serial retry); live Studio appearance/walking, save-return, reload and mobile layout verified. Blueprint 72 tests pass.
- **taniaAcceptance:** Appearance approved; publish requested.
- **evidence:** docs/production/avatar-polish-20260910.md
- **nextAction:** Continue existing environment plan; retain approved schoolboy and paused separate wardrobe work.

## CE-CHANGE-20260910-34 — Landscape batch: nine model groups for collective review

- **date:** 2026-09-10
- **domain:** World Environment & Ecosystem
- **source:** Tania: create each of these 3d assets as a batch and ask for my approval on each one as a group.
- **owner:** Blueprint maintainer
- **status:** All nine group appearances approved; saved and checked locally; unpublished
- **rationale:** One batch preserves a coherent appearance and supports per-group decisions.
- **dependencies:** CE-CHANGE-20260910-33 / CE-ENV-01
- **supersededRecord:** None
- **designApproval:** All nine revision-1 group appearances approved. No geometry changed after review.
- **implementation:** 19 reusable components and nine GLB review groups, packed Blender source, local viewer, actual-model JPG and ZIP saved.
- **deployment:** No publication or live-game integration authorised by this request.
- **testing:** 28 GLBs pass structural/hash checks; all nine load/render in desktop viewer; 390px layout and representative models pass; no page errors. No target-device benchmark or live game integration.
- **taniaAcceptance:** Tania explicitly approved all nine reviewed revision-1 groups and their included components, with no exceptions. Yes I like all of those alot. You have my approval.
- **evidence:** docs/production/landscape-batch-20260910.md
- **nextAction:** Prepare bounded Spawn-to-Studio integration scope; live integration/publication remain separate authorisation.

## CE-CHANGE-20260910-33 — Vegetation and landscape specification for agreement

- **date:** 2026-09-10
- **domain:** World Environment & Ecosystem
- **source:** Tania requests reference-backed specification before asset selection in Update landscaping specification.
- **owner:** Blueprint maintainer
- **status:** Draft saved; agreement and reader verification pending
- **rationale:** Define environmental language before replacing assets.
- **dependencies:** CE-ENV-01
- **supersededRecord:** None
- **designApproval:** No new appearance acceptance inferred.
- **implementation:** Specification and nine-category generated JPG review sheet saved; no 3D models or runtime changes.
- **deployment:** Unpublished
- **testing:** Three original image hashes matched and images visually reviewed.
- **taniaAcceptance:** Awaiting specification agreement
- **evidence:** docs/production/landscape-specification-20260910.md
- **nextAction:** Tania reviews numbered visual categories before production scope is confirmed.

## CE-CHANGE-20260910-32 — Small continuation button and concise working handoff

- **date:** 2026-09-10
- **domain:** Blueprint workflow and reader
- **source:** Tania requests a discreet bottom-right button supplying a new-chat prompt, followed by the game developer and digital assets creator role, clarification and progressive work.
- **owner:** Blueprint maintainer
- **status:** Ready for publication; local checks passed
- **rationale:** Repeatedly typing continuity instructions is unnecessary; copy a consistent prompt without adding an automatic backend.
- **dependencies:** CE-CHANGE-20260910-31
- **supersededRecord:** None
- **designApproval:** User explicitly selected a copyable prompt instead of automatic dispatch.
- **implementation:** Global dialog with optional work request, accessible copy action, manual-copy fallback and honest last-refresh state; rolling handoff and scoped intake cleanup.
- **deployment:** Publication pending independent live verification.
- **testing:** 72 tests pass, TypeScript and focused lint pass, production build passes; desktop/mobile helper copy, fallback, optional task, Escape and overflow checks pass.
- **taniaAcceptance:** Approved helper behavior and role transition, not game or asset acceptance.
- **evidence:** docs/production/continuation-helper-20260910.md
- **nextAction:** Validate and publish the helper, then resume the environment milestone.

## CE-CHANGE-20260910-30 — One production plan, current live evidence and continuously checked workflow

- **date:** 2026-09-10
- **domain:** Production management and change propagation
- **source:** Tania, Continue Career Empire audit, 10 September 2026: requests a highly automated ongoing system, confirms the World Environment & Ecosystem front-page/sequence and deviation challenge, and says to continue. Pasted prior assistant proposals are evidence, not independent approval.
- **owner:** Blueprint maintainer
- **status:** Complete: Blueprint reconciliation published and verified
- **rationale:** A logged change and successful scan did not guarantee current reader pages. Registered-only scanning missed linked working copies; strategic phase, visible screenshot and next actions drifted separately.
- **dependencies:** CE-CHANGE-20260910-20 / CE-CHANGE-20260910-28 / CE-CHANGE-20260910-29
- **supersededRecord:** None
- **designApproval:** User requests the management sequence and explicit dependency challenges; this does not accept finished appearance, new mechanics or classroom readiness.
- **implementation:** One productionPlan drives Start Here, Delivery and Roadmap; current live screenshot replaces the obsolete front image. Monitor discovers linked worktrees, retains pending integrations and reports actual protection failures. Shared project rules challenge deviations before spending.
- **deployment:** V2.18 source 2f4e0971c84275575b142f871e5a8be570e7ba59 is live; full manifest parity and all 15 changed public files independently downloaded and hash-verified. Live desktop/mobile reader suite passes, including navigation, evidence, decisions, source protection and separate game redirect. Final metadata receipt records the subsequent exact source.
- **testing:** 72 tests, TypeScript, focused lint and both builds pass; full local and live reader browser checks pass. This is not new game/classroom acceptance.
- **taniaAcceptance:** Requested workflow and front-page correction, not blanket game or asset acceptance.
- **evidence:** docs/production/workflow-system-20260910.md / /evidence/arrival-playable-20260910/current-live-arrival.png / docs/production/audit-recovery-20260910.md
- **nextAction:** Proceed with the existing environment review/specification; preserve unpublished lighting and other approval boundaries.

## CE-CHANGE-20260909-01 — One canonical source; publication is a dated copy

- **date:** 2026-09-09
- **domain:** Authority
- **source:** README.md; data/operations.json; earlier Atlas README
- **owner:** Blueprint maintainer
- **status:** Implemented locally
- **rationale:** V2 source, public V2.6, Atlas and town brief use competing authority labels. Files cannot all own current state.
- **dependencies:** None
- **evidence:** README.md; data/operations.json; earlier Atlas README / Fresh public blueprint-records.json: V2.6; canonical baseline 1fc998adcfbb365dc469cb5708be75880f1c57c5 / Sites project_not_found in this account / All 131 handover manifest entries verified by SHA-256. Older 6 September checkout was dirty and at a different revision; it was not overwritten.
- **nextAction:** Use this Start Here dashboard; integrate/publish with the owning account and verify downloaded records.
- **supersededRecord:** REC-BLUEPRINT authority wording
- **designApproval:** Not a new design approval
- **implementation:** Documentation reconciliation
- **deployment:** Public V2.6 observed; audit update not published
- **testing:** Source/evidence inspection only
- **taniaAcceptance:** Not requested / not recorded

## CE-CHANGE-20260909-02 — EST route corrected; full learning loop remains unverified

- **date:** 2026-09-09
- **domain:** EST
- **source:** Published playable-3d/app.js inspected 2026-09-09: new URL(../modules/est-prep/index.html, import.meta.url)
- **owner:** Game integrator
- **status:** Partly verified
- **rationale:** The 8 September broken-route statement no longer describes live app.js.
- **dependencies:** None
- **evidence:** Published playable-3d/app.js inspected 2026-09-09: new URL(../modules/est-prep/index.html, import.meta.url) / Published modules/est-prep/index.html HTTP 200; app.js includes stage launch observer / Game source f2b48af; retained app.js local/live hash evidence / Published app.js SHA-256 37436168527238cf651aa9625892ba4bb04c0c301bfcaf2081c5398c7b40eb6c matches inspected local working file byte-for-byte.
- **nextAction:** Test CORE/TERM/VTCS/BOSS launch, demo and signed-in context, saved evidence and return with fictional accounts.
- **supersededRecord:** CE-EST-BRIDGE-01: public route returns 404
- **designApproval:** Not a new design approval
- **implementation:** Correct relative URL and stage launch code present
- **deployment:** Published app.js and destination inspected
- **testing:** HTTP/source checks passed; interactive and persistence tests not rerun
- **taniaAcceptance:** Not requested / not recorded

## CE-CHANGE-20260909-03 — Teacher matrix still absent from published dashboard

- **date:** 2026-09-09
- **domain:** Teacher workflow
- **source:** Megatrends dashboards/dashboard.js: buildTeacherESTPrepDataset, renderTeacherESTPrepMatrix, student_response_reviews
- **owner:** Learning-platform maintainer; Tania reviews workflow
- **status:** Release gap
- **rationale:** Local implementation cannot establish public availability or real review persistence.
- **dependencies:** None
- **evidence:** Megatrends dashboards/dashboard.js: buildTeacherESTPrepDataset, renderTeacherESTPrepMatrix, student_response_reviews / Published teacher.html and dashboard.js lack teacher-est-prep-progress-view and matrix functions, 2026-09-09 / Implement EST Prep progress view: earlier focused tests reported
- **nextAction:** Isolate the matrix changes, test fictional class permissions/save/reload and inspect-only fallbacks, then deliberately release.
- **supersededRecord:** None
- **designApproval:** Not a new design approval
- **implementation:** Present in local Megatrends
- **deployment:** Not present in inspected public dashboard
- **testing:** Prior test reports retained; persistence not rerun
- **taniaAcceptance:** Not requested / not recorded

## CE-CHANGE-20260909-04 — Blazer test accepted as a first pass; pause retained

- **date:** 2026-09-09
- **domain:** Avatar
- **source:** Inspect blazer-only GLB asset, 01a08500-39e1-7792-ae84-d54939d09264: “No jacket is weird. But for a first pass it is fine.”; “great! send to live and lets leave it for a while”
- **owner:** Avatar integrator
- **status:** Prototype paused
- **rationale:** Acceptance of a limited demonstration does not certify reversible clothing or a complete body.
- **dependencies:** None
- **evidence:** Inspect blazer-only GLB asset, 01a08500-39e1-7792-ae84-d54939d09264: “No jacket is weird. But for a first pass it is fine.”; “great! send to live and lets leave it for a while” / Published app.js / characters.js include jackettest and jacket visibility controls / dressing-test-comparison.jpg; jacket-repair-comparison.jpg; repaired-walking-preview.gif / Published characters.js SHA-256 d90795d81c456e9f41e2cf7762cd8d0b522f4adf73f1485552eeb08f00afd687 matches inspected local working file byte-for-byte; this does not verify all assets.
- **nextAction:** Leave the demonstration in place. On authorised resumption, address missing torso/upper arms and sleeve deformation before claiming a complete wardrobe.
- **supersededRecord:** CE-ART-01 immediate work priority only; approved component requirement retained
- **designApproval:** Shared-skeleton clothing-swap direction; limited test integration authorised
- **implementation:** Jacket on/off proof with remaining body and sleeve limitations
- **deployment:** Published source confirms test path; binary/runtime not re-tested here
- **testing:** Earlier movement/Studio tests reported; broader scenery failures reported
- **taniaAcceptance:** First-pass limitation accepted; instruction to leave it for a while, not final wardrobe acceptance

## CE-CHANGE-20260909-05 — ECC campus plus career corridor; one precinct first

- **date:** 2026-09-09
- **domain:** Visual production
- **source:** Refine Career Empire Blender master, 01a0808f-c02e-7a40-af94-7538beb5ab57: 9 September user list and “Yes great thats good we are on the same page. go ahead”
- **owner:** Environment integrator; Tania: finished precinct review
- **status:** Approved direction / unfinished production
- **rationale:** The later visual direction and six-step sequence refine older civic references without approving a generic city or more hero buildings.
- **dependencies:** Stable approved concept pack / Named school device and measured acceptance budget
- **evidence:** Refine Career Empire Blender master, 01a0808f-c02e-7a40-af94-7538beb5ab57: 9 September user list and “Yes great thats good we are on the same page. go ahead” / Career-Empire-Visual-Bible.md and Town Rebuild Brief, revised 9 September / Game b2e4c88 / 3c9f1e7; current studio GLB and coordinate layout are prototypes
- **nextAction:** Resume candidate layout/approach study → modular textured kit → Studio → assembled precinct → visual/performance review → deliberate release.
- **supersededRecord:** CE-ENV-01 latest Home Base/asset-selection priority; older civic imagery as sole visual target
- **designApproval:** ECC Career Campus + Campus-to-Career Corridor; Avatar Studio precinct first
- **implementation:** Technical Studio asset and layout sketch; modular kit/finished precinct unfinished
- **deployment:** Earlier Studio prototype reported live; finished precinct not released
- **testing:** No finished-precinct visual or school-device validation
- **taniaAcceptance:** Direction/production order accepted; finished precinct not accepted

## CE-CHANGE-20260909-06 — RPG terminology remains an authority conflict

- **date:** 2026-09-09
- **domain:** Design
- **source:** data/blueprint.ts V2-D13
- **owner:** Tania: any design change
- **status:** Open
- **rationale:** Town brief calls the product an RPG while V2-D13 explicitly retains career/life simulation, not RPG. Visual approval is not a terminology or mechanics change.
- **dependencies:** V2-D13
- **evidence:** data/blueprint.ts V2-D13 / Town Rebuild Brief §1 career-life RPG
- **nextAction:** Use career/life simulation in canonical current prose; ask Tania only if a genre/mechanics change is proposed. Add a superseding decision if she changes it.
- **supersededRecord:** None
- **designApproval:** Not a new design approval
- **implementation:** Documentation reconciliation
- **deployment:** Not applicable
- **testing:** Source/evidence inspection only
- **taniaAcceptance:** Not requested / not recorded

## CE-CHANGE-20260909-07 — Curriculum baseline and delivery cohort need reconciliation

- **date:** 2026-09-09
- **domain:** Curriculum
- **source:** data/blueprint.ts syllabusUrl/sourceDocuments; data/curriculum.json
- **owner:** Tania: curriculum owner
- **status:** Open
- **rationale:** Atlas is 2026; V2 uses 2027 alongside 2026 school documents and sample timing. Both official editions exist; latest does not identify the intended cohort.
- **dependencies:** Official edition and annual EST document / School program and assessment schedule
- **evidence:** data/blueprint.ts syllabusUrl/sourceDocuments; data/curriculum.json / Earlier Atlas README and experienceData.ts / SCSA course hub checked 2026-09-09: 2026 syllabus and 2027 under What is changing; 2026 EST listed
- **nextAction:** Tania confirms cohort/year; compare edition wording and annual EST selection before teaching approval. Preserve current exact IDs, details and semester boundaries.
- **supersededRecord:** None
- **designApproval:** Not a new design approval
- **implementation:** Documentation reconciliation
- **deployment:** Not applicable
- **testing:** Course hub rechecked; no full edition-difference audit or classroom validation
- **taniaAcceptance:** Not requested / not recorded

## CE-CHANGE-20260909-08 — Learning slice and whole-year journey remain proposals

- **date:** 2026-09-09
- **domain:** Learning
- **source:** data/blueprint.ts experiences/yearArc and V2-D01/02/03/15/16
- **owner:** Tania with learning designer
- **status:** Open
- **rationale:** A working world and many mapped points do not prove a coherent taught year. First learning slice, timing and thresholds remain unapproved.
- **dependencies:** CE-CHANGE-20260909-07
- **evidence:** data/blueprint.ts experiences/yearArc and V2-D01/02/03/15/16 / data/operations.json pilot: Not approved for build / docs/conversation-audit-2026-09-06.md A01–A06/A11–A13
- **nextAction:** Choose one complete experience, required/optional time, access/catch-up, evidence, teacher rubric and separate engagement/learning thresholds; preserve Units 3/4 in their semesters.
- **supersededRecord:** None
- **designApproval:** Experience-first purpose approved; example remains proposed
- **implementation:** Documentation reconciliation
- **deployment:** Not applicable
- **testing:** Source/evidence inspection only
- **taniaAcceptance:** Not requested / not recorded

## CE-CHANGE-20260909-09 — Economy and progression principles are not final rules

- **date:** 2026-09-09
- **domain:** Economy
- **source:** V2-D04/05/06/11/13/14; legacyTracks and ideaRegister
- **owner:** Tania: rules; platform maintainer: integrity
- **status:** Open
- **rationale:** Tax-funded class growth is approved; stage previews, historic 10% and later chapter/economy lists do not settle balances, triggers or wellbeing scores.
- **dependencies:** CE-CHANGE-20260909-08
- **evidence:** V2-D04/05/06/11/13/14; legacyTracks and ideaRegister / Game economy-ledger-standard.md; Town Rebuild Brief §§3,12,13 / Current phase selector: Disrepair/Growth/Flourishing
- **nextAction:** For the selected pilot define earnings/tax/spend authority, idempotent reward event, treasury/stage interaction, absence and recovery. Keep class presence future; rankings/trading not approved.
- **supersededRecord:** None
- **designApproval:** Not a new design approval
- **implementation:** Existing module ledger and manual visual phases; integrated earned town progression not established
- **deployment:** Not applicable
- **testing:** Source/evidence inspection only
- **taniaAcceptance:** Not requested / not recorded

## CE-CHANGE-20260909-10 — Retain Three.js/Rapier and existing learning services

- **date:** 2026-09-09
- **domain:** Architecture
- **source:** Game playable-3d README/app.js/profiles.js
- **owner:** Game and learning-platform maintainers
- **status:** Integration pending
- **rationale:** Asset production, browser world, school identity, evidence, review and rewards are distinct systems. Old platform proposals do not authorise replacement.
- **dependencies:** CE-CHANGE-20260909-02 / CE-CHANGE-20260909-03
- **evidence:** Game playable-3d README/app.js/profiles.js / Game auth-and-user-management.md, database-schema.md, permissions-map.md / Megatrends response-moderation and economy-ledger services
- **nextAction:** Specify and test student/class identity, profile ownership, session bridging, evidence/review permissions, reward duplication and resume. Source backup is not a tested database restore.
- **supersededRecord:** None
- **designApproval:** Not a new design approval
- **implementation:** 3D local profiles and existing HTML/service platform; complete integration unverified
- **deployment:** Not applicable
- **testing:** Source/evidence inspection only
- **taniaAcceptance:** Not requested / not recorded

## CE-CHANGE-20260909-11 — Failed pipelines and earlier vetoes stay visible

- **date:** 2026-09-09
- **domain:** Production learning
- **source:** V2-D08/09/10/12/13/15/17; PROD-20260908-01–04
- **owner:** All implementers
- **status:** Retained
- **rationale:** Export success, image approval and animation presence repeatedly overstated production readiness. Preserve failures to prevent repetition.
- **dependencies:** None
- **evidence:** V2-D08/09/10/12/13/15/17; PROD-20260908-01–04 / 8 September current-state history: both shirt runs FAIL; whole-world export not approved / Blazer conversation: independent walking jacket curls like legs; shared skeleton retained
- **nextAction:** Reuse actual masters/materials; keep garment and environment pipelines separate. Fit and render in actual runtime; do not buy/generate replacements without a named capped approval.
- **supersededRecord:** None
- **designApproval:** Existing vetoes and four production approvals preserved
- **implementation:** Documentation reconciliation
- **deployment:** Not applicable
- **testing:** Historical failure evidence retained, not rerun
- **taniaAcceptance:** Not requested / not recorded

## CE-CHANGE-20260909-12 — Dashboard, living registers and mandatory session close

- **date:** 2026-09-09
- **domain:** Governance
- **source:** Tania current production-strategy audit request
- **owner:** Blueprint maintainer
- **status:** Implemented locally
- **rationale:** A reliable entry point and enforced record completeness address stale summaries; instructions alone cannot guarantee other accounts or unattended synchronization.
- **dependencies:** None
- **evidence:** Tania current production-strategy audit request / V2-D07; original Blueprint AGENTS.md
- **nextAction:** Run records and checks, carry the exact patch to the owning account, reconcile remote head and publish; verify public parity and record Tania acceptance separately.
- **supersededRecord:** None
- **designApproval:** Documentation/update-system implementation requested
- **implementation:** Documentation reconciliation
- **deployment:** Blocked: existing Sites project unavailable to this account
- **testing:** See session close validation record
- **taniaAcceptance:** Requested work; final acceptance pending

## CE-CHANGE-20260909-13 — Final audit validation and confirmed publication-access blocker

- **date:** 2026-09-09
- **domain:** Governance and release
- **source:** Tania continuation request and concern about the stale live Blueprint, 9 September 2026
- **owner:** Blueprint maintainer; owning-account operator for publication
- **status:** Validated locally; publication blocked
- **rationale:** All 41 resume-package outputs already matched canonical source. Final validation must distinguish a working V2.8 source from the still-live V2.6 publication; neither a package nor a successful build proves deployment.
- **dependencies:** CE-CHANGE-20260909-12 / Owning-account access to the existing Sites project
- **evidence:** /production/audit-release-check-2026-09-09.md / /evidence/strategy-release-20260909-final/blueprint-v24-start-desktop.png / /evidence/strategy-release-20260909-final/blueprint-v24-start-mobile.png
- **nextAction:** Restore access, inspect remote HEAD and existing audience, reconcile the newer canonical source, validate, push/save/deploy once, and compare the live public-record hash. Do not create a replacement Blueprint.
- **supersededRecord:** None
- **designApproval:** Audit continuation authorised; no gameplay or asset-production approval added
- **implementation:** Reviewed audit diff, corrected outdated browser selectors, added V2.8 status/register/export/private-path checks and failure diagnostics; updated continuation records and handoff
- **deployment:** Not performed: HTTP 404 NOT_FOUND / project_not_found at Sites get_site; no source push or saved version
- **testing:** 28/28 data tests, TypeScript, focused lint and production build pass. Full production-preview browser suite passes at 320/390/768/1024/1280 widths; no page errors or document overflow. See release check for limitations.
- **taniaAcceptance:** Continuation requested; final audit, classroom and visual acceptance remain pending

## CE-CHANGE-20260909-14 — GitHub tracking inventory and outdated planning authority

- **date:** 2026-09-09
- **domain:** Governance and audit scope
- **source:** Tania asked about GitHub jobs/lists and possible md/mdb files after interrupting migration scaffolding
- **owner:** Blueprint maintainer; Tania decides tracking workflow
- **status:** Read-only inventory complete within access; Projects board gap explicit
- **rationale:** Recent code/automation does not mean old issue lists or planning prose are current. The original audit did not include a complete GitHub Issues/Projects inventory.
- **dependencies:** CE-CHANGE-20260909-13 / read:project permission for board inventory
- **evidence:** /production/github-tracking-audit-2026-09-09.md / https://github.com/taniab1975/GTCEM-Career-Empire/issues/20 / https://github.com/taniab1975/GTCEM-Career-Empire/commits/main/docs/project-memory.md
- **nextAction:** Keep Blueprint authority; reconcile nine open legacy issues against current decisions before linking active tickets. Add historical pointers to old plans only in a separately authorised repository update. Resume interrupted hosting migration without assuming its new scaffold is validated.
- **supersededRecord:** None
- **designApproval:** No design approval changed; linked-issue workflow is a recommendation
- **implementation:** Recorded issue/document/job dates, concrete outdated guidance and board-access limitation; no remote tracker mutations
- **deployment:** No new publication; preceding GitHub migration remains unfinished
- **testing:** Read-only GitHub API inspection and document comparison; no new runtime or classroom test claim
- **taniaAcceptance:** Advice requested; tracking workflow decision pending

## CE-CHANGE-20260909-15 — GitHub publication and linked execution tracking authorised

- **date:** 2026-09-09
- **domain:** Publication and governance
- **source:** Tania requested GitHub hosting and later accepted the Blueprint-authority/linked-issue recommendation, 9 September 2026
- **owner:** Blueprint maintainer; Tania retains design acceptance
- **status:** Authorised; implementation in progress
- **rationale:** Multiple ChatGPT accounts and Sites credit/access limits prevent reliable publication. One public GitHub delivery copy with private canonical source removes that dependency; old tasks must not compete with the Blueprint.
- **dependencies:** CE-CHANGE-20260909-14 / Reviewed static output and GitHub Pages access
- **evidence:** /production/github-migration-2026-09-09.md / /production/github-tracking-audit-2026-09-09.md
- **nextAction:** Validate and publish public-only static output, record live hashes, link historical tasks to current Blueprint decisions, and retain the old-site redirect as blocked until account access returns.
- **supersededRecord:** None
- **designApproval:** Hosting migration and single-authority linked-task workflow approved; no gameplay change
- **implementation:** Static adapter reuses existing React views and canonical JSON; private recovery/public build separation; legacy task triage
- **deployment:** Pending validation and GitHub publication; no old-site redirect yet
- **testing:** Data, static path, TypeScript, builds and desktop/mobile/live checks required before completion
- **taniaAcceptance:** Explicit approval to carry on with recommendation; final visual/classroom acceptance remains separate

## CE-CHANGE-20260909-16 — GitHub Blueprint published and legacy tracking reconciled

- **date:** 2026-09-09
- **domain:** Publication, recovery and governance
- **source:** Tania authorised GitHub migration, later redirect and the single-Blueprint/linked-ticket recommendation; direct GitHub deployment and browser observations
- **owner:** Blueprint maintainer; Tania retains design and classroom acceptance
- **status:** GitHub migration complete; legacy redirect and Projects inspection remain access-blocked
- **rationale:** The audited plan must be viewable without ChatGPT account/credit dependencies, while retaining private recovery and avoiding competing old task lists.
- **dependencies:** CE-CHANGE-20260909-15 / Owning Sites account for legacy redirect; read:project permission for optional board inspection
- **evidence:** /production/github-migration-2026-09-09.md / /production/github-tracking-audit-2026-09-09.md / https://taniab1975.github.io/career-empire-blueprint/publication-manifest.json / https://github.com/taniab1975/career-empire-blueprint/commit/e3e067fd844b18a5a7959e24dfaf2acf8099577d
- **nextAction:** Maintain this canonical source and linked tickets; prioritise teacher/EST verification and cohort/learning decisions. Redirect the old host only after exact project access returns. No new game or asset production in this task.
- **supersededRecord:** CE-CHANGE-20260909-15
- **designApproval:** Hosting and tracking workflow authorised; all 17 V2 decisions and four production approvals preserved, including existing Open/Proposed statuses
- **implementation:** Static adapter reuses Blueprint views/records; public-only allowlist/hash manifest; nine issue reconciliation comments; preserving notices in ten historical planning documents across both game repositories
- **deployment:** Existing private recovery branch updated; new public delivery repository and Pages live at the canonical destination. First verified public commit e3e067fd844b18a5a7959e24dfaf2acf8099577d; later release identity is in its generated manifest. Old Sites unchanged.
- **testing:** 30/30 data/governance/path tests; TypeScript, focused lint, original and static builds; full local/static and live desktop/mobile/keyboard/navigation/privacy smoke passed. First live JSON SHA-256 fb4d2bd685df40de3bdec5b72a2f7404df73062d29dbb5e42eb5e17bbb804953. No classroom integration or game runtime acceptance inferred.
- **taniaAcceptance:** Explicit approval to carry on with migration and linked tracking; final design, asset, learning and classroom acceptance not claimed

## CE-CHANGE-20260910-17 — Require change-to-Blueprint impact coverage for every workflow

- **date:** 2026-09-10
- **domain:** All change workflows
- **source:** Tania: changes must identify what was changed and every Blueprint update it requires, including decisions and curriculum/activity flow.
- **owner:** Blueprint maintainer
- **status:** Workflow integrated and locally verified; scoped release receipt recorded separately
- **rationale:** Record/export parity did not prove semantic integration; an approval entry could coexist with outdated page content.
- **dependencies:** CE-CHANGE-20260909-16
- **evidence:** /production/change-workflows.md / /production/change-integration.md
- **nextAction:** Publish the declared workflow scope and verify live coverage pages. For the distinct visual defect, use record 18 and recover exact selected source images before completing its targets.
- **supersededRecord:** CE-CHANGE-20260909-12
- **designApproval:** Process correction requested; protected game/learning approvals unchanged.
- **implementation:** Typed change-to-surface matrix, generated checklists, coverage board, evidence requirements and release-scope/freshness checks.
- **deployment:** Scoped V2.10 source prepared for publication; final deployed source/hash and live reader checks belong to the separate release receipt. Open visual integration is not claimed complete.
- **testing:** 41/41 data/governance/impact/path tests, TypeScript, focused lint, original/static builds and full local desktop/mobile browser smoke passed. The release gate was observed rejecting unfinished scoped work; affected workflow/gap views were visually inspected.
- **taniaAcceptance:** Tania explicitly requested all workflows be corrected; no claim that she accepted an unreconciled visual presentation.

## CE-CHANGE-20260910-18 — Reopen incomplete campus visual integration despite successful publication

- **date:** 2026-09-10
- **domain:** Visual direction, media and buildings
- **source:** Tania's 10 September report: Look and feel, Avatar Studio/buildings, aerial references, future actions and Start Here media do not reflect the agreed direction.
- **owner:** Blueprint maintainer
- **status:** Reader integration published and independently verified; product gates remain open
- **rationale:** Approval of the campus direction was recorded, but the actual reader-facing visual placements were not updated together. Earlier daytime-campus filenames inspected here depict civic concepts and are not proof of the newer references.
- **dependencies:** CE-CHANGE-20260909-05 / CE-CHANGE-20260910-17
- **evidence:** /production/change-integration.md / /production/visual-register.md / /production/current-assets.md / /production/reader-reconciliation-2026-09-10.md / /production/reader-release-receipt-2026-09-10.md
- **nextAction:** Maintain the single Blueprint and repeat actual reader verification for new changes. Prioritise the separately authorised precinct candidate, EST/teacher loop and cohort/pilot decisions; leave blazer paused.
- **supersededRecord:** None
- **designApproval:** Campus/precinct direction retained; image integration and asset completion are separate.
- **implementation:** Recovered original campus/corridor/pavilion bytes and separately registered actual Studio/avatar proof; updated current galleries, building records, Start Here, thumbnails, prompts and next actions.
- **deployment:** Existing GitHub Pages verified at public 3b7e842a4efa09d78fe50b6b283058f0df81c169 / private source 9adf1a3431c711203895f9c1d67651387c149ac5. Final close-out identity is in the current manifest.
- **testing:** 48/48 data/governance/source/phase tests; TypeScript, focused lint, both builds; full local and live desktop/mobile semantic/navigation checks passed. All six current images matched exact original hashes and rendered reader screenshots were inspected.
- **taniaAcceptance:** User rejected current presentation as representative; no visual acceptance claimed.

## CE-CHANGE-20260910-19 — Reconcile the whole reader-facing Blueprint, not only reported images

- **date:** 2026-09-10
- **domain:** All reader sections, visual/building/avatar and learning/classroom status
- **source:** Tania clarified that the first two stale images were examples and rejected the claim that everything was updated; current task 10 September.
- **owner:** Blueprint maintainer
- **status:** Reader integration published and independently verified; product gates remain open
- **rationale:** Workflow records and functioning pages did not ensure the published content matched actual decisions and built work.
- **dependencies:** CE-CHANGE-20260910-18
- **evidence:** /production/reader-reconciliation-2026-09-10.md / /production/current-assets.md / /production/reader-release-receipt-2026-09-10.md
- **nextAction:** Maintain the single Blueprint and repeat actual reader verification for new changes. Prioritise the separately authorised precinct candidate, EST/teacher loop and cohort/pilot decisions; leave blazer paused.
- **supersededRecord:** None
- **designApproval:** No new design approval; retain all 17 decisions, four production approvals and unapproved pilot.
- **implementation:** Shared current-evidence gallery, recovered exact concepts, actual built proof and place status; classroom and decision visibility corrections.
- **deployment:** Existing GitHub Pages verified at public 3b7e842a4efa09d78fe50b6b283058f0df81c169 / private source 9adf1a3431c711203895f9c1d67651387c149ac5. Final close-out identity is in the current manifest.
- **testing:** 48/48 data/governance/source/phase tests; TypeScript, focused lint, both builds; full local and live desktop/mobile semantic/navigation checks passed. All six current images matched exact original hashes and rendered reader screenshots were inspected.
- **taniaAcceptance:** User requested correction; neither final presentation nor game/classroom readiness accepted.

## CE-CHANGE-20260910-20 — Install continuous Blueprint safeguards across Career Empire projects

- **date:** 2026-09-10
- **domain:** Cross-project instructions, automatic intake, publication guards and scheduled stewardship
- **source:** Tania's current request: take over setup in Career Empire ChatGPT and Codex projects; automate checks so reconciliation is not repeatedly left to the user. Tania then clarified that her normal workflow uses desktop project folders while switching work, personal or Hotmail sign-in; browser project configuration is optional.
- **owner:** Blueprint maintainer
- **status:** Local folder safeguards installed and tested; remote publication pending
- **rationale:** A canonical repository instruction does not automatically apply to unrelated project folders or cloud chats. Local hooks and scheduled intake reduce silent divergence, but cannot read inaccessible accounts or replace semantic review.
- **dependencies:** CE-CHANGE-20260910-17 / CE-CHANGE-20260910-19
- **evidence:** /production/project-work-contract.md / /production/project-automation-setup-2026-09-10.md
- **nextAction:** Use the same registered Career Empire desktop folders across sign-ins. Verify folder access and scheduled-task availability after switching accounts; obtain explicit scoped commit/publication authority, activate remote checks where configured, and independently verify the Blueprint release.
- **supersededRecord:** None
- **designApproval:** User authorises workflow setup only; protected product decisions and production pause boundaries unchanged.
- **implementation:** Shared extensive contract, exact published-source receipt guard and private idempotent intake scanner installed. Four working repositories have active pre-push hooks; the canonical Blueprint retains its own release gate. Daily stewardship is active.
- **deployment:** Local setup only at this checkpoint. Public V2.11 is unchanged. CI definitions are not proof of active remote enforcement.
- **testing:** 56/56 data/governance/source/guard tests, type check, focused lint and normal build passed. Repeated scans detect no duplicate changes in unchanged projects. The installed guard rejected unreviewed file versions; Pages release correctly rejects unfinished CE-CHANGE-20260910-20.
- **taniaAcceptance:** Setup requested; no final acceptance or promise of perfect cross-account memory inferred.

## CE-CHANGE-20260910-21 — Publish current safeguards, then begin staged Avatar Studio layout

- **date:** 2026-09-10
- **domain:** Publication scope and production continuation
- **source:** Tania, 10 September 2026, current Career Empire continuation: "publication do that. remote checks not necessary. once publication done, move to step 2". Supersedes obsolete V2.8 advice and remote-CI activation as a release dependency.
- **owner:** Blueprint maintainer; environment integrator after live verification
- **status:** Publication verified; stage-one continuation authorised
- **rationale:** V2.8 advice was stale: V2.11 is already verified live. Publish the existing local safeguards with remote CI outside the required scope, then advance the existing approved precinct sequence without a one-pass world rebuild.
- **dependencies:** CE-CHANGE-20260910-20 / CE-CHANGE-20260910-19
- **evidence:** /production/v212-release-receipt-2026-09-10.md / /production/publication-and-production-2026-09-10.md
- **nextAction:** Begin dimensioned Studio layout under CE-CHANGE-20260910-22; keep staged production and blazer pause.
- **supersededRecord:** CE-CHANGE-20260910-20
- **designApproval:** Tania authorises Blueprint publication and subsequent stage-one precinct work. Remote CI/branch-protection activation is not required. Local safeguards, release checks, protected decisions and blazer pause remain.
- **implementation:** Release preparation; no new precinct work before verified publication.
- **deployment:** V2.12 verified live: source 776b2ec42e5aec4557a4b196b80119d2532f4a1b; public e92327d9c9ec5d20db79a99a648bdfd875a42bb1.
- **testing:** 57 tests, TypeScript, lint, normal/static builds and full local/live browser suites pass; exact manifest and 131 file hashes match.
- **taniaAcceptance:** Sequence and publication authorised; finished precinct, classroom and pilot acceptance remain separate.

## CE-CHANGE-20260910-22 — Begin Avatar Studio dimensioned layout study

- **date:** 2026-09-10
- **domain:** Stage-one environment layout, source reconciliation and review evidence
- **source:** Tania, 10 September 2026: after Blueprint publication, move to step 2. Approved campus/pavilion direction and staged sequence retained.
- **owner:** Environment integrator; Tania accepts layout and appearance
- **status:** Stage one underway; dimensioned study published and integrated
- **rationale:** Existing design sketch and runtime disagree on Studio position. Reconcile measured prototype, approach/collision and camera before any textured kit or whole precinct build.
- **dependencies:** CE-CHANGE-20260910-21 / CE-CHANGE-20260909-05
- **evidence:** /production/avatar-precinct-layout-stage1-2026-09-10.md / /production/v212-release-receipt-2026-09-10.md
- **nextAction:** Inspect the dimensioned candidate in the isolated workbench at cameras A–D before building the textured kit.
- **supersededRecord:** None
- **designApproval:** Campus visual direction and stepped production authorised; candidate dimensions are proposals, not accepted layout.
- **implementation:** Measured existing GLB vertices and runtime transforms; created dimensioned SVG and JSON candidate, reconciled Studio centre, fountain-start conflict and plaza-bound overrun; added the visible world-section link.
- **deployment:** Study, diagram and JSON verified live from source 7f21484d36a1d1b9d02a52809227bb8f25a35f3b / public f9b25550bfc3e2f69d2261570494397a5c6ea506. No game runtime or new precinct deployed.
- **testing:** Measured GLB/route/trigger checks and 57 Blueprint tests pass; TypeScript, focused lint and builds pass. All 135 live file hashes match; actual study link/document/diagram checked at 1280/390px. Camera/collision gameplay and school-device review remain ahead.
- **taniaAcceptance:** No stage-one candidate acceptance inferred.

## CE-CHANGE-20260910-23 — Produce the textured campus modular kit

- **date:** 2026-09-10
- **domain:** Stage-two textured environment assets and isolated engine review
- **source:** Tania, current task 10 September 2026: "yes good textured kit production please". Continue from the published dimensioned Studio study and approved campus/pavilion references. Discussion CE-DISCUSSION-b27fa486-fcec-45e3-b585-53c54918b048.
- **owner:** Environment integrator; Tania accepts appearance
- **status:** Kit candidate built, published and reader integration verified; appearance review next
- **rationale:** Turn approved limestone, navy framing, timber fins, glass and paving into reusable dimensioned meshes/materials. Check the preceding layout in an isolated viewer before kit acceptance; preserve separate Studio and precinct stages.
- **dependencies:** CE-CHANGE-20260910-22
- **evidence:** /production/avatar-campus-textured-kit-2026-09-10.md
- **nextAction:** Review the limestone, navy frame, timber, glazing and paving modules in the isolated workbench. Resolve kit appearance before assembling the full Avatar Studio as Stage 3; precinct landscaping and school-device review remain later. Blazer stays paused.
- **supersededRecord:** None
- **designApproval:** Tania authorises textured kit production. This is not acceptance of the finished kit, Studio, precinct, wardrobe or classroom release.
- **implementation:** Fourteen separate UV-mapped GLBs, authored stone/timber PBR textures, reused original paving, editable Blender source, manifest and isolated Three.js assembly viewer. No live game files changed.
- **deployment:** Candidate kit and workbench verified live: source 007ebb2c69caa3230c707b0924e077e21ee2a9eb / public 3316eb9d56e5491b2e4f32b4f1c6d6587926119b. No live game runtime changed.
- **testing:** 14 GLB reimports with measured dimensions/UV/normals/glass/entry/ramp checks pass. Final textures, Blender render and local/live desktop/mobile workbench inspected. 57 Blueprint tests, TypeScript, focused lint, normal and guarded Pages builds, full local/live browser suites and all 174 public file hashes pass.
- **taniaAcceptance:** Production authorised; concrete kit appearance acceptance remains pending. Full Studio and precinct are separate later stages.

## CE-CHANGE-20260910-24 — Review complete asset items with their component parts included

- **date:** 2026-09-10
- **domain:** Asset acceptance and review workflow
- **source:** Tania: can we approve assets in groups/batches, maybe10 at a time; then clarified "batches should be items eg building and its component parts" and "i dont want to approve every wall or flower". Her earlier no cancelled the assistant inference of kit approval and Studio construction. Discussions CE-DISCUSSION-fc0f166e-7c88-4b08-864f-9f363fb801e5, CE-DISCUSSION-c90ac140-6725-4f06-9640-e00b80f612b9 and CE-DISCUSSION-9a49e452-c4f0-4d30-a147-145dce00f89c.
- **owner:** Blueprint maintainer; Tania approves whole items with their parts included
- **status:** Whole-item register published; no asset approvals recorded
- **rationale:** Approve an assembled building/asset/scene as one item. Track components underneath, covered by overall approval unless explicitly excepted. Replace the unpublished ten-loose-parts proposal. Material visual changes return for review; routine equivalent technical changes need verification rather than repeated aesthetic approval.
- **dependencies:** CE-CHANGE-20260910-23
- **evidence:** /production/asset-batch-review-2026-09-10.md
- **nextAction:** Review complete buildings/assets/scenes as whole items, up to10 items per batch. Overall approval covers their component parts unless Tania flags exceptions. The current Avatar Studio package contains14 existing parts but no complete Studio assembly; it is not ready for whole-building approval. No new construction is started by this workflow.
- **supersededRecord:** None
- **designApproval:** Approval workflow requested; no current item, individual component or Studio production approval inferred.
- **implementation:** One Avatar Studio package with14 unchanged nested kit parts; existing parts are supporting detail, not14 approval tasks. Full assembly is missing and labelled incomplete.
- **deployment:** V2.14 content publication verified at 408a1198408a827dbb9dfeb08c75f01728830235; final close-out manifest identifies subsequent metadata.
- **testing:** 60 tests, TypeScript, focused lint, normal and guarded Pages builds passed. Full local reader suite and targeted live desktop/mobile review passed. All 194 live files matched.
- **taniaAcceptance:** No item accepted. Future whole-item acceptance includes its listed unflagged parts; no separate wall/flower approvals.

## CE-CHANGE-20260910-25 — Produce Batch 1: ten complete Career World review items

- **date:** 2026-09-10
- **domain:** Whole-item asset production
- **source:** Tania corrected single-building approval: batches of 10, building was one item; then authorised ys go to identifying and producing the first 10 complete items through established stages for batch approval. Parts are included; no appearance acceptance inferred. Tania explicitly selected Use these 10 complete places; CE-DISCUSSION-1b87e6c1-d0b0-4e7b-ba6b-a8bc3e568ae7. Tania confirmed the GitHub Pages Blueprint URL during publication close-out; GPT/Sites and old Design Atlas links are historical references (CE-DISCUSSION-6678595e-a326-4aa9-80a2-374c529a0d37).
- **owner:** Blueprint maintainer; Tania reviews complete batch
- **status:** Ten complete candidates published; awaiting grouped appearance review
- **rationale:** Review ten complete items together. Do not count walls, flowers or a building component as separate review items.
- **dependencies:** CE-CHANGE-20260910-24 / CE-CHANGE-20260910-23
- **evidence:** /production/batch-01-ten-items-2026-09-10.md
- **nextAction:** Layout checks → kit assembly → surroundings → technical and visual checks → ten-item batch review.
- **supersededRecord:** None
- **designApproval:** Batch production authorised; appearance acceptance remains pending.
- **implementation:** Ten separate whole-place GLBs and parts registers; two actual export renders per item. Angular foliage revised after the first Studio quality check. Original kit exports preserved.
- **deployment:** Published to the existing GitHub Pages Blueprint. No live game runtime changed.
- **testing:** 61 tests, TypeScript, focused lint, normal and guarded builds, full local reader suite and targeted live desktop/mobile checks passed. Exact 249-file live parity verified.
- **taniaAcceptance:** Pending complete batch review.

## CE-CHANGE-20260910-26 — Assess Batch 1 against the supplied campus vision

- **date:** 2026-09-10
- **domain:** Visual alignment assessment
- **source:** Tania asks whether Batch 1 aligns with attached campus vision; CE-DISCUSSION-52b4e208-084e-4834-8be0-93aeb871b759.
- **owner:** Blueprint maintainer
- **status:** Published and verified; appearance and classroom acceptance remain separate
- **rationale:** Visual assessment, 10 September 2026: Batch 1 shares limestone, dark roofs/frames, timber and glazing with the supplied campus vision, but does not yet achieve its architecture or landscape quality. Repeated small single-storey forms, sparse planting and isolated paved pads need refinement; lighting alone is insufficient. Treat the ten items as prototypes requiring refinement, not vision-matched finished assets. This is an assistant assessment, not Tania approval or rejection. Keep grouped review of ten whole items. Recommended sequence: architecture/proportions, landscape and connected precinct, then materials/lighting and comparison. No new modelling authorised by this assessment.
- **dependencies:** CE-CHANGE-20260910-25
- **supersededRecord:** None
- **designApproval:** No new approval or rejection inferred.
- **implementation:** Direct visual comparison of supplied vision and actual final batch renders; no models changed.
- **deployment:** V2.16 published and independently verified; actual live walk and save checks passed.
- **testing:** Visual inspection performed; no new runtime behavior.
- **taniaAcceptance:** Pending.
- **evidence:** Supplied campus vision image codex-clipboard-92228b67-2c57-4566-b359-8f9d88e09164.png / Actual Batch 1 overview renders and final refined EST, Civic Hall, Workplace and Garden renders inspected.
- **nextAction:** Review the live playable area before wider production; preserve pending whole-batch and classroom acceptance.

## CE-CHANGE-20260910-27 — Playable Arrival to Studio vision demonstration

- **date:** 2026-09-10
- **domain:** Visual alignment assessment
- **source:** Tania: do what you can; wants one bit showing the vision is possible in the playable world. CE-DISCUSSION-0231dd24-c64a-40b9-ab97-2266b5d5b696. Tania: that is looking much better. Push to live? Explicit publication authorisation, not blanket asset acceptance.
- **owner:** Blueprint maintainer
- **status:** Published and verified; appearance and classroom acceptance remain separate
- **rationale:** Prioritise one playable connected precinct with existing movement, character editing and save; separate architecture, landscape and experience checks.
- **dependencies:** CE-CHANGE-20260910-26
- **supersededRecord:** None
- **designApproval:** No new approval or rejection inferred.
- **implementation:** Playable Arrival Gardens to Avatar Studio is implemented locally in game-live/playable-3d. Two-storey Studio façade, corrected stone scale, slatted shade walk, planted beds, fine-leaf trees and first-day objective reuse existing movement and character editing. Walking, Studio entry, Save & return, completion after reload and 390px layout passed in the browser; six existing unit tests and game checks passed. No public deployment or appearance acceptance. The source image remains the target, not an achieved realism claim. Start local game server on port 4210 and open /playable-3d/. Review this bounded area before further asset production. Batch 1 remains unapproved; 26 and 27 reader/publication integration remain pending.
- **deployment:** V2.16 published and independently verified; actual live walk and save checks passed.
- **testing:** Game check and 6 unit tests pass. Accelerated browser keyboard walk, Studio save/return, reload persistence and mobile no-overflow pass; no page errors.
- **taniaAcceptance:** Pending.
- **evidence:** Existing game-live/playable-3d source inspected; supplied campus vision compared.
- **nextAction:** Review the live playable area before wider production; preserve pending whole-batch and classroom acceptance.

## CE-CHANGE-20260910-28 — Correct game deployment destination

- **date:** 2026-09-10
- **domain:** Game hosting and release correction
- **source:** Tania explicitly identifies https://emmanuel-ict-support.github.io/GTCEM-Career-Empire/playable-3d/ as the live game. Existing Push to live request authorises corrected deployment; CE-DISCUSSION-d068d069-12e8-47e7-9766-463db9c348db.
- **owner:** Blueprint maintainer
- **status:** Correct actual-game deployment and Blueprint links verified
- **rationale:** Previous publication reached only the Blueprint embedded preview; calling that the live game was incorrect. Correct the actual game deployment and all current destination guidance.
- **dependencies:** CE-CHANGE-20260910-27
- **supersededRecord:** None
- **designApproval:** No new approval or rejection inferred.
- **implementation:** Scoped Arrival Gardens update applied to current actual game; obsolete Studio download removed from startup, existing modules and avatar choices preserved.
- **deployment:** Actual game https://emmanuel-ict-support.github.io/GTCEM-Career-Empire/playable-3d/ verified at content commit 0b0e9505e14fdca6bfdbee6795bf157e881c4400; exact five runtime hashes and keyboard walk/Studio save/return/reload/mobile pass. Local CI: six unit tests and 30 browser tests pass. Blueprint correction source 6830edd58ad512bf280dc0485d14ad06ab768b6c: all 271 files match, desktop/mobile links pass, and the former preview redirects to the actual game.
- **testing:** 30 browser tests, six unit tests, 61 Blueprint tests, exact runtime/publication hashes and actual live walking/save/redirect/reader checks pass.
- **taniaAcceptance:** Positive local feedback and publication authorisation, not blanket asset acceptance.
- **evidence:** GitHub Pages API confirms Emmanuel-ICT-Support/GTCEM-Career-Empire main root is live source. Clean checkout fast-forwarded to e3b7c1b; tested files will be applied only against matching base bytes.
- **nextAction:** Use the actual game URL for play and deployment; use the Blueprint separately for planning. Wider acceptance gates remain unchanged.

## CE-CHANGE-20260910-29 — Arrival ground materials and connected Studio route

- **date:** 2026-09-10
- **domain:** Environment ground and routes
- **source:** Tania, Continue Assess Upgrade Feasibility, 10 September 2026. Stage 1 only, approximately 2% remaining usage.
- **owner:** Blueprint maintainer
- **status:** Complete: Blueprint reconciliation published and verified
- **rationale:** Use existing geometry/assets to improve visible ground quality and route continuity.
- **dependencies:** CE-CHANGE-20260910-28
- **supersededRecord:** None
- **designApproval:** No new approval or rejection inferred.
- **implementation:** Ground paving is present in the published game; separate sky and lighting candidate remains unpublished.
- **deployment:** V2.18 source 2f4e0971c84275575b142f871e5a8be570e7ba59 is live; full manifest parity and all 15 changed public files independently downloaded and hash-verified. Live desktop/mobile reader suite passes, including navigation, evidence, decisions, source protection and separate game redirect. Final metadata receipt records the subsequent exact source.
- **testing:** 72 tests, TypeScript, focused lint and both builds pass; full local and live reader browser checks pass. This is not new game/classroom acceptance.
- **taniaAcceptance:** Implementation and deployment authorised; finished appearance not yet accepted.
- **evidence:** docs/production/arrival-ground-stage1-20260910.md / docs/production/audit-recovery-20260910.md
- **nextAction:** Proceed with the existing environment review/specification; preserve unpublished lighting and other approval boundaries.

## CE-CHANGE-20260910-31 — Maintain an accurate Blueprint with proportionate automation

- **date:** 2026-09-10
- **domain:** Workflow cost and tracking recovery
- **source:** Tania explicitly requests reader reconciliation, source reviews, tracking repair, validation and publication; asks for a balance of usability, currency and credit use and an assessment of an agentic Blueprint. Follow-up: Tania explicitly chooses to proceed without an agentic Blueprint; prioritise a working system and progress.
- **owner:** Blueprint maintainer
- **status:** Complete: Blueprint reconciliation published and verified
- **rationale:** Repeated full audits and historical scan noise consume attention without advancing the active work.
- **dependencies:** CE-CHANGE-20260910-29 / CE-CHANGE-20260910-30
- **supersededRecord:** None
- **designApproval:** No agentic Blueprint: explicitly deferred by Tania. Finish existing workflow and publish; preserve game and asset approval boundaries.
- **implementation:** Repair worktree coverage; use changed-file review and a compact working approach while retaining evidence and release gates.
- **deployment:** V2.18 source 2f4e0971c84275575b142f871e5a8be570e7ba59 is live; full manifest parity and all 15 changed public files independently downloaded and hash-verified. Live desktop/mobile reader suite passes, including navigation, evidence, decisions, source protection and separate game redirect. Final metadata receipt records the subsequent exact source.
- **testing:** 72 tests, TypeScript, focused lint and both builds pass; full local and live reader browser checks pass. This is not new game/classroom acceptance.
- **taniaAcceptance:** Publication and proportionate maintenance requested; no new game appearance approval.
- **evidence:** docs/production/maintenance-20260910.md
- **nextAction:** Proceed with the existing environment review/specification; preserve unpublished lighting and other approval boundaries.

## CE-CHANGE-20260924-86 — Student usability: responsive My Life, Studio, navigation and clear gameplay banner

- **date:** 2026-09-24
- **domain:** Game usability
- **source:** Tania reports stalls and visual navigation problems, supplies video, requests full review and six annotated banner/Places changes.
- **owner:** Career Empire My Life responsiveness task
- **status:** 25 September refinement published and scoped public checks passed
- **rationale:** Keep navigation responsive during slow/failed tracker delivery.
- **dependencies:** CE-CHANGE-20260924-85
- **supersededRecord:** None
- **designApproval:** User requests fix to current live My Life; existing presentation and saves preserved.
- **implementation:** My Life early navigation/Back to game; progressive Studio/retry; matching path surfaces; wall-safe camera; top banner controls and all-location Places dropdown. Tania latest request: Town and Studio in Find your place, My Life before Flourishing, one desktop row; retain phone wrapping and first-day guidance. 25 September: user requests guidance back in gameplay and original-game link in header; Places retains10 destinations.
- **deployment:** PR33 c6efeb0 and compact PR34 6f4487b deployed. Pages35974034727 success; all5 compact changed public files match testedbc76229; preceding18 files matched PR33. PR35 fa65c97 deployed through Pages36082323964;3 changed public files match c1b8a5d.
- **testing:** 77 units; final8 focused browser checks passed; earlier10 Studio/navigation/accessory/curriculum and My Life4 passed. Broader16/17 identified market menu CSS; corrected and final all-destination test passes. Screenshots reviewed at1280/854/390 and phone landscape. Compact follow-up bc76229:10 browser checks in1.4m;77 units, source checks and188 hashes/47 modules pass. Final public854/390 checks:66px single desktop row,10 places, EST, Town/Studio return, My Life tabs; zero page errors. Hosted35969643630 repeats approved hair/shoes campus-ready90000ms timeout:23 browser pass/1 fail, remaining suite stopped. 25 September source and3 browser checks pass at1280/854/390; screenshot evidence preserved. 25 September live854/390: guidance outside menu, header original link,10 destinations/EST, no overflow/page errors; screenshots inspected. Full hosted checks separate, no green-suite claim.
- **taniaAcceptance:** Student playtest feedback pending.
- **evidence:** docs/production/my-life-responsiveness-20260924.md / private/production-evidence/2026-09-24/student-usability / private/production-evidence/2026-09-25/gameplay-guidance
- **nextAction:** Tania acceptance of live gameplay guidance/header. Known hosted campus timeout and sustained student-device performance remain separate.

## CE-CHANGE-20260924-87 — WA Department Security and Privacy questionnaire audit replaces ST4S page framing

- **date:** 2026-09-24
- **domain:** Security/privacy assessment documentation
- **source:** Tania explicitly requests WA v4c questionnaire and Megan Alder email dated 17 September 2026 as governing sources; implement and publish existing page.
- **owner:** Career Empire WA readiness refresh task
- **status:** Documentation published and live verified; assessment evidence gaps remain
- **rationale:** Existing page still implies national-framework governance despite adopted WA assessment route.
- **dependencies:** CE-CHANGE-20260917-73
- **supersededRecord:** None
- **designApproval:** Existing visual style and URL retained; no new visual assets.
- **implementation:** 75 question-specific evidence positions/actions, 24 data categories, supplied partial email provenance, separate APP/IPP, de-identification, vendor/region and unresolved identity decisions.
- **deployment:** Bounded page/register update live at 3a171fd0141409af402cb9ca2a3680671994fb97
- **testing:** 18 readiness tests pass; 75 exact question-cell matches; 24 categories; identical existing CSS; local/live 1280/390 checks and four live document hashes pass. Full Blueprint validation separately blocked by concurrent record 85; monitor lock remains.
- **taniaAcceptance:** Publication authorised by current request; no school/compliance approval implied.
- **evidence:** docs/production/st4s-readiness.md / docs/production/wa-readiness-refresh-20260924.md / private/production-evidence/2026-09-24/wa-readiness-refresh
- **nextAction:** Complete actual evidence and operator/identity decisions; no formal submission authorised.

## CE-CHANGE-20260924-88 — Consolidate Blueprint learning and development integration guidance

- **date:** 2026-09-24
- **domain:** Blueprint integration and learning design
- **source:** Tania reports competing masters and overwhelm; asks for current, aligned, scalable learner experience, authenticity/transfer and curriculum compliance.
- **owner:** Blueprint integration review task
- **status:** Local integration guidance revised and scoped checks verified; whole Blueprint reconciliation remains open
- **rationale:** Older environment plan and historical national-assessment labels conflict with later dispersed learning/privacy decisions.
- **dependencies:** CE-CHANGE-20260924-87 / CE-CHANGE-20260924-82
- **supersededRecord:** None
- **designApproval:** Revision/consolidation requested; new scenario production and classroom/data approval not inferred.
- **implementation:** Existing contract becomes the integrated planning entry; source ownership, learner sequence, coverage distinctions, two flags and scale checks; existing continuation prompt updated.
- **deployment:** Local only; no whole-reader publication claim.
- **testing:** 33 targeted tests, TypeScript and scoped integration/security-impact checks pass. Generated exports match. Full governance remains blocked by pre-existing missing impact record CE-CHANGE-20260924-85; scan lock unresolved. No browser/full-public-reader claim.
- **taniaAcceptance:** Specific next activity design remains a recommendation.
- **evidence:** docs/production/project-work-contract.md / docs/production/authentic-learning-checks-20260924.md / private/production-evidence/2026-09-24/blueprint-integration-review
- **nextAction:** Review one integrated CE-EXP-V2-05 specification before expansion; retain distinct public-reader/global-reconciliation gaps.

## CE-CHANGE-20260924-89 — Career Empire LMS and Blueprint year-long teacher resource

- **date:** 2026-09-24
- **domain:** Educational purpose and Blueprint integration
- **source:** Tania clarifies curriculum is the driving force, all curriculum can be delivered through Career Empire across in-world and dedicated learning modes, existing EST likely retained; agrees to revise the Blueprint around the LMS role. Tania adds that the Blueprint will be the teacher resource for delivering the year-long program. Subsequent clarification: Blueprint is game design now, teacher resource later; preserve megatrend-driven experiences and educational rationale rather than subject-building silos.
- **owner:** Career Empire Blueprint framing task
- **status:** Local framing revision verified; public deployment separate
- **rationale:** Prior integration guidance overgeneralised world events and treated current concerns as organising principles.
- **dependencies:** CE-CHANGE-20260924-88
- **supersededRecord:** None
- **designApproval:** Agreed intended LMS role and multiple learning modes. Existing EST retention is the preferred direction, not a blanket audit of every activity.
- **implementation:** Revise purpose, scope, planning sequence, continuation prompt and reader introduction; preserve historical decisions with explicit successor clarification. Teacher delivery is the intended primary Blueprint audience; engineering and compliance history are supporting references, not the lesson entry point. Later clarification supersedes immediate teacher-primary framing; explicit stopping point saved.
- **deployment:** Local only; no game, identity, storage or reward integration implemented.
- **testing:** 33 targeted tests, TypeScript and scoped integration/security-impact checks passed. Historical baseline decisions preserved; V2-D18 adds explicit current clarification. No live-reader or complete teacher-program claim.
- **taniaAcceptance:** Current ok authorises Blueprint reframing; no complete LMS or curriculum delivery claim.
- **evidence:** docs/production/project-work-contract.md / private/production-evidence/2026-09-24/lms-framing
- **nextAction:** Stopping point after user clarification: no further redesign initiated. On resumption, reconcile one concise integrated game/learning design account with Tania; preserve experience-led contextual learning, retained EST practice and dedicated support without reverting to subject-building silos. Teacher-program authoring is a later outcome, not the current next task.

## CE-CHANGE-20260925-90 — Rough 30-week year map and nested curriculum cross-check

- **date:** 2026-09-25
- **domain:** Curriculum, journey, assessment and design planning
- **source:** Tania request in current task, 25 September 2026: broad year map and separate coverage check; planning/documentation only, no game, assets or publication. Tania clarification: 4 x 50-minute periods weekly; allow in-class assessments, days off/public holidays and other class requirements; very broad, no accounting for every minute. Follow-up: Tania says curriculum detail is critical and asks for logical flow, cross-checking and cross-linking; no permission to remove detail.
- **owner:** Codex year-map planning task; Tania reviews cohort and sequence
- **status:** Local planning complete for review; wider governance unresolved
- **rationale:** Test curriculum provision and coherent avatar sequence before detailed market pilot design.
- **dependencies:** V2-D02 / V2-D03 / V2-D18 / CE-CHANGE-20260924-89
- **evidence:** docs/production/year-map-20260925.md / docs/production/year-map-coverage-20260925.md / private/production-evidence/2026-09-25/year-map/verification.json
- **nextAction:** Review docs/production/year-map-20260925.md and year-map-coverage-20260925.md; then detailed work on the existing Sunday Markets experience as the framework pilot. Keep planning broad at 4 x 50 minutes weekly; no game, assets or publication.
- **supersededRecord:** None
- **designApproval:** User authorises rough planning; proposed weeks and cohort are not approved.
- **implementation:** Two canonical planning documents and local generated reading views; current guidance, handoff, source catalogue and next-action metadata updated. No game, assets, teacher system or student-data changes. Follow-up clarification logged in AGENTS/handoff: structural mapping and document links verified, but full bidirectional reader integration is not claimed.
- **deployment:** Explicitly out of scope.
- **testing:** Local checks: 82/82 exact parent rows, 115/115 ordered nested bullets, valid week-table references, all 30 weeks exactly once, Unit 3/4 boundary and original mappings/decisions/ledger preserved. 23 focused Blueprint tests pass; exports match. Both local document views inspected for headings/tables; not a whole-reader or mobile acceptance check. Full governance remains blocked by inherited missing impact assessment CE-CHANGE-20260924-85; scan remains blocked by existing .scan-lock. No game or publication.
- **taniaAcceptance:** Tania confirms 4 x 50-minute periods weekly and very broad scope. Proposed sequence and actual cohort await review; no completed teaching/mastery claim.

## CE-CHANGE-20260925-91 — Connected Blueprint and successor handover

- **date:** 2026-09-25
- **domain:** Blueprint continuity and reader integration
- **source:** Tania explicitly requests extensive Blueprint update on 25 September 2026 to make it hit-by-a-bus ready. Follow-up: Tania says "yep lets go ahead" provided material is retained in Reference Library/source documents, with essentials up front and useful history behind.
- **owner:** Codex continuity task; Tania owns design and school decisions
- **status:** Published; scoped verification complete
- **rationale:** Make the existing reader a usable current project handover with reciprocal curriculum and year links.
- **dependencies:** CE-CHANGE-20260925-90
- **evidence:** docs/production/continuity-20260925.md
- **nextAction:** Review the broad year proposal, then existing Sunday Markets framework pilot. Verify successor access privately.
- **supersededRecord:** None
- **designApproval:** User authorises extensive Blueprint redesign/update; no approval of proposed teaching weeks or game changes.
- **implementation:** Current Start Here, world/year, curriculum provision, reciprocal experience links, successor guide and freshness checks implemented in the existing reader. Original82 curriculum points,115 details,14 experiences and18 decisions preserved.
- **deployment:** Existing GitHub Pages release fbbc7cc verified; metadata-only closure follows. No game release.
- **testing:** 98/98 full tests, governance/export/continuity checks, TypeScript and scoped lint pass. Release-guarded418-file build passes; desktop and390px linked reader routes inspected with no console errors. Original82/115 curriculum,14 experiences and18 decisions unchanged. Monitor remains needs-attention; no global reconciliation.
- **taniaAcceptance:** Successor must be able to resume without reconstructing chats.

## Retained Atlas principles

Earlier Atlas app/atlasData.ts designPrinciples; retained with V2-D01–17 clarification and status boundaries

- Engagement is essential to learning.
- Learning is experienced, not merely tested.
- The Career Learning Cycle drives the experience.
- Agency must be genuine.
- The game builds efficacy.
- The player builds a life, not selects one fixed future.
- Choices produce visible and meaningful consequences.
- Growth changes both the learner and the world.
- Career plans are provisional and adaptability is normal.
- Success is broader than income, grades or occupational prestige.
- Failure creates learning and recovery, not humiliation or permanent exclusion.
- Every curriculum requirement is deliberately mapped and evidenced.
- Students receive repeated opportunities to improve and demonstrate achievement.
- Individual agency and collective responsibility coexist.
- Classroom usability, inclusion and accessibility are design requirements.
- The opening shows intriguing possibility, not finished abundance.
- Complexity must earn its place.
- Only approved, bounded work moves into production.
