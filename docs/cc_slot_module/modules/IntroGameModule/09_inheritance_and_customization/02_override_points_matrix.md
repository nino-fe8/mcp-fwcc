---
id: "cc_slot_module:IntroGameModule:inheritance:override_points_matrix"
title: "IntroGameModule Override Points & Extension Matrix"
category: "cc_slot_module"
tags: ["IntroGameModule", "intro_game_module", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧬 IntroGameModule Override Points & Extension Matrix

<!-- convention-summary-start -->
### IntroGameModule Override Points & Extension Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for IntroGameModule Override Points & Extension Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Extension Points Matrix

| Method | Super Required | Purpose |
| :--- | :--- | :--- |
| `init` | Optional | Custom initialization logic. |
| `joinGameSuccess` | Optional | Custom session reconnect parsing. |
| `onClickJoinGame` | Optional | Custom dismissal tweens. |
| `cacheHideIntroGame` | Optional | Custom persistence backends. |
