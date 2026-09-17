---
id: "cc_slot_module:UIManagerModule:properties_and_state:runtime_state_variables"
title: "UIManagerModule Runtime State Variables"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 UIManagerModule Runtime State Variables

<!-- convention-summary-start -->
### UIManagerModule Runtime State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for UIManagerModule Runtime State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Runtime Variables

| Variable | Type | Initial | Purpose |
| :--- | :--- | :--- | :--- |
| `uiManagerData` | `eno.UIManagerData` | `null` | Observed UI data model. |
| `promotionDataModel` | `eno.PromotionData` | `null` | Observed promotion campaign state. |
| `isTrialMode` | `boolean` | `false` | Cached trial status flag. |
