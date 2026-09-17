---
id: "cc_slot_module:PaylineLineModule:events:global_event_bus"
title: "PaylineLineModule Global Event Bus Integration"
category: "cc_slot_module"
tags: ["PaylineLineModule", "payline_line_module", "cc_slot_module", "events", "global_bus"]
---

# 🌐 PaylineLineModule Global Event Bus Integration

<!-- convention-summary-start -->
### PaylineLineModule Global Event Bus Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineLineModule Global Event Bus Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Global Decoupling

`PaylineLineModule` relies strictly on the isolated `this.payLineEmitter` event target. It does not subscribe directly to `eventManager` to avoid global event bus pollution.
