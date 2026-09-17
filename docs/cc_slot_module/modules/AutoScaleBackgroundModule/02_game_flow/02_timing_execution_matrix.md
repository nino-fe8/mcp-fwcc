---
id: "cc_slot_module:AutoScaleBackgroundModule:game_flow:timing_execution_matrix"
title: "AutoScaleBackgroundModule Timing Matrix"
category: "cc_slot_module"
tags: ["AutoScaleBackgroundModule", "auto_scale_background_module", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ AutoScaleBackgroundModule Timing Matrix

<!-- convention-summary-start -->
### AutoScaleBackgroundModule Timing Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for AutoScaleBackgroundModule Timing Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


| Trigger | Caller | Method |
| :--- | :--- | :--- |
| **Startup** | Engine | `onLoad()` ➔ `start()` ➔ `scaleCanvasByOrientation()` |
| **Resize** | Window / View | `onScreenResized()` ➔ `scaleCanvasByOrientation()` |
| **Teardown** | Engine | `onDestroy()` ➔ Removes event listener |
