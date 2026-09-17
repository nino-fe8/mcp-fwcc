---
id: "cc_slot_module:LoadingScreenModule:properties:runtime_state_variables"
title: "LoadingScreenModule Runtime State Variables"
category: "cc_slot_module"
tags: ["LoadingScreenModule", "loading_screen_module", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 LoadingScreenModule Runtime State Variables

<!-- convention-summary-start -->
### LoadingScreenModule Runtime State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for LoadingScreenModule Runtime State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Runtime State

| Field | Type | Default | Mutation Moment | Purpose |
| :--- | :--- | :---: | :--- | :--- |
| **`totalPercent`** | `number` | `0` | `preloadScene` callback | Actual downloaded asset ratio ($0.0 	o 1.0$) |
| **`updatedScene`** | `string` | `''` | `redirectSceneName()` | Resolved final scene name to load |
| **`isBackToLobby`** | `boolean` | `false` | `homeBtn` click | Prevents scene switch after exit request |
| **`usingLoadHowl`** | `boolean` | `false` | `redirectSceneName()` | Indicates active Howler audio registration |
| **`tweenFullProgress`** | `any` | `null` | `setProgressFull()` | Active `cc.tween` handle for 100% fill |
