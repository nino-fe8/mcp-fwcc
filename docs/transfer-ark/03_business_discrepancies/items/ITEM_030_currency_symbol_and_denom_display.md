---
id: "transfer-ark:discrepancy:item_030_currency_symbol_and_denom_display"
title: "Item #30: Currency Symbol & Denomination Display Standards"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["MoneyFormatter", "BetManager"]
tags: ["discrepancy_item_30", "currency", "denom", "cent", "dollar", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #30: Currency Symbol & Denomination Display Standards

<!-- convention-summary-start -->
### Currency Symbol & Denomination Display Standards Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #30: Currency Symbol & Denomination Display Standards.
- **Key Mechanisms & Design**: Adopts Theo Ref (According to Reference Game). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#30` in `Compare Cocos vs Pixijs.xlsx` (Section 5: Matrix, Paylines & Payouts)
- **Final Decision**: **Theo Ref (According to Reference Game)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Denomination Currency Display** | Displays only dollar values (`$`), eliminating fractional cent indications. | Renders cent indicators (`¢`) for fractional denominations (e.g. `5.00¢`). | **Theo Ref**: Support cent (`¢`) and dollar (`$`) formatters based on active currency config. |
