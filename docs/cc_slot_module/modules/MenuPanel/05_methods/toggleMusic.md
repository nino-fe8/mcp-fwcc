---
id: "cc_slot_module:MenuPanel:methods:toggleMusic"
title: "MenuPanel.toggleMusic Method"
category: "cc_slot_module"
tags: ["MenuPanel", "menupanel", "cc_slot_module", "methods", "toggleMusic"]
---

# 📖 `MenuPanel.toggleMusic()`

<!-- convention-summary-start -->
### MenuPanel.toggleMusic Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MenuPanel.toggleMusic Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public toggleMusic(): void
```

---

## 2. Complete Source Code Implementation

```typescript
toggleMusic(): void {
	this.gameLogic.emit(GameLogicUIEvents.TOGGLE_BGM);
	if (this.soundPlayer && this.initialized) {
		this.soundPlayer.playSFXClick();
	}
}
```
