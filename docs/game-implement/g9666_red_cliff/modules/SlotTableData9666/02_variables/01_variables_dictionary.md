---
id: "game-implement:9666:module:SlotTableData9666:variables"
title: "SlotTableData9666 Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "SlotTableData9666", "slot_table_data9666", "variables", "fields", "properties"]
---

# 📋 `SlotTableData9666` Exhaustive Variables & Fields Dictionary

<!-- convention-summary-start -->
### SlotTableData9666 Exhaustive Variables & Fields Dictionary Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableData9666 Exhaustive Variables & Fields Dictionary.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: game_implement, 02_variables
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| *None* | *No member variables declared directly* | `-` | `-` | `-` | Pure stateless helper |

---

## 2. State Mutation Guardrails

All variables in `SlotTableData9666` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
