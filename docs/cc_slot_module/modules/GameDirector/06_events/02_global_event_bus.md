---
id: "cc_slot_module:GameDirector:events:global_event_bus"
title: "GameDirector Global Event Bus Integration"
category: "cc_slot_module"
tags: ["GameDirector", "game_director", "cc_slot_module", "events", "global_event_bus", "GameUIEvents"]
---

# 🌐 GameDirector Global Event Bus Integration

<!-- convention-summary-start -->
### GameDirector Global Event Bus Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameDirector Global Event Bus Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Global Event Bus Topics

| Direction | Event Topic | Payload | Purpose |
| :--- | :--- | :--- | :--- |
| **Listens To** | `GameUIEvents.GAME_MODE.SWITCH_GAME_MODE` | `targetMode: number` | Switches active scene mode. |
| **Listens To** | `GameUIEvents.GAME_MODE.EXIT_GAME_MODE` | None | Returns to prior game mode in stack. |
| **Listens To** | `GameUIEvents.GAME_MODE.RESUME_NORMAL_GAME_MODE` | None | Emergency return to Normal Game. |
| **Listens To** | `GameUIEvents.GAME_MODE.JOIN_GAME_SUCCESS` | `data: any` | Captures authentication payload and big win tiers. |
| **Emits** | `GameUIEvents.UI_MANAGER.UPDATE_GAME_MODE_UI` | `mode: number` | Notifies HUD to update background themes and buttons. |
