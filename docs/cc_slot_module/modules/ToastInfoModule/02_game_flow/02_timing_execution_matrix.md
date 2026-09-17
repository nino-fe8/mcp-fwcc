---
id: "cc_slot_module:ToastInfoModule:game_flow:timing_execution_matrix"
title: "ToastInfoModule Timing Matrix"
category: "cc_slot_module"
tags: ["ToastInfoModule", "toast_info_module", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ ToastInfoModule Timing Matrix

<!-- convention-summary-start -->
### ToastInfoModule Timing Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for ToastInfoModule Timing Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Timing Configuration

| Phase | Duration |
| :--- | :--- |
| Scale-In | $0.2\text{s}$ |
| Dwell (`delayTime`) | $1.5\text{s}$ (configurable) |
