---
id: "cc_slot_module:PaylineWinFrameModule:method:playAnimation"
title: "PaylineWinFrameModule.playAnimation Method"
category: "cc_slot_module"
tags: ["PaylineWinFrameModule", "payline_win_frame_module", "cc_slot_module", "methods", "playAnimation"]
---

# 🚀 `PaylineWinFrameModule.playAnimation(data): void`

<!-- convention-summary-start -->
### PaylineWinFrameModule.playAnimation Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineWinFrameModule.playAnimation Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
protected playAnimation(data: { symbol: any, duration: number }): void
```

---

## 2. Full Source Code

```typescript
protected playAnimation(data: { symbol: any, duration: number }): void {
    const { reel, row, position } = data.symbol;
    const winFrame = this.getWinFrame(reel, row, position);
    winFrame.emit('PLAY_ANIMATION', '', data.duration);
}
```
