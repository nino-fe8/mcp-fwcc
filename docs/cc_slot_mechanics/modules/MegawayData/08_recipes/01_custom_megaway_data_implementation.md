---
id: "cc_slot_mechanics:MegawayData:recipes:custom_implementation"
title: "Recipe: Custom MegawayData Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["MegawayData", "megaway_data", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom MegawayData Subclass Implementation

<!-- convention-summary-start -->
### Recipe: Custom MegawayData Subclass Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom MegawayData Subclass Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { MegawayData } from 'assets/cc-common/cc-slot-mechanics/Megaway/scripts/MegawayData';

@ccclass
export default class CustomMegawayData extends MegawayData {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
