---
id: "cc_slot_module:GameEventManager:recipes:index"
title: "GameEventManager Recipes Index"
category: "cc_slot_module"
tags: ["GameEventManager", "game_event_manager", "cc_slot_module", "recipes", "index", "cookbook"]
---

# 💡 GameEventManager Recipes Index

<!-- convention-summary-start -->
### GameEventManager Recipes Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameEventManager Recipes Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `./01_parallel_async_coordination.md`
- **Related Docs**: [`01_parallel_async_coordination`](./01_parallel_async_coordination.md)
<!-- convention-summary-end -->


## 1. Master Recipes Index

| Recipe Slug | Coordination Scenario | Description |
| :--- | :--- | :--- |
| **[`01_parallel_async_coordination`](./01_parallel_async_coordination.md)** | Multi-Module Async Win Presentation | Using `await this.eventManager.emit()` to synchronize UI coin roll, character Spine celebration, and sound playback in parallel. |
