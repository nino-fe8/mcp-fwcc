---
id: "cc_slot_module:FortuneWheelGameDirector:properties:injected_services"
title: "FortuneWheelGameDirector Injected Services Reference"
category: "cc_slot_module"
tags: ["FortuneWheelGameDirector", "fortune_wheel_director", "cc_slot_module", "properties", "injected_services", "inject", "ioc"]
---

# 💉 FortuneWheelGameDirector Injected Services Reference

<!-- convention-summary-start -->
### FortuneWheelGameDirector Injected Services Reference Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FortuneWheelGameDirector Injected Services Reference.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Injected Services (Inherited via `SlotBaseModule` & `GameModeDirectorModule`)

`FortuneWheelGameDirector` receives core framework singletons injected via the `GameInit` IoC container:

| Service Token | Injected Type | Available On Property | Purpose & Usage in Module |
| :--- | :--- | :--- | :--- |
| `gameLogic` | `GameLogic` | `this.gameLogic` | Dispatches `SEND_BONUS_GAME_REQUEST` socket packet and queries localization text. |
| `gameSettings` | `SlotGameSettings` | `this.gameSettings` | Checks `this.gameSettings.isTurboActive` when starting wheel spin. |
| `eventManager` | `GameEventManager` | `this.eventManager` | Listens to global scene and mode switching events. |
| `dataStore` | `GameDataStore` | `this.dataStore` | Accesses `playSession` data and wheel bonus round state. |
| `soundPlayer` | `SlotSoundPlayerModule` | `this.soundPlayer` | Manages wheel continuous spinning loop audio and click tick SFX. |

---

## 2. Scoped Event Bus (`this.moduleEvent`)

In addition to injected singletons, `FortuneWheelGameDirector` communicates with sibling components (such as `FortuneWheelModule`) via the local scoped event bus `this.moduleEvent`.
