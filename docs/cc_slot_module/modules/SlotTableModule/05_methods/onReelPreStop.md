---
id: "cc_slot_module:SlotTableModule:method:onReelPreStop"
title: "SlotTableModule.onReelPreStop() Method Specification"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "method", "onReelPreStop"]
---

# `SlotTableModule.onReelPreStop(reelIndex: number): void`

<!-- convention-summary-start -->
### SlotTableModule.onReelPreStop() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableModule.onReelPreStop() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
protected onReelPreStop(reelIndex: number): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Emits reel stop sound event:
   `this.node.emit('REEL_STOP_SOUND', { reelIndex, context: this, matrix: this._matrix });`
2. Emits pre-stop near-win event:
   `this.node.emit('PRE_REEL_STOP_NEARWIN', { reelCount: reelIndex + 1, context: this });`
3. Calls virtual hook: `this.onReelPreStopExtend(reelIndex);`.

---

## 3. Un-truncated Source Code Implementation
```typescript
protected onReelPreStop(reelIndex: number): void {
    this.node.emit('REEL_STOP_SOUND', { reelIndex, context: this, matrix: this._matrix });
    this.node.emit('PRE_REEL_STOP_NEARWIN', { reelCount: reelIndex + 1, context: this });
    this.onReelPreStopExtend(reelIndex);
}
```
