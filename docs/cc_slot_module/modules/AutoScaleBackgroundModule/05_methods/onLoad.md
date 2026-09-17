---
id: "cc_slot_module:AutoScaleBackgroundModule:methods:onLoad"
title: "AutoScaleBackgroundModule.onLoad Method"
category: "cc_slot_module"
tags: ["AutoScaleBackgroundModule", "auto_scale_background_module", "cc_slot_module", "methods", "onLoad"]
---

# 📖 `AutoScaleBackgroundModule.onLoad()`

<!-- convention-summary-start -->
### AutoScaleBackgroundModule.onLoad Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for AutoScaleBackgroundModule.onLoad Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Complete Source Code Implementation

```typescript
onLoad(): void {
    this._thisOnResized = this.onScreenResized.bind(this);
    if (sys.isBrowser) {
        window.addEventListener('resize', this._thisOnResized);
    } else {
        view.on('canvas-resize', this._thisOnResized);
    }
}
```
