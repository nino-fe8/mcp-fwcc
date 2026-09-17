---
id: "cc_slot_module:FreeGameDirectorModule:director_writer:subsystem_impacts"
title: "FreeGameDirectorModule Subsystem Impact Matrix"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 FreeGameDirectorModule Subsystem Impact Matrix

<!-- convention-summary-start -->
### FreeGameDirectorModule Subsystem Impact Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FreeGameDirectorModule Subsystem Impact Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Subsystems Cross-Reference

| Invoked Method | Target Subsystem | Action Performed |
| :--- | :--- | :--- |
| **`syncSpinTimes()`** | `SpinTimes` HUD Node | Updates spin count badge with `freeGameRemain \|\| freeGame`. |
| **`syncNormalTable()`** | `SlotTableModule` | Renders the transition landing matrix from Base Game. |
| **`_decreaseFreeGameSpinTimes()`** | `SpinTimes` HUD Node | Decrements badge count by 1 at start of spin. |
| **`_showWinPayline()`** | `SlotTablePaylineModule` | Blinks paylines using cumulative `winAmountPS`. |
| **`_gameExit()`** | `SlotTableModule` | Clears paylines and resets table for Normal Game return. |
