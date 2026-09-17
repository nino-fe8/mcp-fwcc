---
id: "cc_slot_module:PaylineNumberModule:recipes:animated_glowing_payline_badges"
title: "Recipe: Pulsating Glow Animations on Payline Number Badges"
category: "cc_slot_module"
tags: ["PaylineNumberModule", "payline_number_module", "cc_slot_module", "recipes", "tweens", "badges"]
---

# 💡 Recipe: Pulsating Glow Animations on Payline Number Badges

<!-- convention-summary-start -->
### Recipe: Pulsating Glow Animations on Payline Number Badges Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Pulsating Glow Animations on Payline Number Badges.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Objective

Enhance `PaylineNumberItem` with smooth scale and opacity pulsing when the line is selected.

```typescript
@ccclass
export class GlowingPaylineNumberItem extends PaylineNumberItem {
    @property(cc.Node)
    private glowEffect: cc.Node = null;

    public show(): void {
        this.node.active = true;
        if (this.glowEffect) {
            this.glowEffect.active = true;
            cc.tween(this.glowEffect)
                .to(0.3, { scale: 1.2, opacity: 255 })
                .to(0.3, { scale: 1.0, opacity: 180 })
                .union()
                .repeatForever()
                .start();
        }
    }

    public hide(): void {
        if (this.glowEffect) {
            cc.Tween.stopAllByTarget(this.glowEffect);
            this.glowEffect.active = false;
        }
        this.node.active = false;
    }
}
```
