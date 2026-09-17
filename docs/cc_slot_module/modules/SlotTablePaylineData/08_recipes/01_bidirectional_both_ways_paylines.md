---
id: "cc_slot_module:SlotTablePaylineData:recipes:bidirectional_both_ways_paylines"
title: "Recipe: Both-Ways Paylines Ingestion and Sorting"
category: "cc_slot_module"
tags: ["SlotTablePaylineData", "slot_table_payline_data", "cc_slot_module", "recipes", "both_ways", "bidirectional"]
---

# 💡 Recipe: Both-Ways Paylines Ingestion and Sorting

<!-- convention-summary-start -->
### Recipe: Both-Ways Paylines Ingestion and Sorting Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Both-Ways Paylines Ingestion and Sorting.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Context & Use Case

For Starburst-style slot mechanics where 3+ contiguous identical symbols payout both from Reel 1 (Left-to-Right) and Reel 5 (Right-to-Left).

---

## 2. Implementation

```typescript
const { ccclass } = cc._decorator;
import { SlotTablePaylineData } from "SlotTablePaylineData";

@ccclass
export class BothWaysPaylineData extends SlotTablePaylineData {
    protected convertPayLine(payLines: string[] = [], isRight: boolean = false): any[] {
        const converted = super.convertPayLine(payLines, isRight);
        // Custom 5-of-a-kind deduplication if both directions trigger identical full-line payout
        return converted;
    }
}
```
