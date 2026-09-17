---
id: "cc_slot_module:PaylineInfoModule:events:global_event_bus"
title: "PaylineInfoModule Global Event Bus Specification"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "events", "global_bus"]
---

# 🌐 PaylineInfoModule Global Event Bus Specification

<!-- convention-summary-start -->
### PaylineInfoModule Global Event Bus Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineInfoModule Global Event Bus Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Global Events Subscribed

| Event Constant | Payload | Source | Purpose |
| :--- | :--- | :--- | :--- |
| `ON_SHOW_PAYLINE_INFO` | `paylineInfo: any` | `PaylineControllerModule` | Displays payline metadata toast. |
| `ON_HIDE_PAYLINE_INFO` | None | `PaylineControllerModule` | Hides payline metadata toast. |
