---
id: "game-implement:9666:module:CollectScatterModule:variables"
title: "CollectScatterModule Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "CollectScatterModule", "collect_scatter_module", "variables", "fields", "properties"]
---

# 📋 `CollectScatterModule` Exhaustive Variables & Fields Dictionary

<!-- convention-summary-start -->
### CollectScatterModule Exhaustive Variables & Fields Dictionary Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CollectScatterModule Exhaustive Variables & Fields Dictionary.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: game_implement, 02_variables
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **20** | `_activeFlagEffects` | `private` | `ActiveFlagEffect[]` | `[]` | Runtime state tracking `_activeFlagEffects` in `CollectScatterModule`. |
| **21** | `_activeSpinSkeletons` | `private` | `sp.Skeleton[]` | `[]` | Runtime state tracking `_activeSpinSkeletons` in `CollectScatterModule`. |
| **24** | `collectEffectFlagTemplate` | `public` | `sp.Skeleton` | `@property` | Runtime state tracking `collectEffectFlagTemplate` in `CollectScatterModule`. |
| **27** | `collectEffectSpinTemplate` | `public` | `sp.Skeleton` | `@property` | Runtime state tracking `collectEffectSpinTemplate` in `CollectScatterModule`. |
| **30** | `flags` | `public` | `sp.Skeleton[]` | `@property` | Runtime state tracking `flags` in `CollectScatterModule`. |
| **33** | `flagsGroup` | `public` | `cc.Node` | `@property` | Runtime state tracking `flagsGroup` in `CollectScatterModule`. |

---

## 2. State Mutation Guardrails

All variables in `CollectScatterModule` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
