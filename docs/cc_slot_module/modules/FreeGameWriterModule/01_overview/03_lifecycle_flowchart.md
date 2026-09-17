---
id: "cc_slot_module:FreeGameWriterModule:overview:lifecycle_flowchart"
title: "FreeGameWriterModule Script Synthesis Lifecycle Flowchart"
category: "cc_slot_module"
tags: ["FreeGameWriterModule", "free_game_writer", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 FreeGameWriterModule Script Synthesis Lifecycle Flowchart

<!-- convention-summary-start -->
### FreeGameWriterModule Script Synthesis Lifecycle Flowchart Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FreeGameWriterModule Script Synthesis Lifecycle Flowchart.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Free Spins Script Generation Flowchart

```mermaid
graph TD
    Trigger[Free Spin Trigger Request] --> GenTrigger[makeScriptFreeSpinTrigger]
    GenTrigger --> SpinQueue["Queue: _beforeSpinStart ➔ _syncPlaySessionData ➔ _resetOnSpin ➔ _resetTable ➔ _decreaseFreeGameSpinTimes"]
    
    Result[Spin Result Received] --> GenResult[makeScriptShowResultFinal]
    GenResult --> CheckRemain{freeGameRemain > 0?}
    
    CheckRemain -->|Yes: More Spins| RemainQueue[getFreeGameRemainScript: _updateSpinTimes]
    CheckRemain -->|No: Last Spin| EndQueue["getFreeGameEndScript: _showUnskippedCutscene(TOTAL_WIN) ➔ _gameExit"]
    
    RemainQueue --> Exec[ScriptExecutor executes steps asynchronously]
    EndQueue --> Exec
```
