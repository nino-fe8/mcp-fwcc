---
id: "cc_slot_mechanics:CellTableData:recipes:custom_implementation"
title: "Recipe: Custom CellTableData Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["CellTableData", "cell_table_data", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom CellTableData Subclass Implementation

<!-- convention-summary-start -->
### Recipe: Custom CellTableData Subclass Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom CellTableData Subclass Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { CellTableData } from 'assets/cc-common/cc-slot-mechanics/SlotCellTable/scripts/CellTableData';

@ccclass
export default class CustomCellTableData extends CellTableData {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
