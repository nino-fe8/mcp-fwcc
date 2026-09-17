---
id: "cc_slot_module:JackpotModule:director_writer:subsystem_impacts"
title: "JackpotModule Cross-Subsystem Impacts"
category: "cc_slot_module"
tags: ["JackpotModule", "jackpot_module", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 JackpotModule Cross-Subsystem Impacts

<!-- convention-summary-start -->
### JackpotModule Cross-Subsystem Impacts Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotModule Cross-Subsystem Impacts.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subsystem Influences

| Subsystem | Impact |
| :--- | :--- |
| **`UIManagerModule`** | Toggles `realJackpot` vs `trialJackpot` on demo mode switch. |
| **`JackpotWinModule`** | Emits `PAUSE_JACKPOT` and `RESUME_JACKPOT` during celebration. |
| **`JackpotLabel`** | Drives local `MoneyTween.runNumber` animations with `acceptRunDown: true`. |
