---
id: "cc_slot_module:BonusGameItemModule:events:scoped_module_events"
title: "BonusGameItemModule Scoped Node Events"
category: "cc_slot_module"
tags: ["BonusGameItemModule", "bonus_game_item", "cc_slot_module", "events", "node_events"]
---

# 📡 BonusGameItemModule Scoped Node Events

<!-- convention-summary-start -->
### BonusGameItemModule Scoped Node Events Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BonusGameItemModule Scoped Node Events.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Node Events (`this.node.on` & `this.node.dispatchEvent`)

| Event Name | Direction | Payload | Purpose |
| :--- | :--- | :--- | :--- |
| **`CLICK_ITEM`** | Dispatched (Bubbling) | `SlotCustomEvent({ itemId, isAutoTrigger })` | Bubbles up to Director on tap. |
| **`INIT`** | Listens To | `itemId: number` | Triggers `init()`. |
| **`BOX_OPEN`** | Listens To | `value: number, callback?: Function` | Triggers `playAnimOpen()`. |
| **`DIM`** | Listens To | None | Applies dimmed tint (`dim()`). |
| **`UNDIM`** | Listens To | None | Restores normal tint (`undim()`). |
| **`ENABLE_CLICK`**| Listens To | None | Enables button if unopened. |
| **`DISABLE_CLICK`**| Listens To | None | Disables button interactability. |
| **`BOX_RESET`** | Listens To | None | Resets UI and open flag. |
