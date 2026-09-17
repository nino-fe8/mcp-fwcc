---
id: "cc_slot_module:GameModeDirectorModule:properties:inspector_properties"
title: "GameModeDirectorModule Inspector Properties"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "properties", "inspector", "gameMode", "moduleList"]
---

# 🎛️ GameModeDirectorModule Inspector Properties

<!-- convention-summary-start -->
### GameModeDirectorModule Inspector Properties Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule Inspector Properties.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Inspector Properties Reference Table

| Property Name | TypeScript Type | Default Value | Purpose & Usage |
| :--- | :--- | :--- | :--- |
| **`gameMode`** | `GAME_MODE_ENUM` | `NORMAL_GAME` (`1`) | Enum identifier marking whether this director governs Normal (`1`), Free (`2`), or Bonus (`4`) game mode. |
| **`moduleList`** | `cc.Node[]` | `[]` | Array of child/sibling module nodes injected with this director's private `GameModuleEvent` bus during `setupModules()`. |
