---
id: "transfer-ark:feature:jackpot_win_cutscene:01_overview"
title: "Jackpot Win Cutscene - Overview & Business Requirements"
category: "feature"
game_ids: ["g9666", "all"]
sdk_modules: ["JackpotWinModule", "CutsceneController"]
tags: ["overview", "requirements", "jackpot_win", "cutscene", "celebration"]
created_at: "2026-09-17"
author: "ARK Slot Engineering Team"
---

# 1. 📌 Overview & Business Requirements

<!-- convention-summary-start -->
### Jackpot Win Cutscene - Overview & Business Requirements Summary

- **Core Architecture / Purpose**: Detailed specifications and gameplay requirements for the Jackpot Win Celebration cutscene.
- **Key Mechanisms & Design**: 2-stage visual presentation (Collected symbols parade followed by Jackpot Banner), precise number rollup, and audio immersion.
- **Domain Capabilities**: feature, RECIPE_005_jackpot_win_celebration_cutscene
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/Cutscene/`
- **Related Docs**: [Master Index](./INDEX.md), [02. State Machine & Lifecycle](./02_state_machine_and_lifecycle.md)
<!-- convention-summary-end -->

---

## 1.1 Business Goals

Jackpot is the ultimate milestone in a slot game. A simple modal popup or basic text count is unacceptable. The ARK production standard requires:

1. **Acknowledgment Stage (Symbol Parade)**: First, show the contributing symbols that unlocked this jackpot (e.g. 3, 4, 5, or 6 character avatars) aligned in animated bone slots (`idle_symbol_X`).
2. **Grand Celebration Stage (Main Banner)**: An explosive intro animation (`in`) brings in the golden chest/banner, coins, and sparkles.
3. **Harmonized Rollup**: Win amount text counts from `0` to the full jackpot value in lockstep with a looping coin ticker sound (`COUNTING`).
4. **Intuitive Controls**:
   - Tap or Spacebar fast-forwards the rollup to the target value.
   - A 1.0s debounce locks dismissal so the player doesn't accidentally dismiss the screen.
   - A subsequent tap or 3.0s idle timer triggers the graceful `out` exit.
5. **Acoustic Polish**: Swaps the current music to `BGM_JACKPOT`, and cleanly restores Free Game or Base Game BGM upon exit.

---

## 1.2 Vendor SDK vs ARK Business Discrepancy

```
+-------------------------------------------------------------------------+
|                           VENDOR SDK DEFAULT                            |
|  - Simple tween or fixed timer before exiting cutscene.                 |
|  - Static Label positioning in prefab, decoupling from Spine movements. |
|  - Basic click dismiss without double-tap debounce or Spacebar filter.  |
|  - Abrupt audio stops without cross-fade.                               |
+-------------------------------------------------------------------------+
                                    vs
+-------------------------------------------------------------------------+
|                         ARK BUSINESS STANDARD                           |
|  - 4-State finite state machine (IDLE, COUNTING, COMPLETED, CLOSING).   |
|  - Real-time bone tracking (slot_coin) follows Spine squash & bounce.  |
|  - Spine events (money_count, money_out) sync visual & audio timing.    |
|  - Debounced Spacebar and Touch controls with open-dialog suppression.  |
|  - Mode-aware BGM cross-fade restore (Free Game vs Base Game).          |
+-------------------------------------------------------------------------+
```
