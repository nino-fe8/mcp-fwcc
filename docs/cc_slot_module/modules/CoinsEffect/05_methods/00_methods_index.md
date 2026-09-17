---
id: "cc_slot_module:CoinsEffect:methods:index"
title: "CoinsEffect Methods Catalog Index"
category: "cc_slot_module"
tags: ["CoinsEffect", "coins_effect", "cc_slot_module", "methods", "index"]
---

# 📚 CoinsEffect Methods Catalog Index

<!-- convention-summary-start -->
### CoinsEffect Methods Catalog Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CoinsEffect Methods Catalog Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `./onLoad.md`, `./showCoinsEffect.md`, `./hideCoinsEffect.md`
- **Related Docs**: [`onLoad`](./onLoad.md), [`showCoinsEffect`](./showCoinsEffect.md), [`hideCoinsEffect`](./hideCoinsEffect.md)
<!-- convention-summary-end -->


---

## 1. Declared Methods Index

| Method Name | Scope | Return Type | Brief Purpose |
| :--- | :--- | :--- | :--- |
| **[`onLoad`](./onLoad.md)** | `protected` | `void` | Binds node events and initializes particle opacities to 0. |
| **[`showCoinsEffect`](./showCoinsEffect.md)**| `public` | `void` | Resets particle systems and fades opacity from 1 to 255. |
| **[`hideCoinsEffect`](./hideCoinsEffect.md)**| `public` | `void` | Halts particle emission via `stopSystem()`. |
