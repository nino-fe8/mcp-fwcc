---
id: "cc_slot_module:SlotSoundPlayerModule:properties:runtime_state_variables"
title: "SlotSoundPlayerModule Runtime State & Audio Engine Bridges"
category: "cc_slot_module"
tags: ["SlotSoundPlayerModule", "slot_sound_player", "cc_slot_module", "properties", "runtime_state", "variables", "HowlerSoundPlayer", "CocosSoundPlayer"]
---

# 💾 SlotSoundPlayerModule Runtime State & Audio Engine Bridges

<!-- convention-summary-start -->
### SlotSoundPlayerModule Runtime State & Audio Engine Bridges Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSoundPlayerModule Runtime State & Audio Engine Bridges.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Runtime State Variables Reference Table

| Variable Name | TypeScript Type | Default Value | Mutated By | Purpose & Guard Role |
| :--- | :--- | :--- | :--- | :--- |
| **`_soundPlayer`** | `eno.HowlerSoundPlayer \| eno.CocosSoundPlayer` | `null` | `onLoad()` | Low-level driver engine. If browser + Howler exists ➔ uses WebAudio; else native Cocos. |
| **`isWebSound`** | `boolean` | `false` | `onLoad()` | Flag indicating whether WebAudio/Howler.js backend is active. |
| **`isEnableBGM`** | `boolean` | `false` | `loadCacheConfig()` | User preference toggle indicating if BGM is enabled in local storage. |
| **`isEnableSFX`** | `boolean` | `false` | `loadCacheConfig()` | User preference toggle indicating if SFX is enabled in local storage. |
| **`_tweenSwitchMusicBGM`** | `cc.Tween \| null` | `null` | `switchMusicBGM()` | Active crossfade tween instance. Stopped and cleaned on abrupt skips or `forcePlayMusicBGM()`. |
| **`_sfxTransition`** | `string` | `""` | `switchMusicBGM()` | ID of the active mode transition stinger SFX clip. |
| **`_hasAudioContext`** | `boolean` | `true` | Mobile unlock | Flag indicating if browser WebAudio `AudioContext` is currently in running state. |
