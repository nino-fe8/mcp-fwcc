---
id: "cc_slot_module:WinAmountTooltipModule:game_flow:timing_execution_matrix"
title: "WinAmountTooltipModule Timing Matrix"
category: "cc_slot_module"
tags: ["WinAmountTooltipModule", "winamounttooltipmodule", "cc_slot_module", "game_flow", "timing"]
---

# 📊 WinAmountTooltipModule Timing Matrix

<!-- convention-summary-start -->
### WinAmountTooltipModule Timing Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for WinAmountTooltipModule Timing Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Timing Table

| Step | Duration | Transition |
| :--- | :--- | :--- |
| **Fade In** | `fadeTime (0.5s)` | `eno.fadeIn(tip, 0.5)` |
| **Pause** | `delayTime (1.5s)`| Holds tip visible at center. |
| **Slide Out**| `movingTime (5.0s)`| Tweens position to `(-width, 0)`. |
