---
id: "cc_slot_module:InfoPanel:methods:next"
title: "InfoPanel.next Method"
category: "cc_slot_module"
tags: ["InfoPanel", "infopanel", "cc_slot_module", "methods", "next"]
---

# 📖 `InfoPanel.next()`

<!-- convention-summary-start -->
### InfoPanel.next Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for InfoPanel.next Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public next(): void
```

---

## 2. Complete Source Code Implementation

```typescript
next(): void {
	if (this.soundPlayer) {
		this.soundPlayer.playSFXClick();
	}
	this.pageView.scrollToPage(this.curInfoID + 1, 0);
	this.curInfoID++;
	this.activeButtons(this.curInfoID);
}
```
