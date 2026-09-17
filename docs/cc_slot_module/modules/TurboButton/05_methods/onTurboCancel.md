---
id: "cc_slot_module:TurboButton:methods:onTurboCancel"
title: "TurboButton.onTurboCancel Method"
category: "cc_slot_module"
tags: ["TurboButton", "turbo_button", "cc_slot_module", "methods", "onTurboCancel"]
---

# 📖 `TurboButton.onTurboCancel()`

<!-- convention-summary-start -->
### TurboButton.onTurboCancel Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TurboButton.onTurboCancel Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Emits `GameLogicUIEvents.TURBO_BUTTON_CANCEL` to `GameLogic`.

```typescript
public onTurboCancel(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onTurboCancel(): void {
    this.gameLogic.emit(GameLogicUIEvents.TURBO_BUTTON_CANCEL);
}
```
