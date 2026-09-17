---
id: "cc_slot_module:GameInit:events:scoped_module_events"
title: "GameInit Scoped Module Events"
category: "cc_slot_module"
tags: ["GameInit", "gameinit", "cc_slot_module", "events", "scoped_events", "moduleEvent"]
---

# 📡 GameInit Scoped Module Events

<!-- convention-summary-start -->
### GameInit Scoped Module Events Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameInit Scoped Module Events.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Overview

`GameInit` is a bootstrap container component mounted at the scene root level and does not participate in mode-scoped `moduleEvent` buses.

It delegates mode-scoped coordination to `GameModeDirectorModule` instances in child nodes (`Canvas/Director/GameMode`).
