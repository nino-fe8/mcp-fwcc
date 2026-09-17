---
id: "cc_slot_module:PaylineInfoModule:methods:getWinText"
title: "PaylineInfoModule.getWinText Method"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "methods", "getWinText"]
---

# 📖 `PaylineInfoModule.getWinText()`

<!-- convention-summary-start -->
### PaylineInfoModule.getWinText Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineInfoModule.getWinText Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Returns the appropriate localization key based on math system (`WIN_TEXT_1` vs `WIN`).

```typescript
public getWinText(): string
```

---

## 2. Complete Source Code Implementation

```typescript
getWinText(): string {
    return this.gameConfig.PAY_SYSTEM === PAY_SYSTEM_TYPE_ENUM.LINES ? "WIN_TEXT_1" : "WIN";
}
```
