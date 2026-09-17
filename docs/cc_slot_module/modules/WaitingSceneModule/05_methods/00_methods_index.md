---
id: "cc_slot_module:WaitingSceneModule:methods:methods_index"
title: "WaitingSceneModule Methods Master Index"
category: "cc_slot_module"
tags: ["WaitingSceneModule", "waiting_scene_module", "cc_slot_module", "methods", "index"]
---

# 📖 WaitingSceneModule Methods Master Index

<!-- convention-summary-start -->
### WaitingSceneModule Methods Master Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WaitingSceneModule Methods Master Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


| Method | Scope | Description |
| :--- | :--- | :--- |
| **`start()`** | `void` | Fetches `WaitingSceneData` and sets up observer binding. |
| **`setupObserver()`** | `void` | Watches the `active` property on `waitingSceneData`. |
| **`showWaitingScene(active)`** | `void` | Updates node active state and opacity. |
| **`onDestroy()`** | `void` | Releases all observer bindings. |
