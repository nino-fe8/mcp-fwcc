---
id: "cc_slot_module:JackpotHistoryModule:methods:enableNextBtn"
title: "JackpotHistoryModule.enableNextBtn Method"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "methods", "enableNextBtn"]
---

# 📖 `JackpotHistoryModule.enableNextBtn()`

<!-- convention-summary-start -->
### JackpotHistoryModule.enableNextBtn Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotHistoryModule.enableNextBtn Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public enableNextBtn(isEnableNext: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
enableNextBtn(isEnableNext: boolean): void {
	this.nextBtn.interactable = isEnableNext;
}
```
