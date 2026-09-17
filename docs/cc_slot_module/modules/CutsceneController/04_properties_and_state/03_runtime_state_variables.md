---
id: "cc_slot_module:CutsceneController:properties_and_state:runtime_state_variables"
title: "CutsceneController Runtime State Variables"
category: "cc_slot_module"
tags: ["CutsceneController", "cutscene_controller", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 CutsceneController Runtime State Variables

<!-- convention-summary-start -->
### CutsceneController Runtime State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CutsceneController Runtime State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Internal State Map

| Field Name | Type | Initial | Purpose |
| :--- | :--- | :--- | :--- |
| `cutScenes` | `Map<number, BaseCutscene>` | `new Map()` | Map associating `CUTSCENE_TYPE_ENUM` values with instances. |
