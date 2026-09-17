---
id: "cc_slot_module:SlotButtonModule:methods:onDisable"
title: "SlotButtonModule.onDisable Method"
category: "cc_slot_module"
tags: ["SlotButtonModule", "slot_button_module", "cc_slot_module", "methods", "onDisable"]
---

# 📖 `SlotButtonModule.onDisable()`

<!-- convention-summary-start -->
### SlotButtonModule.onDisable Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotButtonModule.onDisable Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Unbinds touch and keyboard listeners when the button node is deactivated.

```typescript
public onDisable(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onDisable(): void {
    this.removeEventListeners();
}
```
