---
id: "cc_slot_module:JackpotHistoryModule:game_flow:spin_phase_breakdown"
title: "JackpotHistoryModule Spin Phase Breakdown"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "game_flow", "spin_phases"]
---

# ⏱️ JackpotHistoryModule Spin Phase Breakdown

<!-- convention-summary-start -->
### JackpotHistoryModule Spin Phase Breakdown Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for JackpotHistoryModule Spin Phase Breakdown.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Behavior Across Spin Phases

`JackpotHistoryModule` remains closed during active spin sequences. When invoked via `SettingPanel` or GUI buttons in idle state (Phase 5), it queries the global jackpot winner table across room servers.
