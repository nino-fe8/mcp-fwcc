---
id: "cc_slot_mechanics:NudgeTableModule:recipes:custom_implementation"
title: "Recipe: Custom NudgeTableModule Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["NudgeTableModule", "nudge_table_module", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom NudgeTableModule Subclass Implementation

<!-- convention-summary-start -->
### Recipe: Custom NudgeTableModule Subclass Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom NudgeTableModule Subclass Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { NudgeTableModule } from 'assets/cc-common/cc-slot-mechanics/NudgeReel/scripts/NudgeTableModule';

@ccclass
export default class CustomNudgeTableModule extends NudgeTableModule {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
