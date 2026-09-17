---
id: "transfer-ark:discrepancy:item_032_empty_state_pagination_buttons_behavior"
title: "Item #32 & #33: Empty State Pagination Buttons Disabled Behavior"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["BetHistoryPopup", "JackpotHistoryPopup"]
tags: ["discrepancy_item_32", "discrepancy_item_33", "pagination", "empty_state", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #32 & #33: Empty State Pagination Buttons Disabled Behavior

<!-- convention-summary-start -->
### Item #32 & #33: Empty State Pagination Buttons Disabled Behavior Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #32 & #33: Empty State Pagination Buttons Disabled Behavior.
- **Key Mechanisms & Design**: Adopts Theo Ref (According to Reference Game). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Rows**: `#32`, `#33` in `Compare Cocos vs Pixijs.xlsx` (Section 3: LSC & LSH)
- **Final Decision**: **Theo Ref (According to Reference Game)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Previous/Next Buttons When No Records Exist** | Completely hides previous/next page buttons (`node.active = false`). | Buttons remain visible on layout but are locked in disabled state (`interactable = false`). | **Theo Ref**: Keep pagination buttons visible; set `interactable = false` when no previous or next records exist. |
