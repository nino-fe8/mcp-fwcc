---
id: "cc_slot_module:BetHistoryDetailModule:events:scoped_module_events"
title: "BetHistoryDetailModule Scoped Events"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "events", "scoped"]
---

# 📡 BetHistoryDetailModule Scoped Node Events

<!-- convention-summary-start -->
### BetHistoryDetailModule Scoped Events Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryDetailModule Scoped Events.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Node Events Listened & Emitted

| Event Name | Direction | Target / Source Node | Description |
| :--- | :--- | :--- | :--- |
| `INIT_DETAIL_VIEW` | Inbound | `this.node` | Triggered by parent `BetHistoryModule` to begin replay of session data. |
| `SET_DATA_SCROLL` | Outbound | `ScrollItem` | Transmits step index and step data to tab button. |
| `ACTIVE_HIGHLIGHT` | Outbound | `ScrollItem` | Sets active highlight glow on matching step tab. |
| `RENDER_GAME_MODE_VIEW`| Outbound | `this.gameModeView` | Renders reel matrix snapshot for step. |
| `SET_SUMMARY_DATA` | Outbound | `this.summaryView` | Passes session summary data to summary view. |
| `SET_SESSION_ID` | Outbound | `this.sessionGroup` | Sets session ID text in footer. |
