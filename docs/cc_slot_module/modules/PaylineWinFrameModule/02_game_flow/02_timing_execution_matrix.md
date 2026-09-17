---
id: "cc_slot_module:PaylineWinFrameModule:game_flow:timing_execution_matrix"
title: "PaylineWinFrameModule Timing Execution Matrix"
category: "cc_slot_module"
tags: ["PaylineWinFrameModule", "payline_win_frame_module", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ PaylineWinFrameModule Timing Execution Matrix

<!-- convention-summary-start -->
### PaylineWinFrameModule Timing Execution Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for PaylineWinFrameModule Timing Execution Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Execution Cost Matrix

| Method | Invocation | Complexity | Cost |
| :--- | :--- | :--- | :--- |
| **`playAnimation`** | `SYMBOL_PLAY_ANIMATION_WIN` | $O(1)$ | Pool fetch / instantiation (< 0.1ms). |
| **`hideAll`** | `PAYLINE_STOP_ALL` | $O(F)$ ($F = \text{frames}$) | Emits HIDE to active frames (< 0.05ms). |
| **`clearAll`** | `PAYLINE_CLEAR` | $O(F)$ | Returns nodes to pool (< 0.1ms). |
