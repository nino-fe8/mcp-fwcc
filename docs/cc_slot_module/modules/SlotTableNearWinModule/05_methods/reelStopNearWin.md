---
id: "cc_slot_module:SlotTableNearWinModule:method:reelStopNearWin"
title: "SlotTableNearWinModule.reelStopNearWin Method"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "methods", "reelStopNearWin"]
---

# 🚀 `SlotTableNearWinModule.reelStopNearWin(params): void`

<!-- convention-summary-start -->
### SlotTableNearWinModule.reelStopNearWin Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableNearWinModule.reelStopNearWin Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
public reelStopNearWin({ reelCount, context }: {
    reelCount: number;
    context: any;
}): void
```

---

## 2. Trigger Source & Execution Lifecycle

Triggered via `this.node.emit("REEL_STOP_NEARWIN", ...)` by `SlotTableModule` every time an individual reel stops.

---

## 3. Algorithmic Steps

1. If `reelCount >= context.reels.length`, all reels have stopped; calls `resetNearWin()`.
2. If `context.isFastToResult()` is true, aborts immediately without showing anticipation.
3. Otherwise, calls `_playNearWinEffect(reelCount)` to display anticipation on the next spinning column.

---

## 4. Full Source Code

```typescript
reelStopNearWin({ reelCount, context }): void {
    if (reelCount >= context.reels.length) {
        return this.resetNearWin();
    }
    if (context.isFastToResult()) {
        return;
    }
    this._playNearWinEffect(reelCount);
}
```
