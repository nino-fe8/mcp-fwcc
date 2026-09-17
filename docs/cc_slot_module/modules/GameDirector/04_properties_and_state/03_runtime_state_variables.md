---
id: "cc_slot_module:GameDirector:properties:runtime_state_variables"
title: "GameDirector Runtime State Variables"
category: "cc_slot_module"
tags: ["GameDirector", "game_director", "cc_slot_module", "properties", "runtime_state"]
---

# 💾 GameDirector Runtime State Variables

<!-- convention-summary-start -->
### GameDirector Runtime State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameDirector Runtime State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Runtime State Reference Table

| Variable Name | TypeScript Type | Default Value | Mutated By | Role |
| :--- | :--- | :--- | :--- | :--- |
| **`currentModes`** | `GameModeType[]` | `[]` | `onSwitchGameMode()`, `onExitGameMode()` | LIFO stack storing the hierarchy of active and previous game modes. |
| **`appHide`** | `boolean` | `false` | `onEventHide()`, `onEventShow()` | Flag indicating whether the browser game tab is currently hidden. |
| **`_currentRunningTargets`** | `any[]` | `[]` | `pauseRunningActions()` | Snapshot of active action targets paused when tab is hidden. |
