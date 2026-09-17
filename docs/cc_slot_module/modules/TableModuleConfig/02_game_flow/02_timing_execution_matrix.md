---
id: "cc_slot_module:TableModuleConfig:game_flow:timing_execution_matrix"
title: "TableModuleConfig Speed Modes Tuning Matrix"
category: "cc_slot_module"
tags: ["TableModuleConfig", "table_config", "cc_slot_module", "game_flow", "timing_matrix", "speed_modes"]
---

# ⏱️ TableModuleConfig Speed Modes Tuning Matrix

<!-- convention-summary-start -->
### TableModuleConfig Speed Modes Tuning Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for TableModuleConfig Speed Modes Tuning Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Mode Calibration Parameters

| Mode Property | `MODES.NORMAL` | `MODES.TURBO` | Unit & Explanation |
| :--- | :--- | :--- | :--- |
| **`speed`** | `0.06` | `0.05` | Scroll interval in seconds per symbol step. |
| **`easingStop`** | `15` | `10` | Deceleration bounce displacement in pixels. |
| **`easingTimeStop`** | `0.2` | `0.15` | Duration in seconds of the final settling bounce. |
| **`delayStop`** | `0.5` | `0` | Delay between consecutive column stops. |
| **`stepStop`** | `12` | `6` | Total symbol steps scrolled during deceleration. |
| **`slowdownFactor`**| `4` | `8` | Exponential decay rate applied to spin velocity. |
| **`isTurbo`** | `false` | `true` | Boolean flag indicating Turbo status. |
