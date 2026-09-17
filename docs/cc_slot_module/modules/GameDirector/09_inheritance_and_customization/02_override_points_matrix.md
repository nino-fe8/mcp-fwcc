---
id: "cc_slot_module:GameDirector:customization:override_points_matrix"
title: "GameDirector Extension Points Matrix"
category: "cc_slot_module"
tags: ["GameDirector", "game_director", "cc_slot_module", "customization", "override_matrix", "hooks"]
---

# 📊 GameDirector Extension Points Matrix

<!-- convention-summary-start -->
### GameDirector Extension Points Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameDirector Extension Points Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Extension Points Matrix

| Method Name | Base Implementation | Safe to Override? | Required `super` Call | Customization Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **`onJoinGameSuccess(data)`** | Records `bigWinConfig` & sets flag | `EXTEND_ONLY` | `MANDATORY` | Broadcast global lobby balance and VIP levels. |
| **`onSwitchGameMode(mode)`** | Pushes to stack, activates node, calls `enter()` | `EXTEND_ONLY` | `MANDATORY` | Add global screen cross-dissolves during transitions. |
| **`onExitGameMode()`** | Pops stack, activates prior node, calls `onBackToGameMode` | `EXTEND_ONLY` | `MANDATORY` | Trigger global celebratory confetti after bonus rounds. |
| **`resumeNormalGameMode()`** | Clears stack & switches to Normal Game | `EXTEND_ONLY` | `MANDATORY` | Clean up trial session overlays during real mode switch. |
