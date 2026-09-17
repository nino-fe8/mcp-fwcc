---
id: "cc_slot_module:BaseUIPopup:properties_and_state:runtime_state_variables"
title: "BaseUIPopup Runtime State Variables"
category: "cc_slot_module"
tags: ["BaseUIPopup", "base_ui_popup", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 BaseUIPopup Runtime State Variables

<!-- convention-summary-start -->
### BaseUIPopup Runtime State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseUIPopup Runtime State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Runtime State

| Variable | Type | Initial | Description |
| :--- | :--- | :--- | :--- |
| `popupBehavior` | `PopupBehavior` | `null` | Reference to animation behavior component. |
| `isClose` | `boolean` | `false` | Tracks whether the popup is in closed state. |
| `currentIsActive`| `boolean` | `false` | Tracks active toggle state to prevent redundant transitions. |
