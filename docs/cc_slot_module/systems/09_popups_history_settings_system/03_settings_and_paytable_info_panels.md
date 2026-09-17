---
id: "cc_slot_module:systems:popups_history_settings:settings_and_info"
title: "Settings & Paytable Info Panels Subsystem"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "setting_panel", "info_panel", "paytable", "pageview_indicator"]
---

# ⚙️ Settings & Paytable Info Panels Subsystem

<!-- convention-summary-start -->
### Settings & Paytable Info Panels Subsystem Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Settings & Paytable Info Panels Subsystem.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_popups_history_settings_system
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. SettingPanel Architecture
`SettingPanel` coordinates user preferences:
- BGM & SFX volume sliders with live audio preview and `sys.localStorage` persistence.
- Turbo / Fast Play toggle switches.
- Vibration & Battery Saver mode selectors.

---

## 2. InfoPanel & Multi-Page Paytable Architecture
`InfoPanel` implements a multi-page interactive rulebook:
- Uses `cc.PageView` with dynamic page dot indicators (`PageViewIndicator`).
- Dynamically recalculates displayed symbol payout values whenever the player adjusts their active bet level, ensuring players see exact cash payout amounts rather than abstract coin multipliers.
