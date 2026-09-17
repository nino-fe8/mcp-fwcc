---
id: "cc_slot_module:FreeGameDirectorModule:events:scoped_module_events"
title: "FreeGameDirectorModule Scoped Module Events"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "events", "scoped_events"]
---

# 📡 FreeGameDirectorModule Scoped Module Events

<!-- convention-summary-start -->
### FreeGameDirectorModule Scoped Module Events Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FreeGameDirectorModule Scoped Module Events.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Scoped Events Emitted

| Event Name | Payload | Target Subsystem | Description |
| :--- | :--- | :--- | :--- |
| **`SYNC_TABLE`** | `data?, gameMode?` | `SlotTableModule` | Renders Free Game reels or restores transition matrix. |
| **`BLINK_ALL_PAYLINES`** | `data: { winAmount }` | `SlotTablePaylineModule` | Flashes winning paylines with cumulative total. |
| **`SHOW_ALL_PAYLINES`** | `data: { winAmount }` | `SlotTablePaylineModule` | Cycles individual lines. |
| **`CLEAR_PAYLINES`** | None | `SlotTablePaylineModule` | Clears payline tracks on feature exit. |
