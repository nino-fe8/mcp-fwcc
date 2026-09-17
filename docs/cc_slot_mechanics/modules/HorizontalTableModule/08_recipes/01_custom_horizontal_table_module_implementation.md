---
id: "cc_slot_mechanics:HorizontalTableModule:recipes:custom_implementation"
title: "Recipe: Custom HorizontalTableModule Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["HorizontalTableModule", "horizontal_table_module", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom HorizontalTableModule Subclass Implementation

<!-- convention-summary-start -->
### Recipe: Custom HorizontalTableModule Subclass Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom HorizontalTableModule Subclass Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { HorizontalTableModule } from 'assets/cc-common/cc-slot-mechanics/HorizontalReel/scripts/HorizontalTableModule';

@ccclass
export default class CustomHorizontalTableModule extends HorizontalTableModule {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
