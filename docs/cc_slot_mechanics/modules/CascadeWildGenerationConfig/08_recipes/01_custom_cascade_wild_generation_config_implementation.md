---
id: "cc_slot_mechanics:CascadeWildGenerationConfig:recipes:custom_implementation"
title: "Recipe: Custom CascadeWildGenerationConfig Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationConfig", "cascade_wild_generation_config", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom CascadeWildGenerationConfig Subclass Implementation

<!-- convention-summary-start -->
### Recipe: Custom CascadeWildGenerationConfig Subclass Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom CascadeWildGenerationConfig Subclass Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { CascadeWildGenerationConfig } from 'assets/cc-common/cc-slot-mechanics/CascadeWildGeneration/scripts/CascadeWildGenerationConfig';

@ccclass
export default class CustomCascadeWildGenerationConfig extends CascadeWildGenerationConfig {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
