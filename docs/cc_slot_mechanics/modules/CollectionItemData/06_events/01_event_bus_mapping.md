---
id: "cc_slot_mechanics:CollectionItemData:events:mapping"
title: "CollectionItemData Event Bus Mapping & Subscriptions"
category: "cc_slot_mechanics"
tags: ["CollectionItemData", "collection_item_data", "cc_slot_mechanics", "events", "bus"]
---

# 🔊 `CollectionItemData` Event Bus Mapping & Subscriptions

<!-- convention-summary-start -->
### CollectionItemData Event Bus Mapping & Subscriptions Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CollectionItemData Event Bus Mapping & Subscriptions.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 06_events
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Registered Module Events

| Event Name | Direction | Payload | Functional Purpose |
| :--- | :---: | :--- | :--- |
| **`COLLECT_SCATTER`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for COLLECT_SCATTER. |
| **`COLLECTION_TARGET_REACHED`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for COLLECTION_TARGET_REACHED. |
