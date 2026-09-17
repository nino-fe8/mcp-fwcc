---
id: "cc_slot_module:SlotTableNearWinModule:method:resetNearWin"
title: "SlotTableNearWinModule.resetNearWin Method"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "methods", "resetNearWin"]
---

# 🚀 `SlotTableNearWinModule.resetNearWin(): void`

<!-- convention-summary-start -->
### SlotTableNearWinModule.resetNearWin Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableNearWinModule.resetNearWin Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
public resetNearWin(): void
```

---

## 2. Trigger Source & Execution Lifecycle

Triggered via `this.node.emit("RESET_NEARWIN")` by `SlotTableModule` or when all reels finish stopping.

---

## 3. Algorithmic Steps

1. Resets counters `_countScatter`, `_countBonus`, `_countJp` to 0.
2. Clears `_nearWinData.length = 0`.
3. Calls `_stopNearWinEffect()` to hide and halt overlay animation.
4. Calls `_stopSoundNearWin()` to stop tension sound effect.

---

## 4. Full Source Code

```typescript
resetNearWin(): void {
    this._countScatter = 0;
    this._countBonus = 0;
    this._countJp = 0;
    this._nearWinData.length = 0;
    this._stopNearWinEffect();
    this._stopSoundNearWin();
}
```
