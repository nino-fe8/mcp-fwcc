---
id: "cc_slot_module:ToastInfoModule:events:global_event_bus"
title: "ToastInfoModule Global Event Bus Specification"
category: "cc_slot_module"
tags: ["ToastInfoModule", "toast_info_module", "cc_slot_module", "events", "global_bus"]
---

# 🌐 ToastInfoModule Global Event Bus Specification

<!-- convention-summary-start -->
### ToastInfoModule Global Event Bus Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for ToastInfoModule Global Event Bus Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Global Events Subscribed

| Event Constant | Payload | Source | Purpose |
| :--- | :--- | :--- | :--- |
| `NETWORK_WARNING` | `message: string` | `GameLogic` | Prompts toast popup with warning message. |
