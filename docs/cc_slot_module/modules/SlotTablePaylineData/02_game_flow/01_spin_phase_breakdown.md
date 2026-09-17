---
id: "cc_slot_module:SlotTablePaylineData:game_flow:spin_phase_breakdown"
title: "SlotTablePaylineData Spin Phase State Breakdown"
category: "cc_slot_module"
tags: ["SlotTablePaylineData", "slot_table_payline_data", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🌀 SlotTablePaylineData Spin Phase State Breakdown

<!-- convention-summary-start -->
### SlotTablePaylineData Spin Phase State Breakdown Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for SlotTablePaylineData Spin Phase State Breakdown.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. State Mutation Across Spin Loop

1. **Spin Initiation**: State keys are updated via `GameDataStore` to reflect active game mode (`state`).
2. **Server Packet Arrival**: Keys `matrix`, `payLines`, `respinGamePayLines`, `jackpotPayline` populate into `SlotTablePaylineData`.
3. **Reel Stop Query**: `SlotTablePaylineModule` invokes `getPayLines()`, triggering on-demand geometric mapping (`convertPayLine`).
4. **Respin / Free Game Transition**: Mode flags switch `getMatrix()` and `getPayLines()` from `normalGameMatrix` to `freeGameMatrix` or `respinGameMatrix`.
