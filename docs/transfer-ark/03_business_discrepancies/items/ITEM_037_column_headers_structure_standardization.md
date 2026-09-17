---
id: "transfer-ark:discrepancy:item_037_column_headers_structure_standardization"
title: "Item #37 & #38: Column Headers Structure & Page X/Y Pagination"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["BetHistoryPopup", "BetHistoryManager"]
tags: ["discrepancy_item_37", "discrepancy_item_38", "columns", "headers", "pagination", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #37 & #38: Column Headers Structure & Page X/Y Pagination

<!-- convention-summary-start -->
### Item #37 & #38: Column Headers Structure & Page X/Y Pagination Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #37 & #38: Column Headers Structure & Page X/Y Pagination.
- **Key Mechanisms & Design**: Adopts Theo Ref (According to Reference Game). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Rows**: `#37`, `#38` in `Compare Cocos vs Pixijs.xlsx` (Section 3: LSC & LSH)
- **Final Decision**: **Theo Ref (According to Reference Game)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Bet History Table Columns** | Only 3 columns: `Time`, `Total Bet`, `Total Win`. | 6 detailed columns: `#`, `Time`, `Lines`, `Bet`, `Win`, `Result`. | **Theo Ref**: Standardize table header row to include all 6 columns, with pagination formatted as `Page X/Y`. |
