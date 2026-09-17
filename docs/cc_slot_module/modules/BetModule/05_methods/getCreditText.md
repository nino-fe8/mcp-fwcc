---
id: "cc_slot_module:BetModule:methods:getCreditText"
title: "BetModule.getCreditText Method"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "methods", "getCreditText"]
---

# 📖 `BetModule.getCreditText()`

<!-- convention-summary-start -->
### BetModule.getCreditText Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetModule.getCreditText Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Retrieves localized string for credits from `GameLogic`.

```typescript
public getCreditText(): string
```

---

## 2. Complete Source Code Implementation

```typescript
getCreditText(): string {
    return ` ${this.gameLogic.getGameText("CREDITS")}`;
}
```
