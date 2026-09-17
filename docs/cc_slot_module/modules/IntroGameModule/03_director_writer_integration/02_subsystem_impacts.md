---
id: "cc_slot_module:IntroGameModule:director_writer:subsystem_impacts"
title: "IntroGameModule Cross-Subsystem Impacts"
category: "cc_slot_module"
tags: ["IntroGameModule", "intro_game_module", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 IntroGameModule Cross-Subsystem Impacts

<!-- convention-summary-start -->
### IntroGameModule Cross-Subsystem Impacts Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for IntroGameModule Cross-Subsystem Impacts.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Cross-Subsystem Coordination

| Subsystem | Impact |
| :--- | :--- |
| **`UIManagerModule`** | Keeps bottom HUD buttons locked until `HIDE_INTRO_GAME` is emitted. |
| **`SlotSoundPlayerModule`** | Plays UI click sound (`playSFXClick()`) when player taps Join Game button. |
