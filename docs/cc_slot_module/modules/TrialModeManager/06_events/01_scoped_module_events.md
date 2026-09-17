---
id: "cc_slot_module:TrialModeManager:events:scoped_module_events"
title: "TrialModeManager Scoped Events"
category: "cc_slot_module"
tags: ["TrialModeManager", "trial_mode_manager", "cc_slot_module", "events", "scoped_events"]
---

# 📡 TrialModeManager Scoped Events

<!-- convention-summary-start -->
### TrialModeManager Scoped Events Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TrialModeManager Scoped Events.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Local Scoped Events Emitted

| Event Name | Target Node | Payload | Purpose |
| :--- | :--- | :--- | :--- |
| `SET_INTERACTABLE` | `option` button nodes | `interactable: boolean` | Enables/disables scenario test buttons. |
