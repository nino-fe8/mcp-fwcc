---
id: "cc_slot_module:FreeGameWriterModule:director_writer:subsystem_impacts"
title: "FreeGameWriterModule Subsystem Impact Matrix"
category: "cc_slot_module"
tags: ["FreeGameWriterModule", "free_game_writer", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 FreeGameWriterModule Subsystem Impact Matrix

<!-- convention-summary-start -->
### FreeGameWriterModule Subsystem Impact Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FreeGameWriterModule Subsystem Impact Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Subsystems Cross-Reference

| Script Method | Injected Command | Executing Subsystem | Subsystem Role |
| :--- | :--- | :--- | :--- |
| **`makeScriptFreeSpinTrigger`** | `_decreaseFreeGameSpinTimes` | `SpinTimes` HUD node | Decrements badge counter by 1 before reels move. |
| **`makeScriptFreeSpinTrigger`** | `_resetTable` | `SlotTableModule` | Clears sticky frames and resets reel offsets. |
| **`getFreeGameEndScript`** | `_showUnskippedCutscene` | `CutsceneModule` | Plays `TOTAL_WIN` celebration dialog. |
| **`getFreeGameEndScript`** | `_gameExit` | `FreeGameDirectorModule` | Emits `EXIT_GAME_MODE` to return to Normal Game. |
