---
id: "cc_slot_mechanics:HorizontalTableData:recipes:custom_implementation"
title: "Recipe: Custom HorizontalTableData Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["HorizontalTableData", "horizontal_table_data", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom HorizontalTableData Subclass Implementation

<!-- convention-summary-start -->
### Recipe: Custom HorizontalTableData Subclass Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom HorizontalTableData Subclass Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { HorizontalTableData } from 'assets/cc-common/cc-slot-mechanics/HorizontalReel/scripts/HorizontalTableData';

@ccclass
export default class CustomHorizontalTableData extends HorizontalTableData {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
