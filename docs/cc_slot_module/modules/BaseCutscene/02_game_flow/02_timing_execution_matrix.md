---
id: "cc_slot_module:BaseCutscene:game_flow:timing_execution_matrix"
title: "BaseCutscene Timing Execution Matrix"
category: "cc_slot_module"
tags: ["BaseCutscene", "base_cutscene", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ BaseCutscene Timing Execution Matrix

<!-- convention-summary-start -->
### BaseCutscene Timing Execution Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for BaseCutscene Timing Execution Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Timing Matrix

| Method | Mode | Execution Duration | Blocking Behavior |
| :--- | :--- | :--- | :--- |
| **`init`** | Synchronous | $< 0.1\text{ms}$ | Non-blocking |
| **`play`** | Synchronous (starts async `enter`) | Starts async tween | Non-blocking start |
| **`enter`** | Hook | Subclass defined ($2\text{s} - 10\text{s}$) | Blocks ScriptExecutor via `CutsceneController` Promise |
| **`exit`** | Synchronous | $< 0.5\text{ms}$ | Releases ScriptExecutor Promise |
| **`skip`** | Synchronous | Immediate jump | Fast-forwards to `exit()` |
