---
id: "cc_slot_module:BetModule:director_writer:pipeline_orchestration"
title: "BetModule Pipeline & Event Integration"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 BetModule Pipeline & Event Integration

<!-- convention-summary-start -->
### BetModule Pipeline & Event Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetModule Pipeline & Event Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Event Orchestration

Dispatches wager modification events to `GameLogic`:
```typescript
this.gameLogic.emit(GameLogicUIEvents.INCREASE_BET);
this.gameLogic.emit(GameLogicUIEvents.DECREASE_BET);
```
`GameLogic` validates player funds, adjusts internal bet indices, and publishes updated `eno.BetData` state, which automatically triggers reactive UI updates on `BetModule`.
