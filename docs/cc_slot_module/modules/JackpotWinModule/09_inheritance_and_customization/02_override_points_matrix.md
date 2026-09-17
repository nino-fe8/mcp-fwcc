---
id: "cc_slot_module:JackpotWinModule:inheritance:override_points_matrix"
title: "JackpotWinModule Override Points Matrix"
category: "cc_slot_module"
tags: ["JackpotWinModule", "jackpot_win_module", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧬 JackpotWinModule Override Points Matrix

<!-- convention-summary-start -->
### JackpotWinModule Override Points Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotWinModule Override Points Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Extension Matrix

| Method | Super Required | Purpose |
| :--- | :--- | :--- |
| `enter` | Optional | Custom initialization and spine triggers. |
| `onClick` | Optional | Custom acceleration tween duration. |
| `playSoundStart` | Hook | Play initial jackpot alert audio. |
| `playSoundEnd` | Hook | Play victory triumph audio. |
| `resumeMainBGM` | Hook | Restore main game music. |
