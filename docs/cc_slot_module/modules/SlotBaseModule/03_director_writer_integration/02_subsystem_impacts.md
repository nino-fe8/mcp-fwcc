---
id: "cc_slot_module:SlotBaseModule:director_writer:subsystem_impacts"
title: "SlotBaseModule Cross-Subsystem Impacts"
category: "cc_slot_module"
tags: ["SlotBaseModule", "slot_base_module", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 SlotBaseModule Cross-Subsystem Impacts

<!-- convention-summary-start -->
### SlotBaseModule Cross-Subsystem Impacts Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotBaseModule Cross-Subsystem Impacts.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subsystem Influences

| Subsystem | Impact |
| :--- | :--- |
| **All Modules & Systems** | Every subsystem inherits `SlotBaseModule` to receive DI services. |
| **GameModeDirectorModule** | Calls `setupModule(moduleEvent, gameMode)` on all registered table & UI modules. |
| **GameLogic** | Dispatches reset signals and provides reactive data models. |
