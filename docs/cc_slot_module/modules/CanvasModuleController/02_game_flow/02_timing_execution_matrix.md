---
id: "cc_slot_module:CanvasModuleController:game_flow:timing_execution_matrix"
title: "CanvasModuleController Timing Matrix"
category: "cc_slot_module"
tags: ["CanvasModuleController", "canvas_module_controller", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ CanvasModuleController Timing Matrix

<!-- convention-summary-start -->
### CanvasModuleController Timing Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for CanvasModuleController Timing Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Execution Matrix

| Event | Caller | Action |
| :--- | :--- | :--- |
| **Scene Load** | Cocos Engine | `onLoad()` ➔ Instantiates `CanvasControllerWrapper` |
| **Scene Start** | Cocos Engine | `start()` ➔ Starts wrapper and recalculates initial frame size |
| **Window Resize**| Browser/OS | Wrapper dynamically recalculates design resolution and updates widgets |
| **Scene Teardown**| Cocos Engine | `onDestroy()` ➔ Unbinds window resize listeners |
