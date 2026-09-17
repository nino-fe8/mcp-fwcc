---
id: "cc_slot_mechanics:CollectionItemModuleConfig:events:mapping"
title: "CollectionItemModuleConfig Event Bus Mapping & Subscriptions"
category: "cc_slot_mechanics"
tags: ["CollectionItemModuleConfig", "collection_item_module_config", "cc_slot_mechanics", "events", "bus"]
---

# 🔊 `CollectionItemModuleConfig` Event Bus Mapping & Subscriptions

<!-- convention-summary-start -->
### CollectionItemModuleConfig Event Bus Mapping & Subscriptions Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CollectionItemModuleConfig Event Bus Mapping & Subscriptions.
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
