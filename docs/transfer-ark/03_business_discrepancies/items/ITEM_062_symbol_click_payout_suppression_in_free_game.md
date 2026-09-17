---
id: "transfer-ark:discrepancy:item_062_symbol_click_payout_suppression_in_free_game"
title: "Item #62: Symbol Click Payout Suppression In Free Game"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["SlotTable", "SlotSymbol", "PayTablePanel"]
tags: ["discrepancy_item_62", "symbol_click", "free_game", "paytable", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #62: Symbol Click Payout Suppression In Free Game

<!-- convention-summary-start -->
### Symbol Click Payout Suppression In Free Game Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #62: Symbol Click Payout Suppression In Free Game.
- **Key Mechanisms & Design**: Adopts Theo Ref (According to Reference Game). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#62` in `Compare Cocos vs Pixijs.xlsx` (Section 2: Big Win & Free Game)
- **Final Decision**: **Theo Ref (According to Reference Game)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Clicking Symbols on Matrix in Free Game** | Opens paytable popup modal for that symbol. | Symbol click is inactive / has no function in Free Game. | **Theo Ref**: Disable touch click listeners on matrix symbols during Free Game mode. |
