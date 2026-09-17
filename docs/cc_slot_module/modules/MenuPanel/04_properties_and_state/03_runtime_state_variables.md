---
id: "cc_slot_module:MenuPanel:properties:runtime_state_variables"
title: "MenuPanel Runtime State"
category: "cc_slot_module"
tags: ["MenuPanel", "menupanel", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 MenuPanel Runtime State

<!-- convention-summary-start -->
### MenuPanel Runtime State Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MenuPanel Runtime State.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. State Table

| Variable | Type | Purpose |
| :--- | :--- | :--- |
| `initialized` | `boolean` | Guards against click audio on startup. |
| `gameSettingData` | `any` | `GameSettingData` reference. |
| `uiManagerData` | `any` | `UIManagerData` reference. |
