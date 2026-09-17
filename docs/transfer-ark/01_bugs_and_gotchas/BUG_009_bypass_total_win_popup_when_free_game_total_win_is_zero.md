---
id: "transfer-ark:bugfix:bypass_total_win_popup_when_free_game_total_win_is_zero"
title: "Bypass Total Win Popup When Free Game Total Win is Zero"
category: "bugfix"
game_ids: ["g9666","all"]
sdk_modules: ["TotalWinModule","TotalWinModule9666","BaseCutscene","FreeGameWriterModule"]
tags: ["total_win","zero_win","free_game_end","cutscene","popup_bypass","g9666"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# BUG-009: Bypass Total Win Popup When Free Game Total Win is Zero

<!-- convention-summary-start -->
### Bypass Total Win Popup When Free Game Total Win is Zero Summary

- **Core Architecture / Purpose**: Documents root cause, architectural pitfalls, reproduction steps, and official code fix for Bypass Total Win Popup When Free Game Total Win is Zero.
- **Key Mechanisms & Design**: Guards edge cases, prevents race conditions/null crashes, and enforces state machine integrity during game transitions.
- **Domain Capabilities**: bugfix, 01_bugs_and_gotchas
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/Cutscene/TotalWinModule9666.ts`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. 📌 Problem / Feature Overview
- **Issue / Requirement**: When completing Free Game / feature spins with a total win amount of 0 (win total = 0), the TotalWinModule9666 popup was still being displayed and playing counting animations / BGM for a win amount of 0 instead of immediately bypassing the popup and transitioning directly back to the base game.
- **Occurrence Scope**: Affects spinning reel strip generation during normal, turbo, and free spins.

---

## 2. 🏢 Vendor SDK vs ARK Business Discrepancy
- **Vendor SDK Default Behavior**: Default `cc-common` implementation does not account for customized business rules and game constraints.
- **ARK Business Requirement**: Ensure correct symbol distribution, visual feedback, and zero regressions across all reel columns.

---

## 3. 🔍 Root Cause Analysis in Base SDK
- Offending modules: `TotalWinModule`, `TotalWinModule9666`, `BaseCutscene`, `FreeGameWriterModule`.
- Unfiltered random selection or missing size format mapping in configuration arrays.

---

## 4. 🛠️ Implementation & Override Solution
```typescript
getTotalWinAmount(): number {
    const winAmountContent = this.content ? this.content.winAmount : undefined;
    const winAmountPS = this.dataStore ? this.dataStore.getWinAmountPS() : 0;
    const totalWin = Number(winAmountContent !== undefined && winAmountContent !== null ? winAmountContent : winAmountPS) || 0;
    return totalWin;
}

enter(): void {
    this.node.stopAllActions();
    this.cleanupTweens();

    this._targetWinAmount = this.getTotalWinAmount();
    if (this._targetWinAmount <= 0) {
        this.exit();
        return;
    }

    if (!this._lbWinAmount && this.winAmount) {
        this._lbWinAmount = this.winAmount.getComponent(cc.Label);
    }
    if (this._lbWinAmount) {
        this._lbWinAmount.node.active = true;
        this._lbWinAmount.string = this.moneyFormatter
            ? this.moneyFormatter.formatMoney(0)
            : "0";
    }

    this._popupState = TotalWinState.COUNTING;
    this._canClickToClose = false;
    this.animDuration = 7.0;

    this.playSoundStart();
    this.playSkeletonAnim();
    this.startCountingMoney();
}
```

---

## 5. ⚠️ Gotchas & Edge Cases
1. **Zero-Code Modification on `cc-common`**: Never modify base engine files directly; apply overrides in game-specific classes.
2. **Buffer Rows Margin**: Ensure `BUFFER_TOP >= 3` and `BUFFER_BOT >= 3` for multi-size symbols to avoid visual clipping.
3. **Safety Guards**: Always guard against empty array pools.

---

## 6. ♻️ Reusability Guide for Future Game Titles
1. Identify the target game config and reel module classes.
2. Apply the dynamic generator and override pattern in the game subclass.
3. Verify that reel strips render all symbol sizes properly during continuous spin.

---

## 7. 🔗 Codebase References
- `assets/cc-release-slot/cc1-red-cliff/scripts/Cutscene/TotalWinModule9666.ts`
