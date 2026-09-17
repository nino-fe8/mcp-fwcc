---
id: "cc_slot_mechanics:InstantCashData:recipes:custom_implementation"
title: "Recipe: Custom InstantCashData Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["InstantCashData", "instant_cash_data", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom InstantCashData Subclass Implementation

<!-- convention-summary-start -->
### Recipe: Custom InstantCashData Subclass Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom InstantCashData Subclass Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { InstantCashData } from 'assets/cc-common/cc-slot-mechanics/InstantCash/scripts/InstantCashData';

@ccclass
export default class CustomInstantCashData extends InstantCashData {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
