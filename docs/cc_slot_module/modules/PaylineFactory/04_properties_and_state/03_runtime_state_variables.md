---
id: "cc_slot_module:PaylineFactory:properties_and_state:runtime_state_variables"
title: "PaylineFactory Internal Runtime State Variables"
category: "cc_slot_module"
tags: ["PaylineFactory", "payline_factory", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 PaylineFactory Internal Runtime State Variables

<!-- convention-summary-start -->
### PaylineFactory Internal Runtime State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineFactory Internal Runtime State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Runtime State Variables

| Variable | Type | Initial | Purpose |
| :--- | :--- | :--- | :--- |
| `poolMap` | `Map<string, cc.NodePool>` | `new Map()` | Dictionary of active NodePools keyed by pool item name. |
| `prefabMap` | `Map<string, cc.Prefab>` | `new Map()` | Dictionary of registered Prefab assets. |
