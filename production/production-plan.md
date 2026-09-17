# Current checkpoint — 12 September 2026

Approved behind-Admin campus layout, ground/planting and welcome/Chapel polish published as d442671; Pages and nine live file hashes verified. Mobile joystick preserved.

Documentation checkpoint. Tripo account task cancelled before asset inspection; no new avatar generation, segmentation or Studio integration. Physical-phone performance remains unverified.

[Current findings and next steps](checkpoint-20260912.md). Discrete world-state triggers remain deferred.

## Historical entries — superseded where inconsistent

# Current production checkpoint — 11 September 2026

The canonical operations.productionPlan remains authoritative. Stage 1 lighting/skies/clouds/plant growth is approved and banked at revision4. Stage 2 skyline composition is now the separate review; then edges, materials/planting and refined surrounding-building references, followed by one combined release. The full-body walking camera request is pending for that integration. See ecc-session-recovery-20260911.md.

## Historical initial review plan

# Current production sequence — 10 September 2026

CE-CHANGE-20260910-40. Tania explicitly redirects next production from additional Chapel reflection features to whole-campus atmosphere. Five staged reviews precede one agreed combined live world and public Blueprint release. Canonical working notes remain current throughout. No new checkout or project.

1. Lighting: actual current campus, fixed arrival/aerial/player-height comparison; preserve geometry, materials and sky to assess lighting clearly.
2. Sky and horizon: clouds, atmosphere and distant skyline that support the selected lighting.
3. Campus edges: layered planting, boundaries and paths suggesting a wider place.
4. Materials and planting: coherent stone/timber/green palette and less repetition.
5. Surrounding ECC buildings: inspect actual supplied reference files and selectively represent recognisable background buildings around the hub. Do not invent a full campus for completeness.

Arrival composition, readable entrances and ECC recognition are validation criteria throughout all five stages. This resolves the prior assistant list into the requested four improvement categories plus the new fifth building-reference stage; no extra sixth release stage.

After selections are settled, perform integrated visual/performance, route, collision, avatar and EST/Chapel regressions and publish one world update with the public Blueprint. Individual previews are not live approvals.

Next major project: a reliable boy and girl avatar system with changeable clothes, coherent rigging and walking. Scope as a substantial project; preserve existing appearance assets and diagnose current gait before choosing a replacement approach. Tania's instruction establishes future project scope; it does not select a technical rig or automatically approve old wardrobe prototypes.

Chapel development becomes a collection of optional discoveries, playful hidden interactions and side quests, including surprising/trap-door-like discoveries where appropriate. No new Chapel experience is implemented during the campus atmosphere review.

Then develop curriculum-grounded onboarding, events and experiences in the world. Curriculum continues to constrain design from the outset; serious curriculum/entry production follows the user-selected sequence. No cohort, reward formula or assessment acceptance inferred.

Stage 1 starts from live game 04c0351df1c0a6e69a2ee69346047e381da83985 in /private/tmp/ce-avatar-release. The older unpublished lighting comparison has not been located in inspected current work paths; do not claim it was reused or overwrite it. Use the actual current source as the comparison baseline.


## Stage 1 local review ready
The existing game checkout now contains playable-3d/world-preview/index.html and preview.js. Current lighting, soft daylight and warm afternoon can be compared at fixed arrival, forecourt and aerial viewpoints. Nine rendered comparisons and phone controls pass; every manifest-listed live runtime file remains unchanged. Evidence and editable source snapshot: private/production-evidence/2026-09-10/world-atmosphere-v1/stage1/. No preset is accepted, no public upload made. Soft daylight neutralises the stone; warm afternoon creates longer, warmer shadows. Sky and geometry remain fixed until their later review stages. Candidate shadow maps use 4096px versus the current 2048px baseline; device performance and quality scaling must be resolved before integrated release.


## Walkable oval and tree edge — 12 September 2026
Tania requests walking on the football field and trees around the oval edge, following the aerial. This supersedes the previous visual-only oval boundary. Outdoor physics ground now matches the existing continued grass rectangle, with an inset walking boundary. The route across connecting grass and oval is open. Existing Media collision is retained; SPACE, its rear foyer, Home Economics, goalposts and new tree trunks have collision. Thirty-three reused eucalypts form a staggered western/southern belt outside the playing line, scaling with the approved development stages. Architecture, orientation, glass/mural assets, indoor limits and banked world-preview sources remain unchanged.

Local desktop and phone browser probes exercise actual movement physics from the original arrival area across connecting grass to the oval centre; west/south bounds, ground height, SPACE frontage and Home Base welcome return pass. Local source checks pass. Test-only probes are not shipped. Screenshots and results: private/production-evidence/2026-09-12/walkable-oval/. Visual reference is the supplied aerial, interpreted compactly rather than surveyed. Wider material/arrival polish and smooth stage transitions remain open. No publication, remote CI or new global-refresh success is claimed.

## Avatar Studio vendor evidence — 14 September 2026

Source: Tripo support response supplied by Tania, dated 2026-09-14 15:18:32 (sender displayed as “ddie”; timezone not supplied), in “Update Blueprint Avatar Studio”, conversation 6aa7a356-c95c-83ec-9dfa-482d58de1e43. This is vendor-confirmed capability as reported in the supplied response, not a new local test or independent inspection of the vendor account.

Tripo confirms its animation feature is designed for complete character models with recognizable body structures. A standalone clothing item such as a blazer may be interpreted as the entire animated object rather than a separate garment. Tripo currently has no separate option to animate standalone clothing independently from a character body.

Tripo recommends three possible workflows:
1. Create a complete character wearing the blazer, apply walking animation in Tripo, export the animated model to Blender, then remove unwanted body parts while retaining the animated blazer.
2. Prepare the blazer in Blender before animation: attach it to a rigged character and adjust rigging and weight painting to control deformation.
3. Use Blender for independent clothing animation through custom rigging, weight adjustments and animation controls.

Tripo says it has forwarded the standalone-clothing animation suggestion to its product team. This is feedback escalation, not a promised feature or delivery date.

Status as of 2026-09-14: Tripo response received; still awaiting a response from the other third-party software company previously contacted about the Avatar Studio/clothing workflow. The supplied update does not identify that company, so do not infer its identity from earlier product research.

Production implication: exclude standalone-blazer auto-animation in Tripo as a supported production route. The three Blender routes remain vendor recommendations awaiting validation with the chosen Career Empire body and garment; they do not prove interchangeable clothing or preservation of the same skeleton/bind pose. On resumption, select one complete approved body, preserve the original rigged assembly, and prove one same-base blazer through deformation, retained cuffs/openings, equip/unequip and Studio/world review before expanding the wardrobe. Keep the other vendor response as an open dependency; do not automatically resume modelling or spending from this documentation update.

Prior experimental findings are retained: the matching jacket/dressed motion checks, incompatible newer base proportions/bind pose, missing covered body surfaces and visually rejected reconstructed wardrobe remain valid evidence at their original scope. The vendor reply does not approve those prototypes or convert numerical motion checks into visual acceptance.

Task scope and completion: inspected canonical AGENTS, handoff, production plan and September 12 avatar checkpoint; recorded this discussion/evidence in the existing Blueprint and updated the avatar roadmap/status and handoff. No new visual assets, asset experiments or game changes were made. Public reader publication and global refresh remain separate.


## ST4S production governance — 17 September 2026

CE-CHANGE-20260917-70 / local V2.21 adds the School Deployment, Security, Privacy & ST4S Readiness workstream. Read docs/production/st4s-readiness.md and data/st4s-readiness.json. All new changes require securityPrivacyImpact screening of every trigger through the existing change/session/DoD system. Never infer compliance from a vendor name. PASS—VERIFIED requires current evidence; LIKELY PASS and UNVERIFIED block readiness; N-A needs evidence and approval. A feature is not production-complete until applicable controls, implementation checks, tests and evidence are complete. School deployment gates are distinct from Blueprint publication.

The source retrospective identifies authentication, tenant-trust, feedback-isolation and cross-school-discovery gaps. Live matching project card confirms primary ap-southeast-2; broader residency/configuration/records remain UNVERIFIED; do not run prototype/hardening SQL blindly. Obtain the precise read-only metadata, contracts and test proof listed in the backlog. Detailed source findings and field inventory are private under private/production-evidence/2026-09-17/st4s-readiness. No real records inspected, game/database changed, school deployment or ST4S submission. Preserve unrelated dirty work, all 17 protected decisions, existing approvals and pauses. The environment-plan history is retained; this is Tania's explicitly requested additional mandatory workstream.

At start answer the register's twelve impact questions (data, locations, access countries, providers, lifecycle, encryption, logging, identity, isolation, privacy/safety, applicability and verification). At close update controls/evidence/backlog, canonical handoff and AGENTS, regenerate records and run scoped checks. Invalidate evidence on affected change/expiry. Student-facing AI needs explicit architecture/security approval. Existing source-review and publication guards remain mandatory; local validators do not install remote game enforcement.
