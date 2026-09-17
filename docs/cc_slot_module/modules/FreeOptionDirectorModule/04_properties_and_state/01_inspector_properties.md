---
id: "cc_slot_module:FreeOptionDirectorModule:properties:inspector_properties"
title: "FreeOptionDirectorModule Inspector Properties"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ FreeOptionDirectorModule Inspector Properties

<!-- convention-summary-start -->
### FreeOptionDirectorModule Inspector Properties Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FreeOptionDirectorModule Inspector Properties.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Inspector Properties Reference Table

| Property Name | TypeScript Type | Default Value | Role |
| :--- | :--- | :--- | :--- |
| **`options`** | `SlotCustomFreeGameOption[]` | `[]` | List of choice card items with `@property optionNode` and `@property optionId`. |
| **`countDownText`** | `cc.Label` | `null` | Target UI label for the countdown timer. |
| **`countdownTime`** | `number` | `15` | Configured duration in seconds for player deliberation. |
