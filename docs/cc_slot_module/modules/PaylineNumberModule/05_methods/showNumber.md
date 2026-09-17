---
id: "cc_slot_module:PaylineNumberModule:methods:showNumber"
title: "PaylineNumberModule.showNumber Method"
category: "cc_slot_module"
tags: ["PaylineNumberModule", "payline_number_module", "cc_slot_module", "methods", "showNumber"]
---

# 📖 `PaylineNumberModule.showNumber()`

<!-- convention-summary-start -->
### PaylineNumberModule.showNumber Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineNumberModule.showNumber Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Looks up badge instances mapped to `paylineID` and calls `item.show()`.

```typescript
protected showNumber(paylineID: string): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected showNumber(paylineID: string): void {
    const items = this.mapNumberToItem.get(paylineID);
    items && items.forEach(item => {
        item.show();
    });
}
```
