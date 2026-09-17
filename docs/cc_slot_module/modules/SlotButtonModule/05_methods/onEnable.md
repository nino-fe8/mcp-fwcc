---
id: "cc_slot_module:SlotButtonModule:methods:onEnable"
title: "SlotButtonModule.onEnable Method"
category: "cc_slot_module"
tags: ["SlotButtonModule", "slot_button_module", "cc_slot_module", "methods", "onEnable"]
---

# 📖 `SlotButtonModule.onEnable()`

<!-- convention-summary-start -->
### SlotButtonModule.onEnable Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotButtonModule.onEnable Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Binds touch and keyboard listeners when the button node is activated.

```typescript
public onEnable(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onEnable(): void {
    this.addEventListeners();
}
```
