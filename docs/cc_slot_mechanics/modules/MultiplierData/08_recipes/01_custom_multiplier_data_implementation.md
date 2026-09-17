---
id: "cc_slot_mechanics:MultiplierData:recipes:custom_implementation"
title: "Recipe: Custom MultiplierData Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["MultiplierData", "multiplier_data", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom MultiplierData Subclass Implementation

<!-- convention-summary-start -->
### Recipe: Custom MultiplierData Subclass Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom MultiplierData Subclass Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { MultiplierData } from 'assets/cc-common/cc-slot-mechanics/Multiplier/scripts/MultiplierData';

@ccclass
export default class CustomMultiplierData extends MultiplierData {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
