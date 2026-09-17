---
id: "cc_slot_module:JackpotWinNoticePopup:game_flow:timing_execution_matrix"
title: "JackpotWinNoticePopup Timing Matrix"
category: "cc_slot_module"
tags: ["JackpotWinNoticePopup", "jackpotwinnoticepopup", "cc_slot_module", "game_flow", "timing"]
---

# 📊 JackpotWinNoticePopup Timing Matrix

<!-- convention-summary-start -->
### JackpotWinNoticePopup Timing Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for JackpotWinNoticePopup Timing Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Timing Table

| Step | State | Duration | Transition |
| :--- | :--- | :--- | :--- |
| **Fade In** | `STATE.MOVING (1)` | `fadeTime (0.5s)` | `eno.fadeIn(this.node, 0.5)` |
| **Display** | `STATE.IDLE (2)` | `delayTime (4.0s)` | Banner visible on screen. |
| **Fade Out**| `STATE.CLOSING (3)`| `fadeTime (0.5s)` | `eno.fadeOut(this.node, 0.5)` |
| **Next Queue**| `STATE.CLOSED (0)` | `delayNextWinner (2.0s)` | Evaluates next queued winner. |
