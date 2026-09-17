---
id: "cc_slot_module:SlotTableNearWinModule:method:initNearWinValue"
title: "SlotTableNearWinModule.initNearWinValue Method"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "methods", "initNearWinValue"]
---

# 🚀 `SlotTableNearWinModule.initNearWinValue(): void`

<!-- convention-summary-start -->
### SlotTableNearWinModule.initNearWinValue Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableNearWinModule.initNearWinValue Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
public initNearWinValue(): void
```

---

## 2. Trigger Source & Execution Lifecycle

Invoked during `onLoadExtend()`. Computes the starting X coordinate offset for the anticipation overlay based on table dimensions.

---

## 3. Algorithmic Steps

1. Extracts `TABLE_FORMAT` and `SYMBOL_WIDTH` from `this.config`.
2. Computes `_startX = -(TABLE_FORMAT.length / 2 - 0.5) * SYMBOL_WIDTH`.
3. Resets all counter variables (`_countScatter`, `_countBonus`, `_countJp`) to `0`.
4. Clears `_nearWinData` and `_nearWinSymbols`.

---

## 4. Full Source Code

```typescript
initNearWinValue(): void {
    const { TABLE_FORMAT, SYMBOL_WIDTH } = this.config;
    this._startX = -(TABLE_FORMAT.length / 2 - 0.5) * SYMBOL_WIDTH;
    this._nearWinSymbols = [];
    this._countScatter = 0;
    this._countBonus = 0;
    this._countJp = 0;
    this._nearWinData = [];
    this._nearWinAnim = null;
}
```
