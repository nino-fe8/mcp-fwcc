---
id: "cc_slot_module:AutoSpinPanel:methods:onSelectAutoSpin"
title: "AutoSpinPanel.onSelectAutoSpin Method"
category: "cc_slot_module"
tags: ["AutoSpinPanel", "autospinpanel", "cc_slot_module", "methods", "onSelectAutoSpin"]
---

# 📖 `AutoSpinPanel.onSelectAutoSpin()`

<!-- convention-summary-start -->
### AutoSpinPanel.onSelectAutoSpin Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for AutoSpinPanel.onSelectAutoSpin Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public onSelectAutoSpin(index: number): void
```

---

## 2. Complete Source Code Implementation

```typescript
onSelectAutoSpin(index: number): void {
	this.playSfxClick();
	this.currentSelectedIndex = index;

	for (const optionIndex in this.autoSpinOption) {
		const numberComp = this.autoSpinOption[optionIndex];
		numberComp.setHighlight(Number(optionIndex) == index);
	}
}
```
