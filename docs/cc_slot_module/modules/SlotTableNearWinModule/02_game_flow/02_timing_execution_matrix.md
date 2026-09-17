---
id: "cc_slot_module:SlotTableNearWinModule:game_flow:timing_execution_matrix"
title: "SlotTableNearWinModule Timing Execution Matrix"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ SlotTableNearWinModule Timing Execution Matrix

<!-- convention-summary-start -->
### SlotTableNearWinModule Timing Execution Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for SlotTableNearWinModule Timing Execution Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Execution Cost Matrix

| Method | Invoking Entity / Event | Timing | Complexity | Impact |
| :--- | :--- | :--- | :--- | :--- |
| **`onLoadExtend()`** | Engine Bootstrap | Component Load | $O(1)$ | Fetches `TableModuleConfig`, caches animation component. |
| **`setupNearWin()`** | `SlotTableModule` (`SETUP_NEARWIN`) | Spin Result Arrival | $O(C \times R)$ ($5 \times 3 = 15$) | Iterates matrix grid; negligible CPU footprint (< 0.05ms). |
| **`reelStopNearWin()`** | `SlotTableModule` (`REEL_STOP_NEARWIN`) | Each Reel Landing | $O(1)$ | Reads `_nearWinData[col]`, repositions VFX, plays audio. |
| **`resetNearWin()`** | `SlotTableModule` (`RESET_NEARWIN`) | Spin Completion / FTR | $O(1)$ | Clears counters, halts audio and Spine animation. |
| **`_getXPosition()`** | Internal Helper | Anticipation Play | $O(1)$ | Computes standard offset $X = \text{startX} + \text{col} \times \text{width}$. |
