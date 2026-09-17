---
id: "cc_slot_module:SlotTableNearWinModule:recipes:custom_anticipation_trigger_rules"
title: "Recipe: Custom Anticipation Rules for Scatter-Anywhere Games"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "recipes", "custom_rules"]
---

# 💡 Recipe: Custom Anticipation Rules for Scatter-Anywhere Games

<!-- convention-summary-start -->
### Recipe: Custom Anticipation Rules for Scatter-Anywhere Games Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom Anticipation Rules for Scatter-Anywhere Games.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Context & Use Case

In games where 3+ Scatter symbols can appear anywhere across columns 1 to 5 (not restricted to contiguous left-to-right columns), `_canWinFree(col)` must be customized so anticipation activates on any remaining column whenever 2 Scatters have already landed.

---

## 2. Implementation Subclass

```typescript
const { ccclass } = cc._decorator;
import { SlotTableNearWinModule } from "SlotTableNearWinModule";

@ccclass
export class ScatterAnywhereNearWinModule9666 extends SlotTableNearWinModule {
    _canWinFree(col: number): boolean {
        // As long as we need fewer scatters than remaining columns, we can win
        const remainingCols = 5 - (col + 1);
        const neededScatters = 3 - this._countScatter;
        return neededScatters <= remainingCols + 1;
    }
}
```
