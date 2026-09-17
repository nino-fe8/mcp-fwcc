---
id: "cc_slot_module:PoolFactoryModule:pipeline:pipeline_orchestration"
title: "PoolFactoryModule Pipeline Orchestration & Writer Integration"
category: "cc_slot_module"
tags: ["PoolFactoryModule", "pool_factory_module", "cc_slot_module", "pipeline", "orchestration"]
---

# 🎛️ PoolFactoryModule Pipeline Orchestration & Writer Integration

<!-- convention-summary-start -->
### PoolFactoryModule Pipeline Orchestration & Writer Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PoolFactoryModule Pipeline Orchestration & Writer Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Orchestration with Action Pipeline

`PoolFactoryModule` is typically wrapped by Director script commands to handle visual item pooling without coupling game logic to Cocos Creator node lifecycles:

```typescript
// Writer script step example
makeScriptPlayCoinEffect(winAmount: number) {
    return [
        {
            command: "_scriptPlayCoinBurst",
            data: { winAmount }
        }
    ];
}

// Director execution step
_scriptPlayCoinBurst(data, callback) {
    const coinNode = this.coinPoolFactory.getObject();
    coinNode.setParent(this.vfxLayer);
    coinNode.getComponent(CoinEffectItem).play(data.winAmount, () => {
        this.coinPoolFactory.returnObject(coinNode);
        callback && callback();
    });
}
```
