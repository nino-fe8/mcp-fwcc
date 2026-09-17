---
id: "cc_slot_mechanics:CellTableConfig:recipes:custom_implementation"
title: "Recipe: Custom CellTableConfig Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["CellTableConfig", "cell_table_config", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom CellTableConfig Subclass Implementation

<!-- convention-summary-start -->
### Recipe: Custom CellTableConfig Subclass Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom CellTableConfig Subclass Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { CellTableConfig } from 'assets/cc-common/cc-slot-mechanics/SlotCellTable/scripts/CellTableConfig';

@ccclass
export default class CustomCellTableConfig extends CellTableConfig {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
