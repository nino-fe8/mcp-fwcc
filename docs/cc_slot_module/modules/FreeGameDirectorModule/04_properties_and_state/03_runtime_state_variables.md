---
id: "cc_slot_module:FreeGameDirectorModule:properties:runtime_state_variables"
title: "FreeGameDirectorModule Runtime State Variables"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "properties", "runtime_state"]
---

# 💾 FreeGameDirectorModule Runtime State Variables

<!-- convention-summary-start -->
### FreeGameDirectorModule Runtime State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FreeGameDirectorModule Runtime State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Runtime State Variables Reference Table

| Variable Name | TypeScript Type | Default Value | Mutated By | Role |
| :--- | :--- | :--- | :--- | :--- |
| **`isFirstAutoSpin`** | `boolean` | `false` | `enter()`, `_beforeSpinStart()` | Bypasses `delayAutoSpin` on the initial free spin. |
| **`spinTimes`** | `cc.Node` | `null` | `setUpSpinTimes()` | Reference to the SpinTimes HUD badge node. |
| **`slotButton`** | `cc.Node` | `null` | `setUpSlotButton()` | Reference to the spin button control node. |
