---
id: "cc_slot_module:JackpotHistoryModule:events:scoped_module_events"
title: "JackpotHistoryModule Scoped Events"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "events", "scoped"]
---

# 📡 JackpotHistoryModule Scoped Node Events

<!-- convention-summary-start -->
### JackpotHistoryModule Scoped Events Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotHistoryModule Scoped Events.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Node Events Emitted

| Event | Target | Payload | Purpose |
| :--- | :--- | :--- | :--- |
| `CLEAR_DATA` | `this.recordView` | None | Clears winner rows. |
| `UPDATE_DATA` | `this.recordView` | `originalData, itemPerPage` | Renders winner rows. |
