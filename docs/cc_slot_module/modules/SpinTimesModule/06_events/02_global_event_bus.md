---
id: "cc_slot_module:SpinTimesModule:events:global_event_bus"
title: "SpinTimesModule Global Event Bus Specification"
category: "cc_slot_module"
tags: ["SpinTimesModule", "spin_times_module", "cc_slot_module", "events", "global_bus"]
---

# 🌐 SpinTimesModule Global Event Bus Specification

<!-- convention-summary-start -->
### SpinTimesModule Global Event Bus Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SpinTimesModule Global Event Bus Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Global Events Emitted

| Event Constant | Payload | Target | Purpose |
| :--- | :--- | :--- | :--- |
| `GameUIEvents.SPIN_TIMES.SET_UP_SPIN_TIMES` | `{ gameMode, node }` | `GameModeDirectorModule` | Registers spin times badge with Director during initialization. |
