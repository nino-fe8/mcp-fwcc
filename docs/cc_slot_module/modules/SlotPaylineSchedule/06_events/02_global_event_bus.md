---
id: "cc_slot_module:SlotPaylineSchedule:events:global_event_bus"
title: "SlotPaylineSchedule Global Event Bus Integration"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "events", "global_bus"]
---

# 🌐 SlotPaylineSchedule Global Event Bus Integration

<!-- convention-summary-start -->
### SlotPaylineSchedule Global Event Bus Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotPaylineSchedule Global Event Bus Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Global Event Bus Emitters

| Global Topic | Payload | Purpose |
| :--- | :--- | :--- |
| `GameUIEvents.PAYLINE_INFO.ON_SHOW_PAYLINE_INFO` | `payLineInfo` | Updates bottom HUD with active line multiplier and winning credit. |
| `GameUIEvents.PAYLINE_INFO.ON_HIDE_PAYLINE_INFO` | None | Clears bottom HUD payline label upon spin start or schedule stop. |
