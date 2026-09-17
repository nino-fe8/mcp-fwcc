---
id: "cc_slot_mechanics:HorizontalCascadeData:events:mapping"
title: "HorizontalCascadeData Event Bus Mapping & Subscriptions"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeData", "horizontal_cascade_data", "cc_slot_mechanics", "events", "bus"]
---

# 🔊 `HorizontalCascadeData` Event Bus Mapping & Subscriptions

<!-- convention-summary-start -->
### HorizontalCascadeData Event Bus Mapping & Subscriptions Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for HorizontalCascadeData Event Bus Mapping & Subscriptions.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 06_events
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Registered Module Events

| Event Name | Direction | Payload | Functional Purpose |
| :--- | :---: | :--- | :--- |
| **`TABLE_START_RESPIN`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for TABLE_START_RESPIN. |
| **`CASCADE_DROP_COMPLETED`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for CASCADE_DROP_COMPLETED. |
| **`DISAPPEAR_ANIM_END`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for DISAPPEAR_ANIM_END. |
