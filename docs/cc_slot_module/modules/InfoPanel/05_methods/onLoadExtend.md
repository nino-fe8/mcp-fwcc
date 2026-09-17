---
id: "cc_slot_module:InfoPanel:methods:onLoadExtend"
title: "InfoPanel.onLoadExtend Method"
category: "cc_slot_module"
tags: ["InfoPanel", "infopanel", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `InfoPanel.onLoadExtend()`

<!-- convention-summary-start -->
### InfoPanel.onLoadExtend Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for InfoPanel.onLoadExtend Method.
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
	this.node.on("NEXT_GAME_INFO", this.next, this);
	this.node.on("PREVIOUS_GAME_INFO", this.previous, this);
	this.curInfoID = 0;
	this.pageView.node.on("page-turning", this.pageViewEvent, this);
	this.activeButtons(this.curInfoID);
	this.setupObserver();
	super.onLoadExtend();
}
```
