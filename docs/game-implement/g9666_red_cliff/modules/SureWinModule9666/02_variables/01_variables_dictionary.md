---
id: "game-implement:9666:module:SureWinModule9666:variables"
title: "SureWinModule9666 Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "SureWinModule9666", "sure_win_module9666", "variables", "fields", "properties"]
---

# 📋 `SureWinModule9666` Exhaustive Variables & Fields Dictionary

<!-- convention-summary-start -->
### SureWinModule9666 Exhaustive Variables & Fields Dictionary Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SureWinModule9666 Exhaustive Variables & Fields Dictionary.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: game_implement, 02_variables
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **8** | `sureWinSkeleton` | `public` | `sp.Skeleton` | `@property` | Runtime state tracking `sureWinSkeleton` in `SureWinModule9666`. |
| **11** | `transparentNode` | `public` | `cc.Node` | `@property` | Runtime state tracking `transparentNode` in `SureWinModule9666`. |
| **14** | `transparentHorizontalNode` | `public` | `cc.Node` | `@property` | Runtime state tracking `transparentHorizontalNode` in `SureWinModule9666`. |

---

## 2. State Mutation Guardrails

All variables in `SureWinModule9666` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
