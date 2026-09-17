---
id: "cc_slot_module:NormalGameDirectorModule:customization:override_points_matrix"
title: "NormalGameDirectorModule Extension Points Matrix"
category: "cc_slot_module"
tags: ["NormalGameDirectorModule", "normal_game_director", "cc_slot_module", "customization", "override_matrix", "hooks"]
---

# 📊 NormalGameDirectorModule Extension Points Matrix

<!-- convention-summary-start -->
### NormalGameDirectorModule Extension Points Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for NormalGameDirectorModule Extension Points Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Extension Points Matrix

| Method Name | Base Implementation | Safe to Override? | Required `super` Call | Customization Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **`onJoinGameSuccess(data)`** | Emits `JOIN_GAME_SUCCESS` | `YES` | `MANDATORY` | Hook custom user level checks or welcome banners. |
| **`_normalGameRestart()`** | Resolves immediately | `YES` | None (Virtual) | Reset custom round flags and local multipliers. |
| **`onBackToGameMode(fromMode)`** | Plays BGM | `YES` | `MANDATORY` | Reset streak counters and progressive multipliers. |
