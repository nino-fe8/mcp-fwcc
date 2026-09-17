---
id: "cc_slot_module:BetHistoryModule:gotchas:01_missing_observer_release_leak"
title: "BetHistoryModule Observer Release Leak"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "gotchas", "observer_leak", "memory_leak"]
---

# ⚠️ Observer Release Leak in BetHistoryModule

<!-- convention-summary-start -->
### BetHistoryModule Observer Release Leak Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryModule Observer Release Leak.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Symptom & Defect

When switching scenes or reloading the game canvas, subsequent history opens trigger multiple duplicate update callbacks, leading to repeated event dispatches and sluggish rendering.

---

## 2. Root Cause

`observer.watch()` registers closures inside the persistent `BetHistoryData` store. If `this.observer.releaseAll(this.modelData, this)` is not executed in `onDestroy()`, orphaned references to the destroyed node remain active.

---

## 3. Code Fix

```typescript
onDestroy(): void {
    if (this.modelData) {
        this.observer.releaseAll(this.modelData, this);
    }
}
```
