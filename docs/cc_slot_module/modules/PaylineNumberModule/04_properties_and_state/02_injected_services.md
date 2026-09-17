---
id: "cc_slot_module:PaylineNumberModule:properties_and_state:injected_services"
title: "PaylineNumberModule Injected Context & Services"
category: "cc_slot_module"
tags: ["PaylineNumberModule", "payline_number_module", "cc_slot_module", "properties", "injected_services"]
---

# 💉 PaylineNumberModule Injected Context & Services

<!-- convention-summary-start -->
### PaylineNumberModule Injected Context & Services Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineNumberModule Injected Context & Services.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Context Injected via `init()`

Inherited from `BasePaylineComponent`:
- `payLineEmitter`: Event target coordinating payline triggers.
- `config`: Configuration reference.
- `moduleEvent`: Scoped mode event target.
- `eventManager`: Global event manager.
