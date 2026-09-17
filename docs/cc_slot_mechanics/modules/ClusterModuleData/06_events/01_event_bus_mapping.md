---
id: "cc_slot_mechanics:ClusterModuleData:events:mapping"
title: "ClusterModuleData Event Bus Mapping & Subscriptions"
category: "cc_slot_mechanics"
tags: ["ClusterModuleData", "cluster_module_data", "cc_slot_mechanics", "events", "bus"]
---

# 🔊 `ClusterModuleData` Event Bus Mapping & Subscriptions

<!-- convention-summary-start -->
### ClusterModuleData Event Bus Mapping & Subscriptions Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for ClusterModuleData Event Bus Mapping & Subscriptions.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 06_events
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Registered Module Events

| Event Name | Direction | Payload | Functional Purpose |
| :--- | :---: | :--- | :--- |
| **`CLUSTER_WIN_EVALUATED`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for CLUSTER_WIN_EVALUATED. |
| **`CLUSTER_EXPLODE_START`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for CLUSTER_EXPLODE_START. |
