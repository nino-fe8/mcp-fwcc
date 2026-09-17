---
id: "cc_slot_module:JackpotModule:methods:updateJackpotValue"
title: "JackpotModule.updateJackpotValue Method"
category: "cc_slot_module"
tags: ["JackpotModule", "jackpot_module", "cc_slot_module", "methods", "updateJackpotValue"]
---

# 📖 `JackpotModule.updateJackpotValue()`

<!-- convention-summary-start -->
### JackpotModule.updateJackpotValue Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotModule.updateJackpotValue Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Updates a specific tier jackpot label with a new numeric value.

```typescript
public updateJackpotValue({ jackpotType, jackpotValue }: { jackpotType: string; jackpotValue: number }): void
```

---

## 2. Complete Source Code Implementation

```typescript
updateJackpotValue({ jackpotType, jackpotValue }: { jackpotType: string, jackpotValue: number }): void {
    const jackpotIndex = JACKPOT_TYPE_ENUM[jackpotType];
    this.jackpotItems.forEach((item) => {
        if (item.jackpotType === jackpotIndex) {
            item.label.node.emit("ON_UPDATE_VALUE", jackpotValue, JACKPOT_PROGRESSIVE_TIME.INIT);
        }
    });
}
```
