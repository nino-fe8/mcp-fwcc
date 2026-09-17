---
id: "cc_slot_mechanics:TableGigabloxModule:events:mapping"
title: "TableGigabloxModule Event Bus Mapping & Subscriptions"
category: "cc_slot_mechanics"
tags: ["TableGigabloxModule", "table_gigablox_module", "cc_slot_mechanics", "events", "bus"]
---

# 🔊 `TableGigabloxModule` Event Bus Mapping & Subscriptions

<!-- convention-summary-start -->
### TableGigabloxModule Event Bus Mapping & Subscriptions Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TableGigabloxModule Event Bus Mapping & Subscriptions.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 06_events
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Registered Module Events

| Event Name | Direction | Payload | Functional Purpose |
| :--- | :---: | :--- | :--- |
| **`GIGABLOX_MERGE_START`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for GIGABLOX_MERGE_START. |
| **`GIGABLOX_SPIN_SYNC`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for GIGABLOX_SPIN_SYNC. |
| **`GIGABLOX_LANDED`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for GIGABLOX_LANDED. |
