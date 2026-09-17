---
id: "cc_slot_module:BaseUIPopup:game_flow:timing_execution_matrix"
title: "BaseUIPopup Timing Matrix"
category: "cc_slot_module"
tags: ["BaseUIPopup", "base_ui_popup", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ BaseUIPopup Timing Matrix

<!-- convention-summary-start -->
### BaseUIPopup Timing Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for BaseUIPopup Timing Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Animation Timing

| Transition Type | Behavior Implementation | Duration |
| :--- | :--- | :--- |
| Fade In / Out | `FadePopupBehavior` | $0.25\text{s} - 0.35\text{s}$ |
| Scale Bounce | `PopupBehavior` | $0.3\text{s}$ |
| Slide Drawer | `SlidePopupBehavior` | $0.35\text{s}$ |
