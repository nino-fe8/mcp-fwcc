---
id: "cc_slot_module:FreeGameDirectorModule:game_flow:spin_phase_breakdown"
title: "FreeGameDirectorModule Autonomous Spin Phases Breakdown"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🌀 FreeGameDirectorModule Autonomous Spin Phases Breakdown

<!-- convention-summary-start -->
### FreeGameDirectorModule Autonomous Spin Phases Breakdown Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for FreeGameDirectorModule Autonomous Spin Phases Breakdown.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Sequence Execution

```mermaid
sequenceDiagram
    autonumber
    participant Dir as FreeGameDirectorModule
    participant Badge as SpinTimes HUD Node
    participant Table as SlotTableModule
    participant Pay as SlotTablePaylineModule
    participant Store as GameDataStore

    Note over Dir,Badge: 1. Launch & Badge Decrement
    Dir->>Dir: _beforeSpinStart()
    Dir->>Badge: _decreaseFreeGameSpinTimes() ➔ UPDATE_SPINTIMES
    
    Note over Dir,Table: 2. Spin & Stop
    Dir->>Table: TABLE_START_SPIN
    Dir->>Table: TABLE_STOP_SPIN (landing matrix)
    
    Note over Dir,Pay: 3. Cumulative Win Evaluation
    Dir->>Store: winAmountPS || winAmount
    Dir->>Pay: BLINK_ALL_PAYLINES (data with winAmountPS)
    Dir->>Pay: SHOW_ALL_PAYLINES
    Dir->>Dir: delayAction(delayTime)
```
