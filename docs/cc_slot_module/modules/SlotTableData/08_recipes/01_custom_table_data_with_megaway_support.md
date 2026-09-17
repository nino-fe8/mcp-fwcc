---
id: "cc_slot_module:SlotTableData:recipe:custom_table_data_with_megaway_support"
title: "Production Recipe: Megaways Variable Height Table Data"
category: "cc_slot_module"
tags: ["SlotTableData", "slot_table_data", "cc_slot_module", "recipes", "megaways", "variable_rows"]
---

# 💡 Production Recipe: Megaways Variable Height Table Data

<!-- convention-summary-start -->
### Production Recipe: Megaways Variable Height Table Data Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Production Recipe: Megaways Variable Height Table Data.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Context & Use Case
In Megaways slot titles where columns dynamically have 2 to 7 symbols each spin, `TABLE_FORMAT` changes every round based on a server-sent array (e.g. `reelLengths: [4, 6, 5, 7, 3, 4]`).

---

## 2. Production Subclass Implementation

```typescript
const { _decorator } = cc;
import { SlotTableData } from "cc-slot-module/BaseModule/Table/SlotTable/scripts/SlotTableData";
const { ccclass } = _decorator;

@ccclass("MegawayTableData")
export class MegawayTableData extends SlotTableData {
    registeredKeys = ["matrix", "reelLengths", "normalGameMatrix", "freeGameMatrix"];

    getMatrix(): string[][] {
        const rawMatrix = this.getRawMatrix();
        const activeFormat = this["reelLengths"] || this.config.TABLE_FORMAT;
        return eno.SlotUtils.convertSlotMatrix(rawMatrix, activeFormat);
    }
}
```
