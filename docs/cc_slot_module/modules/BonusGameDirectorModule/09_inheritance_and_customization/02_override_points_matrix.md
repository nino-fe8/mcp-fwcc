---
id: "cc_slot_module:BonusGameDirectorModule:customization:override_points_matrix"
title: "BonusGameDirectorModule Extension Points Matrix"
category: "cc_slot_module"
tags: ["BonusGameDirectorModule", "bonus_game_director", "cc_slot_module", "customization", "override_matrix", "hooks"]
---

# 📊 BonusGameDirectorModule Extension Points Matrix

<!-- convention-summary-start -->
### BonusGameDirectorModule Extension Points Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BonusGameDirectorModule Extension Points Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Extension Points Matrix

| Method Name | Base Implementation | Safe to Override? | Required `super` Call | Customization Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **`startBonusGame()`** | Resets timers & emits `START_BONUS_GAME` | `EXTEND_ONLY` | `MANDATORY` | Start specialized wheel animations or custom entrance cutscenes. |
| **`onClickItem(evt)`** | Validates & emits `SEND_BONUS_GAME_REQUEST`| `EXTEND_ONLY` | `MANDATORY` | Play chest touch feedback sounds or particle bursts. |
| **`_openItem(val)`** | Emits `OPEN_ITEM` | `YES` | None (Virtual) | Animate custom chest burst or prize reveal. |
| **`_openAllItems(matrix)`** | Emits `OPEN_ALL_ITEMS` | `YES` | None (Virtual) | Reveal remaining unpicked items with dimmed grayscale filters. |
| **`_playFinalResultEffect()`**| Emits `JACKPOT_WIN` or `TOTAL_WIN` | `YES` | None (Virtual) | Launch custom bonus jackpot wheel celebrations. |
