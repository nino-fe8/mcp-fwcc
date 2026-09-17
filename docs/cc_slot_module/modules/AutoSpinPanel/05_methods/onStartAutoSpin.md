---
id: "cc_slot_module:AutoSpinPanel:methods:onStartAutoSpin"
title: "AutoSpinPanel.onStartAutoSpin Method"
category: "cc_slot_module"
tags: ["AutoSpinPanel", "autospinpanel", "cc_slot_module", "methods", "onStartAutoSpin"]
---

# 📖 `AutoSpinPanel.onStartAutoSpin()`

<!-- convention-summary-start -->
### AutoSpinPanel.onStartAutoSpin Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for AutoSpinPanel.onStartAutoSpin Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public onStartAutoSpin(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onStartAutoSpin(): void {
	this.playSfxClick();
	const selectedSpinTimes = this.config.AUTO_SPIN_NUMBERS[this.currentSelectedIndex];
	this.gameLogic.emit(GameLogicUIEvents.START_AUTO_SPIN, selectedSpinTimes);
	this.onAutoSpinPanelOpen(false);
}
```
