---
id: "cc_slot_module:SlotButtonModule:methods:playAnimHover"
title: "SlotButtonSpine.playAnimHover Method"
category: "cc_slot_module"
tags: ["SlotButtonModule", "SlotButtonSpine", "cc_slot_module", "methods", "playAnimHover", "spine"]
---

# 📖 `SlotButtonSpine.playAnimHover()`

<!-- convention-summary-start -->
### SlotButtonSpine.playAnimHover Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotButtonSpine.playAnimHover Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Activates the `spineHover` overlay node and plays the looping hover animation (`animHover` / `"Hover"`).

```typescript
public playAnimHover(): void
```

---

## 2. Complete Source Code Implementation

```typescript
playAnimHover(): void {
    if (this.spineHover) {
        this.spineHover.node.active = true;
        this.spineHover.setAnimation(0, this.animHover, true);
    }
    this.isOnHover = true;
}
```
