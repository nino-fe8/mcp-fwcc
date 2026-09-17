---
id: "cc_slot_module:CascadeModuleData:events:global_event_bus"
title: "CascadeModuleData Global Event Bus Integration"
category: "cc_slot_module"
tags: ["CascadeModuleData", "cascade_module_data", "cc_slot_module", "events", "global_bus"]
---

# 🌐 CascadeModuleData Global Event Bus Integration

<!-- convention-summary-start -->
### CascadeModuleData Global Event Bus Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CascadeModuleData Global Event Bus Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Global Bus Ingestion

Ingests state updates dispatched via `GameDataStore.updateDataModules()`.
