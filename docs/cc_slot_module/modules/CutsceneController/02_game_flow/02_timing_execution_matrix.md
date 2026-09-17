---
id: "cc_slot_module:CutsceneController:game_flow:timing_execution_matrix"
title: "CutsceneController Timing Execution Matrix"
category: "cc_slot_module"
tags: ["CutsceneController", "cutscene_controller", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ CutsceneController Timing Execution Matrix

<!-- convention-summary-start -->
### CutsceneController Timing Execution Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for CutsceneController Timing Execution Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Timing Matrix

| Method | Mode | Timing / Latency | Pipeline Impact |
| :--- | :--- | :--- | :--- |
| **`onLoadExtend`** | Synchronous | $< 1\text{ms}$ | Scene bootstrap |
| **`playCutScene`** | Asynchronous | Returns `Promise<void>` (resolved on modal exit) | Blocks ScriptExecutor while active |
| **`closeCutScene`**| Asynchronous | Returns `Promise<void>` (resolved on modal close) | Blocks ScriptExecutor during transition |
| **`skipCutScenes`** | Synchronous | $< 0.1\text{ms}$ | Fast-forwards active modals |
