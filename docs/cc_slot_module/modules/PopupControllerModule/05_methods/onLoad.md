---
id: "cc_slot_module:PopupControllerModule:methods:onLoad"
title: "PopupControllerModule.onLoad Method"
category: "cc_slot_module"
tags: ["PopupControllerModule", "popup_controller", "cc_slot_module", "methods", "onLoad"]
---

# 📖 `PopupControllerModule.onLoad()`

<!-- convention-summary-start -->
### PopupControllerModule.onLoad Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PopupControllerModule.onLoad Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Activates all child popup nodes during engine boot so their components run `onLoad()`.

```typescript
public onLoad(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoad(): void {
    // Turn it on for entering onLoad
    this.node.children.forEach(child => {
        child.active = true;
    });
}
```
