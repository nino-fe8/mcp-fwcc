---
id: "transfer-ark:discrepancy:item_063_single_combined_payline_presentation"
title: "Item #63: Single Combined Payline Presentation On Matrix Board"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["PaylineDirector", "WinEffectModule", "SlotTable"]
tags: ["discrepancy_item_63", "paylines", "combined_win", "matrix_board", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #63: Single Combined Payline Presentation On Matrix Board

<!-- convention-summary-start -->
### Single Combined Payline Presentation On Matrix Board Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #63: Single Combined Payline Presentation On Matrix Board.
- **Key Mechanisms & Design**: Adopts Theo Ref (According to Reference Game). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#63` in `Compare Cocos vs Pixijs.xlsx` (Section 2: Big Win & Free Game)
- **Final Decision**: **Theo Ref (According to Reference Game)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Payline Rendering When Multiple Lines Win** | Sequentially renders individual line paths across the matrix with individual win amounts per line. | Does not draw individual vertical/zig-zag payline tracks. Instead, renders a single aggregated total win overlay for all winning lines directly on the matrix board. | **Theo Ref**: Aggregate multi-line payouts into a single unified matrix overlay. |
