---
id: "cc_slot_module:GameDirector:director_writer:pipeline_orchestration"
title: "GameDirector Mode Stack & Event Pipeline Orchestration"
category: "cc_slot_module"
tags: ["GameDirector", "game_director", "cc_slot_module", "director_writer", "pipeline", "orchestration"]
---

# 🎼 GameDirector Mode Stack & Event Pipeline Orchestration

<!-- convention-summary-start -->
### GameDirector Mode Stack & Event Pipeline Orchestration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameDirector Mode Stack & Event Pipeline Orchestration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Mode Stack Orchestration Mechanics

`GameDirector` enforces a strict LIFO stack (`currentModes: GameModeType[]`):
1. **Pushing a Mode**: When `SWITCH_GAME_MODE` is caught, `newMode` is pushed onto the stack. The prior mode's root node is hidden (`active = false`), and `newMode.rootNode.active = true` triggers its `enter()` lifecycle.
2. **Popping a Mode**: When `EXIT_GAME_MODE` is caught, the active mode is popped and its `exit()` method called. The underlying mode node is reactivated and notified via `onBackToGameMode(fromMode)`.
3. **Emergency Reset**: `resumeNormalGameMode()` purges the stack entirely and resets to `NORMAL_GAME`.
