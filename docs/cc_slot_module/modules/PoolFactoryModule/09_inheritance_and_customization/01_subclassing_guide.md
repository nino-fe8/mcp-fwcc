---
id: "cc_slot_module:PoolFactoryModule:inheritance:subclassing_guide"
title: "PoolFactoryModule Subclassing Guide"
category: "cc_slot_module"
tags: ["PoolFactoryModule", "pool_factory_module", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ PoolFactoryModule Subclassing Guide

<!-- convention-summary-start -->
### PoolFactoryModule Subclassing Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PoolFactoryModule Subclassing Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclassing Rules

1. **Do not override `onLoad()` directly**: Implement `onLoadExtend()` to configure custom pool parameters.
2. **Always call `returnObject()`**: When animations finish, always return nodes to prevent pool starvation.
3. **Reset node transformations**: Clean scale, rotation, and opacity before returning nodes to the pool.
