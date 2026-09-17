---
id: "cc_slot_module:JackpotWinModule:properties_and_state:runtime_state_variables"
title: "JackpotWinModule Runtime State Variables"
category: "cc_slot_module"
tags: ["JackpotWinModule", "jackpot_win_module", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 JackpotWinModule Runtime State Variables

<!-- convention-summary-start -->
### JackpotWinModule Runtime State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotWinModule Runtime State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Runtime State Variables

| Variable | Type | Initial | Purpose |
| :--- | :--- | :--- | :--- |
| `jackpotType` | `string` | `""` | Jackpot tier identifier (e.g. "GRAND", "MAJOR"). |
| `jackpotValue` | `number` | `0` | Total jackpot cash award amount. |
| `_hasClicked` | `boolean` | `false` | Gate preventing multiple skip clicks during acceleration. |
| `_isUpdating` | `boolean` | `false` | Status flag for active count. |
| `_skippable` | `boolean` | `false` | Flag unlocked after `delayShowTime`. |
