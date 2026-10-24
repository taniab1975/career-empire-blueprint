# Curriculum starts collapsed — 21 October 2026

CE-CHANGE-20261021-113. Tania explicitly authorises a narrow live Blueprint update: every curriculum point on the learning page starts collapsed, including reload and navigation back. Normal click and keyboard expansion must remain available.

The existing unit/component/area hierarchy is initially open. Initialise every hierarchy key closed, keep resource details closed, and make the existing Expand details / Collapse details controls operate on the hierarchy as well. Explicit navigation to a named requirement reveals its ancestry so existing curriculum links remain useful; it does not open resource details. Browser history restoration closes the curriculum hierarchy again.

All197 exact entries, sources, hierarchy, mappings, V2.30pedagogy and unrelated reader content are retained. No game, backend, account, tracking or media change is included. Source, guarded build, desktop/mobile interactions, remote identity, deployment and actual live state require separate verification.

Disk preflight:3.2GiB available. Reuse existing generated assets and use a bounded static build without clearing/copying the complete asset directory; do not delete source or unrelated files.

## Source verification — 22 October UTC

51focused installed-Chrome checks pass on desktop and390px phone viewports, with no page errors: initial load, explicit click/Enter/Space expansion, individual detail controls, global expansion/collapse, reload, real navigation/history return and persisted-page restoration. Explicit named-point links remain useful and keep resource details closed. All197points and45partial source cautions are present after expansion. TypeScript and focused lint pass. The first mobile test used a hidden desktop link; it was corrected to use the existing mobile topic selector, and the complete source run then passed.

Exact source comparison confirms data/curriculum.json, data/learning-planner.json, data/blueprint.ts, app/blueprint-detail.tsx and operations.learningPrinciples are unchanged from54b9d493. No generated image or game test is used as proof. Compiled artifact and live checks remain required.

## Reviewed candidate

115repository tests, types, focused lint and production client compilation pass. The compiled artifact passes the same51desktop/mobile lifecycle and disclosure checks with no JavaScript errors. Desktop and phone pixels were inspected. Standard server behavior/configuration is unchanged; this is a client-only state update. The final release uses every existing release, governance, export, continuity and public-output guard; only the Vite asset-copy/empty-output settings are narrowed to reuse registered files without deletion. Guarded publication and actual live verification remain separate.

## Published and independently verified

Public1f5f942edb5c13d143cc2c3d75d26744132ac0ef; source ec7596369a2b4dd1690899970cc75aa641a671bf; Pages1303962466built. All13changed served hashes match.51live desktop/mobile Chrome checks pass with no JavaScript errors; actual pixels inspected. Curriculum groups start collapsed on initial load, reload and history return; click/keyboard and global controls remain functional. All197exact points, sources, mappings and V2.30pedagogy retained. No game change or deletion. The immutable artifact remains tied to source ec759636; subsequent private closure is not a new public deployment.
