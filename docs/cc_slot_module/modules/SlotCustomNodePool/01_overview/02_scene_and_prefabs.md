---
id: "cc_slot_module:SlotCustomNodePool:overview:scene_and_prefabs"
title: "SlotCustomNodePool Memory Pooling Integration"
category: "cc_slot_module"
tags: ["SlotCustomNodePool", "node_pool", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ SlotCustomNodePool Memory Pooling Integration

<!-- convention-summary-start -->
### SlotCustomNodePool Memory Pooling Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotCustomNodePool Memory Pooling Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Internal Pool Engine

`SlotCustomNodePool` is utilized internally by `SlotSymbolManager` and `PoolFactoryModule` instances mounted across the scene graph:

```text
Canvas/Director/GameMode/MainGamePrefab
├── SlotTableModule/SymbolPool (SlotSymbolManager ➔ uses SlotCustomNodePool)
├── SlotTablePaylineModule/SymbolPool (SlotSymbolManager ➔ uses SlotCustomNodePool)
└── TransformSymbolModule/VfxPool (PoolFactoryModule ➔ uses SlotCustomNodePool)
```

---

## 2. Zero Garbage Collection (GC) Guarantee

Pre-instantiates nodes and maintains a fixed-capacity FIFO/LIFO stack, eliminating runtime memory allocations during continuous auto-spins.
