---
id: "game-implement:9666:module:CollectMultiItem9666:variables"
title: "CollectMultiItem9666 Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "CollectMultiItem9666", "collect_multi_item9666", "variables", "fields", "properties"]
---

# 📋 `CollectMultiItem9666` Exhaustive Variables & Fields Dictionary

<!-- convention-summary-start -->
### CollectMultiItem9666 Exhaustive Variables & Fields Dictionary Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CollectMultiItem9666 Exhaustive Variables & Fields Dictionary.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: game_implement, 02_variables
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **12** | `lbValue` | `public` | `cc.Label` | `@property` | Runtime state tracking `lbValue` in `CollectMultiItem9666`. |
| **14** | `_symbolCode` | `private` | `string` | `""` | Runtime state tracking `_symbolCode` in `CollectMultiItem9666`. |
| **15** | `_multiplier` | `private` | `number` | `0` | Runtime state tracking `_multiplier` in `CollectMultiItem9666`. |

---

## 2. State Mutation Guardrails

All variables in `CollectMultiItem9666` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
