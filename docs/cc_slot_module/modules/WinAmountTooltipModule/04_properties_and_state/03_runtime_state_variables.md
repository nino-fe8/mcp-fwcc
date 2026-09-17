---
id: "cc_slot_module:WinAmountTooltipModule:properties:runtime_state_variables"
title: "WinAmountTooltipModule Runtime State"
category: "cc_slot_module"
tags: ["WinAmountTooltipModule", "winamounttooltipmodule", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 WinAmountTooltipModule Runtime State

<!-- convention-summary-start -->
### WinAmountTooltipModule Runtime State Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinAmountTooltipModule Runtime State.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. State Table

| Variable | Type | Default | Purpose |
| :--- | :--- | :--- | :--- |
| `_currentIndex` | `number` | `0` | Index of next feature tip to display. |
| `_currentTween` | `any` | `null` | Active sliding tween. |
| `_currentType` | `number` | `TOOL_TIP_TYPE.TEXT` | Active display state mode. |
