---
id: "cc_slot_module:CanvasModuleController:methods:onDestroy"
title: "CanvasModuleController.onDestroy Method"
category: "cc_slot_module"
tags: ["CanvasModuleController", "canvas_module_controller", "cc_slot_module", "methods", "onDestroy"]
---

# 📖 `CanvasModuleController.onDestroy()`

<!-- convention-summary-start -->
### CanvasModuleController.onDestroy Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CanvasModuleController.onDestroy Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Complete Source Code Implementation

```typescript
onDestroy(): void {
    this._canvasController && this._canvasController.onDestroy();
}
```
