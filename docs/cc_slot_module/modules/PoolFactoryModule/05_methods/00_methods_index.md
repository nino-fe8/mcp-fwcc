---
id: "cc_slot_module:PoolFactoryModule:methods:methods_index"
title: "PoolFactoryModule Methods Master Index"
category: "cc_slot_module"
tags: ["PoolFactoryModule", "pool_factory_module", "cc_slot_module", "methods", "index"]
---

# 📖 PoolFactoryModule Methods Master Index

<!-- convention-summary-start -->
### PoolFactoryModule Methods Master Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PoolFactoryModule Methods Master Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Declared Methods

| Method | Return Type | Scope | Description |
| :--- | :--- | :--- | :--- |
| **`onLoad()`** | `void` | `protected` | Initializes the internal `NodePool` and seeds pre-warmed prefab instances. |
| **`onLoadExtend()`** | `void` | `public` | Virtual extension hook for subclasses to perform custom initialization. |
| **`getObject()`** | `cc.Node` | `public` | Retrieves a pooled node or instantiates a new one, registering it in `_usedObjects`. |
| **`returnObject(obj)`** | `void` | `public` | Returns a borrowed node back to the pool and removes it from `_usedObjects`. |
| **`returnAllObjects()`** | `void` | `public` | Recycles all currently borrowed nodes back to the pool. |
| **`getSize()`** | `number` | `public` | Returns the count of currently available inactive nodes in the pool. |
| **`clear()`** | `void` | `public` | Recycles all active objects and clears the internal `NodePool`. |
