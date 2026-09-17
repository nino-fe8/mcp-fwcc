---
id: "cc_slot_mechanics:MegaReelModule:methods:hideSmallSymbol"
title: "MegaReelModule.hideSmallSymbol Method"
category: "cc_slot_mechanics"
tags: ["MegaReelModule", "mega_reel_module", "cc_slot_mechanics", "methods", "hideSmallSymbol"]
---

# 📖 `MegaReelModule.hideSmallSymbol()`

<!-- convention-summary-start -->
### MegaReelModule.hideSmallSymbol Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MegaReelModule.hideSmallSymbol Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature & Overview

```typescript
hideSmallSymbol(symbol:cc.Node, index:number): void
```

- **Primary Role**: Implements hideSmallSymbol within the MegaReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected hideSmallSymbol(symbol:cc.Node, index:number): void {
        if (this.megaData && this.megaData.length) {
            this.megaData.forEach((data) => {
                if (data["indexes"].indexOf(index) >= 0) {
                    symbol.active = false;
                }
            });
        }
    }
```
