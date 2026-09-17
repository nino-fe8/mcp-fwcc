---
id: "cc_slot_module:PayTablePanel:recipes:01_custom_paytable_portrait_red_cliff"
title: "Custom PayTable Portrait in Red Cliff"
category: "cc_slot_module"
tags: ["PayTablePanel", "paytablepanel", "cc_slot_module", "recipes", "red_cliff"]
---

# 💡 Custom PayTable Portrait in Red Cliff

<!-- convention-summary-start -->
### Custom PayTable Portrait in Red Cliff Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Custom PayTable Portrait in Red Cliff.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Implementation

```typescript
const { ccclass } = cc._decorator;
import { PayTablePanel } from 'assets/cc-common/cc-slot-module/BasePortrait/PayTablePanel/PayTablePanel';

@ccclass('PayTablePanel9666')
export class PayTablePanel9666 extends PayTablePanel {
    showPayTablePanel(isActive: boolean): void {
        super.showPayTablePanel(isActive);
        if (isActive) {
            this.node.emit('UPDATE_SYMBOL_PAYOUTS');
        }
    }
}
```
