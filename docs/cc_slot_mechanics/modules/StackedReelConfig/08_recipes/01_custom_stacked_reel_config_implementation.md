---
id: "cc_slot_mechanics:StackedReelConfig:recipes:custom_implementation"
title: "Recipe: Custom StackedReelConfig Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["StackedReelConfig", "stacked_reel_config", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom StackedReelConfig Subclass Implementation

<!-- convention-summary-start -->
### Recipe: Custom StackedReelConfig Subclass Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom StackedReelConfig Subclass Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { StackedReelConfig } from 'assets/cc-common/cc-slot-mechanics/StackedReel/StackedReelConfig';

@ccclass
export default class CustomStackedReelConfig extends StackedReelConfig {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
