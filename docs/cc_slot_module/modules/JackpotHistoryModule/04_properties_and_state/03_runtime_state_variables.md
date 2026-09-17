---
id: "cc_slot_module:JackpotHistoryModule:properties:runtime_state_variables"
title: "JackpotHistoryModule Runtime State Variables"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 JackpotHistoryModule Runtime State

<!-- convention-summary-start -->
### JackpotHistoryModule Runtime State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotHistoryModule Runtime State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Internal Variables

| Variable | Type | Purpose |
| :--- | :--- | :--- |
| `jackpotHistoryData` | `eno.JackpotHistoryData` | Cached model reference. |
| `currentIsActive` | `boolean` | Modal open state guard. |
