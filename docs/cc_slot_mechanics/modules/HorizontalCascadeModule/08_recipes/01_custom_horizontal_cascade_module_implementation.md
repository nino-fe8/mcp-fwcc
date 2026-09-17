---
id: "cc_slot_mechanics:HorizontalCascadeModule:recipes:custom_implementation"
title: "Recipe: Custom HorizontalCascadeModule Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeModule", "horizontal_cascade_module", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom HorizontalCascadeModule Subclass Implementation

<!-- convention-summary-start -->
### Recipe: Custom HorizontalCascadeModule Subclass Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom HorizontalCascadeModule Subclass Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { HorizontalCascadeModule } from 'assets/cc-common/cc-slot-mechanics/HorizontalCascade/scripts/HorizontalCascadeModule';

@ccclass
export default class CustomHorizontalCascadeModule extends HorizontalCascadeModule {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
