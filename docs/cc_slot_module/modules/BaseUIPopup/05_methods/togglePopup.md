---
id: "cc_slot_module:BaseUIPopup:methods:togglePopup"
title: "BaseUIPopup.togglePopup Method"
category: "cc_slot_module"
tags: ["BaseUIPopup", "base_ui_popup", "cc_slot_module", "methods", "togglePopup"]
---

# 📖 `BaseUIPopup.togglePopup()`

<!-- convention-summary-start -->
### BaseUIPopup.togglePopup Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseUIPopup.togglePopup Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Performs animated show or hide transition via `popupBehavior`, preventing redundant calls with `currentIsActive`.

```typescript
public togglePopup(isActive: boolean, cb?: () => void): void
```

---

## 2. Complete Source Code Implementation

```typescript
togglePopup(isActive: boolean, cb?: () => void): void {
    if (this.currentIsActive === isActive) {
        return;
    }
    this.currentIsActive = isActive;
    this.isClose = !isActive;
    if (isActive) {
        this.popupBehavior.showPopup(cb);
    } else {
        this.popupBehavior.hidePopup(cb);
    }
}
```
