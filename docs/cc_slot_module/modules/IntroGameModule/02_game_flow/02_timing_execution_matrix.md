---
id: "cc_slot_module:IntroGameModule:game_flow:timing_execution_matrix"
title: "IntroGameModule Timing Execution Matrix"
category: "cc_slot_module"
tags: ["IntroGameModule", "intro_game_module", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ IntroGameModule Timing Execution Matrix

<!-- convention-summary-start -->
### IntroGameModule Timing Execution Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for IntroGameModule Timing Execution Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Timing Matrix

| Action | Execution Nature | Duration | Behavior |
| :--- | :--- | :--- | :--- |
| **`init`** | Synchronous | $< 1\text{ms}$ | Reads localStorage. |
| **`onClickJoinGame`** | Async Tween | $0.2\text{s}$ | Fades out and disables node. |
| **`joinGameSuccess`** | Synchronous | $< 0.1\text{ms}$ | Auto-skips if reconnecting. |
