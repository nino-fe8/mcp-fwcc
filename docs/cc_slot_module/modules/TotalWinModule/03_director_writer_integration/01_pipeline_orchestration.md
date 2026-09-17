---
id: "cc_slot_module:TotalWinModule:director_writer:pipeline_orchestration"
title: "TotalWinModule Writer Pipeline Integration"
category: "cc_slot_module"
tags: ["TotalWinModule", "total_win_module", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 TotalWinModule Writer Pipeline Integration

<!-- convention-summary-start -->
### TotalWinModule Writer Pipeline Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TotalWinModule Writer Pipeline Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Writer Command Trigger

Dispatched at the conclusion of free spins or mini-games:
```typescript
script.push({
    command: "SHOW_TOTAL_WIN",
    data: { winAmount: accumulatedFreeSpinWin }
});
```
`ScriptExecutor` dispatches `PLAY_CUTSCENE` targeting `CUTSCENE_TYPE_ENUM.TOTAL_WIN`.
