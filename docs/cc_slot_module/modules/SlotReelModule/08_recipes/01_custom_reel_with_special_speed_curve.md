---
id: "cc_slot_module:SlotReelModule:recipe:custom_reel_with_special_speed_curve"
title: "Production Recipe: Custom Reel with Dynamic Speed Curves"
category: "cc_slot_module"
tags: ["SlotReelModule", "slot_reel_module", "cc_slot_module", "recipes", "production_code", "speed_curve", "subclassing"]
---

# 💡 Production Recipe: Custom Reel with Dynamic Speed Curves

<!-- convention-summary-start -->
### Production Recipe: Custom Reel with Dynamic Speed Curves Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Production Recipe: Custom Reel with Dynamic Speed Curves.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Context & Use Case
In games with special tension modes (such as expanding wild reels or jackpot anticipation), individual reels require custom acceleration/deceleration curves and sound triggers on specific symbol appearances.

---

## 2. Complete Production Implementation

```typescript
const { _decorator, ccclass } = cc._decorator;
import { SlotReelModule } from "cc-slot-module/BaseModule/Table/SlotTable/scripts/SlotReelModule";

@ccclass("SlotReelModule9666")
export class SlotReelModule9666 extends SlotReelModule {

    customizeNewSymbol(symbol: cc.Node): void {
        super.customizeNewSymbol(symbol);
        
        // Check if spawned symbol is special Wild
        const symbolCode = symbol.getComponent("SlotSymbolModule9666")?.symbolCode;
        if (symbolCode === "WILD") {
            // Play shimmer effect
            symbol.emit("PLAY_WILD_SHIMMER");
        }
    }

    protected playStopAnimation(): void {
        super.playStopAnimation();
        
        // Custom column stop stinger sound
        this.node.emit("ON_REEL_STOPPED_CUSTOM", this.reelIndex);
    }
}
```
