---
id: "cc_slot_module:PaylineSymbolModule:events:global_event_bus"
title: "PaylineSymbolModule Global Event Bus Integration"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "events", "global_event_bus"]
---

# 🌐 PaylineSymbolModule Global Event Bus Integration

<!-- convention-summary-start -->
### PaylineSymbolModule Global Event Bus Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineSymbolModule Global Event Bus Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Global Event Bus Summary

`PaylineSymbolModule` communicates strictly via `payLineEmitter` and `moduleEvent`. It has zero direct attachments to the global `GameEventManager`, preserving scope encapsulation.
