---
id: "cc_slot_module:SlotSoundPlayerModule:customization:override_points_matrix"
title: "SlotSoundPlayerModule Extension Points & Override Matrix"
category: "cc_slot_module"
tags: ["SlotSoundPlayerModule", "slot_sound_player", "cc_slot_module", "customization", "override_matrix", "audio", "bgm", "sfx"]
---

# 📊 SlotSoundPlayerModule Extension Points & Override Matrix

<!-- convention-summary-start -->
### SlotSoundPlayerModule Extension Points & Override Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSoundPlayerModule Extension Points & Override Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Extension Points Matrix

| Method Name | Base Class Default Implementation | Safe to Override? | Required `super` Call | Customization Purpose in New Game |
| :--- | :--- | :--- | :--- | :--- |
| **`playMainBGM(gameMode)`** | Maps mode to `BGM_MAIN`/`FREE`/`BONUS` | `YES` | `OPTIONAL` | Support additional game modes (e.g. `BGM_LIGHTNING`, `BGM_GAMBLE`). |
| **`switchMusicBGM()`** | Crossfades volume with tween & stinger SFX | `YES` | `RECOMMENDED` | Customize mode transition crossfade curve or add custom visual filters. |
| **`forcePlayMusicBGM()`** | Stops active crossfade and resets volume | `YES` | `MANDATORY` | Abort additional custom audio tweens on quick-skip. |
| **`playSfx(id, loop, rate)`** | Checks mute state and dispatches to driver | `YES` | `MANDATORY` | Intercept sound IDs to apply dynamic audio filters or volume balancing. |
| **`onLoad()`** | Inits driver engine & user gesture overlay | `EXTEND_ONLY` | `MANDATORY` | Preload dynamic sound databases. |
