---
id: "cc_slot_module:SlotTablePaylineData:gotchas:registered_keys_desync_missing_paylines"
title: "Gotcha: Missing registeredKeys Cause Empty Paylines"
category: "cc_slot_module"
tags: ["SlotTablePaylineData", "slot_table_payline_data", "cc_slot_module", "gotchas", "registeredKeys", "desync"]
---

# 🛑 Gotcha: Missing registeredKeys Cause Empty Paylines

<!-- convention-summary-start -->
### Gotcha: Missing registeredKeys Cause Empty Paylines Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Missing registeredKeys Cause Empty Paylines.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Symptom & Technical Defect

Backend socket returns valid win lines in `playSession.payLines`, but `SlotTablePaylineData.getPayLines()` returns `[]` and no win lines are displayed.

---

## 2. Root Cause

If a subclass overrides `registeredKeys` array without spreading or retaining the default base keys (`payLines`, `normalGamePayLines`, `freeGamePayLines`, `respinGamePayLines`, `matrix`), `GameDataStore.updateDataModules()` skips copying those fields onto the data instance.

---

## 3. Standard Code Fix

Always spread `super.registeredKeys` or include all target payline keys when customizing:

```typescript
@ccclass
export class CustomPaylineData extends SlotTablePaylineData {
    registeredKeys = [
        ...new SlotTablePaylineData().registeredKeys,
        "bonusGamePayLines",
        "customFeatureMatrix"
    ];
}
```
