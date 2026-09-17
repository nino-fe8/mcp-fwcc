---
id: "cc_slot_module:BetHistoryDetailModule:events:global_event_bus"
title: "BetHistoryDetailModule Global Event Bus"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "events", "global"]
---

# 🌐 BetHistoryDetailModule Global Event Bus

<!-- convention-summary-start -->
### BetHistoryDetailModule Global Event Bus Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryDetailModule Global Event Bus.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Global Events Listened

| Event Name | Source | Handler | Purpose |
| :--- | :--- | :--- | :--- |
| `GameUIEvents.BET_HISTORY.ON_SCROLL_CLICK` | `ScrollModeItem` | `onScrollClick(index)` | Direct tab navigation click. |

---

## 2. Global Events Emitted

| Event Name | Payload | Handler / Receiver | Purpose |
| :--- | :--- | :--- | :--- |
| `GameLogicUIEvents.INIT_BET_DETAIL` | `data: any` | Game Logic Service | Requests full step-by-step history payload. |
| `GameLogicUIEvents.BET_DETAIL_NEXT_PAGE` | None | Game Logic Service | Advances to subsequent round step. |
| `GameLogicUIEvents.BET_DETAIL_PREVIOUS_PAGE`| None | Game Logic Service | Moves to previous round step. |
| `GameLogicUIEvents.REQUEST_BET_DETAIL_DATA_PAGE`| `index: number`| Game Logic Service | Requests data at specific step index. |
| `GameLogicUIEvents.CLOSE_BET_HISTORY_DETAIL_PANEL`| None | Game Logic Service | Closes detail replay and returns to list. |
