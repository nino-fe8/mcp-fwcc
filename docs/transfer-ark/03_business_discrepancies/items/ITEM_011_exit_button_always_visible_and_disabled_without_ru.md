---
id: "transfer-ark:discrepancy:item_011_exit_button_always_visible_and_disabled_without_ru"
title: "Item #11: Exit Button Always Visible and Disabled When &ru Parameter Is Absent"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["BackToLobbyModule", "BackToLobbyModule9666", "MenuPanel"]
tags: ["discrepancy_item_11", "exit_button", "ru_parameter", "disabled_state", "bug_011", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #11: Exit Button Always Visible and Disabled When &ru Parameter Is Absent

<!-- convention-summary-start -->
### Exit Button Always Visible and Disabled When &ru Parameter Is Absent Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #11: Exit Button Always Visible and Disabled When &ru Parameter Is Absent.
- **Key Mechanisms & Design**: Adopts Theo Ref (According to Reference Game). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `../01_bugs_and_gotchas/BUG_011_exit_button_always_visible_and_disabled_without_return_url_ru_param.md`
- **Related Docs**: [`BUG_011_exit_button_always_visible_and_disabled_without_return_url_ru_param.md`](../01_bugs_and_gotchas/BUG_011_exit_button_always_visible_and_disabled_without_return_url_ru_param.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#11` in `Compare Cocos vs Pixijs.xlsx` (Section 4: Popups, Settings, Audio & Network)
- **Detailed Bug & Architecture Doc**: [`BUG_011_exit_button_always_visible_and_disabled_without_return_url_ru_param.md`](../01_bugs_and_gotchas/BUG_011_exit_button_always_visible_and_disabled_without_return_url_ru_param.md)
- **Final Decision**: **Theo Ref (According to Reference Game)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Exit Button Visibility Without `&ru`** | Automatically hides the Exit node entirely (`this.node.active = false`). | Exit button is always visible on layout; if `&ru` is absent, the button is rendered in disabled state (`interactable = false`) and has no function. | **Theo Ref (`BUG_011`)**: Always keep node active (`this.node.active = true`) and set `button.interactable = Boolean(hasRuParam)`. Guard `trigger()` to block execution when `canBackToLobby() == false`. |
