---
id: "cc_slot_module:TotalWinModule:game_flow:timing_execution_matrix"
title: "TotalWinModule Timing Execution Matrix"
category: "cc_slot_module"
tags: ["TotalWinModule", "total_win_module", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ TotalWinModule Timing Execution Matrix

<!-- convention-summary-start -->
### TotalWinModule Timing Execution Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for TotalWinModule Timing Execution Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Timing Configuration

| Constant / Action | Default Value | Purpose |
| :--- | :--- | :--- |
| `animDuration` | $10.0\text{s}$ | Natural money count-up duration. |
| `delayShowTime` | $1.0\text{s}$ | Grace period before tap-to-skip unlocks. |
| `hideTime` | $0.5\text{s}$ | Hold duration on final tally before closing. |
| Accelerated Tap Tween | $1.0\text{s}$ | Accelerated count duration on user click. |
