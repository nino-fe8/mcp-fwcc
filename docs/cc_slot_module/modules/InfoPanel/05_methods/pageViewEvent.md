---
id: "cc_slot_module:InfoPanel:methods:pageViewEvent"
title: "InfoPanel.pageViewEvent Method"
category: "cc_slot_module"
tags: ["InfoPanel", "infopanel", "cc_slot_module", "methods", "pageViewEvent"]
---

# 📖 `InfoPanel.pageViewEvent()`

<!-- convention-summary-start -->
### InfoPanel.pageViewEvent Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for InfoPanel.pageViewEvent Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public pageViewEvent(): void
```

---

## 2. Complete Source Code Implementation

```typescript
pageViewEvent(): void {
	let newIndex = this.pageView.getCurrentPageIndex();
	if (Math.abs(newIndex - this.curInfoID) !== 1) {
		this.pageView.scrollToPage(this.curInfoID, 0.1);
		return;
	}
	this.curInfoID = newIndex;
	this.activeButtons(this.curInfoID);
}
```
