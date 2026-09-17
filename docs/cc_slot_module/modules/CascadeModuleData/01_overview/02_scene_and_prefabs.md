---
id: "cc_slot_module:CascadeModuleData:overview:scene_and_prefabs"
title: "CascadeModuleData Scene Node Placement & Prefab Structure"
category: "cc_slot_module"
tags: ["CascadeModuleData", "cascade_module_data", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ CascadeModuleData Scene Node Placement & Prefab Structure

<!-- convention-summary-start -->
### CascadeModuleData Scene Node Placement & Prefab Structure Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CascadeModuleData Scene Node Placement & Prefab Structure.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Inspected Scene Node Placement

Attached alongside `VerticalCascadeModule` and `CascadeModuleConfig` on the `CascadeModule` node:

```text
Canvas/Director/GameMode/MainGamePrefab
└── CascadeModule [Node with Components]
    ├── VerticalCascadeModule
    ├── CascadeModuleData (Component: CascadeModuleData)
    ├── CascadeModuleConfig
    └── SlotModuleEditorTag
```
