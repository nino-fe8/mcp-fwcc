---
id: "transfer-ark:discrepancy:item_022_auto_enter_action_panel_after_loading"
title: "Item #22 & #23: Auto-Enter Action Panel Upon 100% Loading (Bypass Tap To Start)"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["LoadingScreenModule", "LoadingScreenModule9666", "GameInit"]
tags: ["discrepancy_item_22", "discrepancy_item_23", "tap_to_start", "auto_enter", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #22 & #23: Auto-Enter Action Panel Upon 100% Loading (Bypass Tap To Start)

<!-- convention-summary-start -->
### Item #22 & #23: Auto-Enter Action Panel Upon 100% Loading (Bypass Tap To Start) Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #22 & #23: Auto-Enter Action Panel Upon 100% Loading (Bypass Tap To Start).
- **Key Mechanisms & Design**: Adopts Theo Ref (According to Reference Game). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Rows**: `#22`, `#23` in `Compare Cocos vs Pixijs.xlsx` (Section 7: Splash & Loading)
- **Final Decision**: **Theo Ref (According to Reference Game)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Splash Transition After 100% Loading** | Halts at splash screen and presents animated "TAP TO START" prompt requiring user click. | Automatically enters Action Panel scene immediately once assets and network session reach 100%. | **Theo Ref**: Bypass "Tap to Start" requirement; auto-transition into Action Panel when bootstrap completes. |
