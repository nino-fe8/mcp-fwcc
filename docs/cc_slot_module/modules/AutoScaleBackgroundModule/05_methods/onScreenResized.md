---
id: "cc_slot_module:AutoScaleBackgroundModule:methods:onScreenResized"
title: "AutoScaleBackgroundModule.onScreenResized Method"
category: "cc_slot_module"
tags: ["AutoScaleBackgroundModule", "auto_scale_background_module", "cc_slot_module", "methods", "onScreenResized"]
---

# 📖 `AutoScaleBackgroundModule.onScreenResized()`

<!-- convention-summary-start -->
### AutoScaleBackgroundModule.onScreenResized Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for AutoScaleBackgroundModule.onScreenResized Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Complete Source Code Implementation

```typescript
onScreenResized(): void {
    this.scaleCanvasByOrientation();
}
```
