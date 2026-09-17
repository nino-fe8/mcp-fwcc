---
id: "cc_slot_module:LoadingScreenModule:game_flow:timing_execution_matrix"
title: "LoadingScreenModule Timing & Execution Matrix"
category: "cc_slot_module"
tags: ["LoadingScreenModule", "loading_screen_module", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ LoadingScreenModule Timing & Execution Matrix

<!-- convention-summary-start -->
### LoadingScreenModule Timing & Execution Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for LoadingScreenModule Timing & Execution Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Execution Matrix

| Step / Trigger | Caller | Method | State Mutation | Failure Impact |
| :--- | :--- | :--- | :--- | :--- |
| **Scene Start** | Cocos Engine | `onLoad()` | Resets progress bar, starts pipeline | Loading stuck if sceneName empty |
| **Config Ready** | Remote poll | `redirectSceneName()` | Sets `updatedScene` | Fallback to default `sceneName` |
| **Progress Tick** | Cocos Engine | `update(dt)` | Increments `progressBar.progress` | Progress jumps abruptly without tween |
| **Preload Complete**| `preloadScene` | `setProgressFull()` | Smoothly tweens to 1.0 in 0.5s | Immediate load without finishing animation |
| **Home Clicked** | User Touch | `homeBtn.on('click')`| Sets `isBackToLobby = true`, closes iframe | Preload continues in background |
