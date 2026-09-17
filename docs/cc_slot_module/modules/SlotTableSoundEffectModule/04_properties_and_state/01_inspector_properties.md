---
id: "cc_slot_module:SlotTableSoundEffectModule:properties:inspector_properties"
title: "SlotTableSoundEffectModule Inspector Properties"
category: "cc_slot_module"
tags: ["SlotTableSoundEffectModule", "slot_table_sound_effect_module", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ SlotTableSoundEffectModule Inspector Properties

<!-- convention-summary-start -->
### SlotTableSoundEffectModule Inspector Properties Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableSoundEffectModule Inspector Properties.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema

| Property | Type | Default | When Set | Where Read | Impact If Desynced |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `sfxReelStopId` | `string` | `"REEL_STOP"` | Cocos Editor | `playSfxReelStop` | Missing click sound on reel stop. |
| `sfxScatterIds` | `string[]` | `["SCATTER_1", ...]` | Cocos Editor | `playSfxSpecialSymbol` | Missing sound on Scatter landing or array bounds error. |
| `sfxBonusIds` | `string[]` | `["BONUS_1", ...]` | Cocos Editor | `playSfxSpecialSymbol` | Missing sound on Bonus landing. |
| `sfxJackpotIds` | `string[]` | `["JACKPOT_1", ...]` | Cocos Editor | `playSfxSpecialSymbol` | Missing sound on Jackpot landing. |
