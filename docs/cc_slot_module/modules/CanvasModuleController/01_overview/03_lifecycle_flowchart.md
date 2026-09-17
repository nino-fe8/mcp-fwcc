---
id: "cc_slot_module:CanvasModuleController:overview:lifecycle_flowchart"
title: "CanvasModuleController Lifecycle Flowchart"
category: "cc_slot_module"
tags: ["CanvasModuleController", "canvas_module_controller", "cc_slot_module", "overview", "lifecycle"]
---

# 🔄 CanvasModuleController Lifecycle Flowchart

<!-- convention-summary-start -->
### CanvasModuleController Lifecycle Flowchart Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CanvasModuleController Lifecycle Flowchart.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Lifecycle Flow

```mermaid
sequenceDiagram
    participant Canvas as cc.Canvas
    participant Controller as CanvasModuleController
    participant Wrapper as eno.CanvasControllerWrapper

    Canvas->>Controller: onLoad()
    Controller->>Wrapper: new CanvasControllerWrapper(...)
    Canvas->>Controller: start()
    Controller->>Wrapper: start() (binds resize listeners)
    Canvas->>Controller: onDestroy()
    Controller->>Wrapper: onDestroy() (unbinds resize listeners)
```
