---
id: "cc_slot_module:BaseCutscene:director_writer:subsystem_impacts"
title: "BaseCutscene Cross-Subsystem Impacts"
category: "cc_slot_module"
tags: ["BaseCutscene", "base_cutscene", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 BaseCutscene Cross-Subsystem Impacts

<!-- convention-summary-start -->
### BaseCutscene Cross-Subsystem Impacts Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseCutscene Cross-Subsystem Impacts.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Cross-Subsystem Coordination

| Subsystem | Impact |
| :--- | :--- |
| **`UIManagerModule`** | Emits `SHOW_FULL_DISPLAY_CUTSCENE` to block touches on HUD buttons while modal is open. |
| **`SlotSoundPlayerModule`** | Ducks main BGM during victory fanfares and restores it via `resumeMainBGM()`. |
| **`GameLogic`** | Receives `ON_CUTSCENE_CLOSE` event to synchronize server state. |
