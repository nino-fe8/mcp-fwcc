---
id: "cc_slot_module:FreeGameDirectorModule:game_flow:timing_execution_matrix"
title: "FreeGameDirectorModule Pacing & Timing Matrix"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ FreeGameDirectorModule Pacing & Timing Matrix

<!-- convention-summary-start -->
### FreeGameDirectorModule Pacing & Timing Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for FreeGameDirectorModule Pacing & Timing Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Timing Matrix

| Phase / Action | Method | Duration / Delay | Purpose |
| :--- | :--- | :--- | :--- |
| **Initial Enter** | `enter()` | Instant (< 0.1ms) | Plays BGM, syncs badges, sets `isFirstAutoSpin = true`. |
| **First Auto-Spin**| `_beforeSpinStart()` | 0.0s (Bypasses delay) | Instant launch into the first free spin without stutter. |
| **Subsequent Auto-Spins** | `delayAutoSpin()` | 0.5s | Pacing buffer between consecutive free spins. |
| **Win Payline Delay** | `_showWinPayline()` | `delayTime` (0.5s - 2.0s) | Allows player to appreciate winning lines before next spin starts. |
| **Feature Exit** | `_gameExit()` | Instant (< 0.1ms) | Resets table and transitions back to Normal Game. |
