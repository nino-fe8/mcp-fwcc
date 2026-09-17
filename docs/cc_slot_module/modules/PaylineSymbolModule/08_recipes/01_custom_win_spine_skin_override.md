---
id: "cc_slot_module:PaylineSymbolModule:recipes:custom_win_spine_skin_override"
title: "Recipe: Dynamic Win Spine Skin Swapping"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "recipes", "spine", "skin"]
---

# 💡 Recipe: Dynamic Win Spine Skin Swapping

<!-- convention-summary-start -->
### Recipe: Dynamic Win Spine Skin Swapping Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Dynamic Win Spine Skin Swapping.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Context & Use Case

To display upgraded golden symbol visuals when the player hits 5-of-a-kind.

---

## 2. Implementation

```typescript
const { ccclass } = cc._decorator;
import { PaylineSymbolModule } from "PaylineSymbolModule";

@ccclass
export class GoldSkinPaylineSymbolModule extends PaylineSymbolModule {
    protected playSymbolAnimation(symbol: cc.Node, duration?: number): void {
        super.playSymbolAnimation(symbol, duration);
        const spine = symbol.getComponentInChildren(sp.Skeleton);
        if (spine && symbol["symbolCode"] === "K") {
            spine.setSkin("gold_win");
        }
    }
}
```
