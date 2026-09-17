---
id: "cc_slot_module:MenuPanel:methods:onShowInfo"
title: "MenuPanel.onShowInfo Method"
category: "cc_slot_module"
tags: ["MenuPanel", "menupanel", "cc_slot_module", "methods", "onShowInfo"]
---

# 📖 `MenuPanel.onShowInfo()`

<!-- convention-summary-start -->
### MenuPanel.onShowInfo Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MenuPanel.onShowInfo Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public onShowInfo(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onShowInfo(): void {
	this.playSfxClick();
	this.gameLogic.emit(GameLogicUIEvents.OPEN_INFO_PANEL);
	if (this.autoHideMenuPanel) {
		this.gameLogic.emit(GameLogicUIEvents.CLOSE_MENU_PANEL);
	}
}
```
