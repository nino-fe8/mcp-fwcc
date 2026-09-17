---
id: "cc_slot_module:WinAmountModule:properties_and_state:runtime_state_variables"
title: "WinAmountModule Runtime State Variables"
category: "cc_slot_module"
tags: ["WinAmountModule", "win_amount_module", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 WinAmountModule Runtime State Variables

<!-- convention-summary-start -->
### WinAmountModule Runtime State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinAmountModule Runtime State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Runtime State

| Variable | Type | Initial | Description |
| :--- | :--- | :--- | :--- |
| `_currentValue` | `number` | `0` | Current numeric value displayed on label. |
| `_winValue` | `number` | `undefined` | Target target winning score. |
| `_callBackOnComplete`| `Function`| `null` | Promise resolve callback. |
| `_tweenValue` | `any` | `null` | Active `MoneyTween` handle. |
| `_tweenFade` | `any` | `null` | Active `fadeOut` tween handle. |
