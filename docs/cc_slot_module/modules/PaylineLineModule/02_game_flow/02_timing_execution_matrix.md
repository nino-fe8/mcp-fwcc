---
id: "cc_slot_module:PaylineLineModule:game_flow:timing_execution_matrix"
title: "PaylineLineModule Timing Execution Matrix"
category: "cc_slot_module"
tags: ["PaylineLineModule", "payline_line_module", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ PaylineLineModule Timing Execution Matrix

<!-- convention-summary-start -->
### PaylineLineModule Timing Execution Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for PaylineLineModule Timing Execution Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Execution Matrix

| Operation | Trigger Event | Execution Mode | Duration / Budget | Invoker |
| :--- | :--- | :--- | :--- | :--- |
| **`setupPaylines`** | `PAYLINE_SET_DATA` | Synchronous | $< 1\text{ms}$ | `SlotTablePaylineModule` |
| **`blinkAllPayLines`**| `PAYLINE_BLINK_ALL` | Synchronous | $\sim 2-5\text{ms}$ (Instantiation/Pool lookup) | `SlotPaylineSchedule` |
| **`showPayLine`** | `PAYLINE_SHOW_LINE` | Synchronous | $< 1\text{ms}$ | `SlotPaylineSchedule` |
| **`hideAll`** | `PAYLINE_STOP_ALL` | Synchronous | $< 1\text{ms}$ | `SlotPaylineSchedule` |
| **`clearAll`** | `PAYLINE_CLEAR` | Synchronous | $< 1\text{ms}$ | `SlotPaylineSchedule` / Mode Director |
