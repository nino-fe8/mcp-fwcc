---
id: "cc_slot_module:PortraitBetModule:events:global_event_bus"
title: "PortraitBetModule Global Event Bus"
category: "cc_slot_module"
tags: ["PortraitBetModule", "portraitbetmodule", "cc_slot_module", "events", "global"]
---

# 🌐 PortraitBetModule Global Event Bus

<!-- convention-summary-start -->
### PortraitBetModule Global Event Bus Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PortraitBetModule Global Event Bus.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Global Events Emitted

| Event | Target | Purpose |
| :--- | :--- | :--- |
| `GameUIEvents.UI_TOAST.HIT_MAX_BET` | `ToastInfoModule` | Alert player reached max bet limit. |
| `GameUIEvents.UI_TOAST.HIT_MIN_BET` | `ToastInfoModule` | Alert player reached min bet limit. |
