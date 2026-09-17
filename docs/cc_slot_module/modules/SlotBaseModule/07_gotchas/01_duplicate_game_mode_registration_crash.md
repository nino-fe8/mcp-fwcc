---
id: "cc_slot_module:SlotBaseModule:gotchas:duplicate_game_mode_registration_crash"
title: "Gotcha: Multi-GameMode Registration Error"
category: "cc_slot_module"
tags: ["SlotBaseModule", "slot_base_module", "cc_slot_module", "gotchas", "setupModule", "multi_mode"]
---

# ⚠️ Gotcha: Multi-GameMode Registration Error

<!-- convention-summary-start -->
### Gotcha: Multi-GameMode Registration Error Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Multi-GameMode Registration Error.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Problem Description

`setupModule(moduleEvent, gameMode)` checks if `this.moduleEvent !== null`. If a developer assigns the same node/module reference in the Inspector to both Normal Game and Free Game directors:
`[ModuleRegistry] Module MyModule is registered to multiple GameMode. Please clone module or use GameEventManager to control event.`

---

## 2. Prevention

Create distinct prefab nodes for each game mode or communicate across modes via `GameEventManager` instead of sharing `moduleEvent`.
