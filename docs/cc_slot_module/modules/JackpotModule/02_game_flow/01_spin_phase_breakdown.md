---
id: "cc_slot_module:JackpotModule:game_flow:spin_phase_breakdown"
title: "JackpotModule Execution Across Game Modes"
category: "cc_slot_module"
tags: ["JackpotModule", "jackpot_module", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 JackpotModule Execution Across Game Modes

<!-- convention-summary-start -->
### JackpotModule Execution Across Game Modes Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for JackpotModule Execution Across Game Modes.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Game Flow Breakdown

| State / Mode | Jackpot Module Action | Behavior |
| :--- | :--- | :--- |
| **Idle Normal Game** | Progressive rolling active. | Smooth $3.0\text{s}$ interpolation. |
| **Jackpot Trigger** | `pauseJackpot()` | Freezes pool updates during win overlay. |
| **Jackpot Concludes**| `resumeJackpot(true)` | Force syncs reset starting base pool. |
| **Trial Mode Active** | Replaced by `trialJackpot` node. | Displays fixed simulated demo jackpots. |
