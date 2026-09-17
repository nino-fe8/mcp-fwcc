---
id: "cc_slot_module:TurboButton:methods:onTurboClick"
title: "TurboButton.onTurboClick Method"
category: "cc_slot_module"
tags: ["TurboButton", "turbo_button", "cc_slot_module", "methods", "onTurboClick"]
---

# 📖 `TurboButton.onTurboClick()`

<!-- convention-summary-start -->
### TurboButton.onTurboClick Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TurboButton.onTurboClick Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Plays sound effect and dispatches `GameLogicUIEvents.TURBO_BUTTON_CLICK` to `GameLogic`.

```typescript
public onTurboClick(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onTurboClick(): void {
    this.playSfxTurbo();
    this.gameLogic.emit(GameLogicUIEvents.TURBO_BUTTON_CLICK);
}
```
