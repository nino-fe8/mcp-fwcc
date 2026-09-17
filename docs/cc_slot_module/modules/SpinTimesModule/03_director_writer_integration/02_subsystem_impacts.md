---
id: "cc_slot_module:SpinTimesModule:director_writer:subsystem_impacts"
title: "SpinTimesModule Cross-Subsystem Impacts"
category: "cc_slot_module"
tags: ["SpinTimesModule", "spin_times_module", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 SpinTimesModule Cross-Subsystem Impacts

<!-- convention-summary-start -->
### SpinTimesModule Cross-Subsystem Impacts Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SpinTimesModule Cross-Subsystem Impacts.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subsystem Influences

| Subsystem | Impact |
| :--- | :--- |
| **`UIManagerModule`** | Controls node visibility via `showNormalSpinControls()` / `showFreeSpinControls()`. |
| **`FreeGameDirectorModule`** | Emits `UPDATE_SPINTIMES` to decrement remaining free spins. |
| **`SlotButtonNormal`** | Triggers `updateState` when button returns to `NORMAL` state. |
