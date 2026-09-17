---
id: "transfer-ark:discrepancy:item_028_paybar_ktt_tips_and_win_text_formatting"
title: "Item #28: Paybar Tips Suppression & Win Text Formatting"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["PaylineInfoModule", "PaylineInfoModule9666"]
tags: ["discrepancy_item_28", "paybar", "win_text", "tips", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #28: Paybar Tips Suppression & Win Text Formatting

<!-- convention-summary-start -->
### Paybar Tips Suppression & Win Text Formatting Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #28: Paybar Tips Suppression & Win Text Formatting.
- **Key Mechanisms & Design**: Adopts Theo Ref (According to Reference Game). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#28` in `Compare Cocos vs Pixijs.xlsx` (Section 5: Matrix, Paylines & Payouts)
- **Final Decision**: **Theo Ref (According to Reference Game)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Paybar State When Idle & Winning** | Shows gameplay tips when idle; shows `Win $XXX.XX` or `Total Win $YYY.YY` on win. | Shows blank space when idle (no tips); shows purely `$XXX.XX` without "Win" prefix on win. | **Theo Ref**: Format win text directly as `$XXX.XX` without redundant prefix words. |
