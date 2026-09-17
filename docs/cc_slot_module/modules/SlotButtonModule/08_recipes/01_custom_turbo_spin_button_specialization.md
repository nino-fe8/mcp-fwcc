---
id: "cc_slot_module:SlotButtonModule:recipes:custom_turbo_spin_button_specialization"
title: "Recipe: Custom Spin Button with Embedded Lightning Mode"
category: "cc_slot_module"
tags: ["SlotButtonModule", "slot_button_module", "cc_slot_module", "recipes", "lightning_spin", "custom_button"]
---

# 💡 Recipe: Custom Spin Button with Embedded Lightning Mode

<!-- convention-summary-start -->
### Recipe: Custom Spin Button with Embedded Lightning Mode Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom Spin Button with Embedded Lightning Mode.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Lightning Spin Subclass

```typescript
@ccclass
export class CustomLightningSpinButton extends SlotButtonModule {
    onLoadExtend(): void {
        this.modelName = "CustomLightningButton";
        super.onLoadExtend();
    }

    addEventListeners(): void {
        super.addEventListeners();
        this.touchNode.on(cc.Node.EventType.TOUCH_START, this.onLightningClick, this);
    }

    onLightningClick(): void {
        this.gameLogic.emit(GameLogicUIEvents.LIGHTNING_SPIN_CLICKED);
    }
}
```
