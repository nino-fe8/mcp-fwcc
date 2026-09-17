---
id: "cc_slot_module:JackpotHistoryModule:gotchas:01_deep_clone_record_mutation_gotcha"
title: "Deep Clone Record Mutation Gotcha"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "gotchas", "deep_clone"]
---

# ⚠️ Deep Clone Record Mutation in JackpotHistoryModule

<!-- convention-summary-start -->
### Deep Clone Record Mutation Gotcha Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Deep Clone Record Mutation Gotcha.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Root Cause & Solution

Always clone data via `JSON.parse(JSON.stringify(data))` before emitting `UPDATE_DATA` to child table components to prevent child views from mutating the model's raw cache:

```typescript
onShowRecordView(data: any): void {
    if (data === null) {
        this.recordView.emit("CLEAR_DATA");
        return;
    }
    this.recordView.active = true;
    const originalData = JSON.parse(JSON.stringify(data));
    this.recordView.emit('UPDATE_DATA', originalData, this.itemPerPage);
}
```
