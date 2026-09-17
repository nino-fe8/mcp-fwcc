---
id: "cc_slot_module:IntroFreeGameModule:overview:lifecycle_flowchart"
title: "IntroFreeGameModule Lifecycle Sequence Flowchart"
category: "cc_slot_module"
tags: ["IntroFreeGameModule", "intro_free_game_module", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 IntroFreeGameModule Lifecycle Sequence Flowchart

<!-- convention-summary-start -->
### IntroFreeGameModule Lifecycle Sequence Flowchart Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for IntroFreeGameModule Lifecycle Sequence Flowchart.
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
    participant CC as CutsceneController
    participant IFG as IntroFreeGameModule
    participant Director as BaseGameDirector

    CC->>IFG: play(content, callback)
    IFG->>IFG: enter()
    IFG->>IFG: scheduleOnce(this.exit, timeShow)
    Note over IFG: Displays Free Spins Award Banner
    IFG->>IFG: exit()
    IFG->>CC: callback()
    CC-->>Director: Resolves Promise -> Transitions mode to FreeGame
```
