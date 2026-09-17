---
id: "cc_slot_module:SlotReelModule:customization:production_game_case_study"
title: "Production Case Study: Red Cliff Custom Reel Module"
category: "cc_slot_module"
tags: ["SlotReelModule", "slot_reel_module", "cc_slot_module", "customization", "case_study", "red_cliff", "g9666L"]
---

# 🎮 Production Case Study: Red Cliff Custom Reel Module (`g9666L`)

<!-- convention-summary-start -->
### Production Case Study: Red Cliff Custom Reel Module Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Production Case Study: Red Cliff Custom Reel Module.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Context & Game Mechanics
In Red Cliff (`g9666L`), full-height stacked Wild symbols ($1\times 3$) require custom coordinate calculation and special anticipation sound triggers when rolling into view.

---

## 2. Complete Production Implementation Excerpt

```typescript
const { _decorator } = cc;
import { SlotReelModule } from "cc-slot-module/BaseModule/Table/SlotTable/scripts/SlotReelModule";
const { ccclass } = _decorator;

@ccclass("SlotReelModule9666")
export class SlotReelModule9666 extends SlotReelModule {

    customizeNewSymbol(symbol: cc.Node): void {
        super.customizeNewSymbol(symbol);
        
        // Highlight high-payout warrior symbols
        const code = symbol.getComponent("SlotSymbolModule9666")?.symbolCode;
        if (code === "K1" || code === "K2") {
            symbol.emit("PLAY_WARRIOR_SHINE");
        }
    }

    protected playStopAnimation(): void {
        super.playStopAnimation();
        // Play column heavy landing click
        this.node.emit("SOUND_REEL_STOP_THUD", this.reelIndex);
    }
}
```
