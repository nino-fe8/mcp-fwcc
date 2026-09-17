---
id: "cc_slot_module:PaylineWinFrameModule:method:spawnFrame"
title: "PaylineWinFrameModule.spawnFrame Method"
category: "cc_slot_module"
tags: ["PaylineWinFrameModule", "payline_win_frame_module", "cc_slot_module", "methods", "spawnFrame"]
---

# 🚀 `PaylineWinFrameModule.spawnFrame(reel, row, position): cc.Node`

<!-- convention-summary-start -->
### PaylineWinFrameModule.spawnFrame Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineWinFrameModule.spawnFrame Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
protected spawnFrame(reel: number, row: number, position: cc.Vec3): cc.Node
```

---

## 2. Full Source Code

```typescript
protected spawnFrame(reel: number, row: number, position: cc.Vec3): cc.Node {
    let node = this.winFramePool.get() || cc.instantiate(this.template);
    node.setParent(this.container);
    node.setPosition(position);
    if (!this.frames[reel]) {
        this.frames[reel] = [];
    }
    this.frames[reel][row] = node;
    return node;
}
```
