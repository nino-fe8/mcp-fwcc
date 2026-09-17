---
id: "cc_slot_module:UIManagerModule:methods:hideSpinControls"
title: "UIManagerModule.hideSpinControls Method"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "methods", "hideSpinControls"]
---

# 📖 `UIManagerModule.hideSpinControls()`

<!-- convention-summary-start -->
### UIManagerModule.hideSpinControls Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for UIManagerModule.hideSpinControls Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Deactivates normal and free spin buttons and remaining spin count badges.

```typescript
public hideSpinControls(): void
```

---

## 2. Complete Source Code Implementation

```typescript
hideSpinControls(): void {
    this.setNodeActive(this.normalSpinButton, false);
    this.setNodeActive(this.freeSpinButton, false);
    this.setNodeActive(this.normalSpinTimes, false);
    this.setNodeActive(this.freeSpinTimes, false);
}
```
