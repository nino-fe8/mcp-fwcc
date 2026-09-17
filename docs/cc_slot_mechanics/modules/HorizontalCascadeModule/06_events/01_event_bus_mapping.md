---
id: "cc_slot_mechanics:HorizontalCascadeModule:events:mapping"
title: "HorizontalCascadeModule Event Bus Mapping & Subscriptions"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeModule", "horizontal_cascade_module", "cc_slot_mechanics", "events", "bus"]
---

# 🔊 `HorizontalCascadeModule` Event Bus Mapping & Subscriptions

<!-- convention-summary-start -->
### HorizontalCascadeModule Event Bus Mapping & Subscriptions Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for HorizontalCascadeModule Event Bus Mapping & Subscriptions.
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
