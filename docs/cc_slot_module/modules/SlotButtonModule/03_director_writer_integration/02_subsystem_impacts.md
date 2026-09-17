---
id: "cc_slot_module:SlotButtonModule:director_writer:subsystem_impacts"
title: "SlotButtonModule Cross-Subsystem Impacts"
category: "cc_slot_module"
tags: ["SlotButtonModule", "slot_button_module", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 SlotButtonModule Cross-Subsystem Impacts

<!-- convention-summary-start -->
### SlotButtonModule Cross-Subsystem Impacts Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotButtonModule Cross-Subsystem Impacts.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Cross-Subsystem Matrix

| Subsystem | Impact |
| :--- | :--- |
| **`GameModeDirectorModule`**| Listens to `NORMAL_SPIN_CLICKED` to launch the spin pipeline. |
| **`UIManagerModule`** | Blocks Spacebar input when popups/cutscenes are open. |
| **`SlotSoundPlayerModule`** | Plays `sfxSpinId` audio cues on button click. |
| **`Display Node`** | Listens to `SPIN_BUTTON_STATE_CHANGE` to trigger Spine / Sprite transitions. |
