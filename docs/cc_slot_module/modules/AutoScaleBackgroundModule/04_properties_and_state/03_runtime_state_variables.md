---
id: "cc_slot_module:AutoScaleBackgroundModule:properties:runtime_state_variables"
title: "AutoScaleBackgroundModule Runtime State Variables"
category: "cc_slot_module"
tags: ["AutoScaleBackgroundModule", "auto_scale_background_module", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 AutoScaleBackgroundModule Runtime State Variables

<!-- convention-summary-start -->
### AutoScaleBackgroundModule Runtime State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for AutoScaleBackgroundModule Runtime State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


| Field | Type | Purpose |
| :--- | :--- | :--- |
| **`_thisOnResized`** | `Function` | Bound event handler reference used for safe unbinding in `onDestroy()` |
