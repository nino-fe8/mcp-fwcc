---
id: "cc_slot_module:PaylineFactory:methods:index"
title: "PaylineFactory Methods Catalog Index"
category: "cc_slot_module"
tags: ["PaylineFactory", "payline_factory", "cc_slot_module", "methods", "index"]
---

# 📚 PaylineFactory Methods Catalog Index

<!-- convention-summary-start -->
### PaylineFactory Methods Catalog Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineFactory Methods Catalog Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `./onLoad.md`, `./preloadObjects.md`, `./_spawnObject.md`
- **Related Docs**: [`onLoad`](./onLoad.md), [`preloadObjects`](./preloadObjects.md), [`_spawnObject`](./_spawnObject.md)
<!-- convention-summary-end -->


---

## 1. Declared Methods Index

| Method Name | Scope | Return Type | Brief Purpose |
| :--- | :--- | :--- | :--- |
| **[`onLoad`](./onLoad.md)** | `protected` | `void` | Initializes pools and triggers object preloading. |
| **[`preloadObjects`](./preloadObjects.md)** | `protected` | `void` | Pre-instantiates `count` nodes into specified pool. |
| **[`_spawnObject`](./_spawnObject.md)** | `protected` | `cc.Node` | Instantiates prefab and tags `__prefabName__`. |
| **[`getObject`](./getObject.md)** | `public` | `cc.Node` | Retrieves pooled node or spawns fresh instance. |
| **[`returnObject`](./returnObject.md)** | `public` | `void` | Recycles node back to its tagged pool. |
| **[`clearPool`](./clearPool.md)** | `public` | `void` | Flushes a specific pool. |
| **[`clearAllPools`](./clearAllPools.md)** | `public` | `void` | Flushes all managed pools. |
