---
id: "cc_slot_module:WinAmountTooltipModule:recipes:01_custom_feature_banners_red_cliff"
title: "Custom Feature Banners in Red Cliff"
category: "cc_slot_module"
tags: ["WinAmountTooltipModule", "winamounttooltipmodule", "cc_slot_module", "recipes", "red_cliff"]
---

# 💡 Custom Feature Banners in Red Cliff

<!-- convention-summary-start -->
### Custom Feature Banners in Red Cliff Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Custom Feature Banners in Red Cliff.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Implementation

```typescript
const { ccclass } = cc._decorator;
import { WinAmountTooltipModule } from 'assets/cc-common/cc-slot-module/BasePortrait/WinAmountTooltip/WinAmountTooltipModule';

@ccclass('WinAmountTooltipModule9666')
export class WinAmountTooltipModule9666 extends WinAmountTooltipModule {
    showWinAmount(payload: any): void {
        super.showWinAmount(payload);
    }
}
```
