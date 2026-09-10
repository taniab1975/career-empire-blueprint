# Career Empire: mandatory start-to-publication contract

Policy CE-WORKFLOW-20260910, version 1. Applies to Career Empire discussion, research, planning, curriculum, activity design, code, assets, tests, releases and handovers. A chat response is not the project record. Memory, old chats and GitHub issues are evidence or execution aids, not a competing Blueprint.

## One authority, different roles

The public reader is https://taniab1975.github.io/career-empire-blueprint/. The canonical editable source is the existing production-blueprint checkout, mirrored privately in taniab1975/career-empire-private-recovery on production-consolidation-2026-09-08. Never create another Blueprint, revive the old Atlas as current authority, expose private source, or overwrite a newer checkout. Project-local instructions tell you how to locate that source. If access is missing, record a blocked intake rather than claiming an update.

## Start every task, including a new chat

Read data/operations.json productionPlan before choosing work. It supplies the current phase, bounded milestone, next/then/later, exact current visual targets and dated live evidence. Start Here, Delivery and Roadmap render that same record. A HERO asset recovery task must never replace the strategic phase. "Continue Career Empire" means continue its next approved bounded step, not invent a new priority. Before spending credits or implementing a request outside that milestone, explain the dependency/deviation and ask whether Tania intends to reprioritise or keep it in the backlog. Do not silently approve a proposed roadmap; record an explicit change of direction and propagate its effects. Curriculum constrains experience design from the outset, even though formal coverage validation is a later phase.

Run npm run projects:scan from the canonical Blueprint (or the existing project wrapper scan). This now discovers Git-linked worktrees, checks actual local guard files, and writes private/governance/state/workflow-health.json. Exit 1 means unresolved coverage or integration, not permission to skip it. Zero newly changed files does not mean the Blueprint is reconciled: inspect the persistent pendingIntake and pendingChanges queues. Fix supported changes automatically; request only genuinely missing decisions/access. Do not claim overall completion while that report is unresolved. Independent clones and inaccessible chats still require explicit connection. The scheduled steward uses the same monitor and acknowledges only the exact fingerprint actually reported.

1. Read this contract, the canonical AGENTS.md, README, current-state, operations, change workflows, change integrations and relevant protected decisions. Resolve exact source paths and revisions; inspect existing dirty work before editing. Project/worktree/account labels are not proof of source identity.
2. Run the project's change scan before substantive work. Read unresolved intake, current work queue and handover. A baseline only records what existed: it does not approve, integrate or publish old work.
3. State the requested outcome, what changes from before to after, exact user request or approval, owner, dependencies, change types and affected IDs. Use the union of every applicable change type. Do not infer approval from a tool result, assistant statement or generated image.
4. Append a canonical material record and integration checklist before implementation. For discussion-only work, record the conclusion, alternatives, unresolved questions and next action; no files changing does not mean no Blueprint impact.
5. Coordinate through the canonical records. Re-read affected files before applying a patch; preserve unrelated work. Do not let simultaneous agents overwrite shared JSON or reuse a stale release review. If another task owns an overlapping edit, record the dependency and work elsewhere.

## Every change has downstream obligations

| Change | Required content review in addition to the common checklist |
|---|---|
| Decision, approval, veto | Decision wording/status/source, superseded rationale and every affected design, learning, visual, production and delivery claim |
| Curriculum, cohort, assessment | Exact authoritative edition, reciprocal mappings, year plan, experience, assessment evidence, teacher views, sources and unresolved delivery assumptions |
| Activity or learning flow | Entry, meaningful choice, learning support, application, feedback, retry/recovery, saved evidence, return/resume, teacher review, progression and curriculum |
| Visual, film or image | Exact approved original, status, hash, caption, rights/source, all gallery placements, building/avatar records, Start Here, video/poster pair, thumbnails and production brief |
| Building, layout, environment | Place identity/purpose, approach/entrances/accessibility, map/aerial/player-height views, dependencies, current model versus target and next production action |
| Avatar, clothing, rig | Identity and wardrobe references, actual build proof, skeleton/animation compatibility, fitting defects, playable placement and pause/approval boundaries |
| Progression or economy | Mechanics, individual/community consequences, rewards, evidence, learning cycle, fairness, teacher pacing and decision status |
| Implementation or bug fix | Exact before/after behavior, changed source, regression test, actual screenshots, deployment state and affected learning/teacher/media claims |
| Research or terminology | Source/date, supported claim, conflicts, recommendations versus decisions, affected wording and unresolved questions |
| Release, recovery or hosting | Source and public identities, links, access, reviewed output, recovery limits, actual live page checks and successor entry |
| Governance, tracking or audit | Instructions, automated checks, project coverage, intake, work queue, gaps and exact enforcement/availability limits |

The authoritative machine-readable matrix is data/change-workflows.json. Always use its current version, including common Start Here, roadmap, history, protocol, exports and publication targets. Add discovered downstream impacts rather than treating the table as a maximum.

## Verify meaning, not just successful downloads

- Update the actual pages and all current placements, not only the change log. Compare each affected reader route with the original approved source on desktop and mobile.
- A generated concept is not a built asset. A built mesh is not a working rig. A code test is not classroom acceptance. A push is not a verified release. Keep proposed, approved, implemented, tested, published and accepted states separate.
- Current evidence comes first. Label superseded concepts, images, videos and plans historical; preserve their provenance without allowing them to override current direction.
- Curriculum checks must trace student action through learning, evidence, feedback and teacher review. Never silently change cohort/edition or claim candidate mappings have been taught or assessed.
- Every target needs affected IDs, an action, owner, acceptance check, evidence and a verification result. Checked-unchanged needs a source-specific reason; generic N/A and blanket checked claims are forbidden.
- Inspect images and the actual poster/clip pairing. Record source hashes, dates and current placements. Missing approved originals are a blocker, not permission to generate replacements.
- Use fictional accounts for student/teacher tests. Keep student data, credentials, private conversations and source backups out of public output.

## Close work automatically, but do not automate approval

1. Update canonical records, affected pages, current priorities, evidence, source library, handover, AGENTS.md and relevant project instructions. Run the project scan again.
2. Run relevant tests, record regeneration, type/build checks and actual reader checks. Preserve failed runs; do not replace them with an unsupported success statement.
3. Follow the release checklist and refresh exact source-review hashes after edits. Ready-for-publication means all non-publication targets pass; publication alone is pending. Complete requires independent live checks.
4. Publish only reviewed generated Blueprint output to the existing destination when authorised. Verify live record/source hashes, media bytes and affected reader routes. Keep private recovery private.
5. Bind each project's exact changed file versions to its completed canonical change record using a verification receipt. A stale receipt cannot cover later edits. Local pre-push and proposed CI checks reject uncovered versions; never bypass them merely to ship.
6. Finish with what changed, actual Blueprint pages updated, verification evidence, publication identity or precise blocker, open decisions and the next bounded action. No broad “all current” claim beyond the checked scope.

## Automation and exceptions

The scheduled steward scans registered repositories for new committed and uncommitted changes, records an idempotent intake and looks for unfinished integration. It may reconcile clearly supported, already authorised changes into the existing Blueprint and run checks. It must not fabricate acceptance, reinterpret ambiguous decisions, merge concurrent work blindly, start game/asset production, use real student data or publish private files.

The steward stays quiet when nothing actionable changed. It reports a new failure, drift, completed reconciliation or required decision, with a precise resume step. Missing access, offline sources, stale publication, removed hooks and unavailable project instructions are visible failures, not success.

Local hooks operate only where installed and can be bypassed by a person with repository control. CI enforcement is not active until the workflow is pushed and required checks are configured on the remote. Local scheduled tasks require the computer and app to be running and sufficient account capacity. ChatGPT project instructions require access to that project's account; local files do not silently edit cloud project settings.

No system guarantees that unseen conversations or inaccessible accounts never diverge. The objective is to detect and stop unsupported completion promptly, and reconcile continuously without asking Tania to rediscover stale pages.

## New-chat proof of readiness

Before claiming continuity, identify the canonical source, current release, outstanding integrations and loaded project rules. If those cannot be read, say so and create a pending handoff. Do not ask Tania to repeat known decisions that are already accessible in the canonical evidence.

## Proportionate maintenance — 10 September 2026
Tania requests a balance of usability, currency and credit use. Apply docs/production/maintenance-20260910.md: change-first inspection, scoped context and tests, reuse exact-hash evidence, batch related releases, no repeated unchanged backlog audits. Keep all actual affected-surface and publication checks. Embedded chat is not enabled or authorised as a new service.
