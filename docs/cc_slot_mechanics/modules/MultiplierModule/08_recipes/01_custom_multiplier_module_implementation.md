---
id: "cc_slot_mechanics:MultiplierModule:recipes:custom_implementation"
title: "Recipe: Custom MultiplierModule Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["MultiplierModule", "multiplier_module", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom MultiplierModule Subclass Implementation

<!-- convention-summary-start -->
### Recipe: Custom MultiplierModule Subclass Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom MultiplierModule Subclass Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { MultiplierModule } from 'assets/cc-common/cc-slot-mechanics/Multiplier/scripts/MultiplierModule';

@ccclass
export default class CustomMultiplierModule extends MultiplierModule {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
