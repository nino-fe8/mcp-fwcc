---
id: "cc_slot_module:AutoScaleBackgroundModule:recipes:custom_bg_dimensions"
title: "Recipe: Overriding Base Dimensions for High-Res Backgrounds"
category: "cc_slot_module"
tags: ["AutoScaleBackgroundModule", "auto_scale_background_module", "cc_slot_module", "recipes"]
---

# 💡 Recipe: Overriding Base Dimensions for High-Res Backgrounds

<!-- convention-summary-start -->
### Recipe: Overriding Base Dimensions for High-Res Backgrounds Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Overriding Base Dimensions for High-Res Backgrounds.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


```typescript
import { AutoScaleBackground } from 'cc-slot-module/Components/Compat/AutoScaleBackgroundModule';

export class HighResAutoScaleBackground extends AutoScaleBackground {
    scaleCanvasByOrientation(): void {
        let widthBackground = 1920;
        let heightBackground = 1080;
        // Apply custom aspect ratio math
        super.scaleCanvasByOrientation();
    }
}
```
