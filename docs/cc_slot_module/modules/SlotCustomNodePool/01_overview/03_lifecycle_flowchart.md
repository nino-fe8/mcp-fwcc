---
id: "cc_slot_module:SlotCustomNodePool:overview:lifecycle_flowchart"
title: "SlotCustomNodePool Checkout and Recycling Flowchart"
category: "cc_slot_module"
tags: ["SlotCustomNodePool", "slot_custom_node_pool", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 SlotCustomNodePool Checkout and Recycling Flowchart

<!-- convention-summary-start -->
### SlotCustomNodePool Checkout and Recycling Flowchart Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotCustomNodePool Checkout and Recycling Flowchart.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Checkout & Put Sequence Flowchart

```mermaid
sequenceDiagram
    autonumber
    participant Reel as SlotReelModule
    participant Mgr as MultipleSymbolManager
    participant Pool as SlotCustomNodePool
    participant Map as _pools: Map<string, cc.NodePool>

    Note over Reel,Map: Checkout Phase: get(symbolCode)
    Reel->>Mgr: getSymbol("WILD")
    Mgr->>Pool: get("WILD")
    Pool->>Pool: getSpecialPoolName("WILD") -> "SlotCustomNodePool_special_WILD"
    Pool->>Map: get("...special_WILD")
    
    alt Pool Has Ready Instance
        Map-->>Pool: pool.get()
    else Pool Exhausted
        Pool->>Pool: instantiate(specialSymbolTemplate.template)
        Pool->>Pool: setNodeMetadata(node, poolName, isSpecial: true)
    end
    Pool-->>Mgr: Returns Wild Node with metadata stamped
    Mgr-->>Reel: Returns Node to column

    Note over Reel,Map: Recycling Phase: put(node)
    Reel->>Mgr: removeSymbol(node)
    Mgr->>Pool: put(node)
    Pool->>Pool: Reads node['__custom_pool_name_']
    Pool->>Map: _pools.get(poolName).put(node)
```
