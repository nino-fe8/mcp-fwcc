---
id: "cc_slot_module:MenuPanel:methods:onShowPaytable"
title: "MenuPanel.onShowPaytable Method"
category: "cc_slot_module"
tags: ["MenuPanel", "menupanel", "cc_slot_module", "methods", "onShowPaytable"]
---

# 📖 `MenuPanel.onShowPaytable()`

<!-- convention-summary-start -->
### MenuPanel.onShowPaytable Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MenuPanel.onShowPaytable Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public onShowPaytable(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onShowPaytable(): void {
	this.playSfxClick();
	this.gameLogic.emit(GameLogicUIEvents.OPEN_PAY_TABLE_PANEL);
	if (this.autoHideMenuPanel) {
		this.gameLogic.emit(GameLogicUIEvents.CLOSE_MENU_PANEL);
	}
}
```
