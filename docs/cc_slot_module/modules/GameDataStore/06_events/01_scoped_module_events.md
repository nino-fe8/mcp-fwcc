---
id: "cc_slot_module:GameDataStore:events:scoped_module_events"
title: "GameDataStore Scoped Module Events"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "events", "scoped_events"]
---

# 📡 GameDataStore Scoped Module Events

<!-- convention-summary-start -->
### GameDataStore Scoped Module Events Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameDataStore Scoped Module Events.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Scoped Events Summary

`GameDataStore` communicates with data layers via the direct invocation of `module.onDataUpdate(key, value)` rather than emitting event strings, ensuring near-instant zero-event overhead.
