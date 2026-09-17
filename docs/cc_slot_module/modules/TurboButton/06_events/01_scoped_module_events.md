---
id: "cc_slot_module:TurboButton:events:scoped_module_events"
title: "TurboButton Scoped Events"
category: "cc_slot_module"
tags: ["TurboButton", "turbo_button", "cc_slot_module", "events", "scoped_events"]
---

# 📡 TurboButton Scoped Events

<!-- convention-summary-start -->
### TurboButton Scoped Events Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TurboButton Scoped Events.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Local Scoped Events Emitted

| Event Name | Target Node | Payload | Purpose |
| :--- | :--- | :--- | :--- |
| `ON_TURBO_ACTIVE` | `display` | `active: boolean` | Toggles visual Turbo state in child decorators. |
| `TURBO_BUTTON_STATE_CHANGE` | `display` | `state: number` | Pushes button state to child decorator. |
