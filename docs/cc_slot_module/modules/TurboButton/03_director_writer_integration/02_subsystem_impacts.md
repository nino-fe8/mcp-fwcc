---
id: "cc_slot_module:TurboButton:director_writer:subsystem_impacts"
title: "TurboButton Cross-Subsystem Impacts"
category: "cc_slot_module"
tags: ["TurboButton", "turbo_button", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 TurboButton Cross-Subsystem Impacts

<!-- convention-summary-start -->
### TurboButton Cross-Subsystem Impacts Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TurboButton Cross-Subsystem Impacts.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subsystem Influences

| Subsystem | Impact |
| :--- | :--- |
| **`SlotGameSettings`** | Sets `isTurboActive` boolean. |
| **`SlotTableDirector`** | Switches reel spin speed curves to high-speed profiles when `isTurboActive = true`. |
| **`SlotSoundPlayerModule`** | Plays `sfxTurboOn` / `sfxTurboOff` audio clips. |
