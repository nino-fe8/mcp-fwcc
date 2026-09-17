---
id: "cc_slot_module:BaseDataModule:properties:injected_services"
title: "BaseDataModule Injected Services"
category: "cc_slot_module"
tags: ["BaseDataModule", "base_data_module", "cc_slot_module", "properties", "injected_services"]
---

# 💉 BaseDataModule Injected Services

<!-- convention-summary-start -->
### BaseDataModule Injected Services Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseDataModule Injected Services.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Injected Services Reference Table

| Injected Property | Service Type | Injection Annotation | Role |
| :--- | :--- | :--- | :--- |
| **`dataStore`** | `GameDataStore` | `@inject(GameDataStore)` | Central session state store holding parsed `playSession` data. |
| **`baseMode`** | `SlotBaseModule` | `this.getComponent(SlotBaseModule)` | Sibling presentation controller on the same scene node. |
