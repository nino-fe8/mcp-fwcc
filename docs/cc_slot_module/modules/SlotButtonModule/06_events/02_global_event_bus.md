---
id: "cc_slot_module:SlotButtonModule:events:global_event_bus"
title: "SlotButtonModule Global Event Bus Specification"
category: "cc_slot_module"
tags: ["SlotButtonModule", "slot_button_module", "cc_slot_module", "events", "global_bus"]
---

# 🌐 SlotButtonModule Global Event Bus Specification

<!-- convention-summary-start -->
### SlotButtonModule Global Event Bus Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotButtonModule Global Event Bus Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Global Events Emitted

| Event Constant | Payload | Target | Purpose |
| :--- | :--- | :--- | :--- |
| `GameUIEvents.SPIN_BUTTON.SET_UP_BUTTON` | `{ gameMode, node }` | `GameModeDirectorModule` | Registers button node during initialization. |
| `GameLogicUIEvents.TRIGGER_SPACE_BUTTON` | None | `GameLogic` | Dispatched on Spacebar press. |
| `GameLogicUIEvents.NORMAL_SPIN_CLICKED` | None | `GameLogic` | Dispatched on normal spin click. |
| `GameLogicUIEvents.FREE_SPIN_CLICKED` | None | `GameLogic` | Dispatched on free spin click. |
