---
id: "cc_slot_module:AutoSpinPanel:properties:runtime_state_variables"
title: "AutoSpinPanel Runtime State"
category: "cc_slot_module"
tags: ["AutoSpinPanel", "autospinpanel", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 AutoSpinPanel Runtime State

<!-- convention-summary-start -->
### AutoSpinPanel Runtime State Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for AutoSpinPanel Runtime State.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. State Table

| Variable | Type | Purpose |
| :--- | :--- | :--- |
| `config` | `AutoSpinPanelConfig` | Component holding `AUTO_SPIN_NUMBERS` array (e.g. `[10, 20, 50, 100]`). |
| `currentSelectedIndex`| `number` | Currently selected round count index. |
| `autoSpinOption` | `Record` | Map of index to `AutoSpinNumber` components. |
