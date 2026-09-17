---
id: "cc_slot_mechanics:InfinityTableData:recipes:custom_implementation"
title: "Recipe: Custom InfinityTableData Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["InfinityTableData", "infinity_table_data", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom InfinityTableData Subclass Implementation

<!-- convention-summary-start -->
### Recipe: Custom InfinityTableData Subclass Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom InfinityTableData Subclass Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { InfinityTableData } from 'assets/cc-common/cc-slot-mechanics/InfinityReel/scripts/InfinityTableData';

@ccclass
export default class CustomInfinityTableData extends InfinityTableData {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
