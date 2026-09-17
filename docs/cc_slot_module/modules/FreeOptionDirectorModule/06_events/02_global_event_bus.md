---
id: "cc_slot_module:FreeOptionDirectorModule:events:global_event_bus"
title: "FreeOptionDirectorModule Global Event Bus Integration"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "events", "global_event_bus"]
---

# 🌐 FreeOptionDirectorModule Global Event Bus Integration

<!-- convention-summary-start -->
### FreeOptionDirectorModule Global Event Bus Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FreeOptionDirectorModule Global Event Bus Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Global Events Emitted

| Event Constant | Payload | Target Subsystem | Description |
| :--- | :--- | :--- | :--- |
| **`GameLogicUIEvents.SEND_FREE_OPTION_REQUEST`** | `selectedOption: number` | `GameLogic` / Network Layer | Sends player's volatility / spin option choice to server. |
