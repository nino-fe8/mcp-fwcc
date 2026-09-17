---
id: "game-implement:9666:module:SlotTableNearWinRefillModule9666:variables"
title: "SlotTableNearWinRefillModule9666 Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "SlotTableNearWinRefillModule9666", "slot_table_near_win_refill_module9666", "variables", "fields", "properties"]
---

# 📋 `SlotTableNearWinRefillModule9666` Exhaustive Variables & Fields Dictionary

<!-- convention-summary-start -->
### SlotTableNearWinRefillModule9666 Exhaustive Variables & Fields Dictionary Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableNearWinRefillModule9666 Exhaustive Variables & Fields Dictionary.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: game_implement, 02_variables
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **8** | `_liveMatrixScatterCount` | `private` | `number` | `0` | Runtime state tracking `_liveMatrixScatterCount` in `SlotTableNearWinRefillModule9666`. |

---

## 2. State Mutation Guardrails

All variables in `SlotTableNearWinRefillModule9666` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
