---
id: "cc_slot_module:PaylineSymbolModule:game_flow:timing_execution_matrix"
title: "PaylineSymbolModule Timing Execution Matrix"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ PaylineSymbolModule Timing Execution Matrix

<!-- convention-summary-start -->
### PaylineSymbolModule Timing Execution Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for PaylineSymbolModule Timing Execution Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Execution Cost Matrix

| Method | Invocation | Complexity | Cost |
| :--- | :--- | :--- | :--- |
| **`setupPayLines`** | `PAYLINE_SET_DATA` | $O(1)$ | Cache arrays (< 0.05ms). |
| **`blinkAllPayLines`**| `PAYLINE_BLINK_ALL` | $O(S)$ ($S = \text{win symbols}$) | Reparenting and Spine trigger (< 1.5ms). |
| **`showSinglePayLine`**| `PAYLINE_SHOW_LINE` | $O(K)$ ($K = \text{line symbols}$) | Isolates line symbols (< 0.5ms). |
| **`clearAll`** | `PAYLINE_CLEAR` | $O(N)$ ($N = \text{table symbols}$) | Returns nodes to pool (< 0.8ms). |
