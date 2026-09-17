---
id: "game-implement:9666:module:SpineMcStateController9666:variables"
title: "SpineMcStateController9666 Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "SpineMcStateController9666", "spine_mc_state_controller9666", "variables", "fields", "properties"]
---

# 📋 `SpineMcStateController9666` Exhaustive Variables & Fields Dictionary

<!-- convention-summary-start -->
### SpineMcStateController9666 Exhaustive Variables & Fields Dictionary Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SpineMcStateController9666 Exhaustive Variables & Fields Dictionary.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: game_implement, 02_variables
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **53** | `skeleton` | `private` | `sp.Skeleton` | `undefined` | Runtime state tracking `skeleton` in `SpineMcStateController9666`. |
| **54** | `trackIndex` | `private` | `number` | `0` | Runtime state tracking `trackIndex` in `SpineMcStateController9666`. |
| **55** | `currentState` | `private` | `SpineStateMc9666` | `SpineStateMc9666.Idle` | Runtime state tracking `currentState` in `SpineMcStateController9666`. |

---

## 2. State Mutation Guardrails

All variables in `SpineMcStateController9666` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
