---
id: "cc_slot_module:VerticalCascadeModule:recipes:custom_particle_explosion_on_elimination"
title: "Recipe: Triggering Custom Particle & Spine VFX on Tile Elimination"
category: "cc_slot_module"
tags: ["VerticalCascadeModule", "vertical_cascade_module", "cc_slot_module", "recipes", "particle_vfx", "explosion"]
---

# 💡 Recipe: Triggering Custom Particle & Spine VFX on Tile Elimination

<!-- convention-summary-start -->
### Recipe: Triggering Custom Particle & Spine VFX on Tile Elimination Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Triggering Custom Particle & Spine VFX on Tile Elimination.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Objective

Override `removeSymbolAt()` to instantiate a particle burst effect before recycling the symbol to the pool.

```typescript
@ccclass
export class ExplosiveCascadeModule extends VerticalCascadeModule {
    @property(cc.Prefab)
    explosionVfxPrefab: cc.Prefab = null;

    protected removeSymbolAt(col: number, row: number): void {
        const symbol = this.listSymbols[col][row];
        if (symbol) {
            if (this.explosionVfxPrefab) {
                const vfx = cc.instantiate(this.explosionVfxPrefab);
                vfx.parent = this.container;
                vfx.position = symbol.position;
            }
            this.symbolManager.removeSymbol(symbol);
            symbol.parent = null;
            this.listSymbols[col][row] = null;
        }
    }
}
```
