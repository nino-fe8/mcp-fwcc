---
id: "cc_slot_module:AutoSpinPanel:events:global_event_bus"
title: "AutoSpinPanel Global Event Bus"
category: "cc_slot_module"
tags: ["AutoSpinPanel", "autospinpanel", "cc_slot_module", "events", "global"]
---

# 🌐 AutoSpinPanel Global Event Bus

<!-- convention-summary-start -->
### AutoSpinPanel Global Event Bus Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for AutoSpinPanel Global Event Bus.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Global Events Emitted

| Event | Payload | Purpose |
| :--- | :--- | :--- |
| `START_AUTO_SPIN` | `selectedSpinTimes: number` | Initiates auto spin loop. |
| `CLOSE_AUTO_SPIN_PANEL`| None | Notifies manager of drawer closure. |
