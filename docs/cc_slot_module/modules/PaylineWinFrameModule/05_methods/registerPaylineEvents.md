---
id: "cc_slot_module:PaylineWinFrameModule:method:registerPaylineEvents"
title: "PaylineWinFrameModule.registerPaylineEvents Method"
category: "cc_slot_module"
tags: ["PaylineWinFrameModule", "payline_win_frame_module", "cc_slot_module", "methods", "registerPaylineEvents"]
---

# 🚀 `PaylineWinFrameModule.registerPaylineEvents(): void`

<!-- convention-summary-start -->
### PaylineWinFrameModule.registerPaylineEvents Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineWinFrameModule.registerPaylineEvents Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
protected registerPaylineEvents(): void
```

---

## 2. Full Source Code

```typescript
protected registerPaylineEvents(): void {
    if (!this.payLineEmitter) {
        return;
    }

    this.payLineEmitter.on(PaylineEventTypes.SYMBOL_PLAY_ANIMATION_WIN, this.playAnimation, this);
    this.payLineEmitter.on(PaylineEventTypes.PAYLINE_STOP_ALL, this.hideAll, this);
    this.payLineEmitter.on(PaylineEventTypes.PAYLINE_CLEAR, this.clearAll, this);
}
```
