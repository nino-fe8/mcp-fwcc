---
id: "cc_slot_module:SlotTablePaylineData:properties:injected_services"
title: "SlotTablePaylineData Injected Services"
category: "cc_slot_module"
tags: ["SlotTablePaylineData", "slot_table_payline_data", "cc_slot_module", "properties", "injected_services", "ioc"]
---

# 💉 SlotTablePaylineData Injected Services

<!-- convention-summary-start -->
### SlotTablePaylineData Injected Services Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTablePaylineData Injected Services.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Injected Services Matrix

`SlotTablePaylineData` inherits services from `BaseDataModule` / `SlotBaseModule`:

| Token | Type | When Provided | Purpose in Module |
| :--- | :--- | :--- | :--- |
| `gameDataStore` | `GameDataStore` | Scene Bootstrap (`GameInit`) | Source reactive data store. |
| `gameConfig` | `GameConfig` | Scene Bootstrap (`GameInit`) | Master game configuration. |
| `eventManager` | `GameEventManager` | Scene Bootstrap (`GameInit`) | Global event bus. |
