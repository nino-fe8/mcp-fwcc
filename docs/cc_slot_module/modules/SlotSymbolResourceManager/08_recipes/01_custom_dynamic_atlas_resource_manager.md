---
id: "cc_slot_module:SlotSymbolResourceManager:recipe:custom_dynamic_atlas_resource_manager"
title: "Production Recipe: Dynamic SpriteAtlas Symbol Resource Manager"
category: "cc_slot_module"
tags: ["SlotSymbolResourceManager", "slot_symbol_resource_manager", "cc_slot_module", "recipes", "atlas"]
---

# 💡 Production Recipe: Dynamic SpriteAtlas Symbol Resource Manager

<!-- convention-summary-start -->
### Production Recipe: Dynamic SpriteAtlas Symbol Resource Manager Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Production Recipe: Dynamic SpriteAtlas Symbol Resource Manager.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Context & Use Case
For titles loading dynamic theme skins from remote CDN bundles, symbols are packed into a `cc.SpriteAtlas` rather than individually assigned in inspector arrays.

---

## 2. Production Subclass Implementation

```typescript
const { _decorator, property } = cc._decorator;
import { SlotSymbolResourceManager } from "cc-slot-module/BaseModule/Table/SlotSymbol/SlotSymbolResourceManager";

@ccclass("AtlasSymbolResourceManager")
export class AtlasSymbolResourceManager extends SlotSymbolResourceManager {
    @property(cc.SpriteAtlas)
    symbolAtlas: cc.SpriteAtlas = null;

    getSymbolFrame(symbolCode: string): cc.SpriteFrame {
        if (this.symbolAtlas) {
            return this.symbolAtlas.getSpriteFrame(symbolCode);
        }
        return super.getSymbolFrame(symbolCode);
    }
}
```
