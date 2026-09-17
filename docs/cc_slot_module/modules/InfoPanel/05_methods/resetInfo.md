---
id: "cc_slot_module:InfoPanel:methods:resetInfo"
title: "InfoPanel.resetInfo Method"
category: "cc_slot_module"
tags: ["InfoPanel", "infopanel", "cc_slot_module", "methods", "resetInfo"]
---

# 📖 `InfoPanel.resetInfo()`

<!-- convention-summary-start -->
### InfoPanel.resetInfo Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for InfoPanel.resetInfo Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public resetInfo(): void
```

---

## 2. Complete Source Code Implementation

```typescript
resetInfo(): void {
	this.pageView.scrollToPage(0, 0);
	this.pageView._lastPageIdx = 0;
	this.curInfoID = 0;
	this.activeButtons(this.curInfoID);
	if (this.scrollView) {
		this.scrollView.scrollToTop(0);
	}
}
```
