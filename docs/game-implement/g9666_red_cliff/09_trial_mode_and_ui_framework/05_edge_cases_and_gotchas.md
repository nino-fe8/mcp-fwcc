---
id: "game-implement:9666:trial:edge_cases_and_gotchas"
title: "Red Cliff (g9666) Trial Mode Edge Cases & Gotchas"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "trial_mode", "gotchas", "edge_cases", "reconciliation"]
---

# ⚠️ Red Cliff (g9666) Trial Mode Edge Cases & Gotchas

<!-- convention-summary-start -->
### Red Cliff (g9666) Trial Mode Edge Cases & Gotchas Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Red Cliff (g9666) Trial Mode Edge Cases & Gotchas.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: game_implement, 09_trial_mode_and_ui_framework
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Gotcha: Full Display Cutscene Locking Toggle Interaction
- **Symptom**: User taps Trial banner while Big Win or Free Spin Intro cutscene is displaying, causing UI glitches.
- **Root Cause**: Mode transition occurring mid-cutscene disrupts active Spine animations.
- **Fix**: `TrialModeToggleButton9666` listens to `SHOW_FULL_DISPLAY_CUTSCENE` / `HIDE_FULL_DISPLAY_CUTSCENE` and explicitly sets `_isCutsceneBlocking = true`, disabling button interactivity until the cutscene concludes.

---

## 2. Gotcha: Promotion Dialog Overlap Lockout
- **Symptom**: Toggle button is disabled when a promotion banner is active.
- **Root Cause**: `_promotionData.isActive` prevents changing mode while promotional bonuses are pending.
- **Fix**: Verified `!this._hasPromotion` in `refreshState()`.

---

## 3. Gotcha: Bet & Wallet Isolation
- **Symptom**: Real balance is shown during Trial Mode or trial balance leaks into Real Mode.
- **Root Cause**: GameConfig default wallet trial not loaded.
- **Fix**: `GameConfig9666.DEFAULT_WALLET_TRIAL` injects virtual $1,000,000 balance with default bet `DEFAULT_TRIAL_BET_ID = '70'`, cleanly isolated from real wallet data stores.
