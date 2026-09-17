---
id: "cc_slot_module:JackpotHistoryModule:methods:localizeText"
title: "JackpotHistoryModule.localizeText Method"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "methods", "localizeText"]
---

# 📖 `JackpotHistoryModule.localizeText()`

<!-- convention-summary-start -->
### JackpotHistoryModule.localizeText Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotHistoryModule.localizeText Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public localizeText(): void
```

---

## 2. Complete Source Code Implementation

```typescript
localizeText(): void {
	if (this.textPage) {
		this.textPage.string = this.gameLogic.getGameText("HISTORY_PAGE");
	}
}
```
