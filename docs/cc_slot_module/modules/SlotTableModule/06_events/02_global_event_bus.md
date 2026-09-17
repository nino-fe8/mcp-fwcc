---
id: "cc_slot_module:SlotTableModule:events:global_event_bus"
title: "SlotTableModule Global Event Bus Integration"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "events", "global_event_bus"]
---

# 🌐 SlotTableModule Global Event Bus Integration

<!-- convention-summary-start -->
### SlotTableModule Global Event Bus Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableModule Global Event Bus Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Global Events Summary

`SlotTableModule` communicates with its director via `moduleEvent` and coordinates with local child components (`NearWin`, `SoundEffect`) via `this.node` events. It does not subscribe directly to `eventManager` to preserve modularity.
