---
id: "cc_slot_module:BetHistoryDetailModule:recipes:01_custom_step_renderer_red_cliff"
title: "Custom Step Renderer in Red Cliff Slot"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "recipes", "red_cliff", "g9666L"]
---

# 💡 Custom Step Renderer in Red Cliff Slot (`g9666L`)

<!-- convention-summary-start -->
### Custom Step Renderer in Red Cliff Slot Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Custom Step Renderer in Red Cliff Slot.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Production Recipe

```typescript
const { ccclass, property } = cc._decorator;
import { BetHistoryDetailModule } from 'assets/cc-common/cc-slot-module/Popup/BetHistory/BetHistoryDetailModule';

@ccclass('BetHistoryDetailModule9666')
export class BetHistoryDetailModule9666 extends BetHistoryDetailModule {
    @property(cc.Node)
    multiplierBadge: cc.Node = null;

    updateGameModeInfo(data: any): void {
        super.updateGameModeInfo(data);
        if (this.multiplierBadge && data && data.customData) {
            const mult = data.customData.wildMultiplier || 1;
            this.multiplierBadge.active = mult > 1;
        }
    }
}
```
