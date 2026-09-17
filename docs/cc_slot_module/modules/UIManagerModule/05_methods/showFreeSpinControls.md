---
id: "cc_slot_module:UIManagerModule:methods:showFreeSpinControls"
title: "UIManagerModule.showFreeSpinControls Method"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "methods", "showFreeSpinControls"]
---

# 📖 `UIManagerModule.showFreeSpinControls()`

<!-- convention-summary-start -->
### UIManagerModule.showFreeSpinControls Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for UIManagerModule.showFreeSpinControls Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Activates free spin button and remaining free spin count badge while deactivating normal spin controls.

```typescript
public showFreeSpinControls(): void
```

---

## 2. Complete Source Code Implementation

```typescript
showFreeSpinControls(): void {
    this.setNodeActive(this.normalSpinButton, false);
    this.setNodeActive(this.normalSpinTimes, false);
    this.setNodeActive(this.freeSpinButton, true);
    this.setNodeActive(this.freeSpinTimes, true);
}
```
