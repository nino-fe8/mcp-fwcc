---
id: "cc_slot_module:CoinsEffect:game_flow:timing_execution_matrix"
title: "CoinsEffect Timing Execution Matrix"
category: "cc_slot_module"
tags: ["CoinsEffect", "coins_effect", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ CoinsEffect Timing Execution Matrix

<!-- convention-summary-start -->
### CoinsEffect Timing Execution Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for CoinsEffect Timing Execution Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Timing Matrix

| Action | Execution Nature | Duration | Visual Outcome |
| :--- | :--- | :--- | :--- |
| **`onLoad`** | Synchronous | $< 0.1\text{ms}$ | Initial opacity 0. |
| **`showCoinsEffect`** | Synchronous + $0.1\text{s}$ schedule | $0.1\text{s}$ opacity fade | Active continuous particle emission. |
| **`hideCoinsEffect`** | Synchronous | Instant emission stop | Existing particles fall and dissipate naturally. |
