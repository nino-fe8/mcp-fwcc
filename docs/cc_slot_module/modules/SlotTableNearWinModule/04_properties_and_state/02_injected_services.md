---
id: "cc_slot_module:SlotTableNearWinModule:properties:injected_services"
title: "SlotTableNearWinModule Injected Services"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "properties", "injected_services", "ioc"]
---

# 💉 SlotTableNearWinModule Injected Services

<!-- convention-summary-start -->
### SlotTableNearWinModule Injected Services Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableNearWinModule Injected Services.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Injected Tokens Matrix

`SlotTableNearWinModule` inherits `@inject` services from `SlotBaseModule`:

| Token / Service | Type | When Provided | Purpose in Module |
| :--- | :--- | :--- | :--- |
| `soundPlayer` | `SlotSoundPlayerModule` | Bootstrap (`GameInit`) | Plays looping tension SFX (`soundNearWinId`) during reel anticipation. |
| `gameConfig` | `GameConfig` | Bootstrap (`GameInit`) | Fallback access to game configuration. |
| `eventManager` | `GameEventManager` | Bootstrap (`GameInit`) | Access to global event notifications. |
| `gameDataStore`| `GameDataStore` | Bootstrap (`GameInit`) | Reactive store state. |
