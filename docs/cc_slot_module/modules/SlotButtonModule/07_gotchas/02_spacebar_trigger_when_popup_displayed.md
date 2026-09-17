---
id: "cc_slot_module:SlotButtonModule:gotchas:spacebar_trigger_when_popup_displayed"
title: "Gotcha: Spinning Underneath Active Modals"
category: "cc_slot_module"
tags: ["SlotButtonModule", "slot_button_module", "cc_slot_module", "gotchas", "spacebar_leak"]
---

# ⚠️ Gotcha: Spinning Underneath Active Modals

<!-- convention-summary-start -->
### Gotcha: Spinning Underneath Active Modals Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Spinning Underneath Active Modals.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Problem Description

When players press Spacebar rapidly, keyboard events fire regardless of UI clicks. Without checking `this.uiManager.checkDisplayPopup()` and `this.gameLogic.getUIManager().hasBlockingPopup()`, spacebar hits will start a background spin while an interactive Free Option or Bonus modal is active.

---

## 2. Prevention

Always enforce guards in `onKeyUp()`:
```typescript
if (event.keyCode == cc.macro.KEY.space && !this.uiManager.checkDisplayPopup() && !this.gameLogic.getUIManager().hasBlockingPopup()) {
    this.gameLogic.emit(GameLogicUIEvents.TRIGGER_SPACE_BUTTON);
}
```
