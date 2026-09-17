---
id: "cc_slot_module:BetHistoryModule:recipes:01_custom_bet_history_red_cliff"
title: "Custom Bet History in Red Cliff Slot"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "recipes", "red_cliff", "g9666L"]
---

# 💡 Custom Bet History in Red Cliff Slot (`g9666L`)

<!-- convention-summary-start -->
### Custom Bet History in Red Cliff Slot Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Custom Bet History in Red Cliff Slot.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Implementation Code

```typescript
const { ccclass, property } = cc._decorator;
import { BetHistoryModule } from 'assets/cc-common/cc-slot-module/Popup/BetHistory/BetHistoryModule';

@ccclass('BetHistoryModule9666')
export class BetHistoryModule9666 extends BetHistoryModule {
    @property(cc.Node)
    jackpotHighlightBadge: cc.Node = null;

    onLoadExtend(): void {
        this.itemPerPage = 6; // Custom 6 rows per page
        super.onLoadExtend();
    }

    onRecordDataChange(value: any): void {
        super.onRecordDataChange(value);
        if (this.jackpotHighlightBadge) {
            const hasJackpot = value && value.some((item: any) => item.isJackpotWin);
            this.jackpotHighlightBadge.active = hasJackpot;
        }
    }
}
```
