---
id: "game-implement:9666:module:JackpotWinModule9666:variables"
title: "JackpotWinModule9666 Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "JackpotWinModule9666", "jackpot_win_module9666", "variables", "fields", "properties"]
---

# 📋 `JackpotWinModule9666` Exhaustive Variables & Fields Dictionary

<!-- convention-summary-start -->
### JackpotWinModule9666 Exhaustive Variables & Fields Dictionary Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotWinModule9666 Exhaustive Variables & Fields Dictionary.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: game_implement, 02_variables
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **8** | `jackpotSpine` | `public` | `sp.Skeleton` | `@property` | Runtime state tracking `jackpotSpine` in `JackpotWinModule9666`. |

---

## 2. State Mutation Guardrails

All variables in `JackpotWinModule9666` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
