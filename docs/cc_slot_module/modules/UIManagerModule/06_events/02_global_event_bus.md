---
id: "cc_slot_module:UIManagerModule:events:global_event_bus"
title: "UIManagerModule Global Event Bus Specification"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "events", "global_bus"]
---

# 🌐 UIManagerModule Global Event Bus Specification

<!-- convention-summary-start -->
### UIManagerModule Global Event Bus Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for UIManagerModule Global Event Bus Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Global Events Subscribed

| Event Constant | Payload | Source | Purpose |
| :--- | :--- | :--- | :--- |
| `GameUIEvents.UI_MANAGER.UPDATE_GAME_MODE_UI` | `gameMode: number` | `GameModeDirectorModule` | Triggers dynamic layout swap. |
