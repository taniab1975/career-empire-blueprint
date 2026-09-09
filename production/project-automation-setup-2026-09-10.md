# Career Empire continuous Blueprint safeguards

**Latest instruction — 10 September 2026:** Tania authorises publication; remote CI/branch-protection activation is not required. Keep local safeguards and independently verify the live release. Then begin CE-ENV-01 at the dimensioned Avatar Studio layout stage, followed separately by kit, Studio, assembled precinct and review. The blazer stays paused. [Scope and sequence](publication-and-production-2026-09-10.md). Earlier pending-authority/remote-blocker statements below are historical checkpoints superseded by CE-CHANGE-20260910-21.

Change: CE-CHANGE-20260910-20. Owner: Blueprint maintainer. Setup requested by Tania on 10 September 2026. This is a local installation record, not a claim that all accounts or remote repositories are configured.

## What is installed

**Latest scope clarification:** Tania primarily works in the desktop project folders while changing work, personal or Hotmail sign-in. Those same registered local folders are the continuity anchor. Browser/cloud project settings are optional, not a blocker for this local workflow. The earlier cloud-access requirements below are superseded for the current scope. Rules and hooks are stored in the folders/local Git configuration; access, tool availability and the scheduled task have not been tested under every account. Blueprint publication is authorised; remote CI activation is outside required scope.

| Project | Instructions | Automatic local protection | Remote/cloud status |
|---|---|---|---|
| Canonical Blueprint | Existing AGENTS.md plus extensive shared contract | Existing build/release gate; registered change scanner | Public V2.11 remains the last verified release; this setup is not yet published |
| Career Empire Design Atlas-Chat | New AGENTS.md and full workflow; legacy Atlas is not a competing master | Active pre-push hook and exact-version coverage check | No Git remote configured; CI file prepared only |
| Career Empire - Megatrends Folder Codex | Preserving AGENTS.md addition and full workflow | Active pre-push hook and exact-version coverage check | CI file prepared; existing unrelated dirty work preserved |
| Avatar Creator- Codex chat | New AGENTS.md and full workflow | Active pre-push hook and exact-version coverage check | No Git remote or initial commit; existing assets remain unreviewed baseline |
| Existing active game source checkout | Preserving AGENTS.md addition and full workflow | Active pre-push hook and exact-version coverage check | CI file prepared; no game deployment made |
| Optional browser/cloud projects | Instruction pack prepared for future use | Not configured and not required for the current local-folder workflow | Do not create duplicates or require a browser sign-in merely to use the installed desktop folder rules |

The private project registry contains exact paths, baseline commits and roles. It is not exported publicly. Local git configuration points each participating checkout to the same canonical Blueprint; this does not alter account memory or unrelated projects.

## What runs automatically

- Installed pre-push hooks examine every outgoing non-deletion reference, not merely the currently checked-out branch. A changed file version needs explicit source binding in a completed, published Blueprint integration and a matching receipt in that outgoing commit.
- The guard independently reads the public manifest and record and checks their hash agreement. Missing network access, stale receipt, incomplete checklist, wrong project, unreviewed file or changed bytes blocks release rather than passing silently.
- A daily 09:00 local-time scheduled steward is active in this task: career-empire-blueprint-steward. It scans source changes and available task evidence, checks installed rules and hooks, and reconciles clearly authorised work into the canonical Blueprint. It does not invent decisions or start new production.
- The steward stays quiet when unchanged/non-actionable and reports meaningful discrepancies, failures, completed reconciliation or required access/decisions. It must retain a last-reported fingerprint so the initial inherited backlog does not cause repeated identical notices.
- Project instructions require the same scan at task start and close; this part depends on the agent following the loaded instructions. File scanning cannot automatically capture an inaccessible conversation.

The computer and app must be running for local scheduled work. Available account capacity, repository access and network access are prerequisites. Local hooks can be bypassed by someone controlling the checkout; server-side protection must be separately activated. No zero-risk or “never reconcile again” guarantee is made.

## Source-change intake

Run from the canonical Blueprint:

```sh
npm run projects:scan
```

Or from a participating project:

```sh
node .career-empire/check.mjs scan
node .career-empire/check.mjs intake --title "Specific discussion or work outcome" --types visual,building --source "Exact task and user approval"
node .career-empire/check.mjs check
```

The private inbox is idempotent and stores filenames/hashes, not copied file contents. It detects committed, staged, unstaged, untracked, renamed and deleted source versions and records errors. Symlinks are hashed as links, not followed into other files. The first scan preserves inherited work as unreviewed; it does not certify it.

Promote each reviewed intake to a canonical CE-CHANGE record and its change-type union checklist. Discussion intake is deliberately pending until source/approval and downstream effects are assessed. Never convert a scan into approval.

## Bind source versions only after actual page verification

The integration record must include projectChanges, keyed by the registered project ID, with each explicitly reviewed relative path mapped to its Git mode/blob identity, or null for deletion. These bindings are included in the normal exported Blueprint record. Source identities come from the scanner/snapshot, not from guessed filenames.

After the integration is complete and independently verified live, create a receipt only for those explicitly reviewed files:

```sh
node .career-empire/check.mjs receipt --change CE-CHANGE-YYYYMMDD-NN --paths-json '["relative/path.ext"]' --evidence "Exact source and desktop/mobile reader comparison"
```

The receipt command refuses files not explicitly bound in that published integration. Include .career-empire/receipts.json with the corresponding authorised source commit; the receipt file itself is excluded from its own hash coverage to avoid recursion. Later changes invalidate the old binding. Do not reuse a completed unrelated change as a blanket authorisation.

The Blueprint's own publication uses its existing ready-for-publication release gate, rather than a circular requirement that it already be published. Product source release follows the published source review. Implementation, deployment and classroom acceptance remain separately represented.

## Optional remote activation and account resume — historical procedure

CI definitions are prepared in the four working repositories under .github/workflows/blueprint-coverage.yml. They do not run remotely until committed/pushed with authorisation. Where a GitHub remote exists, inspect current server protections and make the Blueprint coverage job required only after its successful bootstrap run. Do not claim prepared workflow files are enforced branch protection. The Atlas and Avatar Creator have no configured remote; do not invent one.

For ChatGPT, open the exact existing Career Empire project in the correct account. Preserve existing project instructions and add the cloud project instruction pack. Confirm the saved text by reopening settings. Record account/workspace, project name, date and proof of the saved rule without publishing private account details. Repeat only for accounts/projects actually accessible and within scope; do not create duplicate projects.

## Verification and handoff

Focused guard tests pass 9/9, including a regression check for contradictory current-summary/footer claims. The broader suite passed 56/56 before that additional assertion; the final verification receipt records the final total. TypeScript, focused lint and the normal build passed. The installed Design Atlas guard refused all seven unreviewed setup file versions; the canonical Pages release gate refused unfinished CE-CHANGE-20260910-20 rather than treating local installation as publication.

Initial scans completed across five repositories; a repeated scan reported zero new changes in all four unchanged working repositories, with only newly edited canonical setup records detected. Initial source observations included pre-existing uncommitted/untracked work and the installation itself; counts are not a count of proven defects.

Actual local Start Here and Delivery/roadmap reader checks showed the active local safeguards and remaining cloud/remote blockers. A narrow-layout check reported an actual CSS viewport of 487px (despite requesting a 390px override), with no horizontal overflow; this is not claimed as a verified 390px run. A task screenshot was visually inspected, retaining the approved campus image and clear pending-work disclosure. During these checks, the shared production summary/footer still contained older V2.10 visual-integration wording; both were corrected in canonical operations, along with the new-versus-older teacher-matrix distinction, and a regression assertion was added. No replacement artwork was generated.

No product code, approved visual assets, curriculum, protected decisions or game deployment was changed. Publication needs independent verification. Optional cloud settings and remote CI are outside current completion scope. Review the latest verification receipt and live manifest before making stronger claims.
