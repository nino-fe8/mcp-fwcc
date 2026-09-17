---
id: "cc_slot_module:ToastInfoModule:overview:lifecycle_flowchart"
title: "ToastInfoModule Lifecycle Flowchart"
category: "cc_slot_module"
tags: ["ToastInfoModule", "toast_info_module", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 ToastInfoModule Lifecycle Flowchart

<!-- convention-summary-start -->
### ToastInfoModule Lifecycle Flowchart Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for ToastInfoModule Lifecycle Flowchart.
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
    participant GL as GameLogic
    participant TIM as ToastInfoModule

    GL->>TIM: emit("NETWORK_WARNING", "Connection Lost")
    TIM->>TIM: showMessage("Connection Lost")
    TIM->>TIM: node.active = true, scale = 0.5
    TIM->>TIM: tween scale to 1.0 (0.2s)
    TIM->>TIM: delay 1.5s
    TIM->>TIM: node.active = false
```
