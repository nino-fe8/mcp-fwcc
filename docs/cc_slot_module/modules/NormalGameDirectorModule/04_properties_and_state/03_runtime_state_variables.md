---
id: "cc_slot_module:NormalGameDirectorModule:properties:runtime_state_variables"
title: "NormalGameDirectorModule Runtime State Variables"
category: "cc_slot_module"
tags: ["NormalGameDirectorModule", "normal_game_director", "cc_slot_module", "properties", "runtime_state"]
---

# 💾 NormalGameDirectorModule Runtime State Variables

<!-- convention-summary-start -->
### NormalGameDirectorModule Runtime State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for NormalGameDirectorModule Runtime State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Runtime State Variables Table

| Variable Name | TypeScript Type | Default Value | Mutated By | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **`forceToExitMode`** | `boolean` | `false` | `forceToExit()` | Halts regular base game spin loops immediately. |
| **`isResume`** | `boolean` | `false` | `onStateUpdate()` | Tracks whether current turn is resuming an unfinished round. |
