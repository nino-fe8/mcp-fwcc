---
id: "cc_slot_module:BetHistoryDetailModule:gotchas:01_node_pool_leak_on_repeated_reopen"
title: "NodePool Leak on Detail View Reopen"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "gotchas", "node_pool", "memory_leak"]
---

# ⚠️ NodePool Leak on Repeated Reopen

<!-- convention-summary-start -->
### NodePool Leak on Detail View Reopen Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for NodePool Leak on Detail View Reopen.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Defect & Root Cause

If `_clearScrollItem()` is not called during `_reset()`, existing `usingScrollItem` references are overwritten, abandoning active nodes in the scene graph and instantiating redundant prefabs.

---

## 2. Code Fix

Always execute `this._clearScrollItem()` inside `_reset()`:

```typescript
_clearScrollItem(): void {
    this.usingScrollItem.forEach((item) => {
        item.emit("RESET");
        this.scrollPool.put(item);
    });
    this.usingScrollItem = [];
}
```
