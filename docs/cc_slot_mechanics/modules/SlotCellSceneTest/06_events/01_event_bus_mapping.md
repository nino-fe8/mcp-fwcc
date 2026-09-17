---
id: "cc_slot_mechanics:SlotCellSceneTest:events:mapping"
title: "SlotCellSceneTest Event Bus Mapping & Subscriptions"
category: "cc_slot_mechanics"
tags: ["SlotCellSceneTest", "slot_cell_scene_test", "cc_slot_mechanics", "events", "bus"]
---

# 🔊 `SlotCellSceneTest` Event Bus Mapping & Subscriptions

<!-- convention-summary-start -->
### SlotCellSceneTest Event Bus Mapping & Subscriptions Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotCellSceneTest Event Bus Mapping & Subscriptions.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 06_events
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Registered Module Events

| Event Name | Direction | Payload | Functional Purpose |
| :--- | :---: | :--- | :--- |
| **`CELL_START_SPIN`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for CELL_START_SPIN. |
| **`CELL_STOP_SPIN`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for CELL_STOP_SPIN. |
| **`CELL_BOUNCE_SETTLE`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for CELL_BOUNCE_SETTLE. |
