---
id: "cc_slot_module:WinEffectModule:director_writer:subsystem_impacts"
title: "WinEffectModule Cross-Subsystem Impacts"
category: "cc_slot_module"
tags: ["WinEffectModule", "win_effect_module", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 WinEffectModule Cross-Subsystem Impacts

<!-- convention-summary-start -->
### WinEffectModule Cross-Subsystem Impacts Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinEffectModule Cross-Subsystem Impacts.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Cross-Subsystem Matrix

| Subsystem | Impact |
| :--- | :--- |
| **`CoinsEffect`** | Emits `SHOW_COINS_EFFECT` and `HIDE_COINS_EFFECT` to control coin showers. |
| **`SlotSoundPlayerModule`** | Invokes sound hooks (`playSoundStart`, `playSoundCounting`, `playSoundEnd`, `resumeMainBGM`). |
| **`UIManagerModule`** | Disables HUD buttons while celebratory modal is active. |
