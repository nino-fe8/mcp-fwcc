---
id: "cc_slot_module:SlotTableModule:method:onReelPreStopExtend"
title: "SlotTableModule.onReelPreStopExtend() Method Specification"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "method", "onReelPreStopExtend", "virtual_hook"]
---

# `SlotTableModule.onReelPreStopExtend(_reelIndex: number): void`

<!-- convention-summary-start -->
### SlotTableModule.onReelPreStopExtend() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableModule.onReelPreStopExtend() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
protected onReelPreStopExtend(_reelIndex: number): void
```

---

## 2. Detailed Algorithmic Execution Logic
Virtual hook invoked when a reel column begins its easing deceleration right before the final bounce. Used for column anticipation audio triggers.

---

## 3. Un-truncated Source Code Implementation
```typescript
protected onReelPreStopExtend(_reelIndex: number): void {
    // override this method to handle reel stop event, before reel easing
}
```
