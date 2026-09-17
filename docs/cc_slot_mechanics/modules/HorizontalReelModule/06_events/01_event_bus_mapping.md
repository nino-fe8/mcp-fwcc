---
id: "cc_slot_mechanics:HorizontalReelModule:events:mapping"
title: "HorizontalReelModule Event Bus Mapping & Subscriptions"
category: "cc_slot_mechanics"
tags: ["HorizontalReelModule", "horizontal_reel_module", "cc_slot_mechanics", "events", "bus"]
---

# 🔊 `HorizontalReelModule` Event Bus Mapping & Subscriptions

<!-- convention-summary-start -->
### HorizontalReelModule Event Bus Mapping & Subscriptions Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for HorizontalReelModule Event Bus Mapping & Subscriptions.
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
