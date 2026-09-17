---
id: "cc_slot_module:SlotTableModule:method:onReelStopExtend"
title: "SlotTableModule.onReelStopExtend() Method Specification"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "method", "onReelStopExtend", "virtual_hook"]
---

# `SlotTableModule.onReelStopExtend(_reelIndex: number): void`

<!-- convention-summary-start -->
### SlotTableModule.onReelStopExtend() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableModule.onReelStopExtend() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
protected onReelStopExtend(_reelIndex: number): void
```

---

## 2. Detailed Algorithmic Execution Logic
Virtual hook invoked immediately after a reel column finishes its stop bounce animation. Used to trigger column landing VFX, Mascot reactions, or camera shakes.

---

## 3. Un-truncated Source Code Implementation
```typescript
protected onReelStopExtend(_reelIndex: number): void {
    // override this method to handle reel stop event
}
```
