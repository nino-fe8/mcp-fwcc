---
id: "cc_slot_mechanics:HorizontalTableConfig:recipes:custom_implementation"
title: "Recipe: Custom HorizontalTableConfig Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["HorizontalTableConfig", "horizontal_table_config", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom HorizontalTableConfig Subclass Implementation

<!-- convention-summary-start -->
### Recipe: Custom HorizontalTableConfig Subclass Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom HorizontalTableConfig Subclass Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { HorizontalTableConfig } from 'assets/cc-common/cc-slot-mechanics/HorizontalReel/scripts/HorizontalTableConfig';

@ccclass
export default class CustomHorizontalTableConfig extends HorizontalTableConfig {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
