---
id: "cc_slot_module:SlotObjectPool:overview:lifecycle_flowchart"
title: "SlotObjectPool Lifecycle & Sequence Diagram"
category: "cc_slot_module"
tags: ["SlotObjectPool", "slot_object_pool", "cc_slot_module", "overview", "lifecycle", "sequence"]
---

# 🔄 SlotObjectPool Lifecycle & Sequence Diagram

<!-- convention-summary-start -->
### SlotObjectPool Lifecycle & Sequence Diagram Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotObjectPool Lifecycle & Sequence Diagram.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Allocation & Recycling Lifecycle

```mermaid
sequenceDiagram
    participant Engine as Cocos Engine
    participant Pool as SlotObjectPool
    participant Client as Payline / Win Controller

    Engine->>Pool: onLoad()
    loop i = 0 to initCount - 1
        Pool->>Pool: get() (instantiates & activates)
        Pool->>Pool: put() (deactivates & puts to cc.NodePool)
    end

    Client->>Pool: get()
    Pool-->>Client: Node (active = true, parent = pool.node)

    Client->>Pool: put(node)
    Pool->>Pool: node.active = false, splice usingObjects, pool.put(node)
```
