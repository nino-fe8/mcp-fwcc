---
id: "cc_slot_module:JackpotModule:properties_and_state:inspector_properties"
title: "JackpotModule Inspector Properties Specification"
category: "cc_slot_module"
tags: ["JackpotModule", "jackpot_module", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ JackpotModule Inspector Properties Specification

<!-- convention-summary-start -->
### JackpotModule Inspector Properties Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotModule Inspector Properties Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `jackpotItems` | `JackpotModuleItem[]` | `[]` | Array of jackpot tier item descriptors mapping `JACKPOT_TYPE_ENUM` to target labels. |
