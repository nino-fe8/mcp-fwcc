---
id: "cc_slot_module:GameDataStore:game_flow:spin_phase_breakdown"
title: "GameDataStore Spin Phase Ingestion & Broadcast Breakdown"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🌀 GameDataStore Spin Phase Ingestion & Broadcast Breakdown

<!-- convention-summary-start -->
### GameDataStore Spin Phase Ingestion & Broadcast Breakdown Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for GameDataStore Spin Phase Ingestion & Broadcast Breakdown.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Spin Phase Sequence

```mermaid
sequenceDiagram
    autonumber
    participant Net as Network Handler
    participant Dir as NormalGameDirectorModule
    participant GDS as GameDataStore
    participant TabData as SlotTableData
    participant PayData as SlotTablePaylineData

    Note over Net,GDS: 1. Spin Result Packet Arrival
    Net->>Dir: onStateUpdate(spinResponse)
    Dir->>GDS: parseDataPS(data)
    Dir->>GDS: updateDataModules()
    
    Note over GDS,PayData: 2. Synchronous State Distribution
    GDS->>TabData: onDataUpdate('matrix', clonedMatrix)
    GDS->>PayData: onDataUpdate('payLines', clonedPaylines)
    GDS->>PayData: onDataUpdate('winAmount', clonedWinAmount)
    
    Note over Dir,GDS: 3. Win Calculation Queries
    Dir->>GDS: isBigWin()
    Dir->>GDS: getBigWinData()
    Dir->>GDS: getWinAmountInfo()
```
