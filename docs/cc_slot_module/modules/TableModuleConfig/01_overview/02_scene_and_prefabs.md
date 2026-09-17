---
id: "cc_slot_module:TableModuleConfig:overview:scene_and_prefabs"
title: "TableModuleConfig Scene Node Placement & Prefab Structure"
category: "cc_slot_module"
tags: ["TableModuleConfig", "table_module_config", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ TableModuleConfig Scene Node Placement & Prefab Structure

<!-- convention-summary-start -->
### TableModuleConfig Scene Node Placement & Prefab Structure Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TableModuleConfig Scene Node Placement & Prefab Structure.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Inspected Scene Node Placement

Inspected live from production scenes (`g9000L` / `g9666L`), `TableModuleConfig` resides directly on the `SlotTableModule` node:

```text
MainGamePrefab
└── SlotTableModule [Node]
    ├── SlotTableModule
    ├── TableModuleConfig (Component: TableModuleConfig)
    ├── SlotTableData
    ├── SlotTableNearWinModule
    └── SlotModuleEditorTag
```
