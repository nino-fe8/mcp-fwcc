---
id: "cc_slot_module:JackpotWinNoticePopup:recipes:01_custom_banner_spine_red_cliff"
title: "Custom Banner Spine in Red Cliff"
category: "cc_slot_module"
tags: ["JackpotWinNoticePopup", "jackpotwinnoticepopup", "cc_slot_module", "recipes", "red_cliff"]
---

# 💡 Custom Banner Spine in Red Cliff

<!-- convention-summary-start -->
### Custom Banner Spine in Red Cliff Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Custom Banner Spine in Red Cliff.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Implementation

```typescript
const { ccclass, property } = cc._decorator;
import { JackpotWinNoticePopup } from 'assets/cc-common/cc-slot-module/Popup/NotifyJackpot/JackpotWinNoticePopup';

@ccclass('JackpotWinNoticePopup9666')
export class JackpotWinNoticePopup9666 extends JackpotWinNoticePopup {
    @property(sp.Skeleton)
    goldDragonSpine: sp.Skeleton = null;

    showInfo(): void {
        super.showInfo();
        if (this.goldDragonSpine) {
            this.goldDragonSpine.setAnimation(0, 'dragon_fly', false);
        }
    }
}
```
