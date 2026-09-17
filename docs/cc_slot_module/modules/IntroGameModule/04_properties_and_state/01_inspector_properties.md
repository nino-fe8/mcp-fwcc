---
id: "cc_slot_module:IntroGameModule:properties_and_state:inspector_properties"
title: "IntroGameModule Inspector Properties Specification"
category: "cc_slot_module"
tags: ["IntroGameModule", "intro_game_module", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ IntroGameModule Inspector Properties Specification

<!-- convention-summary-start -->
### IntroGameModule Inspector Properties Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for IntroGameModule Inspector Properties Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Inspector Schema

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `btnJoinGame` | `cc.Button` | `null` | Button triggering game entry and modal fade out. |
| `doNotShowNode` | `cc.Node` | `null` | Container holding the "Do not show again" checkbox toggle. |
| `progressBar` | `cc.Node` | `null` | Optional loading indicator node displayed before connection is ready. |
| `gameId` | `string` | `""` | Unique game identifier used for localStorage caching. |
