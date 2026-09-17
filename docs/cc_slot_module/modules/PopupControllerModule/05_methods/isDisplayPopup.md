---
id: "cc_slot_module:PopupControllerModule:methods:isDisplayPopup"
title: "PopupControllerModule.isDisplayPopup Method"
category: "cc_slot_module"
tags: ["PopupControllerModule", "popup_controller", "cc_slot_module", "methods", "isDisplayPopup"]
---

# 📖 `PopupControllerModule.isDisplayPopup()`

<!-- convention-summary-start -->
### PopupControllerModule.isDisplayPopup Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PopupControllerModule.isDisplayPopup Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Returns true if any child modal dialog is active in the hierarchy.

```typescript
public isDisplayPopup(): boolean
```

---

## 2. Complete Source Code Implementation

```typescript
isDisplayPopup(): boolean {
    return this.node.children.some(child => child.active);
}
```
