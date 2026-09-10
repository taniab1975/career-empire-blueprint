# Correct live game destination

Hosting correction: the live game is https://emmanuel-ict-support.github.io/GTCEM-Career-Empire/playable-3d/ (Emmanuel-ICT-Support/GTCEM-Career-Empire, main, Pages root). The Blueprint is a separate planning website. Its former embedded playable route is a redirect to the game, not an independent live deployment. The V2.16 preview-only publication was incorrectly reported as a game release; CE-CHANGE-20260910-28 records the correction.

## Scope

Apply the tested arrival code to the latest actual game source, preserving existing module and avatar behavior. The obsolete Studio download is removed from startup; the native Studio must remain usable if optional scenery fails. Full game checks and actual live walking/save/reload checks are required. No blanket asset approval or classroom certification.

## Current status

Actual game https://emmanuel-ict-support.github.io/GTCEM-Career-Empire/playable-3d/ verified at content commit 0b0e9505e14fdca6bfdbee6795bf157e881c4400; exact five runtime hashes and keyboard walk/Studio save/return/reload/mobile pass. Local CI: six unit tests and 30 browser tests pass. Blueprint correction source 6830edd58ad512bf280dc0485d14ad06ab768b6c: all 271 files match, desktop/mobile links pass, and the former preview redirects to the actual game.
