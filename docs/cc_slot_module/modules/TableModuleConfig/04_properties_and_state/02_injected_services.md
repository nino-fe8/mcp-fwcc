---
id: "cc_slot_module:TableModuleConfig:properties:injected_services"
title: "TableModuleConfig Injected Services"
category: "cc_slot_module"
tags: ["TableModuleConfig", "table_config", "cc_slot_module", "properties", "injected_services"]
---

# 💉 TableModuleConfig Injected Services

<!-- convention-summary-start -->
### TableModuleConfig Injected Services Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TableModuleConfig Injected Services.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Injected Services Summary

`TableModuleConfig` extends native `cc.Component` and acts as a pure configuration source. It does not inject external services, serving as a dependency for `SlotTableModule`, `SlotReelModule`, and `SlotTablePaylineModule`.
