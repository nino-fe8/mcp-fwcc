---
id: "cc_slot_module:BaseUIPopup:methods:closeAllPopups"
title: "BaseUIPopup.closeAllPopups Method"
category: "cc_slot_module"
tags: ["BaseUIPopup", "base_ui_popup", "cc_slot_module", "methods", "closeAllPopups"]
---

# 📖 `BaseUIPopup.closeAllPopups()`

<!-- convention-summary-start -->
### BaseUIPopup.closeAllPopups Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseUIPopup.closeAllPopups Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Plays click SFX and broadcasts `GameLogicUIEvents.CLOSE_ALL_POPUPS` to dismiss all active modals.

```typescript
public closeAllPopups(): void
```

---

## 2. Complete Source Code Implementation

```typescript
closeAllPopups(): void {
    this.playSfxClick();
    this.gameLogic.emit(GameLogicUIEvents.CLOSE_ALL_POPUPS);
}
```
