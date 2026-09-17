---
id: "cc_slot_mechanics:CascadeWildGenerationModule:recipes:custom_implementation"
title: "Recipe: Custom CascadeWildGenerationModule Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationModule", "cascade_wild_generation_module", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom CascadeWildGenerationModule Subclass Implementation

<!-- convention-summary-start -->
### Recipe: Custom CascadeWildGenerationModule Subclass Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom CascadeWildGenerationModule Subclass Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { CascadeWildGenerationModule } from 'assets/cc-common/cc-slot-mechanics/CascadeWildGeneration/scripts/CascadeWildGenerationModule';

@ccclass
export default class CustomCascadeWildGenerationModule extends CascadeWildGenerationModule {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
