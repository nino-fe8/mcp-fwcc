---
id: "cc_slot_module:IntroGameModule:game_flow:spin_phase_breakdown"
title: "IntroGameModule State Across Spin Loop Phases"
category: "cc_slot_module"
tags: ["IntroGameModule", "intro_game_module", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 IntroGameModule State Across Spin Loop Phases

<!-- convention-summary-start -->
### IntroGameModule State Across Spin Loop Phases Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for IntroGameModule State Across Spin Loop Phases.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Spin Loop Phases

| Spin Phase | IntroGameModule State | Purpose |
| :--- | :--- | :--- |
| **Phase 0: Bootstrap** | Active during initial scene load. | Displays promotional features and splash art. |
| **Phase 1: Game Joined** | Dismissed via `onClickJoinGame()`. | Emits `HIDE_INTRO_GAME` and unlocks HUD. |
| **Phase 2..4: Spin Loop**| Permanently inactive (`active = false`). | Consumes zero CPU/GPU overhead during gameplay. |
