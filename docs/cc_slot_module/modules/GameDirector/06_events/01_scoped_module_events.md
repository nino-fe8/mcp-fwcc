---
id: "cc_slot_module:GameDirector:events:scoped_module_events"
title: "GameDirector Scoped Module Events"
category: "cc_slot_module"
tags: ["GameDirector", "game_director", "cc_slot_module", "events", "scoped_events"]
---

# 📡 GameDirector Scoped Module Events

<!-- convention-summary-start -->
### GameDirector Scoped Module Events Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameDirector Scoped Module Events.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Node Scope Communication

`GameDirector` sits at the root of `Canvas/Director` and coordinates sibling singletons (`GameInit`, `GameConfig`, `GameDataStore`, `SlotSoundPlayerModule`). It does not emit scoped node events directly, but coordinates mode child nodes via `BaseGameMode` lifecycle methods (`init()`, `enter()`, `exit()`, `onBackToGameMode()`).
