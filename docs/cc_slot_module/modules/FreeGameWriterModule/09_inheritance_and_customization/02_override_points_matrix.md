---
id: "cc_slot_module:FreeGameWriterModule:customization:override_points_matrix"
title: "FreeGameWriterModule Extension Points Matrix"
category: "cc_slot_module"
tags: ["FreeGameWriterModule", "free_game_writer", "cc_slot_module", "customization", "override_matrix", "hooks"]
---

# 📊 FreeGameWriterModule Extension Points Matrix

<!-- convention-summary-start -->
### FreeGameWriterModule Extension Points Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FreeGameWriterModule Extension Points Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Extension Points Matrix

| Method Name | Default Implementation | Safe to Override? | Required `super` Call | Customization Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **`makeScriptFreeSpinTrigger()`** | Standard 5-step trigger queue | `YES` | `RECOMMENDED` | Ingesting multiplier updates or sticky wild setups. |
| **`makeScriptShowResultFinal()`** | Branch on `freeGameRemain > 0` | `YES` | Optional | Retrigger evaluations or extra feature transitions. |
| **`getFreeGameRemainScript()`** | Updates spin times | `YES` | None | Adding subtle reel frame lighting or sound triggers. |
| **`getFreeGameEndScript()`** | Total Win cutscene + exit | `YES` | None | Custom outro animations or jackpot transitions. |
