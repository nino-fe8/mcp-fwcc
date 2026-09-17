---
id: "cc_slot_module:SlotSymbolModule:overview:scene_and_prefabs"
title: "SlotSymbolModule Dynamic Instantiation & Prefab Structure"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ SlotSymbolModule Dynamic Instantiation & Prefab Structure

<!-- convention-summary-start -->
### SlotSymbolModule Dynamic Instantiation & Prefab Structure Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolModule Dynamic Instantiation & Prefab Structure.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Runtime Instantiation & Pooling

`SlotSymbolModule` nodes are dynamically instantiated by `SlotSymbolManager` instances located under `SlotTableModule/SymbolPool` and `SlotTablePaylineModule/SymbolPool`:

```text
SymbolPrefab (Instantiated by SlotSymbolManager)
├── [Component 1] SlotSymbolModule
├── StaticSprite [Child Node] (cc.Sprite - Static symbol asset)
├── BlurSprite [Child Node] (cc.Sprite - High speed blur asset)
└── SpineNode [Child Node] (sp.Skeleton - Win celebration Spine animation)
```

---

## 2. Display States

- **Spinning**: Toggles `BlurSprite` visible, hides static/spine.
- **Stopped**: Toggles `StaticSprite` visible.
- **Win Hit**: Activates `SpineNode` and plays looping win animations above the reel mask.
