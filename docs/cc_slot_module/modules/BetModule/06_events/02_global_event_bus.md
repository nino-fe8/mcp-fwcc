---
id: "cc_slot_module:BetModule:events:global_event_bus"
title: "BetModule Global Event Bus Specification"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "events", "global_bus"]
---

# 🌐 BetModule Global Event Bus Specification

<!-- convention-summary-start -->
### BetModule Global Event Bus Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetModule Global Event Bus Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Global Events Emitted

| Event Constant | Payload | Target | Purpose |
| :--- | :--- | :--- | :--- |
| `GameLogicUIEvents.INCREASE_BET` | None | `GameLogic` | Requests moving to the next higher bet tier. |
| `GameLogicUIEvents.DECREASE_BET` | None | `GameLogic` | Requests moving to the next lower bet tier. |
