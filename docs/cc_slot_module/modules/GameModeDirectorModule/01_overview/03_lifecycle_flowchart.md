---
id: "cc_slot_module:GameModeDirectorModule:overview:lifecycle_flowchart"
title: "GameModeDirectorModule 8-Phase Spin Lifecycle Flowchart"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "overview", "lifecycle", "flowchart", "spin_phases"]
---

# 🔄 GameModeDirectorModule 8-Phase Spin Lifecycle Flowchart

<!-- convention-summary-start -->
### GameModeDirectorModule 8-Phase Spin Lifecycle Flowchart Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule 8-Phase Spin Lifecycle Flowchart.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Complete Spin Loop Flowchart

```mermaid
graph TD
    Trigger([Spin Button Pressed]) --> P1[1. onBeforeSpinStart: NormalSpinTrigger]
    P1 --> P2[2. onStartSpinningTable: StartSpinning]
    P2 --> WS[Server Returns WebSocket Packet]
    WS --> StateUp[onStateUpdate: parseDataPS & updateDataModules]
    StateUp --> P3[3. onPreStopSpinningTable: PreStopSpinningTable]
    P3 --> P4[4. onStopSpinningTable: StopSpinningTable]
    P4 --> P5[5. onShowResultEntry: ShowResultEntry BigWin/Jackpot]
    
    P5 --> ModeCheck{nextMode !== currentMode?}
    ModeCheck -->|Yes: Trigger Feature| P6[6. transitionGameMode & enterGameMode]
    ModeCheck -->|No: Settle Round| P7[7. onShowResultFinal: ShowResultFinal]
    
    P7 --> P8[8. Commit Wallet & AutoSpin Loop]
    P8 --> Trigger
```
