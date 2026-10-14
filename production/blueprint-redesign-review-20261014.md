# Blueprint website review — local candidate

14 October 2026. Public baseline:3435509. This candidate is local only. No push, merge, deployment or publication; explicit approval of the revised structure comes first.

## Whole-site audit

Reviewed all20 existing section routes, their navigation, source content and representative desktop/mobile views.

| Area | Finding | Local treatment |
|---|---|---|
| Start Here | Production status, commit IDs and test counts precede a clear course introduction. | Explain audience, course, purpose and connected learning first; show the current position and four obvious next routes. |
| World & Journey overview | Motivational principles and a concept image do not explain the whole journey. | Show the opening Phase0/1/2 progression, then route to the shared phase view and world services. |
| Year / sequence | An older30-week map competes with the new12-phase plan and has stale EST wording. | Derive Phase0–11 directly from learningPlanner.stages; Unit3phases0–6, Unit4phases7–11; keep old timing clearly archived. |
| Worked example | An earlier pilot can be mistaken for the current Mara initiative plan. | Label it as an earlier worked example and retain its traceability. |
| Learning principles | The experience-first loop can understate explicit materials, recall and off-game assessment. | Show all connected learning modes and retain detailed principles behind them. |
| Learning overview | Broad game-design language obscures the curriculum planning entry. | Direct the reader to exact curriculum provision, classroom use and visual design. |
| Curriculum / experiences | Strong source detail and compact tables, but menus consume workspace. | Preserve all197IDs, hierarchy, visible Carolan refs,45partial warnings,21EST flags and approved icons. Add independent menu collapse and reversible table focus. |
| World / rewards | Town growth stages can be confused with learning phases. | Distinguish visual progression from Phase0–11 and link to the same shared sequence. |
| Classroom | A dated implementation note leads the page. | Put the connected teaching/evidence model first; retain older integration observations as dated context. |
| Look & feel | Existing references do not foreground the approved current icons. | State Blueprint adoption and pending game adoption; retain the current visual guide and historical references. |
| Delivery overview | Earlier production pipelines and facts compete with current work. | Lead with current strands and project status; collapse dated production material. |
| Roadmap | Old work queue can appear to be the automatic next task. | Put current local review/game/learning boundaries first; label retained detailed queue as earlier work. |
| Decisions | The existing register is useful and should retain its approved records. | Keep decisions and dated clarifications, with clearer surrounding navigation. |
| Build evidence | September recovered evidence is headed latest. | Put a dated PR57 draft checkpoint first; retain old evidence in an archive. No whole-game readiness claim. |
| Handover | Recovery/source mechanics obscure the practical handover. | Explain what is being taken over, ownership, order of work and authorised access, without exposing private locations. |
| Sources overview | Useful categories, weak connection to the new primary routes. | Retain source authority and history with clearer names and links. |
| Source documents | Current and older planning files share one source group. | Keep dates/authority explicit and distinguish working destinations, owner-only originals and proposals. |
| Research/context | Useful supporting material, separate from approved requirements. | Retain it as supporting context under Sources & History. |
| History | Useful retention, but older year references need clearer naming. | Retain history and label current phase view versus earlier timing. |
| Terms | Useful reference. | Preserve definitions and access through the same navigation. |

## Proposed navigation and content structure

- Start Here: course and purpose → who the Blueprint serves → connected learning model → four entry routes → available/planned/pending state → next review decision.
- World & Journey: overview; shared Phase0–11 journey; earlier worked example; how learning connects. World services/rewards remain linked from here.
- Learning & Curriculum: compact curriculum/experience planner; world/rewards; teaching/assessment; look/feel.
- Progress & Handover: current work; roadmap; decisions; dated build checkpoint; practical handover.
- Sources & History: original documents; research/context; dated history; terms.

All existing section routes remain available. The shared phase data is used directly rather than copying a second timetable. Weeks and lessons remain undecided.

## Table workspace

Independent top-menu and sidebar toggles stay visible outside the hidden menus, with aria-expanded, labels and keyboard access. Focus table temporarily collapses both and has a clear exit/Escape route; exiting restores the independent preferences. Planner records, filters, pinning and scroll are retained without remounting the planner. Only optional per-tab layout preferences are stored locally.

## Visual sources and boundaries

Use existing authorised game screenshots: ECC courtyard13September2026, Arrival Gardens/Echo25September2026 and Sunday Markets25September2026. Captions identify saved dated game views; no screenshot is invented or presented as proof of the current full build. Approved dimensional icons are current in the Blueprint; game adoption remains pending.

PR57 was independently checked open/draft on14October2026 at head2eaafa4. Its critical check passed; browser and wider test jobs failed. Startup and seven critical journeys pass in the supplied bounded checkpoint, while wider failures remain under triage. The initiative redesign is proposed, not implemented.

## Review state

106 source tests, TypeScript and focused lint pass.51 bounded non-interactive desktop/mobile checks pass across all 20 section routes; 122 local linked file targets exist. Four existing external game destinations returned HTTP 200. Actual before/after and focus screenshots were inspected.16 older unavailable evidence links are now clearly owner-held references rather than broken public downloads. Public release3435509 and the private preview are unchanged. Approval is required before any publication of this redesign.

## Local review access and limits

Preview: http://127.0.0.1:8765/career-empire-blueprint/

The preview is served only on the owner’s Mac loopback address. Mobile checks use a 390px browser viewport, not a physical device. External link checks establish HTTP reachability, not gameplay or account/classroom readiness. No game regression suite was run. The public Blueprint remains 3435509. Local source changes remain uncommitted and unpushed for review; explicit approval is the next publication gate.

## Publication approval —14October2026

After the displayed Start Here and desktop/mobile Focus table screenshots, Tania replied “love it” directly to the explicit question asking whether this version was ready to publish to the existing Blueprint website. This supersedes the earlier local-only hold for this reader redesign. The reviewed structure and controls are retained; transient local-review labels are replaced with durable design/implementation distinctions. The game checkout and private-preview access remain unchanged. Exact publication and live verification are pending.

## Approved source verification

106source tests, TypeScript, focused lint and standard Vinext build passed.51affected headless desktop/mobile checks pass across20sections; all122linked local file targets exist, with no JavaScript errors. Exact curriculum/icon data is unchanged from the prior verified source. The guarded Pages build and independent live receipt follow the frozen source commit.
