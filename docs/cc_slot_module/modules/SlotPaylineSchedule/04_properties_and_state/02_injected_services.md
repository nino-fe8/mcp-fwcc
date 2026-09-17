---
id: "cc_slot_module:SlotPaylineSchedule:properties_and_state:injected_services"
title: "SlotPaylineSchedule Injected Context & Services"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "properties", "injected_services"]
---

# 💉 SlotPaylineSchedule Injected Context & Services

<!-- convention-summary-start -->
### SlotPaylineSchedule Injected Context & Services Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotPaylineSchedule Injected Context & Services.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Injected Services

Inherited from `BasePaylineComponent`:
- `payLineEmitter`: Dedicated local event target.
- `moduleEvent`: Scoped mode director event target.
- `eventManager`: Global async event manager.
- `config`: `PaylineConfig` providing `TIMELINE_CONFIG`.
