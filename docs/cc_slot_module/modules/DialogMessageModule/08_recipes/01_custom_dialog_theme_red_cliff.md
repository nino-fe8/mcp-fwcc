---
id: "cc_slot_module:DialogMessageModule:recipes:01_custom_dialog_theme_red_cliff"
title: "Custom Dialog Theme in Red Cliff"
category: "cc_slot_module"
tags: ["DialogMessageModule", "dialogmessagemodule", "cc_slot_module", "recipes", "red_cliff"]
---

# 💡 Custom Dialog Theme in Red Cliff

<!-- convention-summary-start -->
### Custom Dialog Theme in Red Cliff Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Custom Dialog Theme in Red Cliff.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Implementation

```typescript
const { ccclass, property } = cc._decorator;
import { DialogMessageModule } from 'assets/cc-common/cc-slot-module/DialogMessage/DialogMessageModule';

@ccclass('DialogMessageModule9666')
export class DialogMessageModule9666 extends DialogMessageModule {
    @property(cc.Node)
    dragonBorder: cc.Node = null;

    showDialog(active: boolean): void {
        super.showDialog(active);
        if (this.dragonBorder) {
            this.dragonBorder.active = active;
        }
    }
}
```
