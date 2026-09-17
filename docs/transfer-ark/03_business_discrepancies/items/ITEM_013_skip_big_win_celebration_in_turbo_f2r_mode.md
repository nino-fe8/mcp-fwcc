---
id: "transfer-ark:discrepancy:item_013_skip_big_win_celebration_in_turbo_f2r_mode"
title: "Item #13: Skip Big Win Celebration in Turbo / F2R Mode"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["WinEffectModule", "SlotDirector", "TotalWinModule"]
tags: ["discrepancy_item_13", "big_win", "turbo_mode", "fast_to_result", "coin_particles", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #13: Skip Big Win Celebration in Turbo / F2R Mode

<!-- convention-summary-start -->
### Skip Big Win Celebration in Turbo / F2R Mode Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #13: Skip Big Win Celebration in Turbo / F2R Mode.
- **Key Mechanisms & Design**: Adopts Theo Ref (According to Reference Game). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `WinEffectModule9666.ts`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#13` in `Compare Cocos vs Pixijs.xlsx` (Section 2: Big Win & Free Game)
- **Final Decision**: **Theo Ref (According to Reference Game)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Big Win in Turbo Mode (F2R)** | Plays the full Big Win celebration popup and coin tally animation (5s - 12s) regardless of Turbo mode being ON. | Big Win celebration popup is skipped entirely. Instead, a lightweight coin falling particle effect plays on screen for 1 second, then directly proceeds to next spin. | **Theo Ref**: When Turbo is ON, bypass the modal celebration and trigger a quick 1-second ambient particle burst. |

---

## 2. 🛠️ Implementation Recipe
In `WinEffectModule9666.ts`:
```typescript
triggerWinEffect(winData: any): void {
    const isTurbo = this.gameLogic.isTurbo();
    if (isTurbo && winData.isBigWin) {
        // Skip modal celebration, play brief particle burst
        this.playLightCoinParticleEffect(1.0);
        this.gameLogic.emit(GameLogicUIEvents.WIN_EFFECT_COMPLETED);
        return;
    }
    super.triggerWinEffect(winData);
}
```
