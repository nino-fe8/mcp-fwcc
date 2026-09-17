---
id: "cc_slot_module:JackpotHistoryModule:methods:onShowJackpotHistory"
title: "JackpotHistoryModule.onShowJackpotHistory Method"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "methods", "onShowJackpotHistory"]
---

# 📖 `JackpotHistoryModule.onShowJackpotHistory()`

<!-- convention-summary-start -->
### JackpotHistoryModule.onShowJackpotHistory Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotHistoryModule.onShowJackpotHistory Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public onShowJackpotHistory(isActive: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
onShowJackpotHistory(isActive: boolean): void {
	if (isActive) {
		this.openPopup();
		this.togglePopup(true);
	} else {
		this.togglePopup(false);
	}
}
```
