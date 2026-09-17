---
id: "cc_slot_module:SlotButtonModule:methods:onKeyUp"
title: "SlotButtonModule.onKeyUp Method"
category: "cc_slot_module"
tags: ["SlotButtonModule", "slot_button_module", "cc_slot_module", "methods", "onKeyUp", "spacebar"]
---

# 📖 `SlotButtonModule.onKeyUp()`

<!-- convention-summary-start -->
### SlotButtonModule.onKeyUp Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotButtonModule.onKeyUp Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Captures Spacebar key release events and dispatches `TRIGGER_SPACE_BUTTON` after validating that no popup or cutscene is blocking input.

```typescript
public onKeyUp(event: cc.Event.EventKeyboard): void
```

---

## 2. Complete Source Code Implementation

```typescript
onKeyUp(event): void {
    if (event.keyCode == cc.macro.KEY.space && !this.uiManager.checkDisplayPopup() && !this.gameLogic.getUIManager().hasBlockingPopup()) {
        this.gameLogic.emit(GameLogicUIEvents.TRIGGER_SPACE_BUTTON);
    }
}
```
