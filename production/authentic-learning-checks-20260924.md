## Agreed curriculum-wide LMS role — 24 September 2026

V2-D18 / CE-CHANGE-20260924-89: Career Empire is the intended learning management system for the whole Careers and Employability curriculum. Curriculum drives planning; the playable world, dedicated learning spaces, EST revision and teacher-supported tasks are connected modes. World events and productive failure are not compulsory for every activity. Preserve suitable existing EST memory cards/arcade activities before replacing them. Results and appropriate earnings may feed back to the world, but reward, identity and evidence integration remain to be specified/verified. Current concerns are design checks, not guiding purpose. Next: map exact curriculum points to provision to retain, adapt, connect or design, before selecting new production. Existing CE-EXP-V2-05 suggestion is a candidate, not a locked next task. Current integration contract and continuation prompt updated. No complete LMS, curriculum-compliance or new storage/reward implementation claimed; local Blueprint revision only.

# Career Empire: learning verification and the WA questionnaire

24 September 2026. Read-only review of **1. Department of Education Security and Privacy Questionnaire v4c (2).xlsx**, retrieved from Authentic Learning Checks. Recommendations are proposed designs, not implemented features or Department acceptance.

## Finding

The workbook does not prohibit free-text responses, student-created work, automated marking, AI, analytics, offshore storage or account-free use. It is a disclosure and assessment questionnaire, not a published pass/fail specification. Absence of a prohibition is not permission for a particular deployment. No completed assessor decision or product-specific conditions are supplied.

The visible Questionnaire has 75 numbered questions and 24 data-category prompts. The hidden Response_Detail sheet contains possible answers, not vendor responses or acceptable minimums. There are no formulas or cell comments. The substantive response fields are blank. E121 contains a pre-existing Yes about sharing questionnaire responses with other jurisdictions; this is not consent to share student information, nor evidence of the user's consent to submission.

Both sheets, validation lists and drawing text were inspected. The drawing includes submission instructions, not additional learning-interaction restrictions. The source was never saved or edited. SHA-256: `3e6426cdbc9745c7b252de784e6d336b24041080b2e3a9b19daac030ce6d9d93`, matching the previously preserved Blueprint source.

## Constraints and implications

All cell references below are on Questionnaire unless otherwise stated.

| Area | What the workbook actually asks | Consequence for learning design |
|---|---|---|
| Free text and student content | DSE1, D50 explicitly identifies student-produced work/content; D52 behavioural records; D58 performance information; D59 other student data. | There is no blanket content-storage ban. A text answer, constructed budget, saved plan or linked action sequence may all require disclosure. Removing text does not remove student data. |
| Necessary collection | DSE13–14, D76:D77 ask about minimisation and privacy by design. COM17, D22 asks for child-friendly policies. | Define the educational purpose of each saved field. Avoid unnecessary personal narratives, real family finances, health disclosures and unrestricted uploads. These avoidance measures are recommended scope choices, not explicit form prohibitions. |
| Storage and suppliers | SOL1–12, D24:D35 cover architecture, offshore storage, suppliers, code, backups, portable devices, test/dev environments and social integration. | Inventory the browser, hosting, database, logs, backups, exports and service providers. Local browser storage is still storage. Australian primary database hosting alone does not establish all data remains in Australia. The form asks for offshore countries; it does not categorically forbid them. |
| Protection and access | DSE2–9, D65:D72 cover classification, encryption, staff access, outsourcing, admin protection and unauthorised access/theft. | Teacher access, class/school separation and vendor access require evidence. A hidden screen or a class code alone is not proof of access control. The form asks about controls without prescribing a particular encryption algorithm or universal MFA rule. |
| Identifiers | DSE1, D45:D49 and D59; ACC2–5, D88:D91. | Avoid collecting names/email/DOB where unnecessary. A stable pseudonym linked to school/class/performance can remain personal information. Anonymous practice and attributable individual assessment are different scopes. |
| Authentication | ACC1–12, D87:D98 ask about authentication, legitimate users, lifecycle, credentials, roles, MFA, connected apps, age, consent and profile visibility. | The form does not mandate student email, a social login, public profiles or accounts for all learning. Hidden choices include no accounts and authentication not applicable. An account-free mode cannot by itself provide reliable longitudinal identity. |
| AI and automated processing | No explicit AI/model-training/automated-decision question appears. Relevant general questions include COM3 functionality (D8), SOL5/7/8 (D28/D30:D31), DSE10 (D73), DAT1/6 (D106/D111). | AI processing must still be described through purpose, providers, data use, access, locations and lifecycle. Sending content to a model is processing even if Career Empire does not retain it. Inspect provider logging, retention and training terms. Rules-based scoring avoids a model provider but remains automated processing. |
| Analytics | DSE10, D73 asks about sharing/selling identifiable, de-identified or summarised data. DSE13, D76 concerns minimisation; DAT6, D111 concerns sales targeting. LOG1–7, D79:D85 concern employee/security logs. | Security logging is not a requirement to record every student click. Separate operational logs, learning evidence and product analytics. Avoid session replay and comprehensive movement traces by default; retain only justified evidence. Aggregates need an identification-risk review, especially for small classes. |
| Content lifecycle | DAT1–8, D106:D113 ask about ownership, copies, deletion, backup retention, post-closure retention, targeting, service-end handover and proof of deletion. | Saving an artefact entails ownership, export, retention and deletion decisions. The form does not supply a fixed retention period or demand that nothing be stored. Deleting the live row is not proof that backups, logs and exports have disappeared. |
| Safety and publication | DSE11–14, D74:D77 and ACC11, D97 address harmful content, geolocation/biometrics defaults, privacy defaults and browsable profiles. | Restricted authored content and teacher-controlled sharing reduce exposure. Neither student chat nor public galleries are required for authentic learning. Publishing student work is a separate decision from saving it privately. |

## Hard requirements versus choices

**The form itself:** an assessment response must accurately describe the scoped product and supporting evidence. Its declaration at C118 rejects withholding relevant information or misleading representation. Dropdown options such as no MFA, no controls or vendor-owned content do not establish that those responses will be accepted. No completed response, signature or Department approval is present.

**Separate WA public-school requirements:** the Department's Students Online procedures section 3.4 requires the site manager to assess third-party service risk. Guidance calls for the applicable risk report, notification/consent and treatments. Section 3.3.2 requires permission and clearance when publishing student work/images. These are not a prohibition on private learning artefacts. The stated exemption for services collecting no personal information cannot be assumed merely because a page has no login. These public-school procedures do not by themselves establish another school sector's approval.

Source: https://www.education.wa.edu.au/in/web/policies/-/students-online-in-public-schools-procedures

**Applicable privacy duties:** WA IPPs address necessary collection, purpose, security, identifiers, anonymity, overseas disclosure and de-identified information. Significant automated decisions require risk assessment, transparency and a route to human involvement. Whether Career Empire is itself a covered contracted provider depends on its arrangement; Department duties and contract conditions must also be considered. A game score is not automatically a significant decision, but formal grades or access/placement decisions require scrutiny. Ordinary rule-based automation can matter, not only AI.

Sources: https://www.wa.gov.au/organisation/office-of-the-information-commissioner/information-privacy-principles-summary and https://www.wa.gov.au/organisation/office-of-the-information-commissioner/how-pris-applies-contracted-service-providers

**Design choices:** no unrestricted text, no student-facing AI, no uploads, limited evidence capture, fictional scenarios, school-held identity mapping, no public profiles and teacher review are defensible proposed boundaries. They are not all stated Department bans. The existing Blueprint separately requires architecture/security approval for student-facing AI and retains authentication/isolation safeguards. This review does not relax those project controls or reverse the recorded decision to remove unrestricted New work creation.

Pseudonyms are not automatically anonymous. Identification depends on the data and who can access/link it, including school lookup tables and logs. Source: https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/handling-personal-information/de-identification-and-the-privacy-act

## Assessment patterns without free-text answers

Finite interfaces always constrain what can be expressed. Moving answer choices into a 3D world does not automatically make them stronger evidence. The useful change is requiring students to construct, test and revise a response using relevant information, with multiple defensible paths and an unfamiliar transfer case.

| Pattern | Career Empire interaction | Evidence of understanding | Small possible record |
|---|---|---|---|
| Diagnose and repair | A fictional roster, stock plan or budget contains interacting faults. Learner inspects records and changes quantities, assignments or timing. | Corrects the underlying constraint without creating a new failure. Test again with one changed condition. | Initial/final configuration, relevant evidence references, criteria met. |
| Construct under constraints | Build a town project or career pathway using resources, prerequisites, dates and a limited fictional budget. Do not supply three prewritten complete plans. | Produces a feasible combination and preserves essential requirements when costs or eligibility change. | Chosen components, quantities, failed/met constraints, revised plan. |
| Predict, test, revise | Before running a market, place forecast markers for stock, cash and unmet demand. Then change one variable and rerun. | Predictions and interventions consistently reflect the relationship being taught. | Predictions, selected variable, result and revision. |
| Investigate before acting | A delivery has failed. Inspect order, schedule, supplier and customer information as needed, then arrange a response. | Uses relevant information to distinguish plausible causes. Do not score visiting every object as understanding. | Evidence used in the decision, chosen action and consequence. |
| Demonstrate a trade-off | Allocate a fictional town budget among accessibility, energy and recreation while meeting stated needs. Change one beneficiary need or maintenance cost. | Protects constraints and makes coherent revisions. Several allocations can be valid. | Allocations, linked evidence and changed allocation. |
| Build an explanation model | Connect evidence cards to claims or construct a cause-and-effect diagram using neutral nodes and meaningful relationships. | Shows which evidence supports which claim; a counterexample tests whether the relationship is understood. | Selected links and response to counterexample. |
| Transfer and teacher demonstration | Give a structurally similar but unfamiliar problem, then ask the student to show how they would repair one change. A brief live explanation can supplement the demonstration without audio recording. | Provides individual evidence beyond a saved answer or rehearsed sequence. | Teacher criterion checklist in the approved school system, where appropriate. |

These patterns are proposals for piloting, not validated measures or AI-proof assessments. Screenshots and coaching remain possible. Use changed constraints, individual transfer and short teacher observation to improve confidence without surveillance. Provide keyboard and accessible alternatives, a practice mode and time to understand controls. Do not grade speed, navigation fluency, wealth, popularity or mere participation as understanding.

## Worked first candidate: My plan no longer adds up

Use the existing CE-EXP-V2-05 experience. Give a fictional character a budget, shifts, transport options and a training timetable. The learner constructs a weekly plan by allocating money and scheduling activities. The interface does not label a preferred answer or prefill an optimal plan.

Before simulation, the learner enters numerical predictions for remaining money and available time. Introduce a shift reduction or timetable clash; the learner revises the plan. A valid solution must still meet the scenario's essential commitments. Permit multiple feasible solutions. Finally present a different character with the same underlying conflict to test transfer.

Teacher rubric: identifies the relevant constraints; builds a workable plan; predicts a relevant consequence; repairs the changed constraint; transfers the reasoning independently. Separate supported success from independent success and provide insufficient-evidence status. Do not award mastery merely for completing the activity or earning game money.

Possible minimal saved evidence: scoped learner reference only if needed; scenario/rubric version; submitted plan values; prediction; revised plan; criterion outcomes; support-used flag; teacher verification. These remain learner content/performance data. Do not store a continuous clickstream, typed narrative, family details, audio, video, device fingerprint or inferred personality label for this activity. The specific retention period and identity controls need agreement and implementation proof before real-student use.

An initial prototype can run with synthetic data and session-only state. Verify what hosting/operational logs collect before describing it as anonymous or data-free. Session-only activity trades away long-term progress and does not prove who performed it.

## Decisions to resolve before implementation

1. Confirm the current Department form/addenda and actual school/contract conditions, including AI and significant automated decisions.
2. Decide whether the first scope is anonymous practice, teacher-observed learning, or stored attributable assessment. Specify the minimal data flow accordingly.
3. Agree the evidence rubric, retention, teacher access, school isolation, exports and deletion behaviour. Verify the deployed implementation with synthetic accounts before real data.
4. Pilot one scenario for clarity, accessibility, guessing and alternative valid solutions. Validate that the evidence supports the specific curriculum claim.

No workbook modification, application change, data collection, submission, publication or visual-asset creation occurred. Findings are logged in the existing local Career Empire Blueprint and handoff.


## Development traffic lights and evidence capture — discussion, 24 September 2026

User direction: future game and learning-artifact design must make WA readiness practical during development, expose red/orange/green flags, and reduce later questionnaire work. This entry records a proposed way forward, not approval or implementation of a new assessment/data architecture. Related tasks inspected: Authentic Learning Checks (6ab4c1ec-5a2c-83ec-83ef-82b4311428c5); Inspect WA-DOE questionnaire limits (01a0d229-7d48-71a1-af9b-61509953a61a); Implement staged scoring economy (01a0d0ec-fcf7-7452-ba39-7e92aef53f90); current WA audit refresh. Current game publication messages are context only; no fresh deployed game audit performed.

### Recommended operating model

Extend the existing Blueprint feature/change screening and WA question register; do not create a competing audit or ask the creator to complete 75 questions for every feature. Each learning activity has one short design record, linked to its relevant questionnaire IDs and implementation evidence. Maintain separate learning-evidence and data-readiness flags, plus an explicit stage: proposed, synthetic prototype, verified implementation, or authorised school use. Green is always scoped and dated, never synonymous with Department compliance or permission. Unknown is orange; missing essential access/isolation/lifecycle proof is red for real-student storage. Highest unresolved severity controls the next release stage; no averaging into an overall pass percentage.

Learning flag: green only when a reviewed activity elicits the specific curriculum understanding, allows defensible solutions and has pilot evidence of clarity/accessibility and a meaningful rubric. Orange for untested inference, leading choices, rehearsal/guessing or incomplete transfer evidence. Red for unsupported consequential conclusions, treating wealth/speed/visits as mastery, or inferring learner traits from play alone. Game participation rewards may exist, but remain separate from learning outcomes. No activity is claimed AI-proof. Teacher observation or a changed transfer problem can strengthen attribution without recording audio/video.

Data flag: green for a defined and verified data flow within agreed scope, including necessary fields, access, ownership, retention, export/deletion and supplier controls. A synthetic session-only prototype can be green for that prototype scope only; browser/server operational logging still needs inventory. Orange for proposed persistent records, limited text/upload features, a new provider/identity flow, analytics or unknown settings. Red before real-data enablement for unverified school separation/credentials, unrestricted public learner information, unreviewed student-data transfer to external AI, or no workable retention/deletion route. These are proposed project release rules, not invented questionnaire prohibitions.

### The activity record

Record: curriculum purpose and claim; learner challenge; evidence of understanding and alternative explanations; rubric/teacher review; practice versus saved-assessment mode; exact saved fields and excluded fields; learner identity linkage; storage/provider/location/access; retention/export/deletion; relevant WA question IDs; two flags with reasons; owner, next action and exact proof needed; source/code/configuration version, test receipt and review date. Do not publish real student artifacts as readiness evidence: use synthetic examples and redacted configuration/test receipts.

Keep three distinct data purposes: game state/rewards, selected learning artifacts, and security/operational logs. Each has its own necessary fields and retention/access rules. Product analytics must not silently reuse learning evidence. Do not log every click, movement path or hesitation merely because it is technically possible. A small explicit evidence submission is the recommended default for retained assessment; unsaved session-only practice should not covertly upload an artifact. Existing persistence must be inventoried before calling it session-only. Loss of unsaved progress and shared-device clearing need clear behaviour.

### First worked example

Use the existing My plan no longer adds up candidate. A fictional learner has shifts, training, transport and a budget. Student constructs a plan, predicts money/time outcomes, then repairs it when a shift or timetable changes. Multiple solutions can satisfy the constraints. A second unfamiliar scenario and a short teacher demonstration help test transfer; no speed grade or required personal family/health disclosure.

Candidate retained artifact: scoped learner reference where individual attribution is necessary; activity/scenario/rubric version; submitted budget/timetable; prediction; one meaningful revision; relevant criterion results; support-used indicator only if justified and interpreted cautiously; teacher verification/insufficient-evidence state. Agree which of these fields are actually necessary. School identity mapping does not make the linked vendor records automatically anonymous. Avoid continuous event trails, personal narratives, photos/voice/video and model-inferred personality/wellbeing labels by default.

Current candidate flags: learning orange (design not yet piloted); data orange for the proposed artifact specification, red for real-student persistent deployment until the existing authentication/isolation, lifecycle and supplier evidence prerequisites are resolved. Synthetic prototyping can proceed separately; this discussion does not change live collection.

### Build the eventual questionnaire as work proceeds

Map each activity record to COM3/16/17, SOL1/2/5/7/9/11, DSE1/3/4/8/10/11/13/14, ACC1–7/11/12 and DAT1–5/7/8 as applicable. System-wide controls such as security monitoring, incident response and vendor contracts remain shared evidence; they cannot be satisfied by activity design alone. Reuse existing WA mappings rather than duplicating all questions.

At design: show the two flags, why and the least-data alternative. At implementation: capture the real schema/data flow, configuration and synthetic tests. At release: verify the exact deployed scope and refresh affected evidence. Generate draft questionnaire answers only from current reviewed facts, preserving unknowns and links to proof. Answers and attestation still require authorised human review; sharing consent and submission remain explicit separate actions. Do not mark planned controls as implemented.

Recommended sequence: (1) agree the small common learning-artifact model and two-flag rules; (2) classify existing My Life, Night Market and EST interactions for actual saving/free text/rewards; (3) design and test this single synthetic scenario; (4) establish shared identity, school isolation, retention/export/deletion and supplier controls before attributable real-student storage; (5) reuse the proven pattern and accumulate the WA evidence pack. This is a staged recommendation, not a wholesale game rewrite.

Sources: exact workbook and prior source-cell review above; current WA audit docs/production/st4s-readiness.md; current My Life/class-world records. Official OAIC de-identification and WA IPP summary pages rechecked this turn: removing direct identifiers alone is insufficient, and WA duties include de-identified-information protections. Links retained above. No new visual assets, application code, workbook edits, data collection or publication in this discussion. No other task was instructed or interrupted.


## User clarification: contextual free text and copied AI responses — 24 September 2026

Tania clarifies that free-text concerns are also about students photographing a task, obtaining an AI-generated answer and pasting it without demonstrating understanding. Free text is acceptable in principle for contextual scenario questions that are difficult to outsource in that simple way. Do not translate this into a blanket ban on free text or treat privacy as the only concern.

Design direction: evaluate response authenticity/learning evidence separately from data readiness. Prefer short explanations grounded in the learner's own constructed plan, observed outcome, changed condition and subsequent revision. Pair explanations with actual work and an unfamiliar follow-up or teacher demonstration where appropriate. Generic standalone explain/define prompts are weak evidence when a pasted response can satisfy the task. Merely personalising names or numbers, or hiding a prompt inside a 3D scene, does not establish stronger evidence. Scenario context can still be supplied to AI; do not promise AI-proof tasks or infer misconduct from polished writing alone. Do not disable paste or introduce surveillance as a substitute for assessment design; preserve accessibility.

Example: after a fictional shift reduction, ask which element of the learner's own timetable they changed, which constraint that addressed, and what trade-off remains; then change one further condition and have them demonstrate an adaptation. Assess consistency and understanding across the artifact, explanation and adaptation, allowing multiple defensible solutions.

A contextual text field may be educationally suitable while still needing privacy review: purpose, minimisation, avoiding personal/sensitive disclosures, access and retention remain separate. This clarification refines the proposed two-flag design model. No implementation, new collection, publication or visual-asset change occurred.
