---
id: "cc_slot_mechanics:MegawayModuleConfig:events:mapping"
title: "MegawayModuleConfig Event Bus Mapping & Subscriptions"
category: "cc_slot_mechanics"
tags: ["MegawayModuleConfig", "megaway_module_config", "cc_slot_mechanics", "events", "bus"]
---

# 🔊 `MegawayModuleConfig` Event Bus Mapping & Subscriptions

<!-- convention-summary-start -->
### MegawayModuleConfig Event Bus Mapping & Subscriptions Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MegawayModuleConfig Event Bus Mapping & Subscriptions.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 06_events
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Registered Module Events

| Event Name | Direction | Payload | Functional Purpose |
| :--- | :---: | :--- | :--- |
| **`UPDATE_MEGAWAY`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for UPDATE_MEGAWAY. |
| **`REEL_STOPPED`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for REEL_STOPPED. |
| **`RESET_MEGAWAY`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for RESET_MEGAWAY. |
