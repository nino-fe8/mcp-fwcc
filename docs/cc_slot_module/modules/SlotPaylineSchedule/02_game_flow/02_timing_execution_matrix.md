---
id: "cc_slot_module:SlotPaylineSchedule:game_flow:timing_execution_matrix"
title: "SlotPaylineSchedule Timing Execution Matrix"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ SlotPaylineSchedule Timing Execution Matrix

<!-- convention-summary-start -->
### SlotPaylineSchedule Timing Execution Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for SlotPaylineSchedule Timing Execution Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Timing Matrix

| Method | Execution Mode | Duration / Budget | Async Return |
| :--- | :--- | :--- | :--- |
| **`blinkAllPaylines`** | Asynchronous | `config.TIMELINE_CONFIG` ($\approx 1.5 - 2.0\text{s}$) | Returns `Promise<void>` resolved after delay. |
| **`showAllPaylines`** | Looping Tween | Runs indefinitely ($\Delta t = \text{timelineConfig}$ per line) | Synchronous invocation; background tween loop. |
| **`onShowScatter`** | Asynchronous | `config.TIMELINE_CONFIG` | Returns `Promise<void>`. |
| **`onShowBonus`** | Asynchronous | `config.TIMELINE_CONFIG` | Returns `Promise<void>`. |
| **`onShowJackpot`** | Asynchronous | `config.TIMELINE_CONFIG` | Returns `Promise<void>`. |
| **`stopSchedule`** | Synchronous | $< 1\text{ms}$ | Immediate cancellation. |
