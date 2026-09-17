---
id: "cc_slot_module:LoadingScreenModule:recipes:custom_themed_loading_screen"
title: "Recipe: Themed Loading Screen with Custom Spine Animation"
category: "cc_slot_module"
tags: ["LoadingScreenModule", "loading_screen_module", "cc_slot_module", "recipes", "themed_loader"]
---

# 💡 Recipe: Themed Loading Screen with Custom Spine Animation

<!-- convention-summary-start -->
### Recipe: Themed Loading Screen with Custom Spine Animation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Themed Loading Screen with Custom Spine Animation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Code Example

```typescript
import { LoadingScreenModule } from 'cc-slot-module/Components/LoadingScreenModule';

export class ThemedLoadingScreen extends LoadingScreenModule {
    @property(sp.Skeleton)
    mascotSpine: sp.Skeleton = null;

    updateLabelProgress(value: number): void {
        super.updateLabelProgress(value);
        if (this.mascotSpine) {
            // Speed up mascot running animation as progress nears 100%
            this.mascotSpine.timeScale = 1.0 + value * 1.5;
        }
    }
}
```
