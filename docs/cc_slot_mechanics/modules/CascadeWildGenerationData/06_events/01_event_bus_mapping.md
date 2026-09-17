---
id: "cc_slot_mechanics:CascadeWildGenerationData:events:mapping"
title: "CascadeWildGenerationData Event Bus Mapping & Subscriptions"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationData", "cascade_wild_generation_data", "cc_slot_mechanics", "events", "bus"]
---

# 🔊 `CascadeWildGenerationData` Event Bus Mapping & Subscriptions

<!-- convention-summary-start -->
### CascadeWildGenerationData Event Bus Mapping & Subscriptions Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CascadeWildGenerationData Event Bus Mapping & Subscriptions.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 06_events
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Registered Module Events

| Event Name | Direction | Payload | Functional Purpose |
| :--- | :---: | :--- | :--- |
| **`SPAWN_CASCADE_WILD`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for SPAWN_CASCADE_WILD. |
| **`WILD_BURST_ANIMATION`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for WILD_BURST_ANIMATION. |
