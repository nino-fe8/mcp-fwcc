---
id: "cc_slot_mechanics:HorizontalReelModule:recipes:custom_implementation"
title: "Recipe: Custom HorizontalReelModule Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["HorizontalReelModule", "horizontal_reel_module", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom HorizontalReelModule Subclass Implementation

<!-- convention-summary-start -->
### Recipe: Custom HorizontalReelModule Subclass Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom HorizontalReelModule Subclass Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { HorizontalReelModule } from 'assets/cc-common/cc-slot-mechanics/HorizontalReel/scripts/HorizontalReelModule';

@ccclass
export default class CustomHorizontalReelModule extends HorizontalReelModule {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
