---
id: "cc_slot_module:JackpotHistoryModule:methods:enablePreviousBtn"
title: "JackpotHistoryModule.enablePreviousBtn Method"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "methods", "enablePreviousBtn"]
---

# 📖 `JackpotHistoryModule.enablePreviousBtn()`

<!-- convention-summary-start -->
### JackpotHistoryModule.enablePreviousBtn Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotHistoryModule.enablePreviousBtn Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public enablePreviousBtn(isEnablePrev: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
enablePreviousBtn(isEnablePrev: boolean): void {
	this.backBtn.interactable = isEnablePrev;
}
```
