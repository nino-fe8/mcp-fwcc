---
id: "transfer-ark:discrepancy:item_027_single_payline_for_multi_symbol_combines"
title: "Item #27: Single Unified Payline Display For Multi-Symbol Combines"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["PaylineDirector", "WinEffectModule"]
tags: ["discrepancy_item_27", "paylines", "multi_combines", "unified_display", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #27: Single Unified Payline Display For Multi-Symbol Combines

<!-- convention-summary-start -->
### Single Unified Payline Display For Multi-Symbol Combines Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #27: Single Unified Payline Display For Multi-Symbol Combines.
- **Key Mechanisms & Design**: Adopts Theo Ref (According to Reference Game). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#27` in `Compare Cocos vs Pixijs.xlsx` (Section 5: Matrix, Paylines & Payouts)
- **Final Decision**: **Theo Ref (According to Reference Game)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Simultaneous Multi-Symbol Wins** | Draws multiple separate payline tracks with individual win amounts on each line. | Renders a single unified payline indicator with total sum amount of all combines. | **Theo Ref**: Consolidate multi-combine wins into single aggregated payline presentation. |
