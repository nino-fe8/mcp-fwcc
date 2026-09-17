---
id: "cc_slot_module:BetHistoryModule:events:scoped_module_events"
title: "BetHistoryModule Scoped Events"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "events", "scoped"]
---

# 📡 BetHistoryModule Scoped Node Events

<!-- convention-summary-start -->
### BetHistoryModule Scoped Events Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryModule Scoped Events.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Node Events Emitted on Child Views

| Event Name | Target Node | Payload | Description |
| :--- | :--- | :--- | :--- |
| `CLEAR_DATA` | `this.recordView` | None | Clears existing table items when recordData is empty or null. |
| `UPDATE_DATA` | `this.recordView` | `records: any[], itemPerPage: number` | Populates record rows with history summaries. |
| `INIT_DETAIL_VIEW` | `this.detailView` | `detailData: any` | Passes session detail payload to `BetHistoryDetailModule`. |
