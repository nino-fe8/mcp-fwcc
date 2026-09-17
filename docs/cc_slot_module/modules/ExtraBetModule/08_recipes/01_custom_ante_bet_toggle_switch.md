---
id: "cc_slot_module:ExtraBetModule:recipes:custom_ante_bet_toggle_switch"
title: "Recipe: Implementing a 2-State On/Off Ante-Bet Toggle Switch"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "recipes", "toggle_switch"]
---

# 💡 Recipe: Implementing a 2-State On/Off Ante-Bet Toggle Switch

<!-- convention-summary-start -->
### Recipe: Implementing a 2-State On/Off Ante-Bet Toggle Switch Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Implementing a 2-State On/Off Ante-Bet Toggle Switch.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Toggle Switch Subclass

```typescript
@ccclass
export class AnteBetToggleSwitch extends ExtraBetModule {
    @property(cc.Node) toggleOnNode: cc.Node = null;
    @property(cc.Node) toggleOffNode: cc.Node = null;

    onToggleClick(): void {
        const isCurrentlyActive = this.betModel && this.betModel.extraBetValue > 0;
        if (isCurrentlyActive) {
            this.onDecreaseExtraBet();
        } else {
            this.onIncreaseExtraBet();
        }
    }

    onUpdateTotalBet(): void {
        super.onUpdateTotalBet();
        const isActive = this.betModel && this.betModel.extraBetValue > 0;
        if (this.toggleOnNode) this.toggleOnNode.active = isActive;
        if (this.toggleOffNode) this.toggleOffNode.active = !isActive;
    }
}
```
