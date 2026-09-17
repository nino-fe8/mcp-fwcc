---
id: "cc_slot_mechanics:MultiplierModule:events:mapping"
title: "MultiplierModule Event Bus Mapping & Subscriptions"
category: "cc_slot_mechanics"
tags: ["MultiplierModule", "multiplier_module", "cc_slot_mechanics", "events", "bus"]
---

# 🔊 `MultiplierModule` Event Bus Mapping & Subscriptions

<!-- convention-summary-start -->
### MultiplierModule Event Bus Mapping & Subscriptions Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MultiplierModule Event Bus Mapping & Subscriptions.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 06_events
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Registered Module Events

| Event Name | Direction | Payload | Functional Purpose |
| :--- | :---: | :--- | :--- |
| **`APPLY_MULTIPLIER_TO_WIN_AMOUNT`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for APPLY_MULTIPLIER_TO_WIN_AMOUNT. |
| **`RESET_MULTIPLIER`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for RESET_MULTIPLIER. |
| **`SYNC_GAME_MULTIPLIER`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for SYNC_GAME_MULTIPLIER. |
