---
id: "game-implement:9666:module:StackWildModuleConfig:variables"
title: "StackWildModuleConfig Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "StackWildModuleConfig", "stack_wild_module_config", "variables", "fields", "properties"]
---

# 📋 `StackWildModuleConfig` Exhaustive Variables & Fields Dictionary

<!-- convention-summary-start -->
### StackWildModuleConfig Exhaustive Variables & Fields Dictionary Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for StackWildModuleConfig Exhaustive Variables & Fields Dictionary.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: game_implement, 02_variables
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **7** | `cellSize` | `public` | `cc.Vec2` | `new cc.Vec2(141, 110)` | Runtime state tracking `cellSize` in `StackWildModuleConfig`. |
| **9** | `STACK_WILD_DURATION` | `public` | `number` | `1.0` | Runtime state tracking `STACK_WILD_DURATION` in `StackWildModuleConfig`. |
| **10** | `STACK_WILD_DURATION_TURBO` | `public` | `number` | `0.5` | Runtime state tracking `STACK_WILD_DURATION_TURBO` in `StackWildModuleConfig`. |
| **11** | `STACK_WILD_DELAY` | `public` | `number` | `0.15` | Runtime state tracking `STACK_WILD_DELAY` in `StackWildModuleConfig`. |
| **12** | `STACK_WILD_DELAY_TURBO` | `public` | `number` | `0.05` | Runtime state tracking `STACK_WILD_DELAY_TURBO` in `StackWildModuleConfig`. |

---

## 2. State Mutation Guardrails

All variables in `StackWildModuleConfig` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
