---
id: "cc_slot_module:AutoScaleBackgroundModule:methods:scaleCanvasByOrientation"
title: "AutoScaleBackgroundModule.scaleCanvasByOrientation Method"
category: "cc_slot_module"
tags: ["AutoScaleBackgroundModule", "auto_scale_background_module", "cc_slot_module", "methods", "scaleCanvasByOrientation"]
---

# 📖 `AutoScaleBackgroundModule.scaleCanvasByOrientation()`

<!-- convention-summary-start -->
### AutoScaleBackgroundModule.scaleCanvasByOrientation Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for AutoScaleBackgroundModule.scaleCanvasByOrientation Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Complete Source Code Implementation

```typescript
scaleCanvasByOrientation(): void {
    let widthBackground = 960;
    let heightBackground = 640;

    let heightDefaultCanvas = 1280;
    let widthView = cc.view.getFrameSize().width;
    let heightView = cc.view.getFrameSize().height;

    let scaleHeightDevice = heightView / heightDefaultCanvas;
    let scaleWidthDevice = widthView/ heightDefaultCanvas;

    let realScaleDevice = scaleHeightDevice > scaleWidthDevice ? scaleWidthDevice : scaleHeightDevice;

    let convertWithBG = widthBackground * realScaleDevice;
    let convertHeightBG = heightBackground * realScaleDevice;
    
    let ratioW = widthView / convertWithBG;
    let ratioH = heightView / convertHeightBG;

    if (ratioW > ratioH) {
        this.node.scale = ratioW;
    } else {
        this.node.scale = ratioH;
    }
}
```
