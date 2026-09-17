---
id: "cc_slot_module:BonusGameWriterModule:events:scoped_module_events"
title: "BonusGameWriterModule Scoped Module Events"
category: "cc_slot_module"
tags: ["BonusGameWriterModule", "bonus_game_writer", "cc_slot_module", "events", "scoped_events"]
---

# 📡 BonusGameWriterModule Scoped Module Events

<!-- convention-summary-start -->
### BonusGameWriterModule Scoped Module Events Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BonusGameWriterModule Scoped Module Events.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Scoped Events Summary

As a pure script generator, `BonusGameWriterModule` does not emit or listen directly to `moduleEvent` buses. Instead, it emits script commands which cause `BonusGameDirectorModule` to dispatch scoped events to `BonusGameTableModule`.
