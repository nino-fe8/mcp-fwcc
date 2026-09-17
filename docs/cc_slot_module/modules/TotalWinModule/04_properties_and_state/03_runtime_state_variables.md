---
id: "cc_slot_module:TotalWinModule:properties_and_state:runtime_state_variables"
title: "TotalWinModule Runtime State Variables"
category: "cc_slot_module"
tags: ["TotalWinModule", "total_win_module", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 TotalWinModule Runtime State Variables

<!-- convention-summary-start -->
### TotalWinModule Runtime State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TotalWinModule Runtime State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Runtime Variables

| Variable | Type | Initial | Purpose |
| :--- | :--- | :--- | :--- |
| `currentValue` | `number` | `0` | Active count-up numeric value. |
| `_totalWinAmount`| `number` | `0` | Calculated aggregate win amount. |
| `_hasSkip` | `boolean` | `false` | Gate preventing multiple skip actions. |
| `_skippable` | `boolean` | `false` | Unlocked after `delayShowTime`. |
| `_isUpdating` | `boolean` | `false` | Active state flag. |
