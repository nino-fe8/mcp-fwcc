---
id: "cc_slot_module:MultipleSymbolManager:properties:runtime_state_variables"
title: "MultipleSymbolManager Runtime State Variables"
category: "cc_slot_module"
tags: ["MultipleSymbolManager", "multiple_symbol_manager", "cc_slot_module", "properties", "runtime_state"]
---

# 📊 MultipleSymbolManager Runtime State Variables

<!-- convention-summary-start -->
### MultipleSymbolManager Runtime State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MultipleSymbolManager Runtime State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Internal Fields

| Field Name | Type | Initial Value | Mutation Moment | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| `symbolPool` | `SlotCustomNodePool` | `null` | Assigned in `initSymbolPool()` | Overrides base `cc.NodePool` with multi-pool routing engine. |
