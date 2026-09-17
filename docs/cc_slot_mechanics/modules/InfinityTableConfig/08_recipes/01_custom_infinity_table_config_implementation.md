---
id: "cc_slot_mechanics:InfinityTableConfig:recipes:custom_implementation"
title: "Recipe: Custom InfinityTableConfig Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["InfinityTableConfig", "infinity_table_config", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom InfinityTableConfig Subclass Implementation

<!-- convention-summary-start -->
### Recipe: Custom InfinityTableConfig Subclass Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom InfinityTableConfig Subclass Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { InfinityTableConfig } from 'assets/cc-common/cc-slot-mechanics/InfinityReel/scripts/InfinityTableConfig';

@ccclass
export default class CustomInfinityTableConfig extends InfinityTableConfig {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
