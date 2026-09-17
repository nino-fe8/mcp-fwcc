---
id: "cc_slot_module:WaitingSceneModule:recipes:custom_spinner_animation"
title: "Recipe: Adding Spine Spinner Loop to Waiting Screen"
category: "cc_slot_module"
tags: ["WaitingSceneModule", "waiting_scene_module", "cc_slot_module", "recipes"]
---

# 💡 Recipe: Adding Spine Spinner Loop to Waiting Screen

<!-- convention-summary-start -->
### Recipe: Adding Spine Spinner Loop to Waiting Screen Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Adding Spine Spinner Loop to Waiting Screen.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


```typescript
import { WaitingSceneModule } from 'cc-slot-module/Components/WaitingSceneModule';

export class CustomWaitingScene extends WaitingSceneModule {
    @property(sp.Skeleton)
    spinnerSpine: sp.Skeleton = null;

    showWaitingScene(active: boolean): void {
        super.showWaitingScene(active);
        if (active && this.spinnerSpine) {
            this.spinnerSpine.setAnimation(0, 'spin_loop', true);
        }
    }
}
```
