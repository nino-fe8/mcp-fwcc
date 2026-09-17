---
id: "cc_slot_module:WinEffectModule:game_flow:timing_execution_matrix"
title: "WinEffectModule Timing Execution Matrix"
category: "cc_slot_module"
tags: ["WinEffectModule", "win_effect_module", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ WinEffectModule Timing Execution Matrix

<!-- convention-summary-start -->
### WinEffectModule Timing Execution Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for WinEffectModule Timing Execution Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Timing Configuration

| Constant / Action | Normal Value | Fast / Turbo Value | Purpose |
| :--- | :--- | :--- | :--- |
| `animDuration` | $9.0\text{s}$ | $0.0\text{s}$ (Bypassed) | Duration of number rolling tween. |
| `delayShowTime` | $1.0\text{s}$ | $0.0\text{s}$ | Grace period before tap-to-skip unlocks. |
| `delayHideTime` | $1.0\text{s}$ | $2.0\text{s}$ | Hold duration on final amount before exit. |
| Fast Particle Hold | N/A | $1.0\text{s}$ | Particle spray burst duration in Turbo. |
