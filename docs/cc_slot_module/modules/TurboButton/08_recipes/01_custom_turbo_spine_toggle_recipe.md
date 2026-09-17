---
id: "cc_slot_module:TurboButton:recipes:custom_turbo_spine_toggle_recipe"
title: "Recipe: Implementing Spine Flame Toggle on Turbo Button"
category: "cc_slot_module"
tags: ["TurboButton", "turbo_button", "cc_slot_module", "recipes", "spine_toggle"]
---

# 💡 Recipe: Implementing Spine Flame Toggle on Turbo Button

<!-- convention-summary-start -->
### Recipe: Implementing Spine Flame Toggle on Turbo Button Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Implementing Spine Flame Toggle on Turbo Button.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Component Implementation on `display` Node

```typescript
@ccclass
export class TurboSpineDisplay extends cc.Component {
    @property(sp.Skeleton) spine: sp.Skeleton = null;

    onLoad() {
        this.node.on("ON_TURBO_ACTIVE", this.onTurboActive, this);
    }

    onTurboActive(active: boolean) {
        if (active) {
            this.spine.setAnimation(0, "turbo_on", true);
        } else {
            this.spine.setAnimation(0, "turbo_off", false);
        }
    }
}
```
