---
id: "cc_slot_module:BaseDataModule:overview:scene_and_prefabs"
title: "BaseDataModule Scene Placement & Co-Location Architecture"
category: "cc_slot_module"
tags: ["BaseDataModule", "base_data_module", "cc_slot_module", "overview", "scene"]
---

# 🌳 BaseDataModule Scene Placement & Co-Location Architecture

<!-- convention-summary-start -->
### BaseDataModule Scene Placement & Co-Location Architecture Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseDataModule Scene Placement & Co-Location Architecture.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Co-Location Pattern

`BaseDataModule` subclasses are **always co-located** on the same scene node as their corresponding `SlotBaseModule` UI controller:

```text
Table Node (Canvas/Director/GameMode/BoardG/Table)
├── SlotTableModule (UI presentation & reel scrolling)
├── TableModuleConfig (Geometry parameters)
└── SlotTableData (BaseDataModule subclass: registeredKeys = ['matrix'])

Payline Node (Canvas/Director/GameMode/BoardG/Payline)
├── SlotTablePaylineModule (Visual line drawing)
└── SlotTablePaylineData (BaseDataModule subclass: registeredKeys = ['payLines', 'winAmount'])
```

---

## 2. Inspector Properties Reference Table

| Property Name | TypeScript Type | Default Value | Role |
| :--- | :--- | :--- | :--- |
| **`registeredKeys`** | `string[]` | `[]` | Array of keys in `playSession` that this module subscribes to. |
| **`baseMode`** | `SlotBaseModule` | `null` | Sibling UI component reference auto-resolved in `onLoad()`. |
| **`gameMode`** | `number` | `undefined` | Inherited from `this.baseMode.gameMode`. |
| **`isRegistered`** | `boolean` | `false` | Registration flag tracked by `GameDataStore`. |
