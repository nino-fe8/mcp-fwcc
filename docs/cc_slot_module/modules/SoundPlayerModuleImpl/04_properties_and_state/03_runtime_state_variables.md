---
id: "cc_slot_module:SoundPlayerModuleImpl:properties:runtime_state_variables"
title: "SoundPlayerModuleImpl Runtime State Variables"
category: "cc_slot_module"
tags: ["SoundPlayerModuleImpl", "sound_player_module_impl", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 SoundPlayerModuleImpl Runtime State Variables

<!-- convention-summary-start -->
### SoundPlayerModuleImpl Runtime State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SoundPlayerModuleImpl Runtime State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


| Field | Type | Purpose |
| :--- | :--- | :--- |
| **`isEnableBGM`** | `boolean` | Persistent BGM enabled flag |
| **`isEnableSFX`** | `boolean` | Persistent SFX enabled flag |
| **`isWebSound`** | `boolean` | True if running in browser with Howler.js |
| **`_soundPlayer`** | `any` | Active sound driver instance |
| **`_hasAudioContext`** | `boolean` | Indicates if WebAudio AudioContext is in running state |
