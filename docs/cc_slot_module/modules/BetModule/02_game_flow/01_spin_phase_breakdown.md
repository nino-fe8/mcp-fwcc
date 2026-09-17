---
id: "cc_slot_module:BetModule:game_flow:spin_phase_breakdown"
title: "BetModule Execution Across Spin Phases"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 BetModule Execution Across Spin Phases

<!-- convention-summary-start -->
### BetModule Execution Across Spin Phases Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for BetModule Execution Across Spin Phases.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Spin Loop Phases

| Spin Phase | BetModule Action | Subsystem Coordination |
| :--- | :--- | :--- |
| **Phase 1: Idle / Ready** | Steppers enabled based on `minBetEnable` / `maxBetEnable`. | Awaiting player input. |
| **Phase 2: Spin In Flight** | Steppers disabled (`interactable = false`). | Locked during reel roll. |
| **Phase 3: Mode Transition** | Locked during Free Spins; retains base wager. | Mode persistence. |
| **Phase 4: Settle & Re-arm** | Restores interactability to steppers. | Ready for next round. |
