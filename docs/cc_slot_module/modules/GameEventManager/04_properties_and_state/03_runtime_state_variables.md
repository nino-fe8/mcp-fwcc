---
id: "cc_slot_module:GameEventManager:properties:runtime_state_variables"
title: "GameEventManager Runtime State Variables"
category: "cc_slot_module"
tags: ["GameEventManager", "game_event_manager", "cc_slot_module", "properties", "runtime_state", "variables"]
---

# 💾 GameEventManager Runtime State Variables

<!-- convention-summary-start -->
### GameEventManager Runtime State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameEventManager Runtime State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Internal Variables Specification

| Variable Name | TypeScript Type | Default Value | Purpose |
| :--- | :--- | :--- | :--- |
| **`events`** | `Record<string, EventEntry[]>` | `{}` | Hash table mapping each event name to an array of `{ listener, context }` subscriptions. |
| **`_logger`** | `any` | `{ log, warn, error }` | Logger reference used to print styled dispatch messages (`Trigger event → Context`). |
| **`_logTag`** | `string` | `'[EventManager]'` | Prefix string attached to console log entries. |
