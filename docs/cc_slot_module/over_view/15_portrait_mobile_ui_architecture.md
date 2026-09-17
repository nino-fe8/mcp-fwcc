---
id: "cc_slot_module:overview:portrait_mobile_ui_architecture"
title: "Portrait Mobile UI Architecture & Touch UX Philosophy"
category: "cc_slot_module"
tags: ["cc_slot_module", "overview", "portrait_ui", "mobile_ux", "thumb_zone", "bottom_sheet"]
---

# 📱 Portrait Mobile UI Architecture & Touch UX Philosophy

<!-- convention-summary-start -->
### Portrait Mobile UI Architecture & Touch UX Philosophy Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Portrait Mobile UI Architecture & Touch UX Philosophy.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, over_view
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Mobile-First Slot Design
The modern slot gaming market is over 80% mobile portrait. `cc-slot-module` provides a dedicated portrait architecture designed for vertical single-handed operation:
- **Ergonomic Thumb Zones**: Interactive controls positioned in the natural arc of the player's thumb.
- **Sliding Drawers**: Replaces intrusive modal popups with slide-up bottom sheets (`AutoSpinPanel`, `BetSelectionPanel`, `MenuPanel`).
- **Dynamic Vertical Paytables**: Vertically scrolling rulebooks that recalculate cash payouts in real-time based on active bet sizing.
- **Micro-Interactions**: Floating win tooltips and intelligent Turbo mode suggestions based on spin frequency.
