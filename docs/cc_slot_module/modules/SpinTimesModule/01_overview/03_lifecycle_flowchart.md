---
id: "cc_slot_module:SpinTimesModule:overview:lifecycle_flowchart"
title: "SpinTimesModule Lifecycle Sequence Flowchart"
category: "cc_slot_module"
tags: ["SpinTimesModule", "spin_times_module", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 SpinTimesModule Lifecycle Sequence Flowchart

<!-- convention-summary-start -->
### SpinTimesModule Lifecycle Sequence Flowchart Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SpinTimesModule Lifecycle Sequence Flowchart.
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
    participant Engine as Cocos Creator
    participant STM as SpinTimesModule
    participant Model as eno.SpinButtonNormal
    participant GL as GameLogic

    Engine->>STM: onLoadExtend()
    STM->>STM: node.active = false (Hidden initially)
    STM->>GL: emit(SET_UP_SPIN_TIMES)
    
    Model-->>STM: autoSpinCount updates (e.g. 50)
    STM->>STM: updateSpinTimes(50)
    STM->>STM: node.active = true, label = '50'
    
    Model-->>STM: state updates to NORMAL
    STM->>STM: resetSpinTimes() -> label = '', active = false
```
