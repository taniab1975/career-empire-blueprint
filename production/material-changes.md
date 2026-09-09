# Material-change register — 2026-09-09

Generated from data/operations.json. One canonical register; do not edit this view directly.

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
