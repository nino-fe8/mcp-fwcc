---
id: "cc_slot_module:JackpotWinModule:game_flow:timing_execution_matrix"
title: "JackpotWinModule Timing Execution Matrix"
category: "cc_slot_module"
tags: ["JackpotWinModule", "jackpot_win_module", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ JackpotWinModule Timing Execution Matrix

<!-- convention-summary-start -->
### JackpotWinModule Timing Execution Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for JackpotWinModule Timing Execution Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Timing Configuration

| Constant / Action | Default Value | Purpose |
| :--- | :--- | :--- |
| `animDuration` | $10.0\text{s}$ | Natural count-up tween duration. |
| `delayShowTime` | $2.0\text{s}$ | Unskippable initial lock duration. |
| `delayHideTime` | $1.0\text{s}$ | Final total score display duration before exit. |
| Accelerated Tap Tween | $1.0\text{s}$ | Tween duration after player taps to accelerate count. |
