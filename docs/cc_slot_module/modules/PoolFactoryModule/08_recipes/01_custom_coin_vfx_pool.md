---
id: "cc_slot_module:PoolFactoryModule:recipes:custom_coin_vfx_pool"
title: "Recipe: High-Performance Coin Fly Pool"
category: "cc_slot_module"
tags: ["PoolFactoryModule", "pool_factory_module", "cc_slot_module", "recipes", "coin_vfx"]
---

# 💡 Recipe: High-Performance Coin Fly Pool

<!-- convention-summary-start -->
### Recipe: High-Performance Coin Fly Pool Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: High-Performance Coin Fly Pool.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Implementation Code

```typescript
const { ccclass, property } = cc._decorator;
import { PoolFactoryModule } from 'cc-slot-module/PoolFactory/PoolFactoryModule';

@ccclass
export default class CoinFlyPoolModule extends PoolFactoryModule {
    spawnCoinFly(startPos: cc.Vec3, endPos: cc.Vec3, onComplete: () => void): void {
        const coin = this.getObject();
        coin.parent = this.node;
        coin.position = startPos;
        coin.opacity = 255;

        cc.tween(coin)
            .to(0.6, { position: endPos }, { easing: 'cubicOut' })
            .call(() => {
                this.returnObject(coin);
                onComplete && onComplete();
            })
            .start();
    }
}
```
