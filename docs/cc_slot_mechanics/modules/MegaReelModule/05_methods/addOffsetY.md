---
id: "cc_slot_mechanics:MegaReelModule:methods:addOffsetY"
title: "MegaReelModule.addOffsetY Method"
category: "cc_slot_mechanics"
tags: ["MegaReelModule", "mega_reel_module", "cc_slot_mechanics", "methods", "addOffsetY"]
---

# 📖 `MegaReelModule.addOffsetY()`

<!-- convention-summary-start -->
### MegaReelModule.addOffsetY Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MegaReelModule.addOffsetY Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature & Overview

```typescript
addOffsetY(symbol:cc.Node, dy:number): void
```

- **Primary Role**: Implements addOffsetY within the MegaReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected addOffsetY(symbol:cc.Node, dy:number):void {
        symbol.setPosition(new cc.Vec2(symbol.position.x, symbol.position.y + dy));
    }
```
