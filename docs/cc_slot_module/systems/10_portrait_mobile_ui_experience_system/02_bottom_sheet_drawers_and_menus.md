---
id: "cc_slot_module:systems:portrait_mobile_ui:bottom_sheet_drawers"
title: "Bottom Sheet Drawers & Slide-Out Menus"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "bottom_sheet", "auto_spin_panel", "bet_selection_panel", "menu_panel"]
---

# 📑 Bottom Sheet Drawers & Slide-Out Menus

<!-- convention-summary-start -->
### Bottom Sheet Drawers & Slide-Out Menus Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Bottom Sheet Drawers & Slide-Out Menus.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 10_portrait_mobile_ui_experience_system
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Sliding Bottom Sheets
Rather than centered desktop popups, portrait games utilize bottom-anchored modal sheets:
1. **`AutoSpinPanel`**: Slide-up sheet allowing players to pick 10, 20, 50, 100 auto rounds with custom stop-on-win loss limits.
2. **`BetSelectionPanel`**: Displays grid of pre-configured bet denominations for one-tap bet switching.
3. **`MenuPanel`**: Slide-out hamburger drawer providing fast access to Paytable, History, Sound Settings, and Game Rules.
