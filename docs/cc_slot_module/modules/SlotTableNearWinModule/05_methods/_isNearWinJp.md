---
id: "cc_slot_module:SlotTableNearWinModule:method:_isNearWinJp"
title: "SlotTableNearWinModule._isNearWinJp Method"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "methods", "_isNearWinJp"]
---

# 🚀 `SlotTableNearWinModule._isNearWinJp(): boolean`

<!-- convention-summary-start -->
### SlotTableNearWinModule._isNearWinJp Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableNearWinModule._isNearWinJp Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
private _isNearWinJp(): boolean
```

---

## 2. Algorithmic Steps

1. If `_isSkipEffect` is true, returns `false`.
2. Returns `true` if `_countJp >= startAtJackpotCount && _countJp < stopAtJackpotCount`.

---

## 3. Full Source Code

```typescript
_isNearWinJp(): boolean {
    if (this._isSkipEffect) {
        return false;
    }
    return this._countJp >= this.startAtJackpotCount && this._countJp < this.stopAtJackpotCount;
}
```
