---
id: "cc_slot_module:BaseUIPopup:events:global_event_bus"
title: "BaseUIPopup Global Event Bus Specification"
category: "cc_slot_module"
tags: ["BaseUIPopup", "base_ui_popup", "cc_slot_module", "events", "global_bus"]
---

# 🌐 BaseUIPopup Global Event Bus Specification

<!-- convention-summary-start -->
### BaseUIPopup Global Event Bus Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseUIPopup Global Event Bus Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Global Events Emitted

| Event Constant | Payload | Target | Purpose |
| :--- | :--- | :--- | :--- |
| `GameLogicUIEvents.CLOSE_ALL_POPUPS` | None | `GameLogic` | Requests dismissal of all open popups. |
