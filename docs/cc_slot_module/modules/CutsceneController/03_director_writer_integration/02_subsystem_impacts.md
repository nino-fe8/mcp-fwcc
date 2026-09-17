---
id: "cc_slot_module:CutsceneController:director_writer:subsystem_impacts"
title: "CutsceneController Cross-Subsystem Impacts"
category: "cc_slot_module"
tags: ["CutsceneController", "cutscene_controller", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 CutsceneController Cross-Subsystem Impacts

<!-- convention-summary-start -->
### CutsceneController Cross-Subsystem Impacts Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CutsceneController Cross-Subsystem Impacts.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Cross-Subsystem Matrix

| Sibling Subsystem | Interaction / Impact |
| :--- | :--- |
| **`UIManagerModule`** | Intercepts `isDisplayCutscene()` to block touch inputs on spin buttons. |
| **`BaseGameDirector`** | Awaits `playCutScene()` promises before triggering mode transitions. |
| **`SlotSoundPlayerModule`** | Pauses/resumes background music across celebratory fanfares. |
