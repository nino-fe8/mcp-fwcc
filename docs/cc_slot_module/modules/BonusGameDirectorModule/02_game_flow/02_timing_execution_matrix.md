---
id: "cc_slot_module:BonusGameDirectorModule:game_flow:timing_execution_matrix"
title: "BonusGameDirectorModule Interactive Timing Matrix"
category: "cc_slot_module"
tags: ["BonusGameDirectorModule", "bonus_game_director", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ BonusGameDirectorModule Interactive Timing Matrix

<!-- convention-summary-start -->
### BonusGameDirectorModule Interactive Timing Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for BonusGameDirectorModule Interactive Timing Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Interactive Timing Matrix

| Phase / Action | Duration | Execution Mode | Behavior Under Turbo / Skip |
| :--- | :--- | :--- | :--- |
| **Countdown Timer** | `15s` (`defaultCountDown`) | Repeating 1s Tween | Cancelled immediately upon player click. |
| **Item Reveal Tween** | `1.0s` (`0.5s` delay + `0.5s` score) | Sequential Tween | Async Promise awaited in `_openFinalItem`. |
| **End Reveal Delay** | `3.0s` (`DELAY_OPEN_ALL_BOX`) | `scheduleOnce` | Unopened boxes reveal simultaneously with dimmed filters. |
| **Total Win Celebration** | Configured by Cutscene | Fullscreen Modal | Tap to fast-forward count-up. |
