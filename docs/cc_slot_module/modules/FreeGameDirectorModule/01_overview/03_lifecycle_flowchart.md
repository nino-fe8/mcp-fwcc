---
id: "cc_slot_module:FreeGameDirectorModule:overview:lifecycle_flowchart"
title: "FreeGameDirectorModule Lifecycle & Auto-Spin Flowchart"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 FreeGameDirectorModule Lifecycle & Auto-Spin Flowchart

<!-- convention-summary-start -->
### FreeGameDirectorModule Lifecycle & Auto-Spin Flowchart Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FreeGameDirectorModule Lifecycle & Auto-Spin Flowchart.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Free Spins Lifecycle Flowchart

```mermaid
graph TD
    Enter[enter: play BGM + syncSpinTimes + syncNormalTable] --> MarkFirst[isFirstAutoSpin = true]
    
    MarkFirst --> SpinStart[onBeforeSpinStart ➔ FreeSpinTrigger action]
    SpinStart --> BeforeSpin[_beforeSpinStart: reset speed + skip effects + delayAutoSpin]
    
    BeforeSpin --> Decrement[_decreaseFreeGameSpinTimes: freeSpinTimes--]
    Decrement --> SpinReels[TABLE_START_SPIN ➔ TABLE_STOP_SPIN]
    
    SpinReels --> ShowWin[_showWinPayline: BLINK_ALL_PAYLINES with cumulative winAmountPS]
    ShowWin --> ResultFinal[ShowResultFinal action]
    
    ResultFinal --> CheckSpins{freeGameRemain > 0?}
    CheckSpins -->|Yes| UpdateBadge[_updateSpinTimes: sync badge]
    UpdateBadge --> AutoNext[Next Free Spin triggered by GameLogic]
    AutoNext --> SpinStart
    
    CheckSpins -->|No| FinalWin[_showUnskippedCutscene TOTAL_WIN]
    FinalWin --> Exit[_gameExit ➔ CLEAR_PAYLINES + SYNC_TABLE ➔ Return to Normal Game]
```
