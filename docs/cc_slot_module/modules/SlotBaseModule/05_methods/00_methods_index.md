---
id: "cc_slot_module:SlotBaseModule:methods:index"
title: "SlotBaseModule Methods Catalog Index"
category: "cc_slot_module"
tags: ["SlotBaseModule", "slot_base_module", "cc_slot_module", "methods", "index"]
---

# 📚 SlotBaseModule Methods Catalog Index

<!-- convention-summary-start -->
### SlotBaseModule Methods Catalog Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotBaseModule Methods Catalog Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `./onLoad.md`, `./onLoadExtend.md`, `./setupModule.md`
- **Related Docs**: [`onLoad`](./onLoad.md), [`onLoadExtend`](./onLoadExtend.md), [`setupModule`](./setupModule.md)
<!-- convention-summary-end -->


---

## 1. Declared Methods Index (All 6 Methods)

| Method Name | Scope | Return Type | Brief Purpose |
| :--- | :--- | :--- | :--- |
| **[`onLoad`](./onLoad.md)** | `public` | `void` | Executes DI container injection, hooks `RESET_ALL_EFFECT_AND_TASKS`, calls `onLoadExtend()` and `registerEvents()`. |
| **[`onLoadExtend`](./onLoadExtend.md)** | `public` | `void` | Lifecycle hook for subclass initialization after DI dependencies are injected. |
| **[`setupModule`](./setupModule.md)** | `public` | `void` | Injects mode-scoped `moduleEvent` and assigns `gameMode`. |
| **[`registerEvents`](./registerEvents.md)** | `protected` | `void` | Subclass hook for event subscription. |
| **[`unregisterEvents`](./unregisterEvents.md)** | `protected` | `void` | Subclass hook for event unsubscription. |
| **[`resetAllEffectAndTasks`](./resetAllEffectAndTasks.md)** | `protected` | `void` | Global spin reset handler clearing active animations, particles, and tweens. |
