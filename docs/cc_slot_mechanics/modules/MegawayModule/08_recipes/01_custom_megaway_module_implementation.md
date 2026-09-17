---
id: "cc_slot_mechanics:MegawayModule:recipes:custom_implementation"
title: "Recipe: Custom MegawayModule Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["MegawayModule", "megaway_module", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom MegawayModule Subclass Implementation

<!-- convention-summary-start -->
### Recipe: Custom MegawayModule Subclass Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom MegawayModule Subclass Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { MegawayModule } from 'assets/cc-common/cc-slot-mechanics/Megaway/scripts/MegawayModule';

@ccclass
export default class CustomMegawayModule extends MegawayModule {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
