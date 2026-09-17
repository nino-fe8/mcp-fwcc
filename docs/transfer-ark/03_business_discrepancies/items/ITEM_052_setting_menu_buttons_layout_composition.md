---
id: "transfer-ark:discrepancy:item_052_setting_menu_buttons_layout_composition"
title: "Item #52: Setting Menu Buttons Layout & Structure Composition"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["SettingPanel", "MenuPanel"]
tags: ["discrepancy_item_52", "setting_menu", "layout", "checkboxes", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #52: Setting Menu Buttons Layout & Structure Composition

<!-- convention-summary-start -->
### Setting Menu Buttons Layout & Structure Composition Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #52: Setting Menu Buttons Layout & Structure Composition.
- **Key Mechanisms & Design**: Adopts Theo Ref (According to Reference Game). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#52` in `Compare Cocos vs Pixijs.xlsx` (Section 4: Popups, Settings, Audio & Network)
- **Final Decision**: **Theo Ref (According to Reference Game)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Setting Menu Elements** | Mixed button list depending on `&ru` (Exit, Sound, Paytable, Rules, History, Close). | Fixed consistent layout: Checkbox BGM, Checkbox SFX, Button LSH (Jackpot History), Button LSC (Bet History). | **Theo Ref**: Standardize Setting Menu layout to 2 audio checkboxes and 2 history entry buttons. |
