---
id: "cc_slot_module:PopupControllerModule:game_flow:spin_phase_breakdown"
title: "PopupControllerModule Spin Phase Lifecycle"
category: "cc_slot_module"
tags: ["PopupControllerModule", "popup_controller", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 PopupControllerModule Spin Phase Lifecycle

<!-- convention-summary-start -->
### PopupControllerModule Spin Phase Lifecycle Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for PopupControllerModule Spin Phase Lifecycle.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Game Flow Breakdown

| Phase / State | PopupControllerModule Status |
| :--- | :--- |
| **Idle Normal Game** | Popups can open (`isDisplayPopup()` becomes true). |
| **Spin Start** | `isDisplayPopup()` queried; spin rejected if true. |
| **Feature / Free Game** | Modal popups may be blocked or restricted depending on feature rules. |
