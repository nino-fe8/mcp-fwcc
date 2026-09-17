---
id: "cc_slot_module:SlotTableNearWinModule:director_writer:subsystem_impacts"
title: "SlotTableNearWinModule Subsystem Impacts"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 SlotTableNearWinModule Subsystem Impacts

<!-- convention-summary-start -->
### SlotTableNearWinModule Subsystem Impacts Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableNearWinModule Subsystem Impacts.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Cross-Subsystem Interactions

| Subsystem / Module | Interaction Trigger | Effect / Result |
| :--- | :--- | :--- |
| **`SlotTableModule`** | Emits `SETUP_NEARWIN`, `REEL_STOP_NEARWIN`, `RESET_NEARWIN` | Coordinates timing between near-win overlay and matrix presentation. |
| **`SlotReelModule`** | `extendTimeToStop(isNearWin, isLastReel)` | Lengthens reel spin duration before triggering deceleration easing. |
| **`TableModuleConfig`** | Ingests `SYMBOL_WIDTH`, `TABLE_FORMAT`, `SCATTER_SYMBOL`, etc. | Supplies layout math and target symbol key identifiers. |
| **`SlotSoundPlayerModule`** | Calls `playSfx(soundNearWinId)` / `stopSfx(soundNearWinId)` | Manages looping tension sound choreography. |
