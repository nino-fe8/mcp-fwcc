---
id: "cc_slot_module:PayTablePanel:game_flow:timing_execution_matrix"
title: "PayTablePanel Timing Matrix"
category: "cc_slot_module"
tags: ["PayTablePanel", "paytablepanel", "cc_slot_module", "game_flow", "timing"]
---

# 📊 PayTablePanel Timing Matrix

<!-- convention-summary-start -->
### PayTablePanel Timing Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for PayTablePanel Timing Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Timing Table

| Action | Method | Result |
| :--- | :--- | :--- |
| **Open** | `showPayTablePanel(true)` | Scrolls to top and fades in. |
| **Close** | `onClosePanel()` | Emits `CLOSE_PAY_TABLE_PANEL`. |
