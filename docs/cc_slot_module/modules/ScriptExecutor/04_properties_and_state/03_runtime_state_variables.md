---
id: "cc_slot_module:ScriptExecutor:properties:runtime_state_variables"
title: "ScriptExecutor Internal Runtime Variables"
category: "cc_slot_module"
tags: ["ScriptExecutor", "script_executor", "cc_slot_module", "properties", "runtime_state", "variables", "scripts", "lastCommandName"]
---

# 💾 ScriptExecutor Internal Runtime Variables

<!-- convention-summary-start -->
### ScriptExecutor Internal Runtime Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for ScriptExecutor Internal Runtime Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Runtime State Variables Reference Table

| Variable Name | TypeScript Type | Default Value | Mutated By | Purpose & Role |
| :--- | :--- | :--- | :--- | :--- |
| **`scripts`** | `any[]` | `[]` | `runAction()`, `executeNextScript()` | Hash map storing active command queues indexed by `actionName`. |
| **`exitScript`** | `any[]` | `[]` | `forceToExit()` | Array of emergency cleanup steps to run when aborting game mode. |
| **`forceToExitMode`** | `boolean` | `false` | `forceToExit()` | Flag signaling that all pending spin action promises must reject. |
| **`gameSpeed`** | `number` | `NORMAL` (`0`) | `setGameSpeed()`, `resetGameSpeed()` | Active speed level used by `getCommandName()`. |
| **`lastActionName`** | `string` | `""` | `runCommand()` | Identifier of the most recent action queue executed. |
| **`lastCommandName`**| `string` | `""` | `runCommand()` | Identifier of the individual command currently or last dispatched. |
| **`logger`** | `eno.Logger` | `null` | `setLogger()` | Dedicated logger instance formatting console group logs. |
