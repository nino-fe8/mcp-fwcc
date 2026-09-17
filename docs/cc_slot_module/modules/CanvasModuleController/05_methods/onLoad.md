---
id: "cc_slot_module:CanvasModuleController:methods:onLoad"
title: "CanvasModuleController.onLoad Method"
category: "cc_slot_module"
tags: ["CanvasModuleController", "canvas_module_controller", "cc_slot_module", "methods", "onLoad"]
---

# 📖 `CanvasModuleController.onLoad()`

<!-- convention-summary-start -->
### CanvasModuleController.onLoad Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CanvasModuleController.onLoad Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Complete Source Code Implementation

```typescript
onLoad(): void {
    this._canvasController = new eno.CanvasControllerWrapper(
        this.autoOrientation,
        this.isPortrait,
        this.fitByOrientation,
        this.useCustomDesignResolution,
        this.customDSWidth,
        this.customDSHeight,
        this.widgetNodes,
        this.minScreenRatio,
        this.isDebug,
        this.canvas,
        this.node);
}
```
