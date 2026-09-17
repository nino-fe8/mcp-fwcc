---
id: "cc_slot_module:WinEffectModule:properties_and_state:runtime_state_variables"
title: "WinEffectModule Runtime State Variables"
category: "cc_slot_module"
tags: ["WinEffectModule", "win_effect_module", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 WinEffectModule Runtime State Variables

<!-- convention-summary-start -->
### WinEffectModule Runtime State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinEffectModule Runtime State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Internal State Variables

| Variable | Type | Initial | Purpose |
| :--- | :--- | :--- | :--- |
| `currentValue` | `number` | `0` | Active numeric count in rolling tween. |
| `_superWinAmount` | `number` | `0` | Calculated cash threshold for Super Win. |
| `_megaWinAmount` | `number` | `0` | Calculated cash threshold for Mega Win. |
| `_currentTitle` | `number` | `0` | Current title tier index (`WinEffectLevelEnum`). |
| `_skippable` | `boolean` | `false` | Gate flag enabling tap-to-skip. |
| `_speedUp` | `boolean` | `false` | Flag indicating user tapped to fast-forward. |
| `_isUpdating` | `boolean` | `false` | Flag driving `update(dt)` title checks. |
| `_tweenMoney` | `any` | `null` | Active `MoneyTween` action instance. |
| `_tweenFinish` | `any` | `null` | Active exit delay tween instance. |
