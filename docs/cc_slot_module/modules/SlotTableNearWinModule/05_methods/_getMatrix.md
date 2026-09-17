---
id: "cc_slot_module:SlotTableNearWinModule:method:_getMatrix"
title: "SlotTableNearWinModule._getMatrix Method"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "methods", "_getMatrix"]
---

# 🚀 `SlotTableNearWinModule._getMatrix(data): string[][]`

<!-- convention-summary-start -->
### SlotTableNearWinModule._getMatrix Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableNearWinModule._getMatrix Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
private _getMatrix(data: string[][]): string[][]
```

---

## 2. Algorithmic Steps

Performs a shallow spread copy of the 2D string matrix to prevent inadvertent in-place mutation.

---

## 3. Full Source Code

```typescript
_getMatrix(data: string[][]): string[][] {
    return [...data];
}
```
