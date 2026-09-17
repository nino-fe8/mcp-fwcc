---
id: "cc_slot_module:BaseGameDirector:events:global_event_bus"
title: "BaseGameDirector Global Event Bus Integration"
category: "cc_slot_module"
tags: ["BaseGameDirector", "base_game_director", "cc_slot_module", "events", "global_event_bus", "GameUIEvents"]
---

# 🌐 BaseGameDirector Global Event Bus Integration

<!-- convention-summary-start -->
### BaseGameDirector Global Event Bus Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseGameDirector Global Event Bus Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Global Event Topics Emitted & Listened

| Direction | Event Topic | Payload | Purpose |
| :--- | :--- | :--- | :--- |
| **Listens To** | `GameUIEvents.GAME_MODE.SWITCH_GAME_MODE` | `{ nextMode: number }` | Triggers game mode director transition sequence. |
| **Listens To** | `GameUIEvents.BACK_TO_REAL_MODE` | None | Triggers `forceToExit()` when exiting trial demo play. |
| **Emits** | `GameUIEvents.GAME_MODE.EXIT_GAME_MODE` | None | Notifies system that current game mode has finished. |
| **Emits** | `GameUIEvents.WALLET.UPDATE_WALLET` | `{ amount: number }` | Commits payout to wallet display. |
