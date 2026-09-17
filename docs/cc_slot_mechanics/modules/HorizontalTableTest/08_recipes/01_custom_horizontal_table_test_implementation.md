---
id: "cc_slot_mechanics:HorizontalTableTest:recipes:custom_implementation"
title: "Recipe: Custom HorizontalTableTest Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["HorizontalTableTest", "horizontal_table_test", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom HorizontalTableTest Subclass Implementation

<!-- convention-summary-start -->
### Recipe: Custom HorizontalTableTest Subclass Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom HorizontalTableTest Subclass Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { HorizontalTableTest } from 'assets/cc-common/cc-slot-mechanics/HorizontalReel/scripts/HorizontalTableTest';

@ccclass
export default class CustomHorizontalTableTest extends HorizontalTableTest {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
