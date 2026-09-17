---
id: "cc_slot_module:BetSelectionPanel:methods:onBetSelectionPanelOpen"
title: "BetSelectionPanel.onBetSelectionPanelOpen Method"
category: "cc_slot_module"
tags: ["BetSelectionPanel", "betselectionpanel", "cc_slot_module", "methods", "onBetSelectionPanelOpen", "popup_toggle"]
---

# 📖 `BetSelectionPanel.onBetSelectionPanelOpen()`

<!-- convention-summary-start -->
### BetSelectionPanel.onBetSelectionPanelOpen Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetSelectionPanel.onBetSelectionPanelOpen Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Toggles the modal popup visibility and executes opening lifecycle steps when `isOpen` is `true`.

```typescript
public onBetSelectionPanelOpen(isOpen: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
onBetSelectionPanelOpen(isOpen: boolean): void {
	this.togglePopup(isOpen);
	if (isOpen) {
		this.openPanel();
	}
}

openPanel(): void {
	this.playSfxClick();
	this.init();
	this.selectCurrentBet();
}

closePanel(): void {
	this.playSfxClick();
	this.onBetSelectionPanelOpen(false);
}
```
