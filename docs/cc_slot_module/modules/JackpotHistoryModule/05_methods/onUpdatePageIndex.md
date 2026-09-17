---
id: "cc_slot_module:JackpotHistoryModule:methods:onUpdatePageIndex"
title: "JackpotHistoryModule.onUpdatePageIndex Method"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "methods", "onUpdatePageIndex"]
---

# 📖 `JackpotHistoryModule.onUpdatePageIndex()`

<!-- convention-summary-start -->
### JackpotHistoryModule.onUpdatePageIndex Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotHistoryModule.onUpdatePageIndex Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public onUpdatePageIndex(index: number): void
```

---

## 2. Complete Source Code Implementation

```typescript
onUpdatePageIndex(index: number): void {
	this.pageIndexNode.active = index && index > 0;
	this.pageIndexLabel.string = " " + index;
}
```
