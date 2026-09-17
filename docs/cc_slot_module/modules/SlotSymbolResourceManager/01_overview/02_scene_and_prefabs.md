---
id: "cc_slot_module:SlotSymbolResourceManager:overview:scene_and_prefabs"
title: "SlotSymbolResourceManager Service Injection & Placement"
category: "cc_slot_module"
tags: ["SlotSymbolResourceManager", "symbol_resource_manager", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ SlotSymbolResourceManager Service Injection & Placement

<!-- convention-summary-start -->
### SlotSymbolResourceManager Service Injection & Placement Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolResourceManager Service Injection & Placement.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Scene Graph Integration

`SlotSymbolResourceManager` is attached to symbol manager nodes or injected globally to provide asset cache services:

```text
Canvas/Director/GameMode/MainGamePrefab
├── SlotTableModule
│   └── SymbolPool [Node] (SlotSymbolManager, SlotSymbolResourceManager)
└── SlotTablePaylineModule
    └── SymbolPool [Node] (SlotSymbolManager, SlotSymbolResourceManager)
```

---

## 2. Asset Lookup Responsibility

Acts as the asset dictionary providing `getSymbolSpriteFrame(symbolName)` and `getSpineSkeletonData(symbolName)` to both the spinning reel pool and the payline presentation pool.
