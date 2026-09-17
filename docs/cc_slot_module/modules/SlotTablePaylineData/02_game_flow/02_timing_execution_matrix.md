---
id: "cc_slot_module:SlotTablePaylineData:game_flow:timing_execution_matrix"
title: "SlotTablePaylineData Timing Execution Matrix"
category: "cc_slot_module"
tags: ["SlotTablePaylineData", "slot_table_payline_data", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ SlotTablePaylineData Timing Execution Matrix

<!-- convention-summary-start -->
### SlotTablePaylineData Timing Execution Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for SlotTablePaylineData Timing Execution Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Execution Cost Matrix

| Method | Invocation Moment | Complexity | Frame Time Impact |
| :--- | :--- | :--- | :--- |
| **`onloadExtend()`** | Component Load | $O(1)$ | Caches `PaylineConfig` reference (< 0.01ms). |
| **`getMatrix()`** | `getPayLines` / `getWinSymbols` | $O(C \times R)$ ($5 \times 3 = 15$) | Converts matrix layout to 2D column arrays (< 0.05ms). |
| **`getPayLines()`** | `onSetupPaylines` | $O(L \times K)$ | Converts raw lines based on pay type (< 0.5ms). |
| **`getWinSymbols()`** | `onSetupPaylines` | $O(L \times M)$ | Evaluates winning coordinates across all hit paylines (< 0.8ms). |
| **`getJackpotPayline()`** | `onSetupPaylines` | $O(1)$ | String split and number parsing (< 0.02ms). |
