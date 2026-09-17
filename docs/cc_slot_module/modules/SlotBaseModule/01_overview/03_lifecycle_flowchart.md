---
id: "cc_slot_module:SlotBaseModule:overview:lifecycle_flowchart"
title: "SlotBaseModule Lifecycle Flowchart"
category: "cc_slot_module"
tags: ["SlotBaseModule", "slot_base_module", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 SlotBaseModule Lifecycle Flowchart

<!-- convention-summary-start -->
### SlotBaseModule Lifecycle Flowchart Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotBaseModule Lifecycle Flowchart.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Lifecycle Sequence Flowchart

```mermaid
sequenceDiagram
    autonumber
    participant Engine as Cocos Creator
    participant SBM as SlotBaseModule
    participant DI as eno.applyInjections
    participant GMD as GameModeDirector

    Engine->>SBM: onLoad()
    SBM->>SBM: NodeUtils.getGameIdFromNode(this.node)
    SBM->>DI: applyInjections(this, gameId)
    Note over SBM: gameLogic, eventManager, observer, soundPlayer now available!
    
    SBM->>SBM: gameLogic.on("RESET_ALL_EFFECT_AND_TASKS", resetAllEffectAndTasks)
    SBM->>SBM: onLoadExtend()
    SBM->>SBM: registerEvents()
    
    GMD->>SBM: setupModule(moduleEvent, gameMode)
    Note over SBM: moduleEvent & gameMode configured!
```
