---
id: "cc_slot_module:PaylineNumberModule:game_flow:timing_execution_matrix"
title: "PaylineNumberModule Timing Execution Matrix"
category: "cc_slot_module"
tags: ["PaylineNumberModule", "payline_number_module", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ PaylineNumberModule Timing Execution Matrix

<!-- convention-summary-start -->
### PaylineNumberModule Timing Execution Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for PaylineNumberModule Timing Execution Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Timing Matrix

| Operation | Trigger | Mode | Budget | Impact |
| :--- | :--- | :--- | :--- | :--- |
| **`onLoadExtend`** | Scene Load | Synchronous | $< 2\text{ms}$ | Caches item list and maps keys. |
| **`setupPaylines`**| `PAYLINE_SET_DATA` | Synchronous | $< 1\text{ms}$ | Updates `payLines` reference. |
| **`blinkAllPayLines`**| `PAYLINE_BLINK_ALL` | Synchronous | $< 1\text{ms}$ | Iterates and calls `showNumber()`. |
| **`showPayLine`** | `PAYLINE_SHOW_LINE` | Synchronous | $< 1\text{ms}$ | Calls `hideAll()` and `showNumber()`. |
| **`hideAll`** | `PAYLINE_STOP_ALL` / `CLEAR` | Synchronous | $< 1\text{ms}$ | Iterates items and calls `hide()`. |
