---
id: "cc_slot_mechanics:HorizontalCascadeData:recipes:custom_implementation"
title: "Recipe: Custom HorizontalCascadeData Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeData", "horizontal_cascade_data", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom HorizontalCascadeData Subclass Implementation

<!-- convention-summary-start -->
### Recipe: Custom HorizontalCascadeData Subclass Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom HorizontalCascadeData Subclass Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { HorizontalCascadeData } from 'assets/cc-common/cc-slot-mechanics/HorizontalCascade/scripts/HorizontalCascadeData';

@ccclass
export default class CustomHorizontalCascadeData extends HorizontalCascadeData {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
