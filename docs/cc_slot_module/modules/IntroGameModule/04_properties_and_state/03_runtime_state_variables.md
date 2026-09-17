---
id: "cc_slot_module:IntroGameModule:properties_and_state:runtime_state_variables"
title: "IntroGameModule Runtime State Variables"
category: "cc_slot_module"
tags: ["IntroGameModule", "intro_game_module", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 IntroGameModule Runtime State Variables

<!-- convention-summary-start -->
### IntroGameModule Runtime State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for IntroGameModule Runtime State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Runtime State Variables

| Variable | Type | Initial | Purpose |
| :--- | :--- | :--- | :--- |
| `_gameId` | `string` | `""` | Resolved game identifier string. |
| `_isHideIntroGame`| `boolean` | `false` | Cached flag from localStorage determining if intro is disabled. |
