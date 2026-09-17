---
id: "cc_slot_module:BetHistoryDetailPortrait:recipes:01_custom_respin_replay_red_cliff"
title: "Custom Respin Replay in Red Cliff"
category: "cc_slot_module"
tags: ["BetHistoryDetailPortrait", "bethistorydetailportrait", "cc_slot_module", "recipes", "red_cliff"]
---

# 💡 Custom Respin Replay in Red Cliff

<!-- convention-summary-start -->
### Custom Respin Replay in Red Cliff Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Custom Respin Replay in Red Cliff.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Implementation

```typescript
const { ccclass } = cc._decorator;
import { BetHistoryDetailPortrait } from 'assets/cc-common/cc-slot-module/BasePortrait/BetHistoryPortrait/scripts/BetHistoryDetailPortrait';

@ccclass('BetHistoryDetailPortrait9666')
export class BetHistoryDetailPortrait9666 extends BetHistoryDetailPortrait {
    onNextRespinBtnClick(): void {
        super.onNextRespinBtnClick();
    }
}
```
