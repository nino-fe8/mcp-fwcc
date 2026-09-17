---
id: "cc_slot_module:MultipleSymbolManager:methods:index"
title: "MultipleSymbolManager Methods Index"
category: "cc_slot_module"
tags: ["MultipleSymbolManager", "multiple_symbol_manager", "cc_slot_module", "methods", "index"]
---

# 📋 MultipleSymbolManager Methods Index

<!-- convention-summary-start -->
### MultipleSymbolManager Methods Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MultipleSymbolManager Methods Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `./initSymbolPool.md`, `./getSymbolFromPool.md`
- **Related Docs**: [`initSymbolPool(): void`](./initSymbolPool.md), [`getSymbolFromPool(code): cc.Node`](./getSymbolFromPool.md)
<!-- convention-summary-end -->


---

## 1. Declared Methods Summary Table

| Method Signature | Visibility | Purpose |
| :--- | :--- | :--- |
| **[`initSymbolPool(): void`](./initSymbolPool.md)** | `public` | Overrides base method to instantiate `SlotCustomNodePool`. |
| **[`getSymbolFromPool(code): cc.Node`](./getSymbolFromPool.md)** | `public` | Overrides base method to delegate checkout to `this.symbolPool.get(code)`. |
