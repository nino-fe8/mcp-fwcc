---
id: "cc_slot_module:BonusGameTableModule:events:global_event_bus"
title: "BonusGameTableModule Global Event Bus Integration"
category: "cc_slot_module"
tags: ["BonusGameTableModule", "bonus_game_table", "cc_slot_module", "events", "global_event_bus"]
---

# 🌐 BonusGameTableModule Global Event Bus Integration

<!-- convention-summary-start -->
### BonusGameTableModule Global Event Bus Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BonusGameTableModule Global Event Bus Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Global Events Summary

`BonusGameTableModule` operates exclusively within the scoped module event bus (`this.moduleEvent`) created by `GameModeDirectorModule`. It does not listen to or emit global `eventManager` events directly.
