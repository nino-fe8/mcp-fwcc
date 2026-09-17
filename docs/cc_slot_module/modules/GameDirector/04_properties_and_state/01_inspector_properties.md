---
id: "cc_slot_module:GameDirector:properties:inspector_properties"
title: "GameDirector Inspector Properties"
category: "cc_slot_module"
tags: ["GameDirector", "game_director", "cc_slot_module", "properties", "inspector", "gameModes"]
---

# 🎛️ GameDirector Inspector Properties

<!-- convention-summary-start -->
### GameDirector Inspector Properties Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameDirector Inspector Properties.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Inspector Properties Reference Table

| Property Name | TypeScript Type | Default Value | Purpose |
| :--- | :--- | :--- | :--- |
| **`gameModes`** | `GameModeType[]` | `[]` | Array mapping `type` (`GAME_MODE_ENUM`) to `rootNode` (`cc.Node`) for every supported game mode. |
