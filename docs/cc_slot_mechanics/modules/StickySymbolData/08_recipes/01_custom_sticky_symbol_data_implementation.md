---
id: "cc_slot_mechanics:StickySymbolData:recipes:custom_implementation"
title: "Recipe: Custom StickySymbolData Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["StickySymbolData", "sticky_symbol_data", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom StickySymbolData Subclass Implementation

<!-- convention-summary-start -->
### Recipe: Custom StickySymbolData Subclass Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom StickySymbolData Subclass Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { StickySymbolData } from 'assets/cc-common/cc-slot-mechanics/StickySymbol/scripts/StickySymbolData';

@ccclass
export default class CustomStickySymbolData extends StickySymbolData {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
