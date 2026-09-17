---
id: "cc_slot_module:NormalGameDirectorModule:overview:lifecycle_flowchart"
title: "NormalGameDirectorModule Lifecycle & Spin Flowchart"
category: "cc_slot_module"
tags: ["NormalGameDirectorModule", "normal_game_director", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 NormalGameDirectorModule Lifecycle & Spin Flowchart

<!-- convention-summary-start -->
### NormalGameDirectorModule Lifecycle & Spin Flowchart Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for NormalGameDirectorModule Lifecycle & Spin Flowchart.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Normal Game Spin Flowchart

```mermaid
graph TD
    Start([onLoad: Bind Director & Writer]) --> Join[onJoinGameSuccess: Emit JOIN_GAME_SUCCESS]
    Join --> Idle[State: IDLE - Ready for Spin]
    
    Idle -->|Spin Clicked| Trigger[onBeforeSpinStart: NormalSpinTrigger]
    Trigger --> StartSpin[onStartSpinningTable: StartSpinning]
    StartSpin --> ServerRec[onStateUpdate: parseDataPS & updateDataModules]
    ServerRec --> StopSpin[onStopSpinningTable: StopSpinningTable]
    
    StopSpin --> WinCheck{Is BigWin / Jackpot?}
    WinCheck -->|Yes| ShowEntry[onShowResultEntry]
    WinCheck -->|No| ModeCheck
    ShowEntry --> ModeCheck{nextMode !== 1?}
    
    ModeCheck -->|Trigger Free/Bonus| Transition[transitionGameMode & enterGameMode]
    ModeCheck -->|Normal Mode| Settle[onShowResultFinal & Resume Wallet]
    
    Settle --> AutoCheck{isAutoSpin?}
    AutoCheck -->|Yes| Trigger
    AutoCheck -->|No| Idle
```
