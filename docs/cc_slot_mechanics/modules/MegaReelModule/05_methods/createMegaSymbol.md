---
id: "cc_slot_mechanics:MegaReelModule:methods:createMegaSymbol"
title: "MegaReelModule.createMegaSymbol Method"
category: "cc_slot_mechanics"
tags: ["MegaReelModule", "mega_reel_module", "cc_slot_mechanics", "methods", "createMegaSymbol"]
---

# 📖 `MegaReelModule.createMegaSymbol()`

<!-- convention-summary-start -->
### MegaReelModule.createMegaSymbol Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MegaReelModule.createMegaSymbol Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature & Overview

```typescript
createMegaSymbol(index:number): cc.Node
```

- **Primary Role**: Implements createMegaSymbol within the MegaReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected createMegaSymbol(index:number): cc.Node {
        let symbol:cc.Node = null;
        if (this.megaData && this.megaData.length) {
            this.megaData.forEach((data) => {
                if (Number(data["reel"] == this.reelIndex)) {
                    const indexes = data["indexes"];
                    // choose the bottom index to make mega symbol at its position
                    if (Number(indexes[indexes.length - 1]) == index) {
                        const total = this.reelManager.showSymbol;
                        const isLastRow = ((index % total) == total - 1 && indexes.length == 1);
                        symbol = this.spawnMegaSymbol(this.config.MEGA_SYMBOL_CODE);
                        this.addOffsetY(symbol, isLastRow ? -this.SYMBOL_HEIGHT : 0);
                    }
                }
            });
        }
        return symbol;
    }
```
