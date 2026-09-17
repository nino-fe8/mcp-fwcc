---
id: "cc_slot_module:BaseCutscene:properties_and_state:runtime_state_variables"
title: "BaseCutscene Runtime State Variables"
category: "cc_slot_module"
tags: ["BaseCutscene", "base_cutscene", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 BaseCutscene Runtime State Variables

<!-- convention-summary-start -->
### BaseCutscene Runtime State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseCutscene Runtime State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Runtime Variables

| Variable | Type | Initial | Purpose |
| :--- | :--- | :--- | :--- |
| `content` | `any` | `undefined` | Payload passed into `play(content)`. |
| `callback` | `Function` | `null` | Completion callback resolved upon `exit()`. |
| `fullDisplay`| `boolean` | `true` | When true, emits `SHOW_FULL_DISPLAY_CUTSCENE` to block UI touches. |
