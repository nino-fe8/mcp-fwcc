---
id: "transfer-ark:discrepancy:item_061_game_version_display_in_setting_only"
title: "Item #61: Game Version Display In Setting Menu Only"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["ActionPanel", "MenuPanel", "SettingPanel"]
tags: ["discrepancy_item_61", "version_display", "setting_menu", "action_panel", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #61: Game Version Display In Setting Menu Only

<!-- convention-summary-start -->
### Game Version Display In Setting Menu Only Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #61: Game Version Display In Setting Menu Only.
- **Key Mechanisms & Design**: Adopts Theo Ref (According to Reference Game). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#61` in `Compare Cocos vs Pixijs.xlsx` (Section 2: Big Win & Free Game)
- **Final Decision**: **Theo Ref (According to Reference Game)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Game Version String Location** | Visible directly on the Action Panel / bottom footer. | Version text is completely hidden from Action Panel and only rendered inside the Setting Menu. | **Theo Ref**: Remove version string label from main Action Panel; display it exclusively inside the Setting Menu modal. |
