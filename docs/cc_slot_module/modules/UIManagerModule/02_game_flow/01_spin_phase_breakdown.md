---
id: "cc_slot_module:UIManagerModule:game_flow:spin_phase_breakdown"
title: "UIManagerModule Execution Across Spin Phases"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 UIManagerModule Execution Across Spin Phases

<!-- convention-summary-start -->
### UIManagerModule Execution Across Spin Phases Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for UIManagerModule Execution Across Spin Phases.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Spin Loop Phases

| Spin Phase | UIManagerModule Action | Subsystem Coordination |
| :--- | :--- | :--- |
| **Phase 1: Spin Trigger** | Blocks bet adjustments, updates spin button state. | Directs `BetModule` and `TurboButton`. |
| **Phase 2: Reels Rolling** | Manages `isSpinVisible` and evaluates `checkDisplayPopup()`. | Coordinates with `CutsceneController`. |
| **Phase 3: Mode Transition** | Executes `updateGameModeUI(newMode)` to swap HUD elements. | Syncs with `GameModeDirectorModule`. |
| **Phase 4: Settle & Idle** | Restores interactability to bet step buttons. | Unlocks player dashboard. |
