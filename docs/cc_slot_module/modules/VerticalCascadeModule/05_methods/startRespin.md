---
id: "cc_slot_module:VerticalCascadeModule:methods:startRespin"
title: "VerticalCascadeModule.startRespin Method"
category: "cc_slot_module"
tags: ["VerticalCascadeModule", "vertical_cascade_module", "cc_slot_module", "methods", "startRespin", "elimination"]
---

# 📖 `VerticalCascadeModule.startRespin()`

<!-- convention-summary-start -->
### VerticalCascadeModule.startRespin Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for VerticalCascadeModule.startRespin Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Stage 1 cascade trigger that eliminates winning symbols based on `traceWay`.

```typescript
public startRespin(matrix: string[][], traceWays: string[][]): void
```

---

## 2. Complete Source Code Implementation

```typescript
public startRespin(matrix: string[][], traceWays: string[][]): void {
    this.clearSymbols();
    if (!matrix && !traceWays) {
        const cascadeData: CascadeModuleData = this.getComponent(CascadeModuleData);
        const { verticalMatrix, listTraceWayVertical } = cascadeData.formatData();
        this.matrix = verticalMatrix;
        this.listTraceWay = listTraceWayVertical;
    } else {
        this.matrix = matrix;
        this.listTraceWay = traceWays;
    }
    
    this.listDroppedSymbols = [];
    this.listNewSymbols = [];

    this.checkForDropSymbols();
    this.resetSymbolList();
    this.updateSymbolList();

    // remove symbol by traceWay data
    this.removeDroppedSymbols();

    this._hasStartRespin = true;
    this._hasRespinCompleted = false;
}
```
