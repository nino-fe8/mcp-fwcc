---
id: "cc_slot_module:NormalGameDirectorModule:properties:inspector_properties"
title: "NormalGameDirectorModule Inspector Properties"
category: "cc_slot_module"
tags: ["NormalGameDirectorModule", "normal_game_director", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ NormalGameDirectorModule Inspector Properties

<!-- convention-summary-start -->
### NormalGameDirectorModule Inspector Properties Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for NormalGameDirectorModule Inspector Properties.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Inspector Properties Reference Table

Inherited from `GameModeDirectorModule`:

| Property Name | TypeScript Type | Default Value | Role |
| :--- | :--- | :--- | :--- |
| **`gameMode`** | `GAME_MODE_ENUM` | `NORMAL_GAME` (`1`) | Identifies the Base Game mode. |
| **`moduleList`** | `cc.Node[]` | `[]` | Child visual nodes receiving scoped `GameModuleEvent` broadcasts. |
| **`canSkipResult`** | `boolean` | `true` | Enables fast-forwarding line animations when player touches screen. |
