---
id: "transfer-ark:discrepancy:item_021_loading_bar_text_and_animation_standard"
title: "Item #21: Loading Bar Text & Loading Animation Standard"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["LoadingScreenModule", "LoadingScreenModule9666"]
tags: ["discrepancy_item_21", "loading_bar", "splash", "ark_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #21: Loading Bar Text & Loading Animation Standard

<!-- convention-summary-start -->
### Loading Bar Text & Loading Animation Standard Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #21: Loading Bar Text & Loading Animation Standard.
- **Key Mechanisms & Design**: Adopts Theo ARK Standard. Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#21` in `Compare Cocos vs Pixijs.xlsx` (Section 7: Splash & Loading)
- **Final Decision**: **Theo ARK Standard**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Splash Loading Indicator** | Displays animated "Loading..." text and percentage bar. | Displays progress bar without "Loading..." text. | **Theo ARK Standard**: Retain clear "Loading..." text and smooth percentage progress bar. |
