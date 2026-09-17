---
id: "cc_slot_module:GameModeWriterModule:director_writer:subsystem_impacts"
title: "GameModeWriterModule Subsystem Command Routing"
category: "cc_slot_module"
tags: ["GameModeWriterModule", "game_mode_writer", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 GameModeWriterModule Subsystem Command Routing

<!-- convention-summary-start -->
### GameModeWriterModule Subsystem Command Routing Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeWriterModule Subsystem Command Routing.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Command-to-Subsystem Dispatch Table

| Writer Command | Target Subsystem / Handler | Action Effect |
| :--- | :--- | :--- |
| **`_startSpinningTable`** | `SlotTableModule` | Reels accelerate into continuous spinning loop. |
| **`_stopSpinningTable`** | `SlotTableModule` | Target matrix symbols stop reel columns sequentially. |
| **`_setUpPaylines`** | `SlotTablePaylineData` | Validates combinations and prepares line coordinates. |
| **`_playJackpotWin`** | `CutsceneManager` | Displays fullscreen unskippable jackpot celebration. |
| **`_showTransitionGameMode`**| `GameModeDirectorModule` | Triggers mode switch to Free Game or Bonus Game. |
