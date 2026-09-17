---
id: "cc_slot_module:BaseGameDirector:properties:inspector_properties"
title: "BaseGameDirector Inspector Properties"
category: "cc_slot_module"
tags: ["BaseGameDirector", "base_game_director", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ BaseGameDirector Inspector Properties

<!-- convention-summary-start -->
### BaseGameDirector Inspector Properties Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseGameDirector Inspector Properties.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Inspector Properties Schema

`BaseGameDirector` is an abstract base class and defines no raw serialized `@property` fields by default. Specialized subclasses (such as `NormalGameDirectorModule` and `FreeGameDirectorModule`) declare mode-specific nodes (e.g. background sprite nodes, transition spine references).
