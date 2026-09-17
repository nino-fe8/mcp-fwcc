---
id: "cc_slot_module:SlotTableNearWinModule:method:_isNearWinBonus"
title: "SlotTableNearWinModule._isNearWinBonus Method"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "methods", "_isNearWinBonus"]
---

# 🚀 `SlotTableNearWinModule._isNearWinBonus(): boolean`

<!-- convention-summary-start -->
### SlotTableNearWinModule._isNearWinBonus Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableNearWinModule._isNearWinBonus Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
private _isNearWinBonus(): boolean
```

---

## 2. Algorithmic Steps

1. If `_isSkipEffect` is true, returns `false`.
2. Returns `true` if `_countBonus >= startAtBonusCount && _countBonus < stopAtBonusCount`.

---

## 3. Full Source Code

```typescript
_isNearWinBonus(): boolean {
    if (this._isSkipEffect) {
        return false;
    }
    return this._countBonus >= this.startAtBonusCount && this._countBonus < this.stopAtBonusCount;
}
```
