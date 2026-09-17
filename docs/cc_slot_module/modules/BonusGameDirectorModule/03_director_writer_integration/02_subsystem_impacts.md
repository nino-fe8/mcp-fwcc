---
id: "cc_slot_module:BonusGameDirectorModule:director_writer:subsystem_impacts"
title: "BonusGameDirectorModule Subsystem Impact Matrix"
category: "cc_slot_module"
tags: ["BonusGameDirectorModule", "bonus_game_director", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 BonusGameDirectorModule Subsystem Impact Matrix

<!-- convention-summary-start -->
### BonusGameDirectorModule Subsystem Impact Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BonusGameDirectorModule Subsystem Impact Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Subsystems Cross-Reference

| Command / Trigger | `BonusGameTableModule` | `CutsceneManager` | `eno.GameLogic` | `GameDataStore` |
| :--- | :--- | :--- | :--- | :--- |
| **`onClickItem`** | Disables all boxes | None | `SEND_BONUS_GAME_REQUEST` | Updates `openedBoxes` |
| **`_openItem`** | Reveals target chest prize | None | None | Ingests `bonusValue` |
| **`_openAllItems`**| Reveals unopened boxes dimmed | None | None | Reads `bonusGameMatrix` |
| **`_playFinalResultEffect`**| None | Plays `TOTAL_WIN` / `JACKPOT_WIN` | None | Reads jackpot info |
