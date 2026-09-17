---
id: "cc_slot_module:systems:dual_audio_engine:dual_backend"
title: "Dual Audio Backend Architecture (Howler vs Cocos)"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "audio_backend", "howler", "cocos_sound", "sound_driver"]
---

# 🎵 Dual Audio Backend Architecture (Howler vs Cocos)

<!-- convention-summary-start -->
### Dual Audio Backend Architecture (Howler vs Cocos) Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Dual Audio Backend Architecture (Howler vs Cocos).
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 12_dual_audio_engine_and_sound_pipeline
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Dual Backend Selection
`SoundPlayerModuleImpl` automatically selects the optimal sound driver at startup:
- **Web Browser (`isWebSound = true`)**: `eno.HowlerSoundPlayer` utilizes WebAudio nodes for polyphonic audio mixing with microsecond accuracy.
- **Native Android / iOS App**: `eno.CocosSoundPlayer` leverages Cocos Creator's native audio engine for direct hardware buffer playback.
