---
id: "cc_slot_module:TotalWinModule:game_flow:spin_phase_breakdown"
title: "TotalWinModule Execution Across Spin Phases"
category: "cc_slot_module"
tags: ["TotalWinModule", "total_win_module", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 TotalWinModule Execution Across Spin Phases

<!-- convention-summary-start -->
### TotalWinModule Execution Across Spin Phases Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for TotalWinModule Execution Across Spin Phases.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Spin Loop Phases

| Spin Phase | TotalWinModule Action | Subsystem Coordination |
| :--- | :--- | :--- |
| **Phase 1: Free Game Spins** | Idle (`active = false`). | Hidden. |
| **Phase 2: Free Game End** | Triggered when remaining spins reach 0. | Suspends spin loop, displays total sum payout. |
| **Phase 3: Count & Tally** | Counts up accumulated win. | Audio victory jingle plays. |
| **Phase 4: Return to Base** | Closes and resolves callback. | Directs game to switch mode back to `NormalGame`. |
