---
id: "cc_slot_module:TurboButton:methods:listenEvents"
title: "TurboButton.listenEvents Method"
category: "cc_slot_module"
tags: ["TurboButton", "turbo_button", "cc_slot_module", "methods", "listenEvents"]
---

# 📖 `TurboButton.listenEvents()`

<!-- convention-summary-start -->
### TurboButton.listenEvents Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TurboButton.listenEvents Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Attaches mouse and touch interaction listeners to the `display` node.

```typescript
public listenEvents(): void
```

---

## 2. Complete Source Code Implementation

```typescript
listenEvents(): void {
    this.display.on(Node.EventType.MOUSE_ENTER, this.onTurboHover, this);
    this.display.on(Node.EventType.MOUSE_LEAVE, this.onTurboExitHover, this);
    this.display.on(Node.EventType.TOUCH_START, this.onTurboPressed, this);
    this.display.on(Node.EventType.TOUCH_END, this.onTurboClick, this);
    this.display.on(Node.EventType.TOUCH_CANCEL, this.onTurboCancel, this);
}
```
