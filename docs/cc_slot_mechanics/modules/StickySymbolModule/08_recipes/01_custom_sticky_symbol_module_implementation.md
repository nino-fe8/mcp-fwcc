---
id: "cc_slot_mechanics:StickySymbolModule:recipes:custom_implementation"
title: "Recipe: Custom StickySymbolModule Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["StickySymbolModule", "sticky_symbol_module", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom StickySymbolModule Subclass Implementation

<!-- convention-summary-start -->
### Recipe: Custom StickySymbolModule Subclass Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom StickySymbolModule Subclass Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { StickySymbolModule } from 'assets/cc-common/cc-slot-mechanics/StickySymbol/scripts/StickySymbolModule';

@ccclass
export default class CustomStickySymbolModule extends StickySymbolModule {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
