---
id: "cc_slot_module:PaylineSymbolModule:gotchas:symbol_parent_mutation_memory_leak"
title: "Gotcha: Orphaned Symbol Nodes Across Spins"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "gotchas", "memory_leak", "reparenting"]
---

# 🛑 Gotcha: Orphaned Symbol Nodes Across Spins

<!-- convention-summary-start -->
### Gotcha: Orphaned Symbol Nodes Across Spins Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Orphaned Symbol Nodes Across Spins.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Symptom & Technical Defect

Duplicate ghost symbols render on the screen when a new spin begins, or `SlotSymbolManager` pool exhausts its node count.

---

## 2. Root Cause

When a player triggers Fast-To-Result (FTR) or quickly spins again, if `PAYLINE_CLEAR` is omitted from the reset pipeline, symbols that were reparented into `this.container` are never returned to `this.factory.returnSymbol(symbol)`.

---

## 3. Standard Code Fix

Ensure `NormalGameDirectorModule` / `FreeGameDirectorModule` dispatches `PAYLINE_CLEAR` inside `onResetTable()` / `beforeStartSpin()`:

```typescript
this.payLineEmitter.emit(PaylineEventTypes.PAYLINE_CLEAR);
```
