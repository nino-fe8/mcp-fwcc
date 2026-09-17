---
id: "cc_slot_module:MenuPanel:methods:onCloseMenuPanel"
title: "MenuPanel.onCloseMenuPanel Method"
category: "cc_slot_module"
tags: ["MenuPanel", "menupanel", "cc_slot_module", "methods", "onCloseMenuPanel"]
---

# 📖 `MenuPanel.onCloseMenuPanel()`

<!-- convention-summary-start -->
### MenuPanel.onCloseMenuPanel Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MenuPanel.onCloseMenuPanel Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public onCloseMenuPanel(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onCloseMenuPanel(): void {
	this.playSfxClick();
	this.gameLogic.emit(GameLogicUIEvents.CLOSE_MENU_PANEL);
}
```
