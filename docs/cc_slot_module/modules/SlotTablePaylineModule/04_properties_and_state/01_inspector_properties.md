---
id: "cc_slot_module:SlotTablePaylineModule:properties:inspector_properties"
title: "SlotTablePaylineModule Inspector Properties"
category: "cc_slot_module"
tags: ["SlotTablePaylineModule", "slot_table_payline_module", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ SlotTablePaylineModule Inspector Properties

<!-- convention-summary-start -->
### SlotTablePaylineModule Inspector Properties Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTablePaylineModule Inspector Properties.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema

| Property | Type | Default | When Set | Where Read | Impact If Desynced |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `paylineComponents` | `BasePaylineComponent[]` | `[]` | Cocos Editor or `init()` auto-discovery | `init()` | If omitted, uses `getComponentsInChildren(BasePaylineComponent)`. |
