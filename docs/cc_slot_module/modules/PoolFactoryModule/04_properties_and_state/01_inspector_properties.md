---
id: "cc_slot_module:PoolFactoryModule:properties:inspector_properties"
title: "PoolFactoryModule Inspector Properties"
category: "cc_slot_module"
tags: ["PoolFactoryModule", "pool_factory_module", "cc_slot_module", "properties", "inspector"]
---

# 📋 PoolFactoryModule Inspector Properties

<!-- convention-summary-start -->
### PoolFactoryModule Inspector Properties Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PoolFactoryModule Inspector Properties.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Serialized Fields

| Property | Type | Default | When Set | Where Read | Impact if Invalid |
| :--- | :--- | :---: | :--- | :--- | :--- |
| **`template`** | `cc.Prefab` | `null` | Editor Inspector | `onLoad()`, `getObject()` | `getObject()` returns undefined / instantiation errors |
| **`initCount`** | `cc.Integer` | `5` | Editor Inspector | `onLoad()` | If 0, pool begins empty and allocates lazily |
