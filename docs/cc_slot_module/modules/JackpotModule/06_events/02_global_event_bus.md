---
id: "cc_slot_module:JackpotModule:events:global_event_bus"
title: "JackpotModule Global Event Bus Specification"
category: "cc_slot_module"
tags: ["JackpotModule", "jackpot_module", "cc_slot_module", "events", "global_bus"]
---

# 🌐 JackpotModule Global Event Bus Specification

<!-- convention-summary-start -->
### JackpotModule Global Event Bus Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotModule Global Event Bus Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Global Events Subscribed

| Event Constant | Payload | Source | Purpose |
| :--- | :--- | :--- | :--- |
| `GameUIEvents.JACKPOT.PAUSE_JACKPOT` | None | `JackpotWinModule` | Pauses progressive pool ticking. |
| `GameUIEvents.JACKPOT.RESUME_JACKPOT` | None | `JackpotWinModule` | Resumes progressive pool ticking. |
| `GameUIEvents.JACKPOT.UPDATE_JACKPOT_VALUE` | `{ jackpotType, jackpotValue }` | Server/Backend | Direct override for a specific jackpot tier pool. |
