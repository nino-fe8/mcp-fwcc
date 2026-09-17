---
id: "cc_slot_module:DialogMessageModule:game_flow:timing_execution_matrix"
title: "DialogMessageModule Timing Matrix"
category: "cc_slot_module"
tags: ["DialogMessageModule", "dialogmessagemodule", "cc_slot_module", "game_flow", "timing"]
---

# 📊 DialogMessageModule Timing Matrix

<!-- convention-summary-start -->
### DialogMessageModule Timing Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for DialogMessageModule Timing Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Timing Table

| Action | Invoker | Method | State Mutation |
| :--- | :--- | :--- | :--- |
| **Show Alert** | Network Socket / Logic | `showDialog(true)` | `node.active = true` |
| **Confirm** | User Click | `onConfirmPressed()` | Emits `ON_ACTION_OK` |
| **Cancel** | User Click | `onCancelPressed()` | Emits `ON_ACTION_CANCEL` |
