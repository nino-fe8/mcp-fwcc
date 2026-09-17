---
id: "cc_slot_module:IntroFreeGameModule:director_writer:pipeline_orchestration"
title: "IntroFreeGameModule Writer Pipeline Integration"
category: "cc_slot_module"
tags: ["IntroFreeGameModule", "intro_free_game_module", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 IntroFreeGameModule Writer Pipeline Integration

<!-- convention-summary-start -->
### IntroFreeGameModule Writer Pipeline Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for IntroFreeGameModule Writer Pipeline Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Writer Command Trigger

Dispatched when free game trigger condition is verified:
```typescript
script.push({
    command: "SHOW_INTRO_FREE_GAME",
    data: { freeSpinCount: 10, multiplier: 2 }
});
```
`ScriptExecutor` dispatches `PLAY_CUTSCENE` targeting `CUTSCENE_TYPE_ENUM.INTRO_FREE_GAME`.
