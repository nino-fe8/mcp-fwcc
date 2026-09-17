---
id: "cc_slot_module:FreeGameWriterModule:game_flow:spin_phase_breakdown"
title: "FreeGameWriterModule Free Spin Sequence Breakdown"
category: "cc_slot_module"
tags: ["FreeGameWriterModule", "free_game_writer", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🌀 FreeGameWriterModule Free Spin Sequence Breakdown

<!-- convention-summary-start -->
### FreeGameWriterModule Free Spin Sequence Breakdown Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for FreeGameWriterModule Free Spin Sequence Breakdown.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Sequence Execution

```mermaid
sequenceDiagram
    autonumber
    participant Director as FreeGameDirectorModule
    participant Writer as FreeGameWriterModule
    participant Executor as ScriptExecutor

    Director->>Writer: makeScriptFreeSpinTrigger()
    Writer-->>Director: [_beforeSpinStart, _syncPlaySessionData, _resetOnSpin, _resetTable, _decreaseFreeGameSpinTimes]
    Director->>Executor: executeScript(queue)
    
    Note over Director,Executor: Reel spinning & stopping...
    
    Director->>Writer: makeScriptShowResultFinal()
    alt freeGameRemain > 0
        Writer-->>Director: [_updateSpinTimes]
    else freeGameRemain == 0
        Writer-->>Director: [_showUnskippedCutscene(TOTAL_WIN), _gameExit]
    end
    Director->>Executor: executeScript(queue)
```
