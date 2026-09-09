# What each change must update

A change is complete only when every affected Blueprint surface represents it correctly to a reader.

Generated from data/change-workflows.json. This is a view of the canonical workflow, not another master plan.

## The same six steps for every task

1. **Define the change.** State what is being achieved, before/after, source/approval, affected record IDs and owner.
2. **Calculate its impact.** Select every applicable workflow type. Take the union of required Blueprint surfaces, plus additional affected records. Use the generated checklist.
3. **Update the reader-facing content.** Edit each affected canonical record and every current placement: text, images, posters, examples, links, status and next actions. Move superseded content to labelled history.
4. **Verify each surface.** Record specific acceptance checks and actual source/reader evidence. A reasoned checked-unchanged result is allowed; blank or generic N/A is not.
5. **Separate integration from production.** Approval, Blueprint integration, game implementation, publication and Tania acceptance are separate states. Blocked or pending surfaces keep integration incomplete.
6. **Publish the declared scope.** Only completed scoped integrations may pass the release check. Disclose remaining integrations prominently, verify live pages and log the exact release receipt.

## Always review these sections

- [Start Here](https://taniab1975.github.io/career-empire-blueprint/#overview): Purpose, current direction, status and next action must agree with the change.
- [Priorities and linked execution tasks](https://taniab1975.github.io/career-empire-blueprint/#roadmap): Update scope, owner, dependencies, blocked items, acceptance and next actions; reconcile linked issues rather than duplicate plans.
- [Material changes and history](/career-empire-blueprint/production/material-changes.md): Keep the original rationale; append what changed, why, what it supersedes and downstream impacts.
- [Workflows and handoff](/career-empire-blueprint/production/change-workflows.md): Update operating instructions, README, AGENTS.md and successor entry; explain the change-to-page consequences.
- [Generated views and downloads](/career-empire-blueprint/blueprint-records.json): Regenerate all affected public/private record, style, handoff and Markdown views; check for stale duplicates.
- [Publication verification](/career-empire-blueprint/production/github-migration-2026-09-09.md): Compare the intended source/build and live records, then inspect affected reader routes; a successful push or hash alone is insufficient.

## Change-specific updates

Use every applicable type; combine their required sections. Add any other affected record discovered during review. A decision that changes curriculum and an activity must use all three types, not whichever produces the shortest checklist.

### Decision, approval or veto

An approval can affect any domain; explicitly assess all affected domains rather than changing only the decision register.

- [Decisions and superseded rules](https://taniab1975.github.io/career-empire-blueprint/#decisions): Record exact approval, scope and date; identify every rule/claim it replaces without rewriting history.
- [Curriculum and reciprocal mappings](https://taniab1975.github.io/career-empire-blueprint/#learning): Update the source edition/cohort, Unit/semester, exact point IDs, both mapping directions and coverage gaps.
- [Activities and learning flow](https://taniab1975.github.io/career-empire-blueprint/#learning): Update trigger, hook, purpose, theory, student choice/action, feedback, evidence, recovery, prerequisites and next step.
- [Player Journey and worked example](https://taniab1975.github.io/career-empire-blueprint/#journey): Reflect the changed order in journey, worked example, entry/exit and progression; do not imply an unapproved pilot is approved.
- [Year plan and assessment](https://taniab1975.github.io/career-empire-blueprint/#year): Reconcile timing, assessment evidence, task constraints and taught versus assessed versus demonstrated coverage.
- [Teacher/classroom workflow](https://taniab1975.github.io/career-empire-blueprint/#classroom): Update teacher visibility, review/save/reload, roles, fictional-account checks and classroom acceptance.
- [World, rewards and progression](https://taniab1975.github.io/career-empire-blueprint/#world): Update consequences, access/unlocks, economy/community rules, recovery and dependent places.
- [Buildings and places](https://taniab1975.github.io/career-empire-blueprint/#world): Update each affected building's purpose, current concept, model/candidate status, approach/entrance, interactions and next production actions.
- [Avatar and wardrobe references](https://taniab1975.github.io/career-empire-blueprint/#visuals): Update selected identity/body, rig/components, appearance references and acceptance; preserve the paused blazer boundary.
- [Look and feel](https://taniab1975.github.io/career-empire-blueprint/#visuals): Show the exact selected direction images, aerial and walking views first; superseded examples belong in labelled history.
- [Visual/asset register and production brief](/career-empire-blueprint/production/visual-register.md): Record stable IDs, source hashes, current placements, source ownership, editable/export versions, approval scope and missing originals.
- [Implementation and test evidence](https://taniab1975.github.io/career-empire-blueprint/#build): Record exact source/build, actual behavior, bug/retest evidence, deployment and limits separately from design acceptance.
- [Recovery and access](https://taniab1975.github.io/career-empire-blueprint/#handover): Update exact source location, account/permissions, restore limitations and reproducible resume steps.
- [Source library, terminology and rationale](https://taniab1975.github.io/career-empire-blueprint/#source-documents): Update source links/version, research attribution, terminology conflicts and which claims are supported.
- [Start Here images and video](https://taniab1975.github.io/career-empire-blueprint/#overview): Check the actual poster, clip, thumbnail, caption and destination together; current, concept and historical must be unmistakable.

### Curriculum, cohort or assessment

Change the learning source and all places that represent its content or timing.

- [Curriculum and reciprocal mappings](https://taniab1975.github.io/career-empire-blueprint/#learning): Update the source edition/cohort, Unit/semester, exact point IDs, both mapping directions and coverage gaps.
- [Activities and learning flow](https://taniab1975.github.io/career-empire-blueprint/#learning): Update trigger, hook, purpose, theory, student choice/action, feedback, evidence, recovery, prerequisites and next step.
- [Player Journey and worked example](https://taniab1975.github.io/career-empire-blueprint/#journey): Reflect the changed order in journey, worked example, entry/exit and progression; do not imply an unapproved pilot is approved.
- [Year plan and assessment](https://taniab1975.github.io/career-empire-blueprint/#year): Reconcile timing, assessment evidence, task constraints and taught versus assessed versus demonstrated coverage.
- [Teacher/classroom workflow](https://taniab1975.github.io/career-empire-blueprint/#classroom): Update teacher visibility, review/save/reload, roles, fictional-account checks and classroom acceptance.
- [Source library, terminology and rationale](https://taniab1975.github.io/career-empire-blueprint/#source-documents): Update source links/version, research attribution, terminology conflicts and which claims are supported.
- [Decisions and superseded rules](https://taniab1975.github.io/career-empire-blueprint/#decisions): Record exact approval, scope and date; identify every rule/claim it replaces without rewriting history.

### Activity or learning-flow change

Change the student's whole experience and its evidence/teacher path, not just an activity description.

- [Activities and learning flow](https://taniab1975.github.io/career-empire-blueprint/#learning): Update trigger, hook, purpose, theory, student choice/action, feedback, evidence, recovery, prerequisites and next step.
- [Player Journey and worked example](https://taniab1975.github.io/career-empire-blueprint/#journey): Reflect the changed order in journey, worked example, entry/exit and progression; do not imply an unapproved pilot is approved.
- [Curriculum and reciprocal mappings](https://taniab1975.github.io/career-empire-blueprint/#learning): Update the source edition/cohort, Unit/semester, exact point IDs, both mapping directions and coverage gaps.
- [Year plan and assessment](https://taniab1975.github.io/career-empire-blueprint/#year): Reconcile timing, assessment evidence, task constraints and taught versus assessed versus demonstrated coverage.
- [Teacher/classroom workflow](https://taniab1975.github.io/career-empire-blueprint/#classroom): Update teacher visibility, review/save/reload, roles, fictional-account checks and classroom acceptance.
- [World, rewards and progression](https://taniab1975.github.io/career-empire-blueprint/#world): Update consequences, access/unlocks, economy/community rules, recovery and dependent places.
- [Buildings and places](https://taniab1975.github.io/career-empire-blueprint/#world): Update each affected building's purpose, current concept, model/candidate status, approach/entrance, interactions and next production actions.
- [Implementation and test evidence](https://taniab1975.github.io/career-empire-blueprint/#build): Record exact source/build, actual behavior, bug/retest evidence, deployment and limits separately from design acceptance.
- [Start Here images and video](https://taniab1975.github.io/career-empire-blueprint/#overview): Check the actual poster, clip, thumbnail, caption and destination together; current, concept and historical must be unmistakable.

### Visual direction, image or film

An accepted visual change must propagate to the gallery, building/avatar records, hero/poster and production priorities.

- [Look and feel](https://taniab1975.github.io/career-empire-blueprint/#visuals): Show the exact selected direction images, aerial and walking views first; superseded examples belong in labelled history.
- [Start Here images and video](https://taniab1975.github.io/career-empire-blueprint/#overview): Check the actual poster, clip, thumbnail, caption and destination together; current, concept and historical must be unmistakable.
- [Visual/asset register and production brief](/career-empire-blueprint/production/visual-register.md): Record stable IDs, source hashes, current placements, source ownership, editable/export versions, approval scope and missing originals.
- [Buildings and places](https://taniab1975.github.io/career-empire-blueprint/#world): Update each affected building's purpose, current concept, model/candidate status, approach/entrance, interactions and next production actions.
- [Avatar and wardrobe references](https://taniab1975.github.io/career-empire-blueprint/#visuals): Update selected identity/body, rig/components, appearance references and acceptance; preserve the paused blazer boundary.
- [World, rewards and progression](https://taniab1975.github.io/career-empire-blueprint/#world): Update consequences, access/unlocks, economy/community rules, recovery and dependent places.
- [Decisions and superseded rules](https://taniab1975.github.io/career-empire-blueprint/#decisions): Record exact approval, scope and date; identify every rule/claim it replaces without rewriting history.
- [Implementation and test evidence](https://taniab1975.github.io/career-empire-blueprint/#build): Record exact source/build, actual behavior, bug/retest evidence, deployment and limits separately from design acceptance.

### Building, layout or environment

Reconcile the place's design, visual identity, purpose, routes and production state.

- [Buildings and places](https://taniab1975.github.io/career-empire-blueprint/#world): Update each affected building's purpose, current concept, model/candidate status, approach/entrance, interactions and next production actions.
- [World, rewards and progression](https://taniab1975.github.io/career-empire-blueprint/#world): Update consequences, access/unlocks, economy/community rules, recovery and dependent places.
- [Look and feel](https://taniab1975.github.io/career-empire-blueprint/#visuals): Show the exact selected direction images, aerial and walking views first; superseded examples belong in labelled history.
- [Start Here images and video](https://taniab1975.github.io/career-empire-blueprint/#overview): Check the actual poster, clip, thumbnail, caption and destination together; current, concept and historical must be unmistakable.
- [Visual/asset register and production brief](/career-empire-blueprint/production/visual-register.md): Record stable IDs, source hashes, current placements, source ownership, editable/export versions, approval scope and missing originals.
- [Activities and learning flow](https://taniab1975.github.io/career-empire-blueprint/#learning): Update trigger, hook, purpose, theory, student choice/action, feedback, evidence, recovery, prerequisites and next step.
- [Implementation and test evidence](https://taniab1975.github.io/career-empire-blueprint/#build): Record exact source/build, actual behavior, bug/retest evidence, deployment and limits separately from design acceptance.
- [Decisions and superseded rules](https://taniab1975.github.io/career-empire-blueprint/#decisions): Record exact approval, scope and date; identify every rule/claim it replaces without rewriting history.

### Avatar, clothing or rig

Reconcile identity/wardrobe direction, appearance, components, model/testing and every current visual placement.

- [Avatar and wardrobe references](https://taniab1975.github.io/career-empire-blueprint/#visuals): Update selected identity/body, rig/components, appearance references and acceptance; preserve the paused blazer boundary.
- [Look and feel](https://taniab1975.github.io/career-empire-blueprint/#visuals): Show the exact selected direction images, aerial and walking views first; superseded examples belong in labelled history.
- [Start Here images and video](https://taniab1975.github.io/career-empire-blueprint/#overview): Check the actual poster, clip, thumbnail, caption and destination together; current, concept and historical must be unmistakable.
- [Visual/asset register and production brief](/career-empire-blueprint/production/visual-register.md): Record stable IDs, source hashes, current placements, source ownership, editable/export versions, approval scope and missing originals.
- [World, rewards and progression](https://taniab1975.github.io/career-empire-blueprint/#world): Update consequences, access/unlocks, economy/community rules, recovery and dependent places.
- [Activities and learning flow](https://taniab1975.github.io/career-empire-blueprint/#learning): Update trigger, hook, purpose, theory, student choice/action, feedback, evidence, recovery, prerequisites and next step.
- [Implementation and test evidence](https://taniab1975.github.io/career-empire-blueprint/#build): Record exact source/build, actual behavior, bug/retest evidence, deployment and limits separately from design acceptance.
- [Recovery and access](https://taniab1975.github.io/career-empire-blueprint/#handover): Update exact source location, account/permissions, restore limitations and reproducible resume steps.
- [Decisions and superseded rules](https://taniab1975.github.io/career-empire-blueprint/#decisions): Record exact approval, scope and date; identify every rule/claim it replaces without rewriting history.

### Gameplay, economy or progression

Reconcile mechanics with the experience, rewards, evidence and protected design boundaries.

- [Decisions and superseded rules](https://taniab1975.github.io/career-empire-blueprint/#decisions): Record exact approval, scope and date; identify every rule/claim it replaces without rewriting history.
- [World, rewards and progression](https://taniab1975.github.io/career-empire-blueprint/#world): Update consequences, access/unlocks, economy/community rules, recovery and dependent places.
- [Activities and learning flow](https://taniab1975.github.io/career-empire-blueprint/#learning): Update trigger, hook, purpose, theory, student choice/action, feedback, evidence, recovery, prerequisites and next step.
- [Player Journey and worked example](https://taniab1975.github.io/career-empire-blueprint/#journey): Reflect the changed order in journey, worked example, entry/exit and progression; do not imply an unapproved pilot is approved.
- [Teacher/classroom workflow](https://taniab1975.github.io/career-empire-blueprint/#classroom): Update teacher visibility, review/save/reload, roles, fictional-account checks and classroom acceptance.
- [Curriculum and reciprocal mappings](https://taniab1975.github.io/career-empire-blueprint/#learning): Update the source edition/cohort, Unit/semester, exact point IDs, both mapping directions and coverage gaps.
- [Year plan and assessment](https://taniab1975.github.io/career-empire-blueprint/#year): Reconcile timing, assessment evidence, task constraints and taught versus assessed versus demonstrated coverage.
- [Implementation and test evidence](https://taniab1975.github.io/career-empire-blueprint/#build): Record exact source/build, actual behavior, bug/retest evidence, deployment and limits separately from design acceptance.

### Implementation or bug fix

Record behavior before/after and regression proof; implementation is not approval or deployment.

- [Implementation and test evidence](https://taniab1975.github.io/career-empire-blueprint/#build): Record exact source/build, actual behavior, bug/retest evidence, deployment and limits separately from design acceptance.
- [Activities and learning flow](https://taniab1975.github.io/career-empire-blueprint/#learning): Update trigger, hook, purpose, theory, student choice/action, feedback, evidence, recovery, prerequisites and next step.
- [Teacher/classroom workflow](https://taniab1975.github.io/career-empire-blueprint/#classroom): Update teacher visibility, review/save/reload, roles, fictional-account checks and classroom acceptance.
- [Recovery and access](https://taniab1975.github.io/career-empire-blueprint/#handover): Update exact source location, account/permissions, restore limitations and reproducible resume steps.
- [Start Here images and video](https://taniab1975.github.io/career-empire-blueprint/#overview): Check the actual poster, clip, thumbnail, caption and destination together; current, concept and historical must be unmistakable.
- [Visual/asset register and production brief](/career-empire-blueprint/production/visual-register.md): Record stable IDs, source hashes, current placements, source ownership, editable/export versions, approval scope and missing originals.

### Release, hosting or recovery

Reconcile source, deployed bytes, links/access, representative images and recovery; do not use publication as a proxy for semantic currency.

- [Implementation and test evidence](https://taniab1975.github.io/career-empire-blueprint/#build): Record exact source/build, actual behavior, bug/retest evidence, deployment and limits separately from design acceptance.
- [Recovery and access](https://taniab1975.github.io/career-empire-blueprint/#handover): Update exact source location, account/permissions, restore limitations and reproducible resume steps.
- [Source library, terminology and rationale](https://taniab1975.github.io/career-empire-blueprint/#source-documents): Update source links/version, research attribution, terminology conflicts and which claims are supported.
- [Start Here images and video](https://taniab1975.github.io/career-empire-blueprint/#overview): Check the actual poster, clip, thumbnail, caption and destination together; current, concept and historical must be unmistakable.

### Research, evidence or terminology

Attach evidence to the affected claim and propagate conclusions without converting findings into unapproved decisions.

- [Source library, terminology and rationale](https://taniab1975.github.io/career-empire-blueprint/#source-documents): Update source links/version, research attribution, terminology conflicts and which claims are supported.
- [Decisions and superseded rules](https://taniab1975.github.io/career-empire-blueprint/#decisions): Record exact approval, scope and date; identify every rule/claim it replaces without rewriting history.
- [Curriculum and reciprocal mappings](https://taniab1975.github.io/career-empire-blueprint/#learning): Update the source edition/cohort, Unit/semester, exact point IDs, both mapping directions and coverage gaps.
- [Activities and learning flow](https://taniab1975.github.io/career-empire-blueprint/#learning): Update trigger, hook, purpose, theory, student choice/action, feedback, evidence, recovery, prerequisites and next step.
- [Look and feel](https://taniab1975.github.io/career-empire-blueprint/#visuals): Show the exact selected direction images, aerial and walking views first; superseded examples belong in labelled history.

### Workflow, audit or tracking

Repair the update mechanism and explicitly report inherited integration gaps instead of claiming the whole Blueprint is current.

- [Decisions and superseded rules](https://taniab1975.github.io/career-empire-blueprint/#decisions): Record exact approval, scope and date; identify every rule/claim it replaces without rewriting history.
- [Source library, terminology and rationale](https://taniab1975.github.io/career-empire-blueprint/#source-documents): Update source links/version, research attribution, terminology conflicts and which claims are supported.
- [Implementation and test evidence](https://taniab1975.github.io/career-empire-blueprint/#build): Record exact source/build, actual behavior, bug/retest evidence, deployment and limits separately from design acceptance.
- [Recovery and access](https://taniab1975.github.io/career-empire-blueprint/#handover): Update exact source location, account/permissions, restore limitations and reproducible resume steps.

## Evidence and completion

Each required surface needs a specific action or reasoned no-change result, source record IDs, owner, acceptance check and evidence. Completed changes need passed source/reader checks for every surface. Blocked or pending surfaces keep the change incomplete.

Updated means the reader-facing record and all its current placements agree with the change. Checked-unchanged requires a specific reason and actual review; it is not a shortcut for missing source. Pending/blocked requires an owner and next step. Design approval, Blueprint integration, software implementation, publication and Tania acceptance are independent.

For visuals, compare the exact reference and the actual rendered image/poster/clip, not just an HTTP success or screenshot filename. For curriculum, trace both mapping directions, activity flow, year/assessment and teacher evidence. For a decision, inspect all downstream claims and remove or label superseded current guidance.

## Release rule

The public integration board and Start Here disclose every open integration. A deliberately partial release can publish completed workflow work while a separate asset-source gap stays blocked. It must name that limited scope; it may not claim the whole Blueprint is current. The release command rejects unfinished in-scope changes and stale/missing source-review hashes. After deployment, inspect affected live routes and save a receipt without rewriting the deployed record to contain its own hash.

## Maintainer steps

1. Append the material record to data/operations.json. Generate its required checklist with npm run change:plan -- CE-CHANGE-YYYYMMDD-NN decision,curriculum,activity (select the actual types). Fill the objective, before/after, source, IDs, owner and exact actions in data/change-integrations.json.
2. Update and review each target. Record passed source/reader checks and evidence only after inspection. Preserve older records; the first 16 audit records are historical, not retroactively certified as fully integrated.
3. Name the exact integrated change IDs and limitations in the release scope. Record SHA-256 for all required source review files; the contract derives mandatory files from the affected surfaces, so omitting a file from a manual list does not bypass review. Re-review after edits.
4. Run records, tests, TypeScript, lint and builds. build:pages invokes change:release. Use the existing private-source/public-output publication protocol and inspect live affected pages. Record remaining blockers and the successor action.

These checks enforce impact coverage and evidence/freshness, not the truth of an approval or the quality of a human visual judgement. Missing originals cannot be replaced with guessed images. Unseen chats still require intake.
