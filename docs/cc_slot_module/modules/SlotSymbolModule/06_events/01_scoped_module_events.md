---
id: "cc_slot_module:SlotSymbolModule:events:scoped_module_events"
title: "SlotSymbolModule Scoped Module Events & Callbacks"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "events", "scoped_events"]
---

# 📡 SlotSymbolModule Scoped Module Events & Callbacks

<!-- convention-summary-start -->
### SlotSymbolModule Scoped Module Events & Callbacks Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolModule Scoped Module Events & Callbacks.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Direct Method & Delegate Interface

Because hundreds of symbol instances can exist in memory simultaneously across reels and paylines, `SlotSymbolModule` minimizes event overhead by accepting direct method calls from `SlotReelModule` and `PaylineSymbolModule` rather than subscribing to broadcast event buses.
