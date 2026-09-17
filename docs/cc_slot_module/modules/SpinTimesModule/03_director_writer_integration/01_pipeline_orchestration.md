---
id: "cc_slot_module:SpinTimesModule:director_writer:pipeline_orchestration"
title: "SpinTimesModule Pipeline & Director Integration"
category: "cc_slot_module"
tags: ["SpinTimesModule", "spin_times_module", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 SpinTimesModule Pipeline & Director Integration

<!-- convention-summary-start -->
### SpinTimesModule Pipeline & Director Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SpinTimesModule Pipeline & Director Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Event Orchestration

Registers with the Director during startup:
```typescript
this.eventManager.emit(GameUIEvents.SPIN_TIMES.SET_UP_SPIN_TIMES, {
    gameMode: this.gameMode,
    node: this.node
});
```
`FreeGameDirectorModule` dispatches `UPDATE_SPINTIMES` as each free spin concludes to decrement the displayed count.
