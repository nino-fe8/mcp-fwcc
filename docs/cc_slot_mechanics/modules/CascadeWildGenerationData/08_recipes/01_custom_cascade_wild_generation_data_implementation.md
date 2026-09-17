---
id: "cc_slot_mechanics:CascadeWildGenerationData:recipes:custom_implementation"
title: "Recipe: Custom CascadeWildGenerationData Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationData", "cascade_wild_generation_data", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom CascadeWildGenerationData Subclass Implementation

<!-- convention-summary-start -->
### Recipe: Custom CascadeWildGenerationData Subclass Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom CascadeWildGenerationData Subclass Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { CascadeWildGenerationData } from 'assets/cc-common/cc-slot-mechanics/CascadeWildGeneration/scripts/CascadeWildGenerationData';

@ccclass
export default class CustomCascadeWildGenerationData extends CascadeWildGenerationData {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
