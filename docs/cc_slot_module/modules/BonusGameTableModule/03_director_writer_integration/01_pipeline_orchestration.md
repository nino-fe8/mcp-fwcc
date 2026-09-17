---
id: "cc_slot_module:BonusGameTableModule:director_writer:pipeline_orchestration"
title: "BonusGameTableModule Event-Driven Pipeline Orchestration"
category: "cc_slot_module"
tags: ["BonusGameTableModule", "bonus_game_table", "cc_slot_module", "director_writer", "pipeline"]
---

# 🎼 BonusGameTableModule Event-Driven Pipeline Orchestration

<!-- convention-summary-start -->
### BonusGameTableModule Event-Driven Pipeline Orchestration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BonusGameTableModule Event-Driven Pipeline Orchestration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Module Event Pipeline Integration

`BonusGameTableModule` receives scoped module events emitted by `BonusGameDirectorModule`:
1. `INIT_BONUS_GAME` ➔ Spawns and indexes box items.
2. `OPEN_ITEM` / `OPEN_FINAL_ITEM` ➔ Forwards open command to target chest index.
3. `OPEN_ALL_ITEMS` ➔ Calculates remaining prize counts and dims unpicked boxes.
4. `BLOCK_BONUS_GAME` / `UNBLOCK_BONUS_GAME` ➔ Toggles button interactivity on child items.
