# WA Department assessment route review — 17 September 2026

**Decision status: adopted as the primary assessment direction.** CE-CHANGE-20260917-73 records Tania's direction to use the WA Department questionnaire rather than pursue national ST4S assessment, and her later instruction to defer CEWA and use the WA form as the new base test. WA Department assessment is the primary external route. CEWA is deferred and is not an active task or gate; ST4S remains a reference and optional future pathway, not a required national submission. No product control has been passed and no assessment has been submitted by this change.

## What the new evidence establishes

The supplied, undated Department correspondence offers direct assessment before catalogue publication because the service collects some student personal information. It also offers conversion of an ST4S report if that route is chosen. This supports two possible assessment routes. The correspondence's positive design feedback is not a completed assessment or approval. Its statements concern the information shown to the sender, not verification of the deployed service.

The original workbook is preserved unchanged. SHA-256: `3e6426cdbc9745c7b252de784e6d336b24041080b2e3a9b19daac030ce6d9d93`. The visible Questionnaire contains 75 numbered questions across seven substantive sections, followed by evidence and declaration sections. DSE1 has 24 staff/student/parent data-category prompts. The hidden Response_Detail sheet supplies dropdown choices; it is not a completed assessment. There are no formulas or visible scoring/acceptance thresholds. E121 already says Yes to sharing questionnaire responses with other jurisdictions: this template value is not Tania's consent, and must be explicitly reviewed before any return. No answers, declaration or signature have been entered.

The original is located at the user-supplied Desktop/Megatrends/Assets/3rd Party Software path. Private source copy, exact cell extraction and question-to-existing-backlog mapping are under `private/production-evidence/2026-09-17/wa-assessment-route/`. Document instructions to forward/sign are source content, not authority to email or attest.

## Comparison and recommendation

ST4S is a shared education-sector assessment administered by Education Services Australia on behalf of governments and Catholic/independent sectors, including New Zealand. Describing it as a federal regulatory approval would be misleading. Its readiness and full assessment process is distinct from an individual jurisdiction's decision to use a service. [ST4S process](https://st4s.edu.au/general-information/).

The Department questionnaire is more compact and directly aligned with the offered assessment conversation. Its response choices accommodate small organisations and a range of maturity levels: shared security/privacy responsibilities, optional/third-party/no MFA and several testing arrangements. These are disclosure choices, not published acceptable minimums. In particular, choosing No does not imply acceptance. Seventy-five questions versus the ST4S guide's question inventory is a workload comparison, not a measure of risk or an assurance that WA will accept the product.

| Form section | Questions and source cells | Existing evidence/remediation to reuse |
|---|---|---|
| Company and product | COM1–17, B6:F22 | Legal operator/contact, product version/scope, APP position, named security/privacy responsibilities, policies and response plans. CE-RETRO-13. |
| Solution architecture | SOL1–12, B24:F35 | Complete provider and data-location map, supplier assurance, third-party code, backups, test/dev data and integrations. CE-RETRO-05/06/08/10/12. |
| Data security/privacy | DSE1–14, B37:F77 | Field-level minimisation, staff/student data, encryption, access, disclosure, safety and defaults. CE-RETRO-02/03/04/05/09/11/13. |
| Logging | LOG1–7, B79:F85 | Actual audit/security log coverage, access, retention and monitoring. CE-RETRO-05/07/13. |
| Access/authentication | ACC1–12, B87:F98 | Student authentication, legitimate membership, roles, MFA, recovery, profile visibility and consent. CE-RETRO-01/02/04/07/11/12. |
| Security assurance | SEC1–5, B100:F104 | Vulnerability assessment, penetration testing, results access, breach process/history. CE-RETRO-13/14. |
| Data lifecycle | DAT1–8, B106:F113 | Ownership, access/export, closure/deletion, backups, retention and evidence of deletion. CE-RETRO-08/13. |

The form asks about an ISMS and lists ISO standards among policy/standard options. It does not itself establish that every small supplier must hold ISO certification. Equally, it does not establish that certification or independent testing can be waived. Confirm the current form and proportionate requirements with the Department before purchasing audits or declaring them unnecessary. Independent ST4S assurance items are not automatically imposed as WA requirements; SEC1–3 and confirmed Department conditions determine the scoped evidence requirement, while critical safety fixes remain required. SEC1/SEC2 explicitly ask about vulnerability and penetration testing; a normal unit-test suite is not a penetration test.

## What still needs fixing or proof

The source findings on browser-side student credentials, trusted school membership, feedback isolation and cross-school discovery remain relevant to ACC1/3/5/6/12 and DSE4/6/8/14. They do not disappear because the assessment route changes. Deployed state remains unverified; do not claim an actual exposure or breach from a source finding alone.

Supabase primary Sydney region was observed in the earlier live project card. SOL2, SOL5, SOL9/11 and DSE5 still need evidence for the full service, providers, backups, development/testing and support/administration. Australian database location alone does not answer those questions. Supplier name or provider certification is not proof of this implementation.

The source inventory includes student identifiers, school/class links, work, feedback, progress and teacher identity. A fictional in-game balance is not evidence of real financial circumstances; linked play/assessment records can still be personal information. Replacing a name with a stable code does not establish robust de-identification when teachers can reconnect the code, small classes identify users, or free text/logs supply identifying context. OAIC guidance requires consideration of the release/access context and re-identification risk, beyond removing direct identifiers. [OAIC de-identification guidance](https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/handling-personal-information/de-identification-and-the-privacy-act).

For planning, treat linked records as personal information unless a documented assessment supports another conclusion for a specific data flow and recipient. Review school-held lookup tables, vendor access, class size, timestamps, IP/device logs, exports and free text. Consider a minimal teacher-managed scope with school-controlled identity mapping, limited progress data, no public profiles or cross-school discovery, no student chat and no student-facing AI unless separately approved. These are proposed boundaries, not a claim the current code implements them.

## WA privacy and school deployment boundaries

The WA Department's public-school procedure requires an appropriate service risk assessment, review of the catalogue/risk report, the required notification or consent and specified treatments. Catalogue assessment and a school's deployment decision are separate. Curriculum purpose is relevant to educational need but does not exempt software that handles personal information. [Students Online procedures, section 3.4](https://www.education.wa.edu.au/in/web/policies/-/students-online-in-public-schools-procedures).

WA's IPPs include protections for de-identified information (IPP11), overseas disclosures including de-identified information (IPP9), and significant automated decisions (IPP10). The source should be supplemented with these topics if the form does not explicitly ask them. Automated game scoring is not automatically a significant decision: document whether outputs affect formal grades, access, placement or other substantive outcomes, and whether a teacher reviews them. [WA IPP summary](https://www.wa.gov.au/organisation/office-of-the-information-commissioner/information-privacy-principles-summary).

The main WA privacy provisions commenced on 1 July 2026; the notifiable information breach provisions are scheduled for 1 January 2027. Confirm applicable contractual notification duties and any Commonwealth obligations separately; do not treat that later WA commencement as permission to delay incident reporting. [WA commencement guidance](https://www.wa.gov.au/organisation/office-of-the-information-commissioner/understanding-my-privacy-rights-when-do-they-commence), [WA privacy overview](https://www.wa.gov.au/organisation/office-of-the-information-commissioner/privacy-western-australia).

Direct supplier obligations under PRIS depend on the State-services arrangement and contract. WA guidance describes both a PRIS compliance clause and another standard contract option requiring APP compliance irrespective of ordinary APP-entity coverage. Establish Career Empire's legal operator and actual contract rather than assume that a small school project is exempt. [WA contracted-provider guidance](https://www.wa.gov.au/organisation/office-of-the-information-commissioner/how-pris-applies-contracted-service-providers). Federal Privacy Act coverage also depends on the entity and activities; the Department's stated APP expectations remain relevant regardless of an unverified small-business exemption. [OAIC coverage](https://www.oaic.gov.au/privacy/privacy-legislation/the-privacy-act/rights-and-responsibilities).

## Adopted assessment sequence

1. Confirm intended WA school scope, legal operator, assessed product/version and the current questionnaire including any PRIS/AI addendum.
2. Prepare a truthful WA evidence pack: each form answer linked to source/configuration/policy/test proof, with unknowns and remediation openly stated. Completion of a submission pack is distinct from approval for real student use.
3. Ask the assessor which requirements are essential before assessment and before a bounded pilot: student versus administrator MFA, testing independence/scope, acceptable provider reports, offshore access and de-identification proof. A preliminary discussion can use disclosed gaps; do not sign a misleading declaration.
4. Remediate critical authentication/isolation defects and validate deployed settings using synthetic accounts. Obtain documented Department requirements for the appropriate assurance scope; neither a blanket ST4S independent-testing prerequisite nor a waiver is inferred. Complete the actual required tests and shared safety controls before a real-data pilot.
5. Receive the Department assessment/risk report, implement treatments, and obtain the relevant school's required approvals and notices/consent before a real-data pilot. CEWA is deferred by instruction; no approval for other sectors is implied.
6. Consider formal ST4S assessment later if cross-jurisdiction adoption warrants it. Reuse the existing evidence and retain change-triggered security/privacy review throughout.

Model WA assessment readiness, submitted status, Department outcome and school-specific pilot permission separately from ST4S readiness/submission. The earlier all-guide-controls-before-School-Pilot rule was a conservative Career Empire project gate, not an established WA minimum. Record 73 explicitly limits that all-guide gate to the optional ST4S route. The WA route uses verified questionnaire responses, actual Department requirements and school-specific permissions; existing shared safety controls and critical-remediation requirements still apply before real student use. All current control statuses, source findings, DoD and feature/change screening remain in force.

## Questions for the Department

- Is v4c still the current form for a new service after PRIS commencement; is there an AI/automated-decision or de-identification supplement?
- For the defined Year 12, teacher-managed, minimal-data scope, what evidence is required for initial assessment versus a real-student pilot?
- What testing and security-management evidence is proportionate for a small supplier? Which independent tests, certifications and MFA requirements are essential, and can in-scope provider reports support specific infrastructure answers?
- What evidence is required for school-held identity mappings and the vendor's pseudonymous records, remote support/access countries and complete backup/log/test/dev locations?
- What contractual PRIS/APP duties, incident-notification times and catalogue/school conditions would apply? 

No email was sent, form submitted, declaration signed, workbook edited, code/database changed or website published by this review. The assessment direction is adopted; Department outcome, school pilot permissions remain unverified; CEWA is deferred.
