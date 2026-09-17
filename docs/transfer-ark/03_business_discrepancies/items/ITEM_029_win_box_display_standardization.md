---
id: "transfer-ark:discrepancy:item_029_win_box_display_standardization"
title: "Item #29: Standalone Win Box Removal In Favor Of Paybar"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["ActionPanel", "PaylineInfoModule"]
tags: ["discrepancy_item_29", "win_box", "paybar", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #29: Standalone Win Box Removal In Favor Of Paybar

<!-- convention-summary-start -->
### Standalone Win Box Removal In Favor Of Paybar Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #29: Standalone Win Box Removal In Favor Of Paybar.
- **Key Mechanisms & Design**: Adopts Theo Ref (According to Reference Game). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#29` in `Compare Cocos vs Pixijs.xlsx` (Section 5: Matrix, Paylines & Payouts)
- **Final Decision**: **Theo Ref (According to Reference Game)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Win Box vs Paybar** | Renders both a separate Win Box container and a Paybar label. | No separate Win Box container; all win amounts stream directly into the bottom Paybar. | **Theo Ref**: Remove redundant standalone Win Box and unify on Paybar. |
