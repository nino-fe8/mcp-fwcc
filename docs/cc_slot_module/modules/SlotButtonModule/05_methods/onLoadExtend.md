---
id: "cc_slot_module:SlotButtonModule:methods:onLoadExtend"
title: "SlotButtonModule.onLoadExtend Method"
category: "cc_slot_module"
tags: ["SlotButtonModule", "slot_button_module", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `SlotButtonModule.onLoadExtend()`

<!-- convention-summary-start -->
### SlotButtonModule.onLoadExtend Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotButtonModule.onLoadExtend Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Registers the button node with `GameUIEvents.SPIN_BUTTON.SET_UP_BUTTON` and runs internal `setup()`.

```typescript
public onLoadExtend(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
    this.eventManager.emit(GameUIEvents.SPIN_BUTTON.SET_UP_BUTTON, { gameMode: this.gameMode, node: this.node });
    this.setup();
}
```
