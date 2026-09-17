---
id: "cc_slot_module:BaseCutscene:recipes:custom_interactive_bonus_modal"
title: "Recipe: Creating an Interactive Bonus Selection Cutscene Modal"
category: "cc_slot_module"
tags: ["BaseCutscene", "base_cutscene", "cc_slot_module", "recipes", "interactive_modal", "bonus"]
---

# 💡 Recipe: Creating an Interactive Bonus Selection Cutscene Modal

<!-- convention-summary-start -->
### Recipe: Creating an Interactive Bonus Selection Cutscene Modal Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Creating an Interactive Bonus Selection Cutscene Modal.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Objective

Implement a custom chest selection modal extending `BaseCutscene`:

```typescript
@ccclass
export class TreasureChestCutscene extends BaseCutscene {
    @property(cc.Node) chests: cc.Node[] = [];

    enter(): void {
        this.chests.forEach((chest, idx) => {
            chest.active = true;
            chest.on(cc.Node.EventType.TOUCH_END, () => this.onSelectChest(idx), this);
        });
    }

    onSelectChest(idx: number): void {
        this.chests.forEach(c => c.off(cc.Node.EventType.TOUCH_END));
        // Play reveal animation, then close:
        this.scheduleOnce(() => {
            this.exit();
        }, 1.5);
    }
}
```
