---
id: "cc_slot_module:FreeGameDirectorModule:properties:inspector_properties"
title: "FreeGameDirectorModule Inspector Properties"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ FreeGameDirectorModule Inspector Properties

<!-- convention-summary-start -->
### FreeGameDirectorModule Inspector Properties Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FreeGameDirectorModule Inspector Properties.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Inspector Properties Reference Table

| Property Name | TypeScript Type | Default Value | Role |
| :--- | :--- | :--- | :--- |
| **`gameMode`** | `GAME_MODE_ENUM` | `FREE_GAME` | Identifies mode constant. |
| **`moduleList`** | `cc.Node[]` | `[]` | List of child module nodes initialized with scoped bus. |
