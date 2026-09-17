---
id: "cc_slot_module:BonusGameTableModule:events:scoped_module_events"
title: "BonusGameTableModule Scoped Module Events"
category: "cc_slot_module"
tags: ["BonusGameTableModule", "bonus_game_table", "cc_slot_module", "events", "scoped_events"]
---

# 📡 BonusGameTableModule Scoped Module Events

<!-- convention-summary-start -->
### BonusGameTableModule Scoped Module Events Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BonusGameTableModule Scoped Module Events.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Scoped Events (`this.moduleEvent`)

| Event Name | Direction | Payload | Purpose |
| :--- | :--- | :--- | :--- |
| **`INIT_BONUS_GAME`** | Listens To | None | Triggers `initBoxes()`. |
| **`START_BONUS_GAME`** | Listens To | `betId: string` | Triggers `setBoxValues(betId)`. |
| **`AUTO_PLAY_BONUS_GAME`**| Listens To | None | Triggers `autoClick()`. |
| **`OPEN_ITEM`** | Listens To | `index, value` | Triggers `openBox(index, value)`. |
| **`OPEN_FINAL_ITEM`** | Listens To | `index, value` | Triggers `openFinalBox(index, value)`. |
| **`OPEN_ALL_ITEMS`** | Listens To | `result` | Triggers `openAllBoxes(result)`. |
| **`RESUME_BONUS_GAME`** | Listens To | `data: any[]` | Triggers `resumeTable(data)`. |
| **`RESET_BONUS_GAME`** | Listens To | None | Triggers `resetTable()`. |
| **`BLOCK_BONUS_GAME`** | Listens To | None | Triggers `disableAllBoxes()`. |
| **`UNBLOCK_BONUS_GAME`**| Listens To | None | Triggers `enableAllBoxes()`. |
