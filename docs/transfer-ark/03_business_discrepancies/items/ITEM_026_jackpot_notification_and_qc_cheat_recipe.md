---
id: "transfer-ark:discrepancy:item_026_jackpot_notification_and_qc_cheat_recipe"
title: "Item #26: Real-time Jackpot Notification & QC Cheat Testing Recipe"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["JackpotManager", "CheatDebugRuntime9666", "JackpotNotificationModule"]
tags: ["discrepancy_item_26", "jackpot_notification", "cheat_panel", "qc_recipe", "ark_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #26: Real-time Jackpot Notification & QC Cheat Testing Recipe

<!-- convention-summary-start -->
### Real-time Jackpot Notification & QC Cheat Testing Recipe Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #26: Real-time Jackpot Notification & QC Cheat Testing Recipe.
- **Key Mechanisms & Design**: Adopts Check SDK / Provide QC Cheat Recipe. Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#26` in `Compare Cocos vs Pixijs.xlsx` (Section 8: Miscellaneous & Jackpot)
- **Final Decision**: **Check SDK / Provide QC Cheat Recipe**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Jackpot Broadcast Notifications** | Displays floating jackpot winner banner across active slot rooms. | Broadcast banner presentation varies by operator skin. | **ARK Standard**: Support configurable Jackpot broadcast banners and provide dedicated cheat triggers in `CheatDebugRuntime9666` for QA verification. |

---

## 2. 🧪 QC Cheat Testing Recipe
```typescript
// Inject synthetic jackpot hit for QC testing
CheatDebugRuntime9666.getInstance().triggerSyntheticJackpotNotification({
    tier: "GRAND",
    winnerName: "QC_Tester_01",
    winAmount: 12500.50
});
```
