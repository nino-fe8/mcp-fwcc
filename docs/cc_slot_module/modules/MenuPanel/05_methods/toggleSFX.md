---
id: "cc_slot_module:MenuPanel:methods:toggleSFX"
title: "MenuPanel.toggleSFX Method"
category: "cc_slot_module"
tags: ["MenuPanel", "menupanel", "cc_slot_module", "methods", "toggleSFX"]
---

# 📖 `MenuPanel.toggleSFX()`

<!-- convention-summary-start -->
### MenuPanel.toggleSFX Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MenuPanel.toggleSFX Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public toggleSFX(): void
```

---

## 2. Complete Source Code Implementation

```typescript
toggleSFX(): void {
	this.gameLogic.emit(GameLogicUIEvents.TOGGLE_SFX);
	if (this.soundPlayer && this.initialized) {
		this.soundPlayer.playSFXClick();
	}
}
```
