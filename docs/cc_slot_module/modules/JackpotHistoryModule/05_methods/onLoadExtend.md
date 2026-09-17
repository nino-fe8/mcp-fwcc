---
id: "cc_slot_module:JackpotHistoryModule:methods:onLoadExtend"
title: "JackpotHistoryModule.onLoadExtend Method"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `JackpotHistoryModule.onLoadExtend()`

<!-- convention-summary-start -->
### JackpotHistoryModule.onLoadExtend Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotHistoryModule.onLoadExtend Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public onLoadExtend(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
	this.jackpotHistoryData = this.gameLogic.getDataModel().JackpotHistoryData;
	this.pageIndexNode.active = false;
	this.setupObserver();
	super.onLoadExtend();
}
```
