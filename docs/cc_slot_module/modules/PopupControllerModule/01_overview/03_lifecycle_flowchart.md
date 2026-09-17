---
id: "cc_slot_module:PopupControllerModule:overview:lifecycle_flowchart"
title: "PopupControllerModule Lifecycle Flowchart"
category: "cc_slot_module"
tags: ["PopupControllerModule", "popup_controller", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 PopupControllerModule Lifecycle Flowchart

<!-- convention-summary-start -->
### PopupControllerModule Lifecycle Flowchart Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PopupControllerModule Lifecycle Flowchart.
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
    participant PCM as PopupControllerModule
    participant Children as Child Popups (Setting, Info, History)

    Engine->>PCM: onLoad()
    loop For each child in node.children
        PCM->>Children: child.active = true (Triggers child onLoad/onLoadExtend)
    end
    Note over Children: Children start() executes -> hide themselves
```
