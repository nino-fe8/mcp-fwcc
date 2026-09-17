---
id: "cc_slot_module:SlotTableNearWinModule:method:_setDataNearWin"
title: "SlotTableNearWinModule._setDataNearWin Method"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "methods", "_setDataNearWin"]
---

# 🚀 `SlotTableNearWinModule._setDataNearWin(col): void`

<!-- convention-summary-start -->
### SlotTableNearWinModule._setDataNearWin Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableNearWinModule._setDataNearWin Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
private _setDataNearWin(col: number): void
```

---

## 2. Algorithmic Steps

1. Evaluates `_isNearWinBonus()`, `_isNearWinScatter()`, and `_isNearWinJp()`.
2. Computes aggregate `isNearWin = isNearWinBonus || isNearWinScatter || isNearWinJp`.
3. Assigns `{ isNearWin, isNearWinBonus, isNearWinScatter, isNearWinJp }` to `this._nearWinData[col]`.

---

## 3. Full Source Code

```typescript
_setDataNearWin(col: number): void {
    const isNearWinBonus = this._isNearWinBonus();
    const isNearWinScatter = this._isNearWinScatter();
    const isNearWinJp = this._isNearWinJp();
    const isNearWin = isNearWinBonus || isNearWinScatter || isNearWinJp;
    this._nearWinData[col] = { isNearWin, isNearWinBonus, isNearWinScatter, isNearWinJp };
}
```
