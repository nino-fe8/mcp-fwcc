---
id: "cc_slot_module:SlotTableNearWinModule:overview:lifecycle_flowchart"
title: "SlotTableNearWinModule Lifecycle Flowchart"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 SlotTableNearWinModule Lifecycle Flowchart

<!-- convention-summary-start -->
### SlotTableNearWinModule Lifecycle Flowchart Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableNearWinModule Lifecycle Flowchart.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Lifecycle Sequence Diagram

```mermaid
sequenceDiagram
    autonumber
    participant Director as GameDirector
    participant Table as SlotTableModule
    participant NW as SlotTableNearWinModule
    participant Reel as SlotReelModule
    participant Sound as SlotSoundPlayerModule

    Note over Director,Sound: 1. Setup & Pre-Calculation Phase
    Director->>Table: showReelMatrix(matrix)
    Table->>NW: emit("SETUP_NEARWIN", { matrix, isTurboActive, context })
    NW->>NW: Counts Scatters/Bonus/JP per column
    NW->>Reel: extendTimeToStop(isNearWin, isLastReel)

    Note over Director,Sound: 2. Sequential Reel Stop Phase
    Table->>NW: emit("REEL_STOP_NEARWIN", { reelCount, context })
    alt Reel Column Has NearWin & !FastToResult
        NW->>NW: _playNearWinEffect(reelCount)
        NW->>NW: Reposition nearWinEffect to X coordinate
        NW->>Sound: playSfx("NEAR_WIN")
    else Column Has No NearWin or Last Column Stopped
        NW->>NW: _stopNearWinEffect()
        NW->>Sound: stopSfx("NEAR_WIN")
    end

    Note over Director,Sound: 3. Cleanup & Reset Phase
    Table->>NW: emit("RESET_NEARWIN")
    NW->>NW: resetNearWin()
```
