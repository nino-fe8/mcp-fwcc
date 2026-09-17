---
id: "cc_slot_module:WaitingSceneModule:overview:lifecycle_flowchart"
title: "WaitingSceneModule Lifecycle Flowchart"
category: "cc_slot_module"
tags: ["WaitingSceneModule", "waiting_scene_module", "cc_slot_module", "overview", "lifecycle"]
---

# 🔄 WaitingSceneModule Lifecycle Flowchart

<!-- convention-summary-start -->
### WaitingSceneModule Lifecycle Flowchart Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WaitingSceneModule Lifecycle Flowchart.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


```mermaid
sequenceDiagram
    participant Engine as Cocos Engine
    participant WSM as WaitingSceneModule
    participant Data as WaitingSceneData

    Engine->>WSM: start()
    WSM->>Data: this.gameLogic.getDataModel().WaitingSceneData
    WSM->>WSM: setupObserver() (watch "active")
    Data-->>WSM: active = true
    WSM->>WSM: showWaitingScene(true) (active = true, opacity = 255)
    Data-->>WSM: active = false
    WSM->>WSM: showWaitingScene(false) (active = false, opacity = 0)
    Engine->>WSM: onDestroy()
    WSM->>WSM: this.observer.releaseAll(...)
```
