# Retrospective ST4S audit backlog

Generated from the existing canonical register. Source findings and live configuration verification are separate; no real student records were inspected.

## CE-RETRO-01 — Replace browser-side student authentication and weak password handling

Status: GAP. Priority: Critical. Owner: Security/privacy lead (Tania to nominate). Due gate: School Pilot.

Controls: A1, A2, A11, A13, CE-TENANT

Action: Replace client SHA-256 comparison/readable password_hash with server-side managed authentication or a narrowly scoped authenticated session broker. Use a slow salted password KDF if custom auth remains, CSPRNG credentials, rate limits and uniform login errors; revoke direct anonymous credential access. Revoke sessions on reset/deactivation.

Validation: Synthetic student A cannot read any credential hash or impersonate B by altering storage/IDs; brute-force/reset/revocation tests pass.

Access/evidence needed: Local source available; deployment and authenticated configuration remain unverified.

## CE-RETRO-02 — Make tenant membership trusted and immutable to ordinary users

Status: GAP. Priority: Critical. Owner: Security/privacy lead (Tania to nominate). Due gate: School Pilot.

Controls: S4, A13, CE-TENANT

Action: Replace school membership inferred from user-editable teachers.school_id with verified immutable auth-subject membership approved by a school administrator. Lock membership/role columns; enforce tenant-consistent foreign keys and class assignment, and eliminate prototype permissive policies.

Validation: Two synthetic schools; attempted self-reassignment, foreign student/class IDs, revoked staff, RPC and direct REST all denied.

Access/evidence needed: Local source available; deployment and authenticated configuration remain unverified.

## CE-RETRO-03 — Isolate feedback and moderation data

Status: GAP. Priority: Critical. Owner: Security/privacy lead (Tania to nominate). Due gate: School Pilot.

Controls: S4, A13, SC3, PF10D

Action: Replace feedback school IDs embedded in untrusted message JSON with server-bound non-null tenant columns. Remove null-school visibility to all authenticated teachers; unaffiliated reports go only to restricted triage. Scope reviewer roles and immutable audit logs; limit anonymous submission and sanitise inputs.

Validation: Anonymous submission cannot forge tenant identity; malformed/missing school IDs never broaden read access; raw responses visible only to authorised reviewers.

Access/evidence needed: Local source available; deployment and authenticated configuration remain unverified.

## CE-RETRO-04 — Disable default cross-school discovery and validate aggregation

Status: GAP. Priority: High. Owner: Security/privacy lead (Tania to nominate). Due gate: School Pilot.

Controls: PR14, S4, CE-TENANT

Action: Disable anonymous Global Index school/class summaries by default. Any approved cross-school comparison must remove class codes, enforce participation/role controls and minimum cohort thresholds; assess re-identification.

Validation: Unauthenticated and school-A accounts cannot enumerate school-B class codes, small cohorts or identifiable records.

Access/evidence needed: Local source available; deployment and authenticated configuration remain unverified.

## CE-RETRO-05 — Inventory and verify deployed Supabase configuration

Status: UNVERIFIED. Priority: High. Owner: Security/privacy lead (Tania to nominate). Due gate: School Pilot.

Controls: CE-LIVE, H1, H2, H5, H6, S1, S2, L1, D3

Action: Obtain read-only project metadata and catalog export; reconcile to source. Inventory all tables/fields/views/materialized views, auth metadata categories, RLS/grants, extensions, triggers/functions, buckets/policies, Edge Functions, webhooks, scheduled jobs, replicas, log drains and backups.

Validation: Signed deployment/schema comparison and component data-flow inventory; no real record dump required.

Access/evidence needed: Primary project identity and ap-southeast-2 region observed live; deeper dashboard stalled. Authenticated Supabase project metadata/region; read-only database catalogs and settings; bucket/function manifests; redacted logs; project membership and support-access attestations; backup/PITR and restore receipts.

## CE-RETRO-06 — Prove residency, support access and provider assurance

Status: UNVERIFIED. Priority: High. Owner: Security/privacy lead (Tania to nominate). Due gate: School Pilot.

Controls: H1, H2, H5, H6, CE-RESIDENCY

Action: Record live, backup, log, metadata, DR/test/dev and Edge execution countries; remote support/admin access countries; full chain of subprocessors and relocation-notice lead times. Collect current in-scope IRAP/SOC2 Type II/ISO27001 proof for every component. Where Australian-only requirements cannot be met, restrict/disable the component or obtain a school-approved compliant deployment plan before migration. A second paused project is visible in the same organisation in ap-northeast-1; establish whether it holds related historical data and any migration/deletion obligations without assuming a connection.

Validation: H1/H2 country matrix, H5 enforceable notification workflow, H6 component coverage and school-specific acceptance signed off.

Access/evidence needed: Primary project identity and ap-southeast-2 region observed live; deeper dashboard stalled. Actual project region/settings; signed current DPA/subprocessor list and support access terms; log/backups/CDN/SMTP contracts; H6 reports; school risk report and hosting conditions.

## CE-RETRO-07 — Review auth configuration, MFA and recovery

Status: UNVERIFIED. Priority: High. Owner: Security/privacy lead (Tania to nominate). Due gate: School Pilot.

Controls: A1, A2, A4, A5, A7, A10, A11, A13

Action: Verify organisation/admin MFA, invitations, trusted teacher onboarding, RBAC, email verification, password policy, reset-token expiry/single use, redirect allowlist, enumeration/rate limits and session lifetime/invalidation. Enforce server-side rather than UI-only school/email checks.

Validation: Synthetic role/recovery matrix and reviewed redacted settings export.

Access/evidence needed: Local source available; deployment and authenticated configuration remain unverified.

## CE-RETRO-08 — Define retention/deletion/export and test full restoration

Status: UNVERIFIED. Priority: High. Owner: Security/privacy lead (Tania to nominate). Due gate: School Pilot.

Controls: D1, D2, D2A, D3, D5, D5A, D6

Action: Replace login deactivation/anonymised login labels as a substitute for full deletion. Define per-category retention and school-record obligations; cover Auth, responses/reviews, storage, logs, local caches, backups and recipients. Implement authorised export/deletion and resurrection controls; test restore including storage objects.

Validation: Isolated synthetic full restore and deletion/export propagation receipts, RPO/RTO and backup-expiry evidence.

Access/evidence needed: Local source available; deployment and authenticated configuration remain unverified.

## CE-RETRO-09 — Minimise free text, progress profiles and browser persistence

Status: UNVERIFIED. Priority: High. Owner: Security/privacy lead (Tania to nominate). Due gate: School Pilot.

Controls: P9, PR2, PR3A, PR4A, PR9, PF37, PF39, CE-DATA

Action: Classify student/staff identifiers, responses/feedback and inferred profiles. Treat wellbeing/financial values as simulated only after verifying provenance; free text may contain sensitive disclosures. Remove unnecessary identity duplication, bound offline persistence, isolate users and clear shared-device data on logout.

Validation: Field/purpose inventory plus shared-device logout, retention and cross-account browser tests.

Access/evidence needed: Local source available; deployment and authenticated configuration remain unverified.

## CE-RETRO-10 — Inventory integrations, downloads, analytics and supply chain

Status: UNVERIFIED. Priority: High. Owner: Security/privacy lead (Tania to nominate). Due gate: School Pilot.

Controls: P12, H6, INT5, INT7, PF13, PF17, L1

Action: Map Supabase, hosting/CDN, SMTP/SSO, external media/docs, telemetry and any export endpoints. Pin/bundle external JavaScript with integrity review (current Supabase loader uses mutable @2 CDN URL); review browser permissions, file MIME/size/malware checks and log redaction.

Validation: Dependency/endpoint inventory, vulnerability scan, permission and download review, no unapproved student-data egress.

Access/evidence needed: Local source available; deployment and authenticated configuration remain unverified.

## CE-RETRO-11 — Review classroom communication, boards, safety and AI applicability

Status: UNVERIFIED. Priority: High. Owner: Security/privacy lead (Tania to nominate). Due gate: School Pilot.

Controls: P10, PF4, PF9D, PF10D, SC3, SC5, AI_G1, CE-AI

Action: Review student responses, teacher feedback, community votes/boards, leaderboards, reflections and wellbeing-themed mechanics; minimise communication, document moderation/report/escalation and staff-student contact rules. Verify all runtime/backend AI pathways before a reasoned AI N-A; authoring AI and simulated AI-themed gameplay do not alone establish student-facing AI.

Validation: Safety misuse tests, moderation audit trail and signed complete feature/tier/AI applicability review.

Access/evidence needed: Local source available; deployment and authenticated configuration remain unverified.

## CE-RETRO-12 — Confirm payments and app/extension applicability

Status: UNVERIFIED. Priority: High. Owner: Security/privacy lead (Tania to nominate). Due gate: School Pilot.

Controls: CC2, AP0, AP1, AP2, MA2, BE2

Action: Verify shop uses only simulated currency and no card/payment processor across all services. Verify whether native/mobile/desktop/extension builds exist and requested permissions. Record reasoned N-A only with evidence.

Validation: Reviewed complete product inventory and synthetic transaction/permission inspection.

Access/evidence needed: Local source available; deployment and authenticated configuration remain unverified.

## CE-RETRO-13 — Assign operational owners and prepare final school/privacy documents

Status: UNVERIFIED. Priority: High. Owner: Security/privacy lead (Tania to nominate). Due gate: School Pilot.

Controls: GO1, GO2, HR1, HR2, HR3, PR1, PR2, CE-WA

Action: Nominate qualified security/privacy and safeguarding owners; finalise privacy/collection notices, terms, incident notification, training/offboarding, BCP/DR and shared patching responsibilities. Obtain WA public-school risk assessment/catalogue entry and school approval/consent/treatments; separately establish CEWA/ECC requirements.

Validation: Authorised final documents, tabletop and training/access review, school-specific written approval.

Access/evidence needed: Organisation identity/ABN, owner nominations, policy approvals, staff-only WA catalogue/risk report and school/sector requirements.

## CE-RETRO-14 — Independent pre-submission assurance

Status: UNVERIFIED. Priority: High. Owner: Security/privacy lead (Tania to nominate). Due gate: School Pilot.

Controls: T1, Q5, CE-SCAN, CE-PENTEST, CE-PRIVACY, CE-AUDIT, CE-MOCK

Action: Commission scoped vulnerability assessment, independent penetration test, independent privacy/document review, evidence audit and mock Readiness Check of exact candidate. Fix and retest findings; preserve reports and assessor independence.

Validation: All applicable controls verified, no open blocking findings, final evidence current and mock Ready; authorised submission receipt afterward.

Access/evidence needed: Authorised test scope/accounts and independent qualified reviewers; vendor/hosting testing permission as needed.
