---
id: "cc_slot_module:WinAmountModule:methods:onLoadExtend"
title: "WinAmountModule.onLoadExtend Method"
category: "cc_slot_module"
tags: ["WinAmountModule", "win_amount_module", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `WinAmountModule.onLoadExtend()`

<!-- convention-summary-start -->
### WinAmountModule.onLoadExtend Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinAmountModule.onLoadExtend Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Binds event listeners for `UPDATE_WIN_AMOUNT`, `FAST_UPDATE_WIN_AMOUNT`, `CLEAR_WIN_AMOUNT`, `FADE_OUT_NUMBER`, and `SYNC_WIN_AMOUNT`.

```typescript
public onLoadExtend(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
    this.eventManager.on(GameUIEvents.WIN_AMOUNT.UPDATE_WIN_AMOUNT, this.updateWinAmount, this);
    this.eventManager.on(GameUIEvents.WIN_AMOUNT.FAST_UPDATE_WIN_AMOUNT, this.fastUpdateWinAmount, this);
    this.eventManager.on(GameUIEvents.WIN_AMOUNT.CLEAR_WIN_AMOUNT, this.clearWinAmount, this);
    this.eventManager.on(GameUIEvents.WIN_AMOUNT.FADE_OUT_NUMBER, this.fadeOutNumber, this);
    this.eventManager.on(GameUIEvents.WIN_AMOUNT.SYNC_WIN_AMOUNT, this.syncWinAmount, this);
    this.labelWinAmount.string = "";
}
```
