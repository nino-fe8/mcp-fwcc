---
id: "cc_slot_module:InfoPanel:methods:activeButtons"
title: "InfoPanel.activeButtons Method"
category: "cc_slot_module"
tags: ["InfoPanel", "infopanel", "cc_slot_module", "methods", "activeButtons"]
---

# 📖 `InfoPanel.activeButtons()`

<!-- convention-summary-start -->
### InfoPanel.activeButtons Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for InfoPanel.activeButtons Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public activeButtons(id: number): void
```

---

## 2. Complete Source Code Implementation

```typescript
activeButtons(id: number): void {
	const { nextBtn, preBtn, infoTitle } = this;

	const totalInfo = this.pageView.node.getChildByName("view").getChildByName("content").children.length;
	if (id >= totalInfo - 1) {
		id = totalInfo - 1;
		nextBtn && (nextBtn.interactable = false);
	} else {
		nextBtn && (nextBtn.interactable = true);
	}

	if (id <= 0) {
		id = 0;
		preBtn && (preBtn.interactable = false);
	} else {
		preBtn && (preBtn.interactable = true);
	}
	this.curInfoID = id;
	if (infoTitle) {
		infoTitle.spriteFrame = this.titles[this.curInfoID];
	}
}
```
