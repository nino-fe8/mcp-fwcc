---
id: "cc_slot_module:SlotTablePaylineModule:gotchas:missing_module_event_init_crash"
title: "Gotcha: Missing moduleEvent During Initialization"
category: "cc_slot_module"
tags: ["SlotTablePaylineModule", "slot_table_payline_module", "cc_slot_module", "gotchas", "moduleEvent", "init_crash"]
---

# 🛑 Gotcha: Missing moduleEvent During Initialization

<!-- convention-summary-start -->
### Gotcha: Missing moduleEvent During Initialization Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Missing moduleEvent During Initialization.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Symptom & Technical Defect

Console outputs `[SlotTablePaylineModule] moduleEvent is not set` and win lines never animate or highlight upon reel stop.

---

## 2. Root Cause

In `SlotTablePaylineModule.init()`:
```typescript
if (!this.moduleEvent) {
    error("[SlotTablePaylineModule] moduleEvent is not set");
    return;
}
```
If `SlotTablePaylineModule` was added to the scene hierarchy outside of a `GameMode` node (or before `GameModeDirectorModule.setupModule()` injected `moduleEvent`), `init()` aborts early, leaving `payLineEmitter` uninstantiated.

---

## 3. Standard Code Fix

Ensure `SlotTablePaylineModule` is registered inside the mode director's `moduleList` or initialized after `setupModule`:

```typescript
// Inside GameModeDirectorModule:
setupModule(moduleEvent: GameModuleEvent, gameMode: string): void {
    super.setupModule(moduleEvent, gameMode);
    // payline module receives moduleEvent here
}
```
