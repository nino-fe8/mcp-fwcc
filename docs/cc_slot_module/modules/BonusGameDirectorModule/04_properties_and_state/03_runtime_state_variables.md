---
id: "cc_slot_module:BonusGameDirectorModule:properties:runtime_state_variables"
title: "BonusGameDirectorModule Runtime State Variables"
category: "cc_slot_module"
tags: ["BonusGameDirectorModule", "bonus_game_director", "cc_slot_module", "properties", "runtime_state"]
---

# 💾 BonusGameDirectorModule Runtime State Variables

<!-- convention-summary-start -->
### BonusGameDirectorModule Runtime State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BonusGameDirectorModule Runtime State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Runtime State Reference Table

| Variable Name | TypeScript Type | Default Value | Mutated By | Role |
| :--- | :--- | :--- | :--- | :--- |
| **`openedBoxes`** | `number[]` | `[]` | `onClickItem()`, `_clearCurrentBonusGameData()` | List of chest indices already selected to prevent duplicate touches. |
| **`countdownTime`**| `number` | `0` | `startCountDown()`, `resetCountDown()` | Current countdown timer value in seconds. |
| **`selectedBox`** | `number` | `0` | `onClickItem()` | Index of most recently tapped chest. |
| **`isAutoOpen`** | `boolean` | `false` | `setAutoOpen()` | Flag indicating whether current reveal was auto-triggered on timeout. |
| **`isInit`** | `boolean` | `false` | `initBonusGame()` | Prevents re-instantiating pick grid on multiple entries. |
