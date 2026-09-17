---
id: "cc_slot_module:BetHistoryModule:events:global_event_bus"
title: "BetHistoryModule Global Event Bus"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "events", "global"]
---

# 🌐 BetHistoryModule Global Event Bus

<!-- convention-summary-start -->
### BetHistoryModule Global Event Bus Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryModule Global Event Bus.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Global Events Listened

| Event Name | Source | Handler | Purpose |
| :--- | :--- | :--- | :--- |
| `GameUIEvents.BET_HISTORY.OPEN_BET_DETAIL` | Child Row Click | `openBetDetail(data)` | Forwards selected row data to logic layer. |

---

## 2. Global Events Emitted

| Event Name | Payload | Handler / Receiver | Purpose |
| :--- | :--- | :--- | :--- |
| `GameLogicUIEvents.INIT_BET_HISTORY` | `{ itemPerPage: number }` | Game Logic Service | Requests first page of history records. |
| `GameLogicUIEvents.BET_HISTORY_NEXT_PAGE` | None | Game Logic Service | Requests next page of records. |
| `GameLogicUIEvents.BET_HISTORY_PREVIOUS_PAGE` | None | Game Logic Service | Requests previous page of records. |
| `GameLogicUIEvents.CLOSE_BET_HISTORY_PANEL` | None | Game Logic Service | Closes the bet history modal. |
| `GameLogicUIEvents.OPEN_BET_HISTORY_DETAIL_PANEL` | `data: any` | Game Logic Service | Requests detailed replay data for session. |
