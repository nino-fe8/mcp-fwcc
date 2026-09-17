---
id: "cc_slot_module:IntroGameModule:events:global_event_bus"
title: "IntroGameModule Global Event Bus Specification"
category: "cc_slot_module"
tags: ["IntroGameModule", "intro_game_module", "cc_slot_module", "events", "global_bus"]
---

# 🌐 IntroGameModule Global Event Bus Specification

<!-- convention-summary-start -->
### IntroGameModule Global Event Bus Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for IntroGameModule Global Event Bus Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subscribed Global Events

| Event Constant | Handler | Payload | Action |
| :--- | :--- | :--- | :--- |
| `GameUIEvents.GAME_MODE.JOIN_GAME_SUCCESS` | `joinGameSuccess` | `{ joinGameData }` | Evaluates reconnect flags to skip or show modal. |

---

## 2. Emitted Global Events

| Event Constant | Payload | Purpose |
| :--- | :--- | :--- |
| `GameUIEvents.INTRO_GAME.SKIP_INTRO_GAME` | `void` | Signals game director to bypass intro modal. |
| `GameUIEvents.INTRO_GAME.ON_CLICK_JOIN_GAME` | `void` | Notifies telemetry/analytics that player tapped Join. |
| `GameUIEvents.INTRO_GAME.HIDE_INTRO_GAME` | `false` | Notifies director that intro has finished fading out. |
