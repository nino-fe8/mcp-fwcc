---
id: "cc_slot_module:GameEventManager:methods:index"
title: "GameEventManager Methods & API Index"
category: "cc_slot_module"
tags: ["GameEventManager", "game_event_manager", "cc_slot_module", "methods", "api", "index"]
---

# 🚀 GameEventManager Methods & API Index

<!-- convention-summary-start -->
### GameEventManager Methods & API Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameEventManager Methods & API Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `./on.md`, `./off.md`, `./emit.md`
- **Related Docs**: [`on(event, listener, context): void`](./on.md), [`off(event, listener, context): void`](./off.md), [`emit(event, ...args): Promise<void>`](./emit.md)
<!-- convention-summary-end -->


## 1. Master Method Index

| Method Signature | Visibility | Return Type | Brief Purpose |
| :--- | :--- | :--- | :--- |
| **[`on(event, listener, context): void`](./on.md)** | `public` | `void` | Registers a listener callback for a specific event topic with optional context. |
| **[`off(event, listener, context): void`](./off.md)** | `public` | `void` | Removes a specific listener matching callback function and context. |
| **[`emit(event, ...args): Promise<void>`](./emit.md)** | `public` | `Promise<void>` | Asynchronously dispatches event to all subscribers and awaits `Promise.all()`. |
| **[`targetOff(context): void`](./targetOff.md)** | `public` | `void` | Removes all registered listeners bound to a target context object across all topics. |
| **[`setLogger(logger, logTag): void`](./setLogger.md)** | `public` | `void` | Injects custom logger instance and registers debug log prefix filter. |
| **[`destroy(): void`](./destroy.md)** | `public` | `void` | Clears all internal event topic subscriber tables. |
