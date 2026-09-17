---
id: "cc_slot_module:MenuPanel:methods:onShowBetHistory"
title: "MenuPanel.onShowBetHistory Method"
category: "cc_slot_module"
tags: ["MenuPanel", "menupanel", "cc_slot_module", "methods", "onShowBetHistory"]
---

# 📖 `MenuPanel.onShowBetHistory()`

<!-- convention-summary-start -->
### MenuPanel.onShowBetHistory Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MenuPanel.onShowBetHistory Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public onShowBetHistory(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onShowBetHistory(): void {
	this.playSfxClick();
	this.gameLogic.emit(GameLogicUIEvents.OPEN_BET_HISTORY_PANEL);
	if (this.autoHideMenuPanel) {
		this.gameLogic.emit(GameLogicUIEvents.CLOSE_MENU_PANEL);
	}
}
```
