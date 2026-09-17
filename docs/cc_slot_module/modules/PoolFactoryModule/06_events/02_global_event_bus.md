---
id: "cc_slot_module:PoolFactoryModule:events:global_event_bus"
title: "PoolFactoryModule Global Event Bus Topics"
category: "cc_slot_module"
tags: ["PoolFactoryModule", "pool_factory_module", "cc_slot_module", "events", "global_bus"]
---

# 🌐 PoolFactoryModule Global Event Bus Topics

<!-- convention-summary-start -->
### PoolFactoryModule Global Event Bus Topics Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PoolFactoryModule Global Event Bus Topics.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Global Event Bus Interaction

Subclasses of `PoolFactoryModule` can bind to global cleanup topics such as `RESET_ALL_EFFECT_AND_TASKS` in `onLoadExtend()` to trigger `returnAllObjects()`.
