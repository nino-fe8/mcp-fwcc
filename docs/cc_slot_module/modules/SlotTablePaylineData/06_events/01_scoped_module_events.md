---
id: "cc_slot_module:SlotTablePaylineData:events:scoped_module_events"
title: "SlotTablePaylineData Scoped Module Events"
category: "cc_slot_module"
tags: ["SlotTablePaylineData", "slot_table_payline_data", "cc_slot_module", "events", "scoped_events"]
---

# 📡 SlotTablePaylineData Scoped Module Events

<!-- convention-summary-start -->
### SlotTablePaylineData Scoped Module Events Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTablePaylineData Scoped Module Events.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Scoped Events Summary

`SlotTablePaylineData` operates as a pure synchronous reactive data store component. It does not publish scoped events directly; its methods (`getMatrix()`, `getPayLines()`, `getWinSymbols()`) are queried directly by `SlotTablePaylineModule`.
