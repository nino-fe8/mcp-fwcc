---
id: "cc_slot_mechanics:HorizontalTableConfig:events:mapping"
title: "HorizontalTableConfig Event Bus Mapping & Subscriptions"
category: "cc_slot_mechanics"
tags: ["HorizontalTableConfig", "horizontal_table_config", "cc_slot_mechanics", "events", "bus"]
---

# 🔊 `HorizontalTableConfig` Event Bus Mapping & Subscriptions

<!-- convention-summary-start -->
### HorizontalTableConfig Event Bus Mapping & Subscriptions Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for HorizontalTableConfig Event Bus Mapping & Subscriptions.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 06_events
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Registered Module Events

| Event Name | Direction | Payload | Functional Purpose |
| :--- | :---: | :--- | :--- |
| **`TABLE_STOP_SPIN_TOP`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for TABLE_STOP_SPIN_TOP. |
| **`STACK_WILD_LANDED`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for STACK_WILD_LANDED. |
| **`HORIZONTAL_REEL_STOP`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for HORIZONTAL_REEL_STOP. |
