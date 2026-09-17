---
id: "cc_slot_mechanics:RemovedSymbolData:recipes:custom_implementation"
title: "Recipe: Custom RemovedSymbolData Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["RemovedSymbolData", "removed_symbol_data", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom RemovedSymbolData Subclass Implementation

<!-- convention-summary-start -->
### Recipe: Custom RemovedSymbolData Subclass Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom RemovedSymbolData Subclass Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { RemovedSymbolData } from 'assets/cc-common/cc-slot-mechanics/RemovedSymbol/RemovedSymbolData';

@ccclass
export default class CustomRemovedSymbolData extends RemovedSymbolData {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
