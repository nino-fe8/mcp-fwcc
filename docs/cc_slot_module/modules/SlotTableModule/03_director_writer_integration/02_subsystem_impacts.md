---
id: "cc_slot_module:SlotTableModule:director_writer:subsystem_impacts"
title: "SlotTableModule Subsystem Impact Matrix"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 SlotTableModule Subsystem Impact Matrix

<!-- convention-summary-start -->
### SlotTableModule Subsystem Impact Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableModule Subsystem Impact Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Subsystems Cross-Reference

| Action | `SlotReelModule` | `SlotSymbolManager` | `SlotTableNearWinModule` | `SlotTablePaylineModule` |
| :--- | :--- | :--- | :--- | :--- |
| `TABLE_INIT` | Instantiates reel nodes | Sets game config & symbol pools | None | Coordinates matrix dimensions |
| `TABLE_START_SPIN`| Calls `runReelSpin()` | Recycles old symbol nodes | Emits `RESET_NEARWIN` | Clears previous win lines |
| `TABLE_STOP_SPIN` | Calls `showResult()` | Allocates target symbol nodes | Emits `SETUP_NEARWIN` | Prepares payline coordinates |
| `REEL_STOPPED` | Triggers stop bounce | None | Emits `REEL_STOP_NEARWIN` | Ingests stopped column indices |
