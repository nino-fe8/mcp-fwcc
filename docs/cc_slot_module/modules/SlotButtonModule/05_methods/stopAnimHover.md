---
id: "cc_slot_module:SlotButtonModule:methods:stopAnimHover"
title: "SlotButtonSpine.stopAnimHover Method"
category: "cc_slot_module"
tags: ["SlotButtonModule", "SlotButtonSpine", "cc_slot_module", "methods", "stopAnimHover", "spine"]
---

# 📖 `SlotButtonSpine.stopAnimHover()`

<!-- convention-summary-start -->
### SlotButtonSpine.stopAnimHover Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotButtonSpine.stopAnimHover Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Deactivates the `spineHover` overlay node when cursor leaves button area.

```typescript
public stopAnimHover(): void
```

---

## 2. Complete Source Code Implementation

```typescript
stopAnimHover(): void {
    if (this.spineHover) {
        this.spineHover.node.active = false;
    }
    this.isOnHover = false;
}
```
