---
id: "cc_slot_module:BaseGameDirector:properties:runtime_state_variables"
title: "BaseGameDirector Runtime State Variables"
category: "cc_slot_module"
tags: ["BaseGameDirector", "base_game_director", "cc_slot_module", "properties", "runtime_state", "variables", "executor", "writer"]
---

# 💾 BaseGameDirector Runtime State Variables

<!-- convention-summary-start -->
### BaseGameDirector Runtime State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseGameDirector Runtime State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Runtime Variables Reference Table

| Variable Name | TypeScript Type | Default Value | Mutated By | Purpose & Role |
| :--- | :--- | :--- | :--- | :--- |
| **`director`** | `any` | `null` | `init()` | Reference to the director instance (`this.node["director"]`). |
| **`writer`** | `any` | `null` | `init()` | Reference to the companion script writer (`this.node["writer"]`). |
| **`executor`** | `ScriptExecutor` | `null` | `init()` | The active asynchronous script step queue processor. |
| **`scripts`** | `script[]` | `undefined` | `executor` | Active list of command steps currently executing. |
| **`forceToExitMode`** | `boolean` | `false` | `forceToExit()` | Flag indicating whether the mode is currently aborting. |
| **`callBackWhenHide`** | `any` | `null` | Director | Callback invoked when the director node is deactivated. |
