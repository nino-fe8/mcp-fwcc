---
id: "cc_slot_module:SlotCustomNodePool:properties:inspector_properties"
title: "SlotCustomNodePool Constructor Parameters Reference"
category: "cc_slot_module"
tags: ["SlotCustomNodePool", "slot_custom_node_pool", "cc_slot_module", "properties", "constructor_params"]
---

# 🎛️ SlotCustomNodePool Constructor Parameters Reference

<!-- convention-summary-start -->
### SlotCustomNodePool Constructor Parameters Reference Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotCustomNodePool Constructor Parameters Reference.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Instantiation Arguments

| Parameter Name | TypeScript Type | Purpose & Role |
| :--- | :--- | :--- |
| `template` | `cc.Prefab` | Default base symbol prefab for standard paying symbols (`A`, `K`, `Q`, etc.). |
| `initCount` | `number` | Initial allocation size for the standard symbol pool (e.g. 30). |
| `specialSymbolTemplates`| `SpecialSymbolTemplates[]` | List of special symbol prefabs (`symbolCode`, `template`, `initCount`). |
