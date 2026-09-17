---
id: "cc_slot_module:SlotTablePaylineData:events:global_event_bus"
title: "SlotTablePaylineData Global Event Bus Integration"
category: "cc_slot_module"
tags: ["SlotTablePaylineData", "slot_table_payline_data", "cc_slot_module", "events", "global_event_bus"]
---

# 🌐 SlotTablePaylineData Global Event Bus Integration

<!-- convention-summary-start -->
### SlotTablePaylineData Global Event Bus Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTablePaylineData Global Event Bus Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Global Event Bus Isolation

`SlotTablePaylineData` synchronizes state directly via `GameDataStore.updateDataModules()` without consuming global event topics.
