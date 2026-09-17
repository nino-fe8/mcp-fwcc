---
id: "cc_slot_module:ExtraBetModule:game_flow:spin_phase_breakdown"
title: "ExtraBetModule Spin Phase Breakdown"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 ExtraBetModule Spin Phase Breakdown

<!-- convention-summary-start -->
### ExtraBetModule Spin Phase Breakdown Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for ExtraBetModule Spin Phase Breakdown.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Spin Phase Cycle

| Phase | ExtraBetModule Action | Subsystem Coordination |
| :--- | :--- | :--- |
| **Idle** | Enabled if `min/maxExtraBetEnable` allows. | Awaiting modifier adjustments. |
| **Spinning** | Locked (`interactable = false`). | Fixed during reel spins. |
| **Free Games** | Hidden/disabled (`UIManagerModule.showFreeUIElements`). | Disabled in free rounds. |
| **Settle** | Re-enabled for next round. | Restores state. |
