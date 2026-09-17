---
id: "cc_slot_module:PaylineNumberModule:properties_and_state:runtime_state_variables"
title: "PaylineNumberModule Internal Runtime State Variables"
category: "cc_slot_module"
tags: ["PaylineNumberModule", "payline_number_module", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 PaylineNumberModule Internal Runtime State Variables

<!-- convention-summary-start -->
### PaylineNumberModule Internal Runtime State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineNumberModule Internal Runtime State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Runtime State Variables

| Variable | Type | Initial Value | Purpose |
| :--- | :--- | :--- | :--- |
| `numbers` | `PaylineNumberItem[]` | `[]` | Flat list of all discovered number badge components. |
| `payLines` | `PayLineInfo[]` | `[]` | Parsed list of winning lines received in `setupPaylines()`. |
| `mapNumberToItem` | `Map<string, PaylineNumberItem[]>` | `new Map()` | Fast lookup mapping `paylineID` to one or more gutter badge components. |
