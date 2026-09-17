---
id: "cc_slot_module:JackpotHistoryModule:recipes:01_custom_tier_filtering_red_cliff"
title: "Custom Tier Filtering in Red Cliff"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "recipes", "red_cliff"]
---

# 💡 Custom Tier Filtering in Red Cliff

<!-- convention-summary-start -->
### Custom Tier Filtering in Red Cliff Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Custom Tier Filtering in Red Cliff.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Implementation

```typescript
const { ccclass } = cc._decorator;
import { JackpotHistoryModule } from 'assets/cc-common/cc-slot-module/Popup/JackpotHistory/JackpotHistoryModule';

@ccclass('JackpotHistoryModule9666')
export class JackpotHistoryModule9666 extends JackpotHistoryModule {
    onLoadExtend(): void {
        this.jpList = "GRAND-MAJOR-MINOR"; // Query top 3 tiers
        super.onLoadExtend();
    }
}
```
