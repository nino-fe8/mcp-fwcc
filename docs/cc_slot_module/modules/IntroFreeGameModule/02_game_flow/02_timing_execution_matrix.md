---
id: "cc_slot_module:IntroFreeGameModule:game_flow:timing_execution_matrix"
title: "IntroFreeGameModule Timing Execution Matrix"
category: "cc_slot_module"
tags: ["IntroFreeGameModule", "intro_free_game_module", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ IntroFreeGameModule Timing Execution Matrix

<!-- convention-summary-start -->
### IntroFreeGameModule Timing Execution Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for IntroFreeGameModule Timing Execution Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Timing Matrix

| Property | Default Value | Nature | Impact |
| :--- | :--- | :--- | :--- |
| `timeShow` | $2.0\text{s}$ | Synchronous timer | Holds modal on screen before automatically triggering `exit()`. |
