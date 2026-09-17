---
id: "cc_slot_module:FreeOptionDirectorModule:overview:lifecycle_flowchart"
title: "FreeOptionDirectorModule Selection Lifecycle Flowchart"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 FreeOptionDirectorModule Selection Lifecycle Flowchart

<!-- convention-summary-start -->
### FreeOptionDirectorModule Selection Lifecycle Flowchart Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FreeOptionDirectorModule Selection Lifecycle Flowchart.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Lifecycle & Countdown State Flowchart

```mermaid
graph TD
    Enter[enter: Reset countdownTime = defaultCountdownTime] --> Enable[onEnableOptions: Buttons active]
    Enable --> StartTimer[startCountDown: Launch 1s repeat tween]
    
    StartTimer --> Wait{Player clicks or Timer <= 0?}
    
    Wait -->|Player Click| Touch[optionClick: Extract optionId]
    Wait -->|Timer Reaches 0s| AutoPick[_runAutoTrigger: Pick random optionId]
    
    AutoPick --> Touch
    Touch --> Disable[onEnableOptions: Buttons disabled]
    Disable --> Stop[stopCountDown: Halt active tween]
    Stop --> SendReq[gameLogic.emit SEND_FREE_OPTION_REQUEST, selectedOption]
    SendReq --> WaitServer[Server responds with chosen Free Spins mode]
```
