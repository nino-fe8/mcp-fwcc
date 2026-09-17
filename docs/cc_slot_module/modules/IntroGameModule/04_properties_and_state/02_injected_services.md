---
id: "cc_slot_module:IntroGameModule:properties_and_state:injected_services"
title: "IntroGameModule Injected Services"
category: "cc_slot_module"
tags: ["IntroGameModule", "intro_game_module", "cc_slot_module", "properties", "injected_services"]
---

# 💉 IntroGameModule Injected Services

<!-- convention-summary-start -->
### IntroGameModule Injected Services Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for IntroGameModule Injected Services.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Injected Dependencies

| Service | Type | Injection Token | Purpose |
| :--- | :--- | :--- | :--- |
| `gameConfig` | `GameConfig` | `@inject(GameConfig)` | Obtains master `GAME_ID` if not explicitly specified. |
