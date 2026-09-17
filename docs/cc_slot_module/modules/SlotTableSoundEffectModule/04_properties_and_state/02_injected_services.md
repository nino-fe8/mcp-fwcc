---
id: "cc_slot_module:SlotTableSoundEffectModule:properties:injected_services"
title: "SlotTableSoundEffectModule Injected Services"
category: "cc_slot_module"
tags: ["SlotTableSoundEffectModule", "slot_table_sound_effect_module", "cc_slot_module", "properties", "injected_services", "ioc"]
---

# 💉 SlotTableSoundEffectModule Injected Services

<!-- convention-summary-start -->
### SlotTableSoundEffectModule Injected Services Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableSoundEffectModule Injected Services.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Injected Services Matrix

`SlotTableSoundEffectModule` inherits injected services from `SlotBaseModule`:

| Token | Type | When Provided | Purpose in Module |
| :--- | :--- | :--- | :--- |
| `soundPlayer` | `SlotSoundPlayerModule` | Bootstrap (`GameInit`) | Executes `playSfx(sfxId)` for all reel and special symbol landing sounds. |
| `gameConfig` | `GameConfig` | Bootstrap (`GameInit`) | Fallback access to game configuration. |
| `eventManager` | `GameEventManager` | Bootstrap (`GameInit`) | Global event manager. |
| `gameDataStore`| `GameDataStore` | Bootstrap (`GameInit`) | Data store access. |
