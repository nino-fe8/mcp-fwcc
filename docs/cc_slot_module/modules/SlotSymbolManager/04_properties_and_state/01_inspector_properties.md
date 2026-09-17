---
id: "cc_slot_module:SlotSymbolManager:properties:inspector_properties"
title: "SlotSymbolManager Inspector Properties"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ SlotSymbolManager Inspector Properties

<!-- convention-summary-start -->
### SlotSymbolManager Inspector Properties Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolManager Inspector Properties.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Inspector Properties Reference Table

| Property Name | TypeScript Type | Default Value | Role |
| :--- | :--- | :--- | :--- |
| **`template`** | `cc.Prefab` | `null` | Base prefab instantiated into `symbolPool`. |
| **`initCount`** | `number` | `15` | Pre-warmed pool capacity created on load. |
| **`isSymbolPool`**| `boolean` | `true` | `true`: Uses `NodePool.put()`; `false`: Reparents to `this.node`. |
