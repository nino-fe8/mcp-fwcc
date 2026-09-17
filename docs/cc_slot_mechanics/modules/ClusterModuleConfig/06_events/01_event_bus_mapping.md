---
id: "cc_slot_mechanics:ClusterModuleConfig:events:mapping"
title: "ClusterModuleConfig Event Bus Mapping & Subscriptions"
category: "cc_slot_mechanics"
tags: ["ClusterModuleConfig", "cluster_module_config", "cc_slot_mechanics", "events", "bus"]
---

# 🔊 `ClusterModuleConfig` Event Bus Mapping & Subscriptions

<!-- convention-summary-start -->
### ClusterModuleConfig Event Bus Mapping & Subscriptions Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for ClusterModuleConfig Event Bus Mapping & Subscriptions.
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
