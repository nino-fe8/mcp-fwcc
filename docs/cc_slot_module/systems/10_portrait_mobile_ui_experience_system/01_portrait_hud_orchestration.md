---
id: "cc_slot_module:systems:portrait_mobile_ui:hud_orchestration"
title: "Portrait Mobile HUD Orchestration & Thumb Zones"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "portrait_hud", "thumb_zone", "safe_area", "portrait_bet"]
---

# 📱 Portrait Mobile HUD Orchestration & Thumb Zones

<!-- convention-summary-start -->
### Portrait Mobile HUD Orchestration & Thumb Zones Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Portrait Mobile HUD Orchestration & Thumb Zones.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 10_portrait_mobile_ui_experience_system
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Thumb-Driven Layout Geometry
Portrait layouts concentrate primary interactive touch targets within the lower $30\%$ of the screen (the Natural Thumb Zone):
- **Center Right**: Large prominent Spin Button.
- **Center Left**: Quick Bet amount and Auto Spin toggle.
- **Bottom Left / Right**: Hamburger menu and Turbo mode toggle.
- **Top Safe Zone**: Header bar displaying cash balance and progressive jackpot meters outside the notch area.
