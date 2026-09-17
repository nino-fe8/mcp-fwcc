---
id: "cc_slot_module:BonusGameTableModule:game_flow:timing_execution_matrix"
title: "BonusGameTableModule Timing Execution Matrix"
category: "cc_slot_module"
tags: ["BonusGameTableModule", "bonus_game_table", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ BonusGameTableModule Timing Execution Matrix

<!-- convention-summary-start -->
### BonusGameTableModule Timing Execution Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for BonusGameTableModule Timing Execution Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Timing Execution Matrix

| Action | Duration | Execution Mode | Behavior |
| :--- | :--- | :--- | :--- |
| `initBoxes` | Immediate | Synchronous | Clears previous boxes and spawns `COL_NUMBER * ROW_NUMBER` box nodes. |
| `openBox` | ~1.0s | Asynchronous (Fire-and-forget) | Node emits `BOX_OPEN` to item. |
| `openFinalBox`| ~1.0s | Async (Awaits Promise) | Node emits `BOX_OPEN` and waits for callback to resolve. |
| `openAllBoxes`| 3.0s (`DELAY_OPEN_ALL_BOX`) | Async (Delayed Promise) | Reveals unpicked boxes dimmed, waits for timer before completing. |
