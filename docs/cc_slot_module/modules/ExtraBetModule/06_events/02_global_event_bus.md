---
id: "cc_slot_module:ExtraBetModule:events:global_event_bus"
title: "ExtraBetModule Global Event Bus Specification"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "events", "global_bus"]
---

# 🌐 ExtraBetModule Global Event Bus Specification

<!-- convention-summary-start -->
### ExtraBetModule Global Event Bus Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for ExtraBetModule Global Event Bus Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Global Events Emitted

| Event Constant | Payload | Target | Purpose |
| :--- | :--- | :--- | :--- |
| `GameLogicUIEvents.INCREASE_EXTRA_BET` | None | `GameLogic` | Requests increasing the Ante-Bet modifier level. |
| `GameLogicUIEvents.DECREASE_EXTRA_BET` | None | `GameLogic` | Requests decreasing the Ante-Bet modifier level. |
