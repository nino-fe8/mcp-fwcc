---
id: "cc_slot_module:BonusGameTableModule:game_flow:spin_phase_breakdown"
title: "BonusGameTableModule Grid Lifecycle Phases Breakdown"
category: "cc_slot_module"
tags: ["BonusGameTableModule", "bonus_game_table", "cc_slot_module", "game_flow", "grid_lifecycle"]
---

# 🌀 BonusGameTableModule Grid Lifecycle Phases Breakdown

<!-- convention-summary-start -->
### BonusGameTableModule Grid Lifecycle Phases Breakdown Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for BonusGameTableModule Grid Lifecycle Phases Breakdown.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Grid Lifecycle Flow

```mermaid
graph TD
    Init[INIT_BONUS_GAME: initBoxes - Instantiate COL*ROW boxes] --> SetVal[START_BONUS_GAME: setBoxValues]
    SetVal --> Pick[OPEN_ITEM / OPEN_FINAL_ITEM: Emit BOX_OPEN to box index]
    Pick --> End[OPEN_ALL_ITEMS: Reveal remaining unopened boxes with DIM]
    End --> Reset[RESET_BONUS_GAME: resetTable - Emit BOX_RESET to all boxes]
```
