---
id: "cc_slot_mechanics:InfinityTableModule:recipes:custom_implementation"
title: "Recipe: Custom InfinityTableModule Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["InfinityTableModule", "infinity_table_module", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom InfinityTableModule Subclass Implementation

<!-- convention-summary-start -->
### Recipe: Custom InfinityTableModule Subclass Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom InfinityTableModule Subclass Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { InfinityTableModule } from 'assets/cc-common/cc-slot-mechanics/InfinityReel/scripts/InfinityTableModule';

@ccclass
export default class CustomInfinityTableModule extends InfinityTableModule {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
