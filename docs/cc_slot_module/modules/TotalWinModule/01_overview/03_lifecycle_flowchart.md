---
id: "cc_slot_module:TotalWinModule:overview:lifecycle_flowchart"
title: "TotalWinModule Lifecycle Sequence Flowchart"
category: "cc_slot_module"
tags: ["TotalWinModule", "total_win_module", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 TotalWinModule Lifecycle Sequence Flowchart

<!-- convention-summary-start -->
### TotalWinModule Lifecycle Sequence Flowchart Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TotalWinModule Lifecycle Sequence Flowchart.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Sequence Flowchart

```mermaid
sequenceDiagram
    autonumber
    participant Writer as FreeGameWriterModule
    participant CC as CutsceneController
    participant TWM as TotalWinModule
    participant MT as MoneyTween

    Writer->>CC: PLAY_CUTSCENE(TOTAL_WIN, { winAmount })
    CC->>TWM: play(content, callback)
    TWM->>TWM: enter() -> getTotalWinAmount()
    TWM->>MT: runNumber(animDuration: 10s)
    
    alt Player Taps
        Player->>TWM: onClick()
        TWM->>MT: runNumber(1s, totalWin)
    else Natural Roll Completion
        MT-->>TWM: onComplete()
    end
    
    TWM->>TWM: finish()
    TWM->>TWM: delay(0.5s) -> exit()
    TWM->>CC: callback()
    CC-->>Writer: Resolves Promise -> Returns to BaseGame
```
