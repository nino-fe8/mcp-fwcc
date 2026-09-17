---
id: "cc_slot_module:SlotPaylineSchedule:properties_and_state:runtime_state_variables"
title: "SlotPaylineSchedule Internal Runtime State Variables"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 SlotPaylineSchedule Internal Runtime State Variables

<!-- convention-summary-start -->
### SlotPaylineSchedule Internal Runtime State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotPaylineSchedule Internal Runtime State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Runtime State Variables

| Variable | Type | Initial | Purpose |
| :--- | :--- | :--- | :--- |
| `payLines` | `any[]` | `[]` | Parsed list of win lines received in `setData()`. |
| `jackpotPayline` | `any` | `null` | Dedicated jackpot hit descriptor. |
| `tweenSchedule` | `any` | `null` | Active `cc.tween` sequence handle; stopped in `stopSchedule()`. |
| `timelineConfig` | `any` | `null` | Cached duration per payline cycle step. |
