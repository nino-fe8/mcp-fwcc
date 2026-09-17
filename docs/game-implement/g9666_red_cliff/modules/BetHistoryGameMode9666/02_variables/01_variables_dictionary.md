---
id: "game-implement:9666:module:BetHistoryGameMode9666:variables"
title: "BetHistoryGameMode9666 Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "BetHistoryGameMode9666", "bet_history_game_mode9666", "variables", "fields", "properties"]
---

# 📋 `BetHistoryGameMode9666` Exhaustive Variables & Fields Dictionary

<!-- convention-summary-start -->
### BetHistoryGameMode9666 Exhaustive Variables & Fields Dictionary Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryGameMode9666 Exhaustive Variables & Fields Dictionary.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: game_implement, 02_variables
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **11** | `scatterCollectionUi` | `private` | `cc.Node` | `null` | Runtime state tracking `scatterCollectionUi` in `BetHistoryGameMode9666`. |
| **12** | `scatterCollectionLabel` | `private` | `cc.Label` | `null` | Runtime state tracking `scatterCollectionLabel` in `BetHistoryGameMode9666`. |
| **13** | `scatterAwardLabels` | `private` | `cc.Node[]` | `[]` | Runtime state tracking `scatterAwardLabels` in `BetHistoryGameMode9666`. |
| **14** | `commandOrderView` | `private` | `BetHistoryCommandOrderView9666` | `null` | Runtime state tracking `commandOrderView` in `BetHistoryGameMode9666`. |

---

## 2. State Mutation Guardrails

All variables in `BetHistoryGameMode9666` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
