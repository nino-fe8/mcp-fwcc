---
id: "cc_slot_module:TableModuleConfig:game_flow:spin_phase_breakdown"
title: "TableModuleConfig Speed Phase Configuration Breakdown"
category: "cc_slot_module"
tags: ["TableModuleConfig", "table_config", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🌀 TableModuleConfig Speed Phase Configuration Breakdown

<!-- convention-summary-start -->
### TableModuleConfig Speed Phase Configuration Breakdown Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for TableModuleConfig Speed Phase Configuration Breakdown.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Speed Parameters Breakdown

```mermaid
sequenceDiagram
    autonumber
    participant Table as SlotTableModule
    participant Config as TableModuleConfig
    participant Reel as SlotReelModule
    participant NearWin as SlotTableNearWinModule

    Table->>Config: Query MODES.NORMAL / MODES.TURBO
    Config-->>Table: Returns { speed, easingStop, easingTimeStop, stepStop, slowdownFactor }
    Table->>Reel: runReelSpin(selectedMode)
    
    Note over Table,NearWin: Near-Win Anticipation Override
    NearWin->>Config: Reads NEAR_WIN_DELAY_TIME (1.0s) & NEAR_WIN_DELAY_TIME_LAST_REEL (2.0s)
    NearWin->>Config: Sets NEAR_WIN_DELAY_STOP offset
```
