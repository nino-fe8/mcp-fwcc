---
id: "cc_slot_module:BaseCutscene:overview:lifecycle_flowchart"
title: "BaseCutscene Modal Lifecycle Sequence Flowchart"
category: "cc_slot_module"
tags: ["BaseCutscene", "base_cutscene", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 BaseCutscene Modal Lifecycle Sequence Flowchart

<!-- convention-summary-start -->
### BaseCutscene Modal Lifecycle Sequence Flowchart Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseCutscene Modal Lifecycle Sequence Flowchart.
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
    participant Caller as Caller (CutsceneController / Event)
    participant BC as BaseCutscene Instance
    participant EventMgr as GameEventManager
    participant GameLogic as GameLogic

    Caller->>BC: play(content, callback)
    BC->>BC: show() [active = true]
    BC->>EventMgr: scheduleOnce -> emit(SHOW_FULL_DISPLAY_CUTSCENE)
    BC->>BC: enter() [Subclass Animation / Coin Roll]
    
    alt Normal Finish
        BC->>BC: exit()
    else Skipped
        Caller->>BC: skip() -> exit()
    end
    
    BC->>Caller: callback()
    BC->>EventMgr: emit(HIDE_FULL_DISPLAY_CUTSCENE)
    BC->>GameLogic: emit(ON_CUTSCENE_CLOSE, cutsceneType)
    BC->>BC: emit("STOP") & active = false
```
