---
id: "transfer-ark:discrepancy:item_009_unified_game_info_rules_paytable_popup"
title: "Item #09: Unified Game Info Popup Combining Rules and Paytable"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["PayTablePanel", "InfoRulePanel", "InfoFreeSpinPanel"]
tags: ["discrepancy_item_09", "game_info", "paytable", "game_rules", "tabbed_modal", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #09: Unified Game Info Popup Combining Rules and Paytable

<!-- convention-summary-start -->
### Unified Game Info Popup Combining Rules and Paytable Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #09: Unified Game Info Popup Combining Rules and Paytable.
- **Key Mechanisms & Design**: Adopts Theo Ref (According to Reference Game). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#9` in `Compare Cocos vs Pixijs.xlsx` (Section 4: Popups, Settings, Audio & Network)
- **QA Bug Tracking Link**: [ClickUp Task 86d4199nk](https://app.clickup.com/t/9008199668/86d4199nk)
- **Final Decision**: **Theo Ref (According to Reference Game)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Game Rules & Paytable Modals** | Game Rules and Paytable are maintained in separate, disconnected popups. | All gameplay info is organized into a single multi-page/tabbed `Info` modal (combining Paytable, Symbol multipliers, Feature descriptions, and General Rules). | **Theo Ref**: Merge into single unified `InfoPopup` with tab navigation. |
