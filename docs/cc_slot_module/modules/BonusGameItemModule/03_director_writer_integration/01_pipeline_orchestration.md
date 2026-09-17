---
id: "cc_slot_module:BonusGameItemModule:director_writer:pipeline_orchestration"
title: "BonusGameItemModule Event Bubbling & Director Delegation"
category: "cc_slot_module"
tags: ["BonusGameItemModule", "bonus_game_item", "cc_slot_module", "director_writer", "pipeline"]
---

# 🎼 BonusGameItemModule Event Bubbling & Director Delegation

<!-- convention-summary-start -->
### BonusGameItemModule Event Bubbling & Director Delegation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BonusGameItemModule Event Bubbling & Director Delegation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Pipeline Integration Architecture

1. **Touch Upward Flow**: `onClickItem()` dispatches `SlotCustomEvent("CLICK_ITEM", true, { itemId })` which bubbles up to `BonusGameDirectorModule`.
2. **Command Downward Flow**: `BonusGameTableModule` emits node events (`INIT`, `BOX_OPEN`, `DIM`, `UNDIM`, `DISABLE_CLICK`, `ENABLE_CLICK`, `BOX_RESET`) down to the item.
