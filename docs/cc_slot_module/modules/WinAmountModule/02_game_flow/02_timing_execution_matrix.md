---
id: "cc_slot_module:WinAmountModule:game_flow:timing_execution_matrix"
title: "WinAmountModule Timing Execution Matrix"
category: "cc_slot_module"
tags: ["WinAmountModule", "win_amount_module", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ WinAmountModule Timing Execution Matrix

<!-- convention-summary-start -->
### WinAmountModule Timing Execution Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for WinAmountModule Timing Execution Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Timing Configuration

| Command | Standard Duration | Turbo / Fast-Forward Duration |
| :--- | :--- | :--- |
| Normal Line Win Roll | $1.0\text{s} - 2.0\text{s}$ | $0.2\text{s} - 0.5\text{s}$ |
| Big Win Roll-Up | $3.0\text{s} - 8.0\text{s}$ | $0.3\text{s}$ |
| Fade-Out Label | $0.5\text{s}$ | $0.1\text{s}$ |
