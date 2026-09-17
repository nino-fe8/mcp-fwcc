---
id: "cc_slot_module:NormalGameWriterModule:customization:override_points_matrix"
title: "NormalGameWriterModule Extension Points Matrix"
category: "cc_slot_module"
tags: ["NormalGameWriterModule", "normal_game_writer", "cc_slot_module", "customization", "override_matrix", "hooks"]
---

# 📊 NormalGameWriterModule Extension Points Matrix

<!-- convention-summary-start -->
### NormalGameWriterModule Extension Points Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for NormalGameWriterModule Extension Points Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Extension Points Matrix

| Method Name | Base Implementation | Safe to Override? | Required `super` Call | Customization Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **`makeScriptNormalSpinTrigger()`** | Returns 6-step initialization array | `YES` | `OPTIONAL` | Insert custom pre-spin visual cleanup steps. |
| **`makeScriptPreResumeGameMode()`** | Returns table & payline resume steps | `YES` | `OPTIONAL` | Insert custom multiplier or jackpot synchronization steps. |
| **`makeScriptResumeNormalGame()`** | Returns `_showAllPaylines` | `YES` | `OPTIONAL` | Highlight special expanding sticky wilds on return. |
| **`makeScriptShowResultFinal()`** | Returns `_resumeWallet` | `YES` | `OPTIONAL` | Trigger custom celebratory confetti after big wins. |
