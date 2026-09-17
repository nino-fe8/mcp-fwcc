---
id: "cc_slot_module:PaylineSymbolModule:inheritance:production_game_case_study"
title: "PaylineSymbolModule Production Case Study (Red Cliff g9666L)"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "inheritance", "case_study", "red_cliff"]
---

# 🎮 PaylineSymbolModule Production Case Study (Red Cliff `g9666L`)

<!-- convention-summary-start -->
### PaylineSymbolModule Production Case Study (Red Cliff g9666L) Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineSymbolModule Production Case Study (Red Cliff g9666L).
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Production Context

In Red Cliff (`g9666L`), Wild symbols expand with full-screen warrior spine animations when forming win combinations.

---

## 2. Production Subclass

```typescript
const { ccclass } = cc._decorator;
import { PaylineSymbolModule } from "PaylineSymbolModule";

@ccclass
export default class PaylineSymbolModule9666 extends PaylineSymbolModule {
    protected playSymbolAnimation(symbol: cc.Node, duration?: number): void {
        super.playSymbolAnimation(symbol, duration);
        if (symbol["symbolCode"] === "K") {
            symbol.scale = 1.1;
        }
    }

    protected clearAll(): void {
        for (const symbol of this.symbols) {
            symbol.scale = 1.0;
        }
        super.clearAll();
    }
}
```
