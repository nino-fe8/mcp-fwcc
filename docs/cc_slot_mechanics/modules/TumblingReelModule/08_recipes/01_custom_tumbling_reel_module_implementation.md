---
id: "cc_slot_mechanics:TumblingReelModule:recipes:custom_implementation"
title: "Recipe: Custom TumblingReelModule Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["TumblingReelModule", "tumbling_reel_module", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom TumblingReelModule Subclass Implementation

<!-- convention-summary-start -->
### Recipe: Custom TumblingReelModule Subclass Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom TumblingReelModule Subclass Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { TumblingReelModule } from 'assets/cc-common/cc-slot-mechanics/TumblingReel/scripts/TumblingReelModule';

@ccclass
export default class CustomTumblingReelModule extends TumblingReelModule {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
