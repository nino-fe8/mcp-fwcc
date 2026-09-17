---
id: "cc_slot_module:BetSelectionPanel:recipes:01_custom_wheel_items_red_cliff"
title: "Custom Wheel Items in Red Cliff"
category: "cc_slot_module"
tags: ["BetSelectionPanel", "betselectionpanel", "cc_slot_module", "recipes", "red_cliff"]
---

# 💡 Custom Wheel Items in Red Cliff

<!-- convention-summary-start -->
### Custom Wheel Items in Red Cliff Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Custom Wheel Items in Red Cliff.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Implementation

```typescript
const { ccclass } = cc._decorator;
import { BetSelectionPanel } from 'assets/cc-common/cc-slot-module/BasePortrait/BetSelectionPanel/BetSelectionPanel';

@ccclass('BetSelectionPanel9666')
export class BetSelectionPanel9666 extends BetSelectionPanel {
    onConfirmBet(): void {
        super.onConfirmBet();
        this.soundPlayer.playSFXClick();
    }
}
```
