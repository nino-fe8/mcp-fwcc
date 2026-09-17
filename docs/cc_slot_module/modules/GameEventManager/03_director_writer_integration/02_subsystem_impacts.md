---
id: "cc_slot_module:GameEventManager:director_writer:subsystem_impacts"
title: "GameEventManager Subsystem Impact Cross-Reference"
category: "cc_slot_module"
tags: ["GameEventManager", "game_event_manager", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 GameEventManager Subsystem Impact Cross-Reference

<!-- convention-summary-start -->
### GameEventManager Subsystem Impact Cross-Reference Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameEventManager Subsystem Impact Cross-Reference.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Core Subsystem Cross-Reference

| Emitted Global Event | Subscribing Subsystem | Typical Action Handled |
| :--- | :--- | :--- |
| **`ON_UPDATE_WALLET`** | `WalletModule` | Updates player cash balance with counting animation. |
| **`PLAY_SOUND`** | `SlotSoundPlayerModule` | Plays sound effect or switches background music. |
| **`PLAY_CUTSCENE`** | `CutsceneManager` | Shows fullscreen dialogue overlays (Big Win, Total Win). |
| **`SWITCH_GAME_MODE`** | `GameDirector` | Pushes/pops mode stack and changes active container node. |
