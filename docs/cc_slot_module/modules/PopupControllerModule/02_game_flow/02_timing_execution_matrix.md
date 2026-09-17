---
id: "cc_slot_module:PopupControllerModule:game_flow:timing_execution_matrix"
title: "PopupControllerModule Timing Matrix"
category: "cc_slot_module"
tags: ["PopupControllerModule", "popup_controller", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ PopupControllerModule Timing Matrix

<!-- convention-summary-start -->
### PopupControllerModule Timing Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for PopupControllerModule Timing Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Timing Configuration

| Method | Execution Duration |
| :--- | :--- |
| `onLoad` | Synchronous frame execution ($0.0\text{s}$) |
| `isDisplayPopup` | Immediate evaluation ($0.0\text{s}$) |
