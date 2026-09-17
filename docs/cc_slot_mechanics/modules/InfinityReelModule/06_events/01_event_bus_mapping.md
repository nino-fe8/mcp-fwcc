---
id: "cc_slot_mechanics:InfinityReelModule:events:mapping"
title: "InfinityReelModule Event Bus Mapping & Subscriptions"
category: "cc_slot_mechanics"
tags: ["InfinityReelModule", "infinity_reel_module", "cc_slot_mechanics", "events", "bus"]
---

# 🔊 `InfinityReelModule` Event Bus Mapping & Subscriptions

<!-- convention-summary-start -->
### InfinityReelModule Event Bus Mapping & Subscriptions Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for InfinityReelModule Event Bus Mapping & Subscriptions.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 06_events
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Registered Module Events

| Event Name | Direction | Payload | Functional Purpose |
| :--- | :---: | :--- | :--- |
| **`INFINITY_ADD_REEL`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for INFINITY_ADD_REEL. |
| **`INFINITY_EXPAND_COMPLETE`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for INFINITY_EXPAND_COMPLETE. |
| **`INFINITY_RESET`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for INFINITY_RESET. |
