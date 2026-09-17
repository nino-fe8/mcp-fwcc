---
id: "cc_slot_mechanics:NudgeReelModule:recipes:custom_implementation"
title: "Recipe: Custom NudgeReelModule Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["NudgeReelModule", "nudge_reel_module", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom NudgeReelModule Subclass Implementation

<!-- convention-summary-start -->
### Recipe: Custom NudgeReelModule Subclass Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom NudgeReelModule Subclass Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { NudgeReelModule } from 'assets/cc-common/cc-slot-mechanics/NudgeReel/scripts/NudgeReelModule';

@ccclass
export default class CustomNudgeReelModule extends NudgeReelModule {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
