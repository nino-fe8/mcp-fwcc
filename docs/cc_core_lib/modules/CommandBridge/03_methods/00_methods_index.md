---
id: "cc_core_lib:CommandBridge:methods:index"
title: "CommandBridge Methods Master Index"
category: "cc_core_lib"
tags: ["CommandBridge", "command_bridge", "cc_core_lib", "methods", "index"]
---

# 📖 `CommandBridge` Methods Master Index

<!-- convention-summary-start -->
### CommandBridge Methods Master Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CommandBridge Methods Master Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_core_lib, 03_methods
- **Scope & Code Paths**: `./registerEvent.md`, `./unregisterEvent.md`, `./emit.md`
- **Related Docs**: [`registerEvent()`](./registerEvent.md), [`unregisterEvent()`](./unregisterEvent.md), [`emit()`](./emit.md)
<!-- convention-summary-end -->


---

## 1. Declared Method Signatures

| Method | Parameters | Return Type | Description |
| :--- | :--- | :--- | :--- |
| **[`registerEvent()`](./registerEvent.md)** | `event: string, callback: Function` | `void` | Executes registerEvent operation in `CommandBridge`. |
| **[`unregisterEvent()`](./unregisterEvent.md)** | `event: string, callback: Function` | `void` | Executes unregisterEvent operation in `CommandBridge`. |
| **[`emit()`](./emit.md)** | `event: string, ...args: any[]` | `Promise<void>` | Executes emit operation in `CommandBridge`. |
