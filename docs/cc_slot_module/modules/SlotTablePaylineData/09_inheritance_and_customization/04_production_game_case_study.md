---
id: "cc_slot_module:SlotTablePaylineData:inheritance:production_game_case_study"
title: "SlotTablePaylineData Production Case Study (Red Cliff g9666L)"
category: "cc_slot_module"
tags: ["SlotTablePaylineData", "slot_table_payline_data", "cc_slot_module", "inheritance", "case_study", "red_cliff"]
---

# 🎮 SlotTablePaylineData Production Case Study (Red Cliff `g9666L`)

<!-- convention-summary-start -->
### SlotTablePaylineData Production Case Study (Red Cliff g9666L) Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTablePaylineData Production Case Study (Red Cliff g9666L).
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Case Study Overview

Red Cliff (`g9666L`) uses a 243 AllWays calculation system in Normal Game and adds extra multiplier tracking data to each converted payline.

---

## 2. Production Subclass Implementation

```typescript
const { ccclass } = cc._decorator;
import { SlotTablePaylineData } from "SlotTablePaylineData";

@ccclass
export default class SlotTablePaylineData9666 extends SlotTablePaylineData {
    registeredKeys = [
        ...new SlotTablePaylineData().registeredKeys,
        "wildMultiplierList",
        "totalWinMultiplier"
    ];

    protected convertPayLine(payLines: string[] = [], isRight: boolean = false): any[] {
        const converted = super.convertPayLine(payLines, isRight);
        const multiplierList = this["wildMultiplierList"] || [];
        
        converted.forEach((line, idx) => {
            if (multiplierList[idx]) {
                line.multiplier = multiplierList[idx];
            }
        });
        
        return converted;
    }
}
```
