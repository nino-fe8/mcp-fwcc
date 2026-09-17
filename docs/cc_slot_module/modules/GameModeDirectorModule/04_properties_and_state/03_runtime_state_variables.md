---
id: "cc_slot_module:GameModeDirectorModule:properties:runtime_state_variables"
title: "GameModeDirectorModule Runtime State Variables"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "properties", "runtime_state", "variables", "moduleEvent", "spinTimes", "slotButton"]
---

# 💾 GameModeDirectorModule Runtime State Variables

<!-- convention-summary-start -->
### GameModeDirectorModule Runtime State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule Runtime State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Runtime State Variables Reference Table

| Variable Name | TypeScript Type | Default Value | Mutated By | Purpose & Role |
| :--- | :--- | :--- | :--- | :--- |
| **`moduleEvent`** | `GameModuleEvent` | `null` | `setupModules()` | The private scoped event bus instance shared among `moduleList` components. |
| **`spinTimes`** | `cc.Node` | `null` | `setUpSpinTimes()` | Reference to the Free Spin countdown counter HUD node. |
| **`slotButton`** | `cc.Node` | `null` | `setUpSlotButton()` | Reference to the active spin button node. |
| **`_tweenDelayTimeScript`**| `cc.Tween \| null` | `null` | `_delayScript()` | Active tween timer used for scaled step delays. |
| **`_delayActionCB`** | `Function \| null` | `null` | Delay routines | Callback invoked when action delays finish or get skipped. |
