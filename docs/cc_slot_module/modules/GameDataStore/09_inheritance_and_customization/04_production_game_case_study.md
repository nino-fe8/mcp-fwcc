---
id: "cc_slot_module:GameDataStore:customization:production_game_case_study"
title: "Production Case Study: Red Cliff 9666 Bandwidth Optimization"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "customization", "case_study", "red_cliff"]
---

# 📖 Production Case Study: Red Cliff 9666 Bandwidth Optimization

<!-- convention-summary-start -->
### Production Case Study: Red Cliff 9666 Bandwidth Optimization Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Production Case Study: Red Cliff 9666 Bandwidth Optimization.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/Core/GameDataStore9666.ts`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Production Context & Architecture

In production game `Red Cliff (9666)` (`assets/cc-release-slot/cc1-red-cliff/scripts/Core/GameDataStore9666.ts`), backend WebSocket payloads use compressed shorthand tokens to minimize bandwidth across mobile 3G networks:
* `pMul`: Previous spin multiplier
* `pMulF`: Previous Free Game multiplier
* `mulF`: Current Free Game multiplier
* `cna`: Current Normal Game win amount
* `cfa`: Current Free Game win amount

```typescript
@ccclass
export class GameDataStore9666 extends GameDataStore {
    parseDataPS(data): void {
        super.parseDataPS(data);
        this.playSession = this.mapDataPS(this.playSession);
    }

    mapDataPS(data: any): any {
        return this.mapNewKeys(data, {
            "pMul": "previousMultiplier",
            "pMulF": "previousMultiplierFreeGame",
            "mulF": "freeGameMultiplier",
            "cna": "currentNormalGameWinAmount",
            "cfa": "currentFreeGameWinAmount"
        });
    }
}
```
This architecture keeps backend payloads minimal while frontend UI components maintain clean, standard TypeScript property bindings!
