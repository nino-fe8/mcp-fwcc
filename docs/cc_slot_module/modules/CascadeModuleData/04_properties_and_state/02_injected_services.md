---
id: "cc_slot_module:CascadeModuleData:properties_and_state:injected_services"
title: "CascadeModuleData Injected Context"
category: "cc_slot_module"
tags: ["CascadeModuleData", "cascade_module_data", "cc_slot_module", "properties", "injected_services"]
---

# 💉 CascadeModuleData Injected Context

<!-- convention-summary-start -->
### CascadeModuleData Injected Context Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CascadeModuleData Injected Context.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Local Component Dependency

- `config`: `CascadeModuleConfig` acquired in `onloadExtend()` via `this.getComponent(CascadeModuleConfig)`.
- `gameMode`: Ingested via `BaseDataModule.updateData()`.
