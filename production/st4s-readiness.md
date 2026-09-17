# School Deployment, Security, Privacy & ST4S Readiness

Canonical workstream **CE-ST4S-01**, material change **CE-CHANGE-20260917-70**, local Blueprint **V2.21**, 17 September 2026. This extends the existing V2.8-and-later audit, change-control, session and Definition-of-Done system. It does not replace the existing production plan or its protected decisions. Current result: **NOT READY**. No school deployment, ST4S submission or approval is claimed.

The governing source is Tania's attached **Safer Technologies for Schools Supplier Guide 2026.1 v1.0**, SHA-256 `ceaba057d5f3af738cae7fc70a6a61fba5b5c0e5ce4a1cba8db4c6d8a1b9a875`. Its original and page-indexed extraction are retained in private evidence. See pp.10–11 for Readiness questions, p.24 for tier-specific minima, pp.25–110 for criteria, pp.88–89 and 109–110 for documentary evidence. Register question excerpts locate the source; the full question, conditional applicability and bold minimum response in the original table govern. Recheck the current framework before an actual submission; this task does not silently substitute another edition.

## One register, computed status

`data/st4s-readiness.json` holds 311 guide control/question locators, 13 Career Empire release controls, all 21 EV and seven AI_EV documentary evidence categories, 17 project evidence categories and the retrospective backlog. `lib/st4s-readiness.mjs` calculates the dashboard and gate results used by the reader, exported report and validation command. No editable overall readiness flag exists.

- **PASS—VERIFIED**: exact applicable requirement met with current dated, approved evidence for the reviewed service/configuration. A vendor's capability or certificate is insufficient.
- **LIKELY PASS**: plausible but proof incomplete. Blocks readiness.
- **GAP**: observed missing or unsafe control. A code finding establishes a source gap, not proof that the same configuration is live. Blocks readiness.
- **N-A**: documented, evidenced non-applicability with approval, reviewer and validation date. Excluded from PASS counts. Retired guide questions retain their locators.
- **UNVERIFIED**: configuration, applicability or evidence unknown. Blocks readiness.

Every control has an owner role, evidence IDs/location, remediation, applicability rationale and validation fields. No qualified security/privacy officer has been appointed by this task: Tania must nominate them. Evidence requires scope, source identity/hash, reviewer, approval, validation and expiry dates. Affected changes invalidate prior proof immediately; expiry also blocks readiness. Local source provenance verification does not make the product compliant. Retired-question exclusions are based on the governing source, not a product exemption. All other unresolved conditional controls, including AI, remain UNVERIFIED until scope is established.

The guide's Readiness summary uses parent C/P IDs, duplicates AI_PR3 and prints AI_5. This register retains the detailed criteria, maps AI_T5, and also preserves AI_PR2 and AI_SF6A from the detailed/minimum lists. Resolve the actual questionnaire/version at mock review; do not omit a criterion because of summary typography.

## Architecture rules

Minimise personal and sensitive data, including free-text and inferred information. Linkable pseudonyms remain personal information. Use synthetic accounts and records in development, test and evidence. Enforce hard school/tenant isolation and least privilege across database, APIs, functions, storage, exports, caches and logs. Client-supplied identity, role or school values are not an authority.

Cross-school discovery is off by default. Any justified comparison needs a separate privacy/security review, small-cohort protection and explicit participation rules. Avoid unnecessary student social/communication features; moderation is additional to access control. Student-facing AI requires recorded architecture AND security approval, privacy/safety review and applicable AI-module evidence before enablement. Asset-authoring AI and an AI-themed game mechanic do not, on their own, establish student-facing model processing.

**Never infer compliance from a vendor or product name. Verify deployed configuration, data flows, contracts/subprocessors, operational processes and evidence. Australian storage and processing must be demonstrated across every component, with access countries separately recorded.**

## Feature and change workflow

The existing `change:plan`, impact ledger, governance validator, session prompts and Definition of Done now require security/privacy screening for each new material change from record 70 onward. Earlier records remain historical and are covered by the retrospective backlog; they are not retrospectively stamped as passed.

Screen every trigger: data collection/processing; authentication; account recovery; roles/permissions; school tenancy; hosting/region; third parties/subprocessors; integrations/APIs; uploads/downloads; chat/social/discovery; analytics; AI; payments; mobile/browser permissions; retention/deletion; logging; student safety. Use yes/no/unknown, with a source-specific rationale even for no impact. Unknown triggers require investigation and block production completion.

For every change, answer all twelve questions in the register: fields/purpose/personal or sensitive classification; live/backup/log/metadata/DR/test/dev storage AND processing locations; access roles and countries; third parties/contracts; retention/deletion/export; encryption/key management; logging/auditability; auth/MFA/RBAC/recovery/session; tenant isolation; privacy/consent/safety; tier and conditional control changes; tests/evidence/docs to update. Even a no-impact answer needs source-specific reasoning. For triggered or unknown impacts, record mapped controls, evidence, tests, owner and review before implementation. Recheck after implementation against the exact candidate and deployed settings.

A feature is **not production-complete** until applicable ST4S controls, implementation checks, tests and evidence are complete and verified. Likely or unknown results cannot pass. AI additionally requires both architecture and security approval. A governance report may truthfully disclose gaps without fixing the product, but cannot be used as permission to deploy to schools. Blueprint integration completion, product completion, school approval, publication and ST4S assessment are separate states.

## Release progression

All gates require the prior gate, dated accountable exit approval, current evidence and no unresolved applicable requirements for the gate's scope. A missing gate receipt means it has not passed. School Pilot and later require all guide controls to have resolved, evidenced applicability; retired or genuinely inapplicable controls need approved N-A. This conservative project rule is additional to the guide.

| Gate | Security, privacy and evidence exit criteria |
|---|---|
| Development | Bounded product/data/threat scope, owner allocation, synthetic-only environment, field/data-flow inventory and prioritised remediation backlog; impact screening operating. |
| Vertical Slice | End-to-end synthetic authenticated student/teacher flow; default-deny and negative tenant/role tests; secure recovery; encryption verified; source-to-deployment mapping; dependency/secrets checks, draft notices, audit/lifecycle design exercised. |
| School Pilot | Actual pilot's applicable controls verified; school risk approval and required consent/notification; confirmed country/provider matrix, qualified owners, final privacy documents, incident handling, independent scan, restore/deletion/export tests and bounded participant/support plan. |
| External School Pilot | Independent penetration test with cross-school scenarios and retests; independent privacy/document review; separate school/sector approvals/contracts; verified tenant onboarding/offboarding and no default cross-school discovery. |
| ST4S Ready | All applicable controls and evidence resolved; current tier review; five independent checks complete; evidence audit and mock Readiness Check fully Ready; final authorised English documents identify organisation and company number; exact service version frozen. |
| ST4S Submitted | Ready conditions remain valid; accountable authorisation and actual dated questionnaire/submission receipt for exact version. Submission is not assessment, certification, badge permission or WA deployment approval. |

`npm run st4s:check` validates the register and reports actual computed state. `npm run st4s:gate -- "School Pilot"` exits unsuccessfully until that gate is satisfied. These are local governance checks; they are not installed as remote game protection merely by adding them to this Blueprint. Bind the gate to each actual game delivery workflow and required remote checks as remediation before school deployment. Preserve existing publication/source-review guards.

## Independent pre-submission assurance

Commission and evidence (1) current vulnerability assessment, (2) an independent qualified penetration test of application/API/auth/tenant/storage/infrastructure, (3) independent privacy and document review, (4) evidence audit, and (5) mock ST4S Readiness Check. Define written test scope, synthetic accounts, independence, service/version/configuration, findings, remediation and retest. Do not label automated unit tests or this authoring review an independent penetration test. The guide T1 requires ongoing discovery/scanning, risk-based treatment and penetration testing after major change or at least annually; Career Empire additionally requires independence before submission.

Evidence EV1–EV21 and AI_EV1/2A/2B/2C/3/4/5 are all registered, but are conditional on responses. Do not claim Career Empire holds its provider's certification: p.89 states supplier certification evidence must name the supplier and cover its service. Evidence uploads need final authorised English PDF/DOC/DOCX copies with organisation name and company number. The working register and Markdown report are planning records, not a finished submission pack.

## Supabase retrospective result and hosting assessment

Source was inspected in the existing September 12 game release-candidate checkout, with file hashes in private `inventory.json`. It defines 15 tables plus progress-field additions, teacher Supabase Auth metadata, a custom student-login path, feedback/review records and four SQL functions. The authenticated organisation list confirms the matching Career Empire Australia project in AWS ap-southeast-2 (Sydney). Actual schema deployment, storage buckets, live functions/triggers, logs, backups and administrative settings remain UNVERIFIED. No real student rows were read or changed. The private audit records exact source defects and proposed code/configuration changes; the public reader exposes only status and remediation themes.

The source review found priority gaps in student credential handling, trusted school membership, feedback isolation and default cross-school aggregation. Do not apply the supplied hardening SQL blindly: its source still needs remediation and negative tests. No code or database setting was changed by this governance task. Whether any issue exposed actual personal information is unknown; determine deployed policies and affected data through an authorised incident triage if deployment evidence warrants it. A finding alone is not a legal breach determination.

| Guide control | Required deployed proof | Current assessment |
|---|---|---|
| H1, pp.30–31 | Countries for all live data, related metadata/logs/content, backups, DR, test and development; both storage and processing. | UNVERIFIED overall. Matching project card confirms primary ap-southeast-2; other component countries and processing still need proof. |
| H2, p.31 | Countries from which supplier staff, contractors, support, administrators, development/testing personnel can access data and backups. | UNVERIFIED. Australian hosting does not establish domestic access. |
| H5, p.31 | Enforceable advance notice and actual lead time before infrastructure, hosting or personnel with unencrypted access relocate/expand to another country. | UNVERIFIED. Review full supplier chain and customer notification process. |
| H6, p.31 | Current in-scope IRAP, SOC 2 Type II or ISO27001 assessment for all infrastructure/cloud/service components. | UNVERIFIED. Provider branding or a certificate for an unrelated service is insufficient. |

An Australian Supabase primary region could form one part of H1 evidence; it cannot alone pass H1/H2/H5/H6 or establish WA school approval. Supabase describes a primary project region, while provider assurance and other components require their own scope checks. Its database backups do not include Storage objects, so recovery proof must cover these separately. These vendor documents describe capabilities, not this project's settings: [regions](https://supabase.com/docs/guides/platform/regions), [backups](https://supabase.com/docs/guides/platform/backups), [SOC 2 scope](https://supabase.com/docs/guides/security/soc-2-compliance).

For WA public schools, the published procedures require school risk assessment, catalogue/risk-report review, required notification or consent and risk treatments. They do not establish that an Australian database region alone approves a service. Obtain the current staff-only report and school-specific conditions; separately establish ECC/CEWA requirements. No automatic Department approval follows from this task or a Readiness result. Source checked 17 September 2026: [WA Students Online procedures, section 3.4](https://www.education.wa.edu.au/in/web/policies/-/students-online-in-public-schools-procedures).

## Exact access and evidence still needed

Provide authorised read-only Supabase project metadata/settings and database catalog access, or redacted exports: actual project identity/region; schema/columns/types, RLS/grants, functions/triggers/extensions/jobs/views; Auth configuration and metadata-key inventory without values; memberships/MFA; bucket settings/policies; Edge Functions/regions, SMTP/SSO/webhooks/replicas/log drains; encryption settings; backup/PITR configuration and full restore proof. Also obtain current contracts/DPA/subprocessor and support-access country statements, H5 notice terms, H6 assurance scope, retention/deletion/export evidence and school risk/consent approvals. Keep credentials and real records out of the Blueprint/public downloads.

This session had no Supabase connector, management credential environment variable or CLI project metadata. Browser inventory failed, but native Edge access recovered an authenticated organisation view and verified the matching project/primary region. The project detail view stayed on the organisation content after direct navigation and refresh, so deeper settings were not inspected. A second paused project in the same organisation uses ap-northeast-1; its relationship to Career Empire is unknown and is explicitly included in the residency audit. A browser anon key is not administrative proof. Every unavailable live item is explicitly UNVERIFIED with evidence requirements in the backlog/private inventory.

## Scope and remaining work

The 14 backlog items cover authentication, tenant trust, feedback/moderation, discovery, deployed inventory, residency/providers, auth settings, data lifecycle, browser persistence, integrations/supply chain, safety/AI, payments/permissions, operational/WA documentation and independent assurance. Exact field lists and source locations are private. Evidence and control detail views are generated from the same register; do not maintain a competing checklist.

Existing steward start scan: 12 monitored folders, five discovered working copies, two coverage failures, 198 pending intake observations and 18 pending integrations. Those inherited gaps remain visible. This change neither closes the broader historical reconciliation nor claims live Blueprint publication. No new visual assets were generated; the new dashboard is a reader component subject to the existing affected-surface checks.

### ST4S task close — 17 September 2026

Local V2.21 governance implementation is saved. Eleven ST4S tests, TypeScript, scoped lint, preservation/evidence checks and diagnostic reader compile pass; desktop dashboard/report inspected. Official test/build remains blocked by inherited Chapel schema field and prior record-68 surface coverage; broad direct tests 76 passed / 9 failed. Mobile/full reader verification remains incomplete. Exact record/evidence: private/production-evidence/2026-09-17/st4s-readiness/validation.md. Supabase primary region ap-southeast-2 is observed live; other storage/processing/access and deeper configuration remain UNVERIFIED. No game/database change, public publication, ST4S submission or compliance claim. Next: remaining read-only Supabase inventory/owner nominations and source auth/tenant remediation; keep normal release guards and prior work intact.


## Authorised Blueprint publication follow-up — 17 September 2026

CE-CHANGE-20260917-72 supersedes only the earlier local release-blocker checkpoint: typed validation now accepts the existing Chapel receipt while rejecting malformed fields; record 68 has its missing surfaces restored as pending; approval/URL fixtures retain original decisions and recognise later source history. The original release declaration and all reviews are preserved verbatim in canonical releaseHistory. Full tests and desktop/390px ST4S reader/copy checks pass; publication verification is pending. This is reporting publication only: 313 controls unresolved, no game/database change and no formal ST4S submission. Existing historical world/avatar summaries and other integration tasks are not certified current by this release.
