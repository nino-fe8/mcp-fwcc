---
id: "cc_slot_module:CascadeModuleConfig:properties_and_state:injected_services"
title: "CascadeModuleConfig Injected Services"
category: "cc_slot_module"
tags: ["CascadeModuleConfig", "cascade_module_config", "cc_slot_module", "properties", "injected_services"]
---

# 💉 CascadeModuleConfig Injected Services

<!-- convention-summary-start -->
### CascadeModuleConfig Injected Services Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CascadeModuleConfig Injected Services.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Direct Component Association

`CascadeModuleConfig` extends `cc.Component` without IoC dependencies; it is accessed directly via `this.getComponent(CascadeModuleConfig)`.
