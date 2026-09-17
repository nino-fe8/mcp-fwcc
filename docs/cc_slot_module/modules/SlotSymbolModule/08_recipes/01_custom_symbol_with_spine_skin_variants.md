---
id: "cc_slot_module:SlotSymbolModule:recipe:custom_symbol_with_spine_skin_variants"
title: "Production Recipe: Custom Symbol with Dynamic Spine Skin Variants"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "recipes", "spine_skin", "customization"]
---

# 💡 Production Recipe: Custom Symbol with Dynamic Spine Skin Variants

<!-- convention-summary-start -->
### Production Recipe: Custom Symbol with Dynamic Spine Skin Variants Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Production Recipe: Custom Symbol with Dynamic Spine Skin Variants.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Context & Use Case
In games with multi-tier Wilds (e.g., standard Wild vs $2\times$ Gold Wild), a single Spine skeleton contains multiple skins (`"default"`, `"gold"`, `"silver"`).

---

## 2. Production Subclass Implementation

```typescript
const { _decorator } = cc;
import { SlotSymbolModule } from "cc-slot-module/BaseModule/Table/SlotSymbol/SlotSymbolModule";
const { ccclass } = _decorator;

@ccclass("SlotSymbolModule9666")
export class SlotSymbolModule9666 extends SlotSymbolModule {

    playAnimation(animationName: string, loop: boolean = false): void {
        super.playAnimation(animationName, loop);
        
        // Dynamically apply special skin if Wild
        if (this.symbolCode === "WILD_GOLD" && this.spine) {
            this.spine.setSkin("gold");
        }
    }
}
```
