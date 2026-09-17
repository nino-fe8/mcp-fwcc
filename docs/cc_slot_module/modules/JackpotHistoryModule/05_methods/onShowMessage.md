---
id: "cc_slot_module:JackpotHistoryModule:methods:onShowMessage"
title: "JackpotHistoryModule.onShowMessage Method"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "methods", "onShowMessage"]
---

# 📖 `JackpotHistoryModule.onShowMessage()`

<!-- convention-summary-start -->
### JackpotHistoryModule.onShowMessage Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotHistoryModule.onShowMessage Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public onShowMessage(value: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
onShowMessage(value: boolean): void {
	this.messageNode.active = value;
	if (value) {
		this.messageLabel.string = this.jackpotHistoryData.messageText;
	}
}
```
