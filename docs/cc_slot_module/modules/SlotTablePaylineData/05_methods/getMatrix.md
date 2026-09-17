---
id: "cc_slot_module:SlotTablePaylineData:method:getMatrix"
title: "SlotTablePaylineData.getMatrix Method"
category: "cc_slot_module"
tags: ["SlotTablePaylineData", "slot_table_payline_data", "cc_slot_module", "methods", "getMatrix"]
---

# 🚀 `SlotTablePaylineData.getMatrix(): any[]`

<!-- convention-summary-start -->
### SlotTablePaylineData.getMatrix Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTablePaylineData.getMatrix Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
public getMatrix(): any[]
```

---

## 2. Algorithmic Steps

1. Selects raw matrix source (`respinGameMatrix`, `freeGameMatrix`, or `normalGameMatrix`).
2. Converts raw array to 2D column matrix using `eno.SlotUtils.convertSlotMatrix()`.

---

## 3. Full Source Code

```typescript
getMatrix(): any[] {
    let rawMatrix = this["matrix"] || this["matrix0"];

    if (!this.isResume && this.state == GAME_MODE_ENUM.RESPIN_GAME) {
        rawMatrix = this["respinGameMatrix"] || rawMatrix;
    } else if (this.isFreeMode()) {
        rawMatrix = this["freeGameMatrix"] || rawMatrix;
    } else {
        rawMatrix = this["normalGameMatrix"] || rawMatrix;
    }

    return eno.SlotUtils.convertSlotMatrix(rawMatrix, this.config.TABLE_CONFIG.format);
}
```
