---
id: "cc_slot_module:PaylineInfoModule:methods:setPaylineInfo"
title: "PaylineInfoModule.setPaylineInfo Method"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "methods", "setPaylineInfo"]
---

# 📖 `PaylineInfoModule.setPaylineInfo()`

<!-- convention-summary-start -->
### PaylineInfoModule.setPaylineInfo Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineInfoModule.setPaylineInfo Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Assigns formatted strings to labels and updates thumbnail sprite frame.

```typescript
protected setPaylineInfo(paylineInfo: any): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected setPaylineInfo(paylineInfo: any): void {
    if (!paylineInfo || eno.isEmptyObject(paylineInfo)) {
        this.lbLeft.string = '';
        this.lbRight.string = '';
        this.sprSymbol.spriteFrame = null;
        return;
    }

    const { symbolId, leftString, rightString } = this.convertPayLineInfo(paylineInfo);

    this.lbLeft.string = leftString;
    this.lbRight.string = rightString;
    this.sprSymbol.spriteFrame = this._symbolAssets[`${this.smallSymbolPrefix}${symbolId}`];
}
```
