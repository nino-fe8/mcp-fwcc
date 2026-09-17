---
id: "cc_slot_module:FortuneWheelGameDirector:events:global_event_bus"
title: "FortuneWheelGameDirector Global Event Bus (eventManager & gameLogic)"
category: "cc_slot_module"
tags: ["FortuneWheelGameDirector", "fortune_wheel_director", "cc_slot_module", "events", "global_events", "eventManager", "gameLogic"]
---

# 🌐 FortuneWheelGameDirector Global Event Bus (`eventManager` & `gameLogic`)

<!-- convention-summary-start -->
### FortuneWheelGameDirector Global Event Bus (eventManager & gameLogic) Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FortuneWheelGameDirector Global Event Bus (eventManager & gameLogic).
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Network & GameLogic Dispatches (`this.gameLogic.emit`)

| Event Constant | Payload | Trigger Method | Purpose |
| :--- | :--- | :--- | :--- |
| `GameLogicUIEvents.SEND_BONUS_GAME_REQUEST` | `0` | `onSpinWheel()` | Transmits bonus round action request to game server websocket. |

---

## 2. Global Event Bus Interfacing (`this.eventManager`)

| Event Topic | Direction | Related Method | Purpose |
| :--- | :--- | :--- | :--- |
| `GameUIEvents.SHOW_CUTSCENE` | Emitted | Mode transition / Win Cutscene | Displays Big Win or transition overlays when wheel settles. |
| `SlotCustomEvent.CHANGE_GAME_MODE` | Listened / Handled | Mode Transition | Triggers entering or leaving FortuneWheel mode. |
