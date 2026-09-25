# Economy Lab presentation — 24 September 2026

Tania explicitly corrects the implementation target to the existing Economy Lab at localhost port 8792, /economy-lab/. This supersedes the initial intent to edit the playable campus for this task. Work remains in the existing economy workspace outputs/economy-lab; separate Night Market source, accounts and campus remain untouched.

Scope: scene-first presentation; persistent compact cash/savings/wellbeing HUD; expandable My life panel; receipts and reconstructed transaction balances; inspectable home/community/global scene views; existing purchased objects and contribution consequences. Reuse all lab starting values, prices, rewards, tax and saved schema. Night Market remains a separate experience; do not merge its differently scaled practice balance. No new salary, badge or mastery rules.

Privacy impact: existing fictional browser-local save only, same storage key and lifecycle; no new personal data, provider, network service, identity, access country, account transfer, tenant access or student AI. Existing local save is user-editable/untrusted. Review mode is session-only to avoid contaminating the user's progress. No encryption, school readiness or compliance claim. Native procedural visual details are candidate presentation, not accepted art. Implementation and scoped testing in progress; no publication authorised or claimed.

## Implemented and checked

Existing Economy Lab upgraded locally: scene-first full-height layout; compact available/saved/scenario-wellbeing HUD; My life modal with Overview, Earn & try, My space, Save & give and History; J shortcut and Escape; net-pay/tax/spend receipts in the panel and world; reconstructed running balances; four animated scene viewpoints with reduced-motion support; existing owned objects/fund effects retained. No pricing, reward, tax, saved schema, campus or separate Night Market changes. Review mode avoids writing the user save.

15 Node tests pass (12 existing economy invariants plus three receipt tests). Desktop and 390x844 browser checks observed pay/tax, one-time reward buttons, desk purchase and focused 3D view, savings, local/global giving, running receipt history, failure/reflection/free retry, keyboard opening and review reload. Phone DOM width/scroll width both 390px; modal width/scroll width both 356px. Captured browser warning/error log empty. Existing-save reconstruction is unit tested; blocked/cross-tab/browser-storage-failure paths source reviewed, not browser fault injected. No physical-device or hosted-CI claim.

## Try it

Open the existing Economy Lab on localhost:8792/economy-lab/. Click My life or press J. Earn & try retains the existing simulated $500 checkpoints (10% tax) and the productive-failure trial. My space buys the existing desk ($900), laptop ($1,600) and wellbeing pack ($500). Save & give uses existing $300 transfers and $100 gifts. Close the panel and choose Home base, Community or Wider world to inspect consequences. History shows actual cash changes and balances after each event, with no invented timestamps. Reset requires an explicit scoped confirmation. Append ?review=1 for temporary verification without modifying the saved world.

## Visual source and handoff

Native procedural scene source remains scene.mjs with existing local Three.js and licence. Added bounded paving/bench detail and adjusted lighting; no generated image assets or external media. Browser desktop/phone views inspected; this is candidate lab presentation, not final accepted game art. Source hashes and validation are in private/production-evidence/2026-09-24/economy-lab-presentation/validation.json. Original five files are retained in the economy workspace work/economy-layer-before-20260924.

Next: user review of this lab presentation. The separately active Night Market task retains ownership of its deeper job loop. Campus/account integration and all real-student assessment remain separate. No publication was performed.


## Final validation boundary

Economy: 15/15 tests pass; all three JavaScript modules pass syntax checks. Blueprint: 46/49 scoped tests pass. The three failures are retained release-review gates (stale AGENTS review hash and missing WA register release review), also recorded before this task; no approval hashes were refreshed to imply a review. Change 81 and the full integration structure pass when release-file comparisons are checked separately. Generated export parity passes. The mirrored project-root AGENTS.md is filesystem read-only; canonical Blueprint and original economy-workspace AGENTS.md were updated. No local lab source commit exists because its original workspace is not a Git repository; original-file snapshot and source hashes provide recovery. Reset cancellation and J keyboard access were also checked in review mode.
