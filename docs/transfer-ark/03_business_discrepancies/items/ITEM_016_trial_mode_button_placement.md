---
id: "transfer-ark:discrepancy:item_016_trial_mode_button_placement"
title: "Item #16: Trial Mode Button Placement on Action Panel"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["ActionPanel", "PayTablePanel"]
tags: ["discrepancy_item_16", "trial_mode", "demo_mode", "button_placement", "ark_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #16: Trial Mode Button Placement on Action Panel

<!-- convention-summary-start -->
### Trial Mode Button Placement on Action Panel Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #16: Trial Mode Button Placement on Action Panel.
- **Key Mechanisms & Design**: Adopts Theo ARK Standard. Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#16` in `Compare Cocos vs Pixijs.xlsx` (Section 6: Demo Mode vs Real Mode)
- **Final Decision**: **Theo ARK Standard**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Trial Mode Entry Button Location** | Button located directly on the main Action Panel for immediate visibility. | Button located inside the Info/Rule modal (under question mark button). | **Theo ARK Standard**: Retain Trial Mode toggle button on main Action Panel for rapid access. |
