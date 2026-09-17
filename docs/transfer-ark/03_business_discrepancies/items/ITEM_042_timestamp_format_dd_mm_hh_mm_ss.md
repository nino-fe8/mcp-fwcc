---
id: "transfer-ark:discrepancy:item_042_timestamp_format_dd_mm_hh_mm_ss"
title: "Item #42: Timestamp Display Format In Bet History"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["BetHistoryPopup", "BetHistoryItem"]
tags: ["discrepancy_item_42", "timestamp", "datetime_format", "ark_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #42: Timestamp Display Format In Bet History

<!-- convention-summary-start -->
### Timestamp Display Format In Bet History Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #42: Timestamp Display Format In Bet History.
- **Key Mechanisms & Design**: Adopts Theo ARK Standard. Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#42` in `Compare Cocos vs Pixijs.xlsx` (Section 3: LSC & LSH)
- **Final Decision**: **Theo ARK Standard**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Timestamp Formatting** | Server raw timestamp. | Formatted as `dd/mm - hh:mm:ss`. | **Theo ARK Standard**: Format timestamp cleanly as `DD/MM - HH:mm:ss` for both Base Game and Free Spins detail records. |
