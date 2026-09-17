---
id: "cc_slot_module:TableModuleConfig:methods:index"
title: "TableModuleConfig Methods Index"
category: "cc_slot_module"
tags: ["TableModuleConfig", "table_config", "cc_slot_module", "methods", "index"]
---

# 📋 TableModuleConfig Methods Index

<!-- convention-summary-start -->
### TableModuleConfig Methods Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TableModuleConfig Methods Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `./SYMBOL_INDEXES.md`, `./getRandomBeautyMatrix.md`, `./getRandomMatrix.md`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Declared Methods & Getters Catalog

| Member Signature | Visibility | Purpose |
| :--- | :--- | :--- |
| **[`get SYMBOL_INDEXES(): number[][]`](./SYMBOL_INDEXES.md)** | `public (getter)` | Computes & caches sequential 2D coordinate index matrix based on `TABLE_FORMAT`. |
| **[`getRandomBeautyMatrix(): string[][]`](./getRandomBeautyMatrix.md)** | `public` | Returns a random beauty matrix from `BEAUTY_MATRIX` for attract mode. |
| **[`getRandomMatrix(): string[][]`](./getRandomMatrix.md)** | `public` | Generates a random symbol matrix for fallback / disconnected spin stops. |
