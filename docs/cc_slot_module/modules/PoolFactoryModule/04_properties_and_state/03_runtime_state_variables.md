---
id: "cc_slot_module:PoolFactoryModule:properties:runtime_state_variables"
title: "PoolFactoryModule Runtime State Variables"
category: "cc_slot_module"
tags: ["PoolFactoryModule", "pool_factory_module", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 PoolFactoryModule Runtime State Variables

<!-- convention-summary-start -->
### PoolFactoryModule Runtime State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PoolFactoryModule Runtime State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Internal State

| Field | Type | Default | Mutation Moment | Purpose & Guard Role |
| :--- | :--- | :---: | :--- | :--- |
| **`_pool`** | `cc.NodePool` | `null` | Initialized in `onLoad()` | Holds inactive recycled `cc.Node` objects |
| **`_usedObjects`** | `cc.Node[]` | `[]` | Modified on `getObject()`, `returnObject()` | Tracks checked-out active nodes to ensure comprehensive batch recycling |
