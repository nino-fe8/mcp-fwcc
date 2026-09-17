---
id: "cc_slot_module:JackpotWinModule:director_writer:pipeline_orchestration"
title: "JackpotWinModule Writer Pipeline Integration"
category: "cc_slot_module"
tags: ["JackpotWinModule", "jackpot_win_module", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 JackpotWinModule Writer Pipeline Integration

<!-- convention-summary-start -->
### JackpotWinModule Writer Pipeline Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotWinModule Writer Pipeline Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Writer Command Trigger

Dispatched upon jackpot payout resolution:
```typescript
script.push({
    command: "SHOW_JACKPOT_WIN",
    data: { jackpotType: "GRAND", jackpotValue: 50000000 }
});
```
`ScriptExecutor` dispatches `PLAY_CUTSCENE` targeting `CUTSCENE_TYPE_ENUM.JACKPOT_WIN`.
