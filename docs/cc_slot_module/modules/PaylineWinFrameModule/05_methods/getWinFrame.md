---
id: "cc_slot_module:PaylineWinFrameModule:method:getWinFrame"
title: "PaylineWinFrameModule.getWinFrame Method"
category: "cc_slot_module"
tags: ["PaylineWinFrameModule", "payline_win_frame_module", "cc_slot_module", "methods", "getWinFrame"]
---

# 🚀 `PaylineWinFrameModule.getWinFrame(reel, row, position): cc.Node`

<!-- convention-summary-start -->
### PaylineWinFrameModule.getWinFrame Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineWinFrameModule.getWinFrame Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
protected getWinFrame(reel: number, row: number, position: cc.Vec3): cc.Node
```

---

## 2. Full Source Code

```typescript
protected getWinFrame(reel: number, row: number, position: cc.Vec3): cc.Node {
    if (!this.frames[reel]) {
        this.frames[reel] = [];
    }

    let winFrame = this.frames[reel][row];
    if (!winFrame) {
        winFrame = this.spawnFrame(reel, row, position);
    }
    return winFrame;
}
```
