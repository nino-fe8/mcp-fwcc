---
id: "cc_slot_module:GameModeWriterModule:customization:override_points_matrix"
title: "GameModeWriterModule Extension Points Matrix"
category: "cc_slot_module"
tags: ["GameModeWriterModule", "game_mode_writer", "cc_slot_module", "customization", "override_matrix", "hooks"]
---

# 📊 GameModeWriterModule Extension Points Matrix

<!-- convention-summary-start -->
### GameModeWriterModule Extension Points Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeWriterModule Extension Points Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Extension Points Matrix

| Method Name | Base Implementation | Safe to Override? | Required `super` Call | Customization Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **`makeScriptStartSpinning()`** | Returns `_startSpinningTable` | `YES` | `OPTIONAL` | Reset progressive multipliers before reel spins. |
| **`makeScriptStopSpinningTable()`**| Returns stop & payline steps | `YES` | `OPTIONAL` | Insert expanding wild or near-win anticipation steps. |
| **`makeScriptStartRespinning()`** | Returns respin steps | `YES` | `OPTIONAL` | Gather scatter collection tokens during cascade drops. |
| **`makeScriptStopRespinningTable()`**| Returns respin settlement steps | `YES` | `OPTIONAL` | Insert stacked wild synchronizations. |
| **`makeScriptShowResultEntry()`** | Returns jackpot, big win, transition | `YES` | `RECOMMENDED` | Insert custom celebratory wheel mini-games. |
