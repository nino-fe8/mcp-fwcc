---
id: "cc_slot_module:overview:audio_engine_dual_driver"
title: "Audio Engine Dual Driver Architecture & Mobile Sound Pipeline"
category: "cc_slot_module"
tags: ["cc_slot_module", "overview", "audio_engine", "howler", "cocos_sound", "web_audio", "sound_pipeline"]
---

# 🔊 Audio Engine Dual Driver Architecture & Mobile Sound Pipeline

<!-- convention-summary-start -->
### Audio Engine Dual Driver Architecture & Mobile Sound Pipeline Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Audio Engine Dual Driver Architecture & Mobile Sound Pipeline.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, over_view
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Dual Driver Pipeline
`SoundPlayerModuleImpl` bridges game audio commands with the underlying execution environment:
- **Web Audio via Howler.js**: Provides zero-latency multi-channel audio mixing, sub-millisecond loop precision, and dynamic volume ducking.
- **Native Audio via Cocos Creator**: Leverages C++ native audio buffers for packaged iOS/Android applications.

## 2. Audio Choreography & Lifecycle
- **Mobile Autoplay Unlock**: Intercepts the first user touch gesture to safely resume suspended WebAudio `AudioContext` handles on iOS Safari and Chrome.
- **Dynamic Sound Banks**: Loads feature-specific audio bundles on demand and purges raw memory via `assetManager.releaseAsset()`.
- **App Visibility Synchronization**: Automatically silences BGM and sound effects when the game is tabbed out or minimized.
