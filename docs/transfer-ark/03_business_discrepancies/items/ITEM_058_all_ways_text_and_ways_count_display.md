---
id: "transfer-ark:discrepancy:item_058_all_ways_text_and_ways_count_display"
title: "Item #58 & #59: All Ways Text and Dynamic Ways Count Display"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["SlotTable", "WaysCounterModule"]
tags: ["discrepancy_item_58", "discrepancy_item_59", "all_ways", "ways_counter", "matrix_board", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #58 & #59: All Ways Text and Dynamic Ways Count Display

<!-- convention-summary-start -->
### Item #58 & #59: All Ways Text and Dynamic Ways Count Display Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #58 & #59: All Ways Text and Dynamic Ways Count Display.
- **Key Mechanisms & Design**: Adopts Theo Ref (According to Reference Game). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Rows**: `#58`, `#59` in `Compare Cocos vs Pixijs.xlsx` (Section 5: Matrix, Paylines & Payouts)
- **Final Decision**: **Theo Ref (According to Reference Game)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **All Ways Board Indication** | Static payline count indicator. | Displays animated "WAYS" badge on matrix board with dynamic ways count calculation (e.g. `2048 WAYS` up to dynamic column heights). | **Theo Ref**: Render dedicated WAYS indicator box on the top-right matrix frame. |
