---
id: "transfer-ark:discrepancy:item_005_paybar_click_opens_lsc_suppression"
title: "Item #05: Paybar Click Opens Bet History (LSC) Suppression"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["PaylineInfoModule", "BetHistoryPopup", "BetManager"]
tags: ["discrepancy_item_05", "paybar", "lsc", "bet_history", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #05: Paybar Click Opens Bet History (LSC) Suppression

<!-- convention-summary-start -->
### Paybar Click Opens Bet History (LSC) Suppression Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #05: Paybar Click Opens Bet History (LSC) Suppression.
- **Key Mechanisms & Design**: Adopts Theo Ref (According to Reference Game). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#5` in `Compare Cocos vs Pixijs.xlsx` (Section 3: LSC & LSH)
- **QA Bug Tracking Link**: [ClickUp Task 86d41a0b0](https://app.clickup.com/t/9008199668/86d41a0b0)
- **Final Decision**: **Theo Ref (According to Reference Game)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Clicking Paybar / Win Display Bar** | Opens Bet History (LSC) popup modal. | Clicking Paybar has no function / does not open Bet History. | **Theo Ref**: Disable touch click trigger on Paybar. Bet History is accessed exclusively through the Setting Menu. |
