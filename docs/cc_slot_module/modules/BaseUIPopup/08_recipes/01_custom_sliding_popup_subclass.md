---
id: "cc_slot_module:BaseUIPopup:recipes:custom_sliding_popup_subclass"
title: "Recipe: Implementing a Sliding Drawer Modal Subclass"
category: "cc_slot_module"
tags: ["BaseUIPopup", "base_ui_popup", "cc_slot_module", "recipes", "subclass_example"]
---

# 💡 Recipe: Implementing a Sliding Drawer Modal Subclass

<!-- convention-summary-start -->
### Recipe: Implementing a Sliding Drawer Modal Subclass Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Implementing a Sliding Drawer Modal Subclass.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Definition

```typescript
const { ccclass, property } = cc._decorator;
import { BaseUIPopup } from "cc-common/cc-slot-module/Popup/BaseUIPopup";
import { SlidePopupBehavior } from "cc-common/cc-slot-module/Popup/Behavior/SlidePopupBehavior";

@ccclass
export class CustomSlideDrawer extends BaseUIPopup {
    onLoadExtend(): void {
        this.popupBehavior = this.node.getComponent(SlidePopupBehavior);
        if (!this.popupBehavior) {
            this.popupBehavior = this.node.addComponent(SlidePopupBehavior);
        }
        super.onLoadExtend();
    }
}
```
