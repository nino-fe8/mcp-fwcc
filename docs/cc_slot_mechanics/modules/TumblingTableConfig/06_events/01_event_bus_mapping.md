---
id: "cc_slot_mechanics:TumblingTableConfig:events:mapping"
title: "TumblingTableConfig Event Bus Mapping & Subscriptions"
category: "cc_slot_mechanics"
tags: ["TumblingTableConfig", "tumbling_table_config", "cc_slot_mechanics", "events", "bus"]
---

# 🔊 `TumblingTableConfig` Event Bus Mapping & Subscriptions

<!-- convention-summary-start -->
### TumblingTableConfig Event Bus Mapping & Subscriptions Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TumblingTableConfig Event Bus Mapping & Subscriptions.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 06_events
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Registered Module Events

| Event Name | Direction | Payload | Functional Purpose |
| :--- | :---: | :--- | :--- |
| **`TUMBLING_DROP_START`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for TUMBLING_DROP_START. |
| **`TUMBLING_DROP_SETTLE`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for TUMBLING_DROP_SETTLE. |
