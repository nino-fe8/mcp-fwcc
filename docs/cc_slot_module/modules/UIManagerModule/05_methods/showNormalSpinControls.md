---
id: "cc_slot_module:UIManagerModule:methods:showNormalSpinControls"
title: "UIManagerModule.showNormalSpinControls Method"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "methods", "showNormalSpinControls"]
---

# 📖 `UIManagerModule.showNormalSpinControls()`

<!-- convention-summary-start -->
### UIManagerModule.showNormalSpinControls Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for UIManagerModule.showNormalSpinControls Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Activates normal spin button and remaining auto-spin count badge while deactivating free spin controls.

```typescript
public showNormalSpinControls(): void
```

---

## 2. Complete Source Code Implementation

```typescript
showNormalSpinControls(): void {
    this.setNodeActive(this.normalSpinButton, true);
    this.setNodeActive(this.normalSpinTimes, true);
    this.setNodeActive(this.freeSpinButton, false);
    this.setNodeActive(this.freeSpinTimes, false);
}
```
