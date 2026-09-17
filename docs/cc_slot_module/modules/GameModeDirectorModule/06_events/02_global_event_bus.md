---
id: "cc_slot_module:GameModeDirectorModule:events:global_event_bus"
title: "GameModeDirectorModule Global Event Bus Topics"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "events", "global_event_bus", "GameUIEvents"]
---

# 🌐 GameModeDirectorModule Global Event Bus Topics

<!-- convention-summary-start -->
### GameModeDirectorModule Global Event Bus Topics Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule Global Event Bus Topics.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Global Events Topics

| Direction | Event Topic | Payload | Purpose |
| :--- | :--- | :--- | :--- |
| **Listens To** | `GameUIEvents.SPIN_BUTTON.SET_UP_BUTTON` | `node` | Stores spin button reference for state synchronization. |
| **Listens To** | `GameUIEvents.SPIN_TIMES.SET_UP_SPIN_TIMES` | `node` | Stores free spin counter node reference. |
| **Emits** | `GameUIEvents.GAME_MODE.SWITCH_GAME_MODE` | `nextMode` | Transitions master scene between Normal, Free, and Bonus. |
| **Emits** | `GameUIEvents.GAME_MODE.EXIT_GAME_MODE` | None | Signals exit back to main base game. |
| **Emits** | `GameUIEvents.WIN_AMOUNT.SYNC_WIN_AMOUNT`| `winAmount` | Synchronizes bottom HUD win label during session resume. |
