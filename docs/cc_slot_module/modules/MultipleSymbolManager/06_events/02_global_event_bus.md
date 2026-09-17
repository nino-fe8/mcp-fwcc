---
id: "cc_slot_module:MultipleSymbolManager:events:global_event_bus"
title: "MultipleSymbolManager Global Event Bus Integration"
category: "cc_slot_module"
tags: ["MultipleSymbolManager", "multiple_symbol_manager", "cc_slot_module", "events", "global_event_bus", "eventManager"]
---

# 🌐 MultipleSymbolManager Global Event Bus Integration

<!-- convention-summary-start -->
### MultipleSymbolManager Global Event Bus Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MultipleSymbolManager Global Event Bus Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Global Event Bus Architectural Boundary

`MultipleSymbolManager` preserves strict modular decoupling and does not register direct global listeners on `eventManager`.

---

## 2. Cross-Subsystem Communication Rules

1. **Direct Delegation**: Components like `SlotTableModule` and `SlotReelModule` communicate with `MultipleSymbolManager` via explicit TypeScript method calls rather than loose global event broadcasting.
2. **State Cleanup via Table**: System-wide cleanup triggers (such as `RESET_ALL_EFFECT_AND_TASKS` or mode transitions) are received by `SlotTableModule`, which in turn invokes `resetAllEffectAndTasks()` or `removeAllSymbols()` on `MultipleSymbolManager`.
