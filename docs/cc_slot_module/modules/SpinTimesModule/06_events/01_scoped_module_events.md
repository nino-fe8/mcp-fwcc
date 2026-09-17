---
id: "cc_slot_module:SpinTimesModule:events:scoped_module_events"
title: "SpinTimesModule Scoped Events"
category: "cc_slot_module"
tags: ["SpinTimesModule", "spin_times_module", "cc_slot_module", "events", "scoped_events"]
---

# 📡 SpinTimesModule Scoped Events

<!-- convention-summary-start -->
### SpinTimesModule Scoped Events Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SpinTimesModule Scoped Events.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Local Scoped Events Subscribed

| Event Name | Source | Payload | Purpose |
| :--- | :--- | :--- | :--- |
| `UPDATE_SPINTIMES` | `Director` / `Writer` | `spinTimes: number` | Pushes remaining round count to display. |
| `RESET_SPINTIMES` | `Director` / `Writer` | None | Clears label string and deactivates badge. |
