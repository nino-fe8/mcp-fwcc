---
id: "cc_slot_module:PaylineWinFrameModule:method:hideAll"
title: "PaylineWinFrameModule.hideAll Method"
category: "cc_slot_module"
tags: ["PaylineWinFrameModule", "payline_win_frame_module", "cc_slot_module", "methods", "hideAll"]
---

# 🚀 `PaylineWinFrameModule.hideAll(): void`

<!-- convention-summary-start -->
### PaylineWinFrameModule.hideAll Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineWinFrameModule.hideAll Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
protected hideAll(): void
```

---

## 2. Full Source Code

```typescript
protected hideAll(): void {
    this.frames.forEach((reel) => {
        reel.forEach((frame) => {
            frame.emit('HIDE');
        });
    });
}
```
