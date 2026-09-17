---
id: "cc_slot_module:SlotTablePaylineModule:events:global_event_bus"
title: "SlotTablePaylineModule Global Event Bus Integration"
category: "cc_slot_module"
tags: ["SlotTablePaylineModule", "slot_table_payline_module", "cc_slot_module", "events", "global_event_bus"]
---

# 🌐 SlotTablePaylineModule Global Event Bus Integration

<!-- convention-summary-start -->
### SlotTablePaylineModule Global Event Bus Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTablePaylineModule Global Event Bus Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Global Event Bus Isolation

`SlotTablePaylineModule` does not listen directly to global `eventManager` events. It receives its commands strictly through `this.moduleEvent` (`SETUP_PAYLINES`), maintaining clean separation between mode directors and presentation layers.
