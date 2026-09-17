---
id: "cc_slot_module:TrialModeManager:properties_and_state:inspector_properties"
title: "TrialModeManager Inspector Properties Specification"
category: "cc_slot_module"
tags: ["TrialModeManager", "trial_mode_manager", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ TrialModeManager Inspector Properties Specification

<!-- convention-summary-start -->
### TrialModeManager Inspector Properties Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TrialModeManager Inspector Properties Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `trialModeData` | `TrialModeData[]` | `[]` | Array of per-currency trial bet settings. |
| `useSelectionPanel` | `boolean` | `false` | Enables scenario selection modal. |
| `trialModePanel` | `cc.Node` | `null` | Container modal node. |
| `optionHolder` | `cc.Node` | `null` | Container node holding scenario buttons. |
