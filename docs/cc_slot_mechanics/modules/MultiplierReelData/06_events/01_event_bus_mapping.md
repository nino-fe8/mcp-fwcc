---
id: "cc_slot_mechanics:MultiplierReelData:events:mapping"
title: "MultiplierReelData Event Bus Mapping & Subscriptions"
category: "cc_slot_mechanics"
tags: ["MultiplierReelData", "multiplier_reel_data", "cc_slot_mechanics", "events", "bus"]
---

# 🔊 `MultiplierReelData` Event Bus Mapping & Subscriptions

<!-- convention-summary-start -->
### MultiplierReelData Event Bus Mapping & Subscriptions Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MultiplierReelData Event Bus Mapping & Subscriptions.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 06_events
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Registered Module Events

| Event Name | Direction | Payload | Functional Purpose |
| :--- | :---: | :--- | :--- |
| **`MULTIPLIER_REEL_STOPPED`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for MULTIPLIER_REEL_STOPPED. |
| **`APPLY_REEL_MULTIPLIER`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for APPLY_REEL_MULTIPLIER. |
