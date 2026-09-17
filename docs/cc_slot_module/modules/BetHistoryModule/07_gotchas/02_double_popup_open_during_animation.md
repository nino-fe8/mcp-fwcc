---
id: "cc_slot_module:BetHistoryModule:gotchas:02_double_popup_open_during_animation"
title: "BetHistoryModule Double Popup Open During Animation"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "gotchas", "animation_desync"]
---

# ⚠️ Animation Desync During Modal Transitions

<!-- convention-summary-start -->
### BetHistoryModule Double Popup Open During Animation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryModule Double Popup Open During Animation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Symptom & Defect

Clicking the Close button while the fade-in animation is running causes the modal backdrop to freeze in semi-transparent state.

---

## 2. Root Cause & Solution

Always check `this.popupBehavior.isPlaying()` before processing close requests:

```typescript
onClose(): void {
    if (this.popupBehavior && this.popupBehavior.isPlaying()) {
        return;
    }
    if (this.soundPlayer) {
        this.soundPlayer.playSFXClick();
    }
    this.gameLogic.emit(GameLogicUIEvents.CLOSE_BET_HISTORY_PANEL);
}
```
