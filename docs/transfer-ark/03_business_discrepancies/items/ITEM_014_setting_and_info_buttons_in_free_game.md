---
id: "transfer-ark:discrepancy:item_014_setting_and_info_buttons_in_free_game"
title: "Item #14: Setting and Info Buttons Accessibility in Free Game"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["MenuPanel", "GameModeDirectorModule", "SlotButtonNormal"]
tags: ["discrepancy_item_14", "free_game", "setting_button", "info_button", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #14: Setting and Info Buttons Accessibility in Free Game

<!-- convention-summary-start -->
### Setting and Info Buttons Accessibility in Free Game Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #14: Setting and Info Buttons Accessibility in Free Game.
- **Key Mechanisms & Design**: Adopts Theo Ref (According to Reference Game). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#14` in `Compare Cocos vs Pixijs.xlsx` (Section 2: Big Win & Free Game)
- **QA Bug Tracking Link**: [ClickUp Task 86d41ahrn](https://app.clickup.com/t/9008199668/86d41ahrn)
- **Final Decision**: **Theo Ref (According to Reference Game)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Setting & Info Buttons in Free Game** | Buttons are hidden or disabled during Free Game mode. | Setting and Info buttons remain visible and fully interactive in Free Game. | **Theo Ref**: Keep Setting and Info buttons visible and interactive in Free Game mode. |
