---
id: "cc_slot_mechanics:InfinityTableTest:recipes:custom_implementation"
title: "Recipe: Custom InfinityTableTest Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["InfinityTableTest", "infinity_table_test", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom InfinityTableTest Subclass Implementation

<!-- convention-summary-start -->
### Recipe: Custom InfinityTableTest Subclass Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom InfinityTableTest Subclass Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { InfinityTableTest } from 'assets/cc-common/cc-slot-mechanics/InfinityReel/scripts/InfinityTableTest';

@ccclass
export default class CustomInfinityTableTest extends InfinityTableTest {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
