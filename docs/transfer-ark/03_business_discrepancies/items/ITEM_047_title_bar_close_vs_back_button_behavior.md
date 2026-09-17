---
id: "transfer-ark:discrepancy:item_047_title_bar_close_vs_back_button_behavior"
title: "Item #47 & #48: Title Bar Close vs Back Button Behavior in History"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["BetHistoryDetailManagerBase", "BetHistoryPopup"]
tags: ["discrepancy_item_47", "discrepancy_item_48", "title_bar", "close_button", "back_button", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #47 & #48: Title Bar Close vs Back Button Behavior in History

<!-- convention-summary-start -->
### Item #47 & #48: Title Bar Close vs Back Button Behavior in History Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #47 & #48: Title Bar Close vs Back Button Behavior in History.
- **Key Mechanisms & Design**: Adopts Theo Ref (According to Reference Game). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Rows**: `#47`, `#48` in `Compare Cocos vs Pixijs.xlsx` (Section 3: LSC & LSH)
- **Final Decision**: **Theo Ref (According to Reference Game)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Title Navigation Button** | Has a `Back` button that returns to master LSC list. | Has only a `Close` button on title bar; clicking `Close` closes the entire modal. | **Theo Ref**: Standardize detail modal title bar with `Close` button. |
