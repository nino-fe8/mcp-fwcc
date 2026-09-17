---
id: "cc_slot_module:TurboButton:methods:onTurboPressed"
title: "TurboButton.onTurboPressed Method"
category: "cc_slot_module"
tags: ["TurboButton", "turbo_button", "cc_slot_module", "methods", "onTurboPressed"]
---

# 📖 `TurboButton.onTurboPressed()`

<!-- convention-summary-start -->
### TurboButton.onTurboPressed Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TurboButton.onTurboPressed Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Emits `GameLogicUIEvents.TURBO_BUTTON_PRESSED` to `GameLogic`.

```typescript
public onTurboPressed(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onTurboPressed(): void {
    this.gameLogic.emit(GameLogicUIEvents.TURBO_BUTTON_PRESSED);
}
```
