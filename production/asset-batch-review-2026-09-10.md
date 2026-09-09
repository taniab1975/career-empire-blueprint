# Asset review — complete items with their parts included

CE-CHANGE-20260910-24. Tania clarified that review batches should contain items, such as a building and its component parts, and that she does not want to approve every wall or flower.

[Open the whole-item register](/career-empire-blueprint/evidence/asset-review-20260910/index.html) · [Canonical delivery snapshot](/career-empire-blueprint/evidence/asset-review-20260910/register.json)

## What Tania approves

One complete building, asset or scene is one review item. Its walls, glazing, roof, planting and other listed components are included in that overall decision. A batch may contain up to 10 whole items; it is not a batch of 10 loose components. Small batches are valid.

Show the assembled result first. Keep the component breakdown available as optional supporting information. Tania can say “Approve the Avatar Studio” or flag an exception such as “Change the entrance sign.” Unflagged parts do not become separate approval tasks. An unresolved exception stays attached to its parent item with its own follow-up; do not falsely mark the exception resolved.

Only return an item for appearance review when Tania requests a revision or a later change materially affects the accepted look. Track all file/version changes and retain original decisions. Routine technical changes that preserve approved appearance need documented equivalence/technical checks, not another aesthetic approval for every part.

Overall appearance acceptance, technical validation, next-stage production authority and live-game deployment remain distinct. Approval of an item or batch does not silently authorise the next production stage.

## Current item

**Item 01 — Avatar Studio, revision 1.** One building package, with 14 existing component assets nested beneath it:

- Building components: walls, pier, window, entry frame, fins, canopy, fascia, post and paving.
- Entry/approach components: ramp and landing.
- Associated furniture: planter and bench.

The image is the existing component kit overview, not a completed Studio. The full building assembly does not exist, so this item is **incomplete and not ready for whole-building approval**. Component records say “included in whole-item review”; that is not a claim of approval. No item has been accepted and no Studio construction has begun.

The initial unpublished 10+4 loose-component proposal is replaced by this grouping. The earlier yes did not approve the kit or Studio continuation after Tania’s no. The current request sets up this review method only.

## Register and evidence

`data/asset-register.json` extends the existing visual register. It holds item IDs/revisions, assembly status, exact component versions and hashes, model/preview evidence and decision history. The public register is a generated view, not another Blueprint.

For an actual item approval, record the exact user instruction, approver, date, reviewed item/batch revision and its assembly/component snapshot. That item decision covers the listed parts unless exceptions are named; no duplicate component approval is required. Changed appearance receives a new review revision. Preserve previous decisions and the relationship between technical revisions and accepted design.

The page is read-only. It does not save approval decisions in browser storage; the maintainer records explicit item feedback in the canonical register and affected reader pages.

All 14 kit GLBs and the six original references are unchanged. The 17 V2 decisions, four production approvals, curriculum, experience mappings, pilot, session protocols and Definition of Done are preserved. Blazer remains paused.

V2.14 content publication is independently verified: 60 tests, TypeScript, focused lint, both builds and the full local reader suite passed. Whole-item review, optional component previews and affected reader pages passed live desktop/mobile checks; all 194 published files matched. The live publication manifest identifies the exact final source. No appearance approval or Studio construction is implied.
