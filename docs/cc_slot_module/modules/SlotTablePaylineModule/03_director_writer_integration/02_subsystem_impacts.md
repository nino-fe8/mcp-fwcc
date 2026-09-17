---
id: "cc_slot_module:SlotTablePaylineModule:director_writer:subsystem_impacts"
title: "SlotTablePaylineModule Subsystem Impacts"
category: "cc_slot_module"
tags: ["SlotTablePaylineModule", "slot_table_payline_module", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 SlotTablePaylineModule Subsystem Impacts

<!-- convention-summary-start -->
### SlotTablePaylineModule Subsystem Impacts Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTablePaylineModule Subsystem Impacts.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Cross-Subsystem Impacts Matrix

| Subsystem / Component | Trigger / Interaction | Resulting Behavior |
| :--- | :--- | :--- |
| **`SlotTablePaylineData`** | `getMatrix()`, `getPayLines()`, `getWinSymbols()` | Provides parsed payline models to `SlotTablePaylineModule`. |
| **`SlotSymbolManager`** | `updateSymbolSiblingIndex(hitSymbols)` | Re-orders visual z-indices so winning symbols render above others. |
| **`PaylineInfoModule`** | `SHOW_PAYLINE_INFO` | Updates bottom/top HUD label with winning multiplier and credit payout. |
| **`SlotSoundPlayerModule`** | `playSfx(paylineSoundId)` | Plays win sting or line sound during sequential cycling. |
