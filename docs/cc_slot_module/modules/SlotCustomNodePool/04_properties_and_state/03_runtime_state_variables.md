---
id: "cc_slot_module:SlotCustomNodePool:properties:runtime_state_variables"
title: "SlotCustomNodePool Runtime State & Map Storage"
category: "cc_slot_module"
tags: ["SlotCustomNodePool", "slot_custom_node_pool", "cc_slot_module", "properties", "runtime_state", "node_pool_map"]
---

# 📊 SlotCustomNodePool Runtime State & Map Storage

<!-- convention-summary-start -->
### SlotCustomNodePool Runtime State & Map Storage Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotCustomNodePool Runtime State & Map Storage.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Internal Fields & Constants

| Field Name | Type | Visibility | Purpose |
| :--- | :--- | :--- | :--- |
| `_pools` | `Map<string, cc.NodePool>` | `protected readonly` | Registry mapping pool names (e.g. `'SlotCustomNodePool_normal'`, `'SlotCustomNodePool_special_WILD'`) to concrete `cc.NodePool` objects. |
| `normalSymbolTemplate` | `cc.Prefab` | `private readonly` | Stored template for normal symbols. |
| `normalInitCount` | `number` | `private readonly` | Pre-allocated count for normal symbols. |
| `specialSymbolTemplates`| `SpecialSymbolTemplates[]`| `private readonly` | Stored list of special symbol templates. |
| `CUSTOM_POOL_NAME_KEY` | `string` (`'__custom_pool_name_'`)| `constant` | Dynamic property key injected onto nodes to store their origin pool name. |
