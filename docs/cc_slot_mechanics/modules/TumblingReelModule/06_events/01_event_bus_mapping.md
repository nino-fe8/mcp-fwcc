---
id: "cc_slot_mechanics:TumblingReelModule:events:mapping"
title: "TumblingReelModule Event Bus Mapping & Subscriptions"
category: "cc_slot_mechanics"
tags: ["TumblingReelModule", "tumbling_reel_module", "cc_slot_mechanics", "events", "bus"]
---

# 🔊 `TumblingReelModule` Event Bus Mapping & Subscriptions

<!-- convention-summary-start -->
### TumblingReelModule Event Bus Mapping & Subscriptions Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TumblingReelModule Event Bus Mapping & Subscriptions.
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
