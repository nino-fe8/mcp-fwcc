---
id: "cc_slot_module:SettingPanel:properties:runtime_state_variables"
title: "SettingPanel Runtime State"
category: "cc_slot_module"
tags: ["SettingPanel", "settingpanel", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 SettingPanel Runtime State

<!-- convention-summary-start -->
### SettingPanel Runtime State Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SettingPanel Runtime State.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. State Table

| Variable | Type | Default | Purpose |
| :--- | :--- | :--- | :--- |
| `initialized` | `boolean` | `false` | Workaround flag preventing unwanted audio clicks during toggle initialization. |
| `gameSettingData` | `any` | `null` | Cached reference to `GameSettingData`. |
| `uiManagerData` | `any` | `null` | Cached reference to `UIManagerData`. |
