---
id: "cc_slot_module:ExtraBetModule:director_writer:pipeline_orchestration"
title: "ExtraBetModule Pipeline & Backend Synchronization"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 ExtraBetModule Pipeline & Backend Synchronization

<!-- convention-summary-start -->
### ExtraBetModule Pipeline & Backend Synchronization Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for ExtraBetModule Pipeline & Backend Synchronization.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Event Orchestration

Dispatches events modifying feature wager multipliers:
```typescript
this.gameLogic.emit(GameLogicUIEvents.INCREASE_EXTRA_BET);
this.gameLogic.emit(GameLogicUIEvents.DECREASE_EXTRA_BET);
```
Server responds with adjusted paytable weights and updated `extraBetValue`.
