---
id: "cc_slot_module:TrialModeManager:properties_and_state:runtime_state_variables"
title: "TrialModeManager Runtime State Variables"
category: "cc_slot_module"
tags: ["TrialModeManager", "trial_mode_manager", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 TrialModeManager Runtime State Variables

<!-- convention-summary-start -->
### TrialModeManager Runtime State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TrialModeManager Runtime State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Runtime State

| Variable | Type | Initial | Description |
| :--- | :--- | :--- | :--- |
| `trialModel` | `eno.TrialModeData` | `null` | Observed reactive trial model. |
| `uiManagerData`| `eno.UIManagerData`| `null`| Observed UI active state. |
