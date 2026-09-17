---
id: "cc_slot_module:SlotTableNearWinModule:events:global_event_bus"
title: "SlotTableNearWinModule Global Event Bus Integration"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "events", "global_event_bus"]
---

# 🌐 SlotTableNearWinModule Global Event Bus Integration

<!-- convention-summary-start -->
### SlotTableNearWinModule Global Event Bus Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableNearWinModule Global Event Bus Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Global Event Bus Architectural Boundary

`SlotTableNearWinModule` does not listen directly to global `eventManager` events. Instead, `SlotTableModule` encapsulates table events and delegates near-win triggers through local `this.node` events (`SETUP_NEARWIN`, `RESET_NEARWIN`).
