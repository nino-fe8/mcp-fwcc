---
id: "cc_slot_module:BonusGameItemModule:events:global_event_bus"
title: "BonusGameItemModule Global Event Bus Integration"
category: "cc_slot_module"
tags: ["BonusGameItemModule", "bonus_game_item", "cc_slot_module", "events", "global_event_bus"]
---

# 🌐 BonusGameItemModule Global Event Bus Integration

<!-- convention-summary-start -->
### BonusGameItemModule Global Event Bus Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BonusGameItemModule Global Event Bus Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Global Events Summary

`BonusGameItemModule` interacts with parent components primarily through bubbling node events (`SlotCustomEvent`) and local node listeners, isolating rendering details from global bus traffic.
