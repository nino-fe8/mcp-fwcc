---
id: "cc_slot_module:BaseDataModule:events:scoped_module_events"
title: "BaseDataModule Scoped Module Events"
category: "cc_slot_module"
tags: ["BaseDataModule", "base_data_module", "cc_slot_module", "events", "scoped_events"]
---

# 📡 BaseDataModule Scoped Module Events

<!-- convention-summary-start -->
### BaseDataModule Scoped Module Events Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseDataModule Scoped Module Events.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Scoped Events Summary

`BaseDataModule` relies on direct method dispatching (`dataStore.updateDataModules() ➔ module.onDataUpdate()`) rather than emitting scoped event bus notifications, ensuring near-instant zero-event overhead.
