---
id: "cc_slot_module:PaylineFactory:overview:architecture_and_role"
title: "PaylineFactory Architectural Role & Node Pooling Mechanism"
category: "cc_slot_module"
tags: ["PaylineFactory", "payline_factory", "cc_slot_module", "overview", "architecture", "node_pool", "zero_gc"]
---

# 🏛️ PaylineFactory Architectural Role & Node Pooling Mechanism

<!-- convention-summary-start -->
### PaylineFactory Architectural Role & Node Pooling Mechanism Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineFactory Architectural Role & Node Pooling Mechanism.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Architectural Mission

`PaylineFactory` is a multi-type prefab instantiation and pooling manager for the Payline subsystem. It manages zero-allocation node pools for various payline visual assets (win frames, line segments, particle VFX, multiplier badges) using internal `Map<string, cc.NodePool>` and tagged recycling (`__prefabName__`).

```mermaid
graph TD
    Factory[PaylineFactory] -->|Preload in onLoad| Map[Map: string -> cc.NodePool]
    
    Requester[PaylineWinFrameModule / PaylineLineModule] -->|getObject(name)| Factory
    Factory -->|Pool Hit| Get[pool.get()]
    Factory -->|Pool Miss| Spawn[_spawnObject: instantiate(prefab) + tag __prefabName__]
    
    Requester -->|returnObject(node)| Factory
    Factory -->|Reads __prefabName__| Put[pool.put(node)]
```

---

## 2. Key Responsibilities

1. **Pre-Allocation on Load**:
   - Spawns `initCount` instances per registered `PoolItem` during `onLoad()` to prevent runtime GC spikes during fast spins.
2. **Metadata Tagging (`__prefabName__`)**:
   - Stamps instantiated nodes with `__prefabName__` property for automatic routing back to the correct pool during `returnObject()`.
3. **Safe Disposal**:
   - If `returnObject()` encounters an unrecognized pool, it gracefully falls back to `node.destroy()` to prevent memory leaks.
