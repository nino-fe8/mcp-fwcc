---
id: "cc_slot_module:IntroGameModule:director_writer:pipeline_orchestration"
title: "IntroGameModule Director Pipeline Orchestration"
category: "cc_slot_module"
tags: ["IntroGameModule", "intro_game_module", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 IntroGameModule Director Pipeline Orchestration

<!-- convention-summary-start -->
### IntroGameModule Director Pipeline Orchestration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for IntroGameModule Director Pipeline Orchestration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Lifecycle Gate Role

Acts as the visual gatekeeper between scene asset loading and gameplay initialization:
```text
GameInit / Scene Loaded
       │
       ▼
GameLogic emits JOIN_GAME_SUCCESS
       │
       ▼
IntroGameModule: Player confirms entry
       │
       ▼
IntroGameModule emits HIDE_INTRO_GAME
       │
       ▼
BaseGameDirector starts normal idle state
```
