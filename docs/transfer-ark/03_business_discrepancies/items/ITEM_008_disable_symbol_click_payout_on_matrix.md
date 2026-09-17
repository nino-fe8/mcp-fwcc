---
id: "transfer-ark:discrepancy:item_008_disable_symbol_click_payout_on_matrix"
title: "Item #08: Disable Symbol Click Payout On Reel Matrix Board"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["SlotTable", "SlotSymbol", "PayTablePanel"]
tags: ["discrepancy_item_08", "symbol_click", "matrix", "payout", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #08: Disable Symbol Click Payout On Reel Matrix Board

<!-- convention-summary-start -->
### Disable Symbol Click Payout On Reel Matrix Board Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #08: Disable Symbol Click Payout On Reel Matrix Board.
- **Key Mechanisms & Design**: Adopts Theo Ref (According to Reference Game). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#8` in `Compare Cocos vs Pixijs.xlsx` (Section 5: Matrix, Paylines & Payouts)
- **QA Bug Tracking Link**: [ClickUp Task 86d41a08z](https://app.clickup.com/t/9008199668/86d41a08z)
- **Final Decision**: **Theo Ref (According to Reference Game)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Clicking Symbols on Matrix** | Clicking any symbol cell on the reel board opens a tooltip / mini paytable popup showing payout values. | Clicking symbols on matrix has no function / does nothing. | **Theo Ref**: Disable touch listeners on all matrix symbol cells. |
