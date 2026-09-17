---
id: "cc_slot_module:WaitingSceneModule:game_flow:timing_execution_matrix"
title: "WaitingSceneModule Timing Matrix"
category: "cc_slot_module"
tags: ["WaitingSceneModule", "waiting_scene_module", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ WaitingSceneModule Timing Matrix

<!-- convention-summary-start -->
### WaitingSceneModule Timing Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for WaitingSceneModule Timing Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


| Event | Caller | Method | Result |
| :--- | :--- | :--- | :--- |
| **Start** | Engine | `start()` ➔ `setupObserver()` | Subscribes to `WaitingSceneData` |
| **Network Lag** | Network Model | `showWaitingScene(true)` | Shows spinner (`opacity = 255`) |
| **Packet Received** | Network Model | `showWaitingScene(false)` | Hides spinner (`opacity = 0`) |
| **Scene Exit** | Engine | `onDestroy()` | Releases observer bindings |
