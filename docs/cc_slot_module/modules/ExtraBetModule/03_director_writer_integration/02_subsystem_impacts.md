---
id: "cc_slot_module:ExtraBetModule:director_writer:subsystem_impacts"
title: "ExtraBetModule Cross-Subsystem Impacts"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 ExtraBetModule Cross-Subsystem Impacts

<!-- convention-summary-start -->
### ExtraBetModule Cross-Subsystem Impacts Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for ExtraBetModule Cross-Subsystem Impacts.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subsystem Influences

| Subsystem | Impact |
| :--- | :--- |
| **`UIManagerModule`** | Controls container visibility based on `hasExtraBet`. |
| **`SlotDataStore`** | Records `extraBetValue` modifier for total bet calculations. |
| **`SlotSoundPlayerModule`** | Plays `sfxIncreaseExtraBetId` / `sfxDecreaseExtraBetId`. |
