---
id: "cc_slot_module:GameEventManager:events:global_event_bus"
title: "GameEventManager Master Global Event Bus Specification"
category: "cc_slot_module"
tags: ["GameEventManager", "game_event_manager", "cc_slot_module", "events", "global_event_bus"]
---

# 🌐 GameEventManager Master Global Event Bus Specification

<!-- convention-summary-start -->
### GameEventManager Master Global Event Bus Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameEventManager Master Global Event Bus Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Master Global Event Bus Overview

`GameEventManager` is the implementation of the global event bus.

### Key Capabilities:
* **Asynchronous `emit()`**: Allows listeners returning Promises to pause the emitter until all concurrent tasks finish.
* **Safe Error Containment**: Individual listener exceptions are caught in a `try/catch` and will never crash or halt subsequent listeners.
* **Context Teardown (`targetOff`)**: Enables clean unregistration of all listeners bound to a component instance on `onDestroy()`.
