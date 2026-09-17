---
id: "cc_slot_module:SlotTableModule:method:onReelStop"
title: "SlotTableModule.onReelStop() Method Specification"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "method", "onReelStop"]
---

# `SlotTableModule.onReelStop(reelIndex: number): void`

<!-- convention-summary-start -->
### SlotTableModule.onReelStop() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableModule.onReelStop() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
protected onReelStop(reelIndex: number): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Calls virtual hook `this.onReelStopExtend(reelIndex)`.
2. Emits scoped module event:
   `this.moduleEvent.emit(TableModuleEvents.REEL_STOPPED, this.reelCount, this.reels[this.reelCount].getResultSymbols())`.
3. Increments stopped column counter: `this.reelCount++`.
4. Emits near-win event: `this.node.emit('REEL_STOP_NEARWIN', { reelCount: this.reelCount, context: this })`.
5. Checks if all columns finished: `if (this.reelCount >= this.reels.length)`:
   * Sets state: `this.onChangeState(TableSpinState.STOPPED)`.
   * Invokes and clears completion callback: `this._tableStopCB && this._tableStopCB(); this._tableStopCB = null;`.

---

## 3. Un-truncated Source Code Implementation
```typescript
protected onReelStop(reelIndex: number): void {
    this.onReelStopExtend(reelIndex);
    if (this.moduleEvent) {
        this.moduleEvent.emit(TableModuleEvents.REEL_STOPPED, this.reelCount, this.reels[this.reelCount].getResultSymbols());
    }
    this.reelCount++;
    this.node.emit('REEL_STOP_NEARWIN', { reelCount: this.reelCount, context: this });
    if (this.reelCount >= this.reels.length) {
        this.onChangeState(TableSpinState.STOPPED);
        this._tableStopCB && this._tableStopCB();
        this._tableStopCB = null;
    }
}
```
