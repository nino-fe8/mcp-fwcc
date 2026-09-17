---
id: "cc_slot_module:CascadeModuleData:overview:architecture_and_role"
title: "CascadeModuleData Architectural Role & Matrix Normalization"
category: "cc_slot_module"
tags: ["CascadeModuleData", "cascade_module_data", "cc_slot_module", "overview", "architecture", "data_normalization", "traceWay"]
---

# 🏛️ CascadeModuleData Architectural Role & Matrix Normalization

<!-- convention-summary-start -->
### CascadeModuleData Architectural Role & Matrix Normalization Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CascadeModuleData Architectural Role & Matrix Normalization.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Architectural Mission

`CascadeModuleData` is the reactive state store component for the cascade engine. Extending `BaseDataModule`, it automatically captures network matrix packets (`registeredKeys = ["matrix0", "matrix", "normalGameMatrix", "freeGameMatrix", "traceWay"]`) from `GameDataStore` and normalizes them into 2D vertical grid coordinates and elimination masks (`listTraceWayVertical`).

```mermaid
graph TD
    Store[GameDataStore] -->|updateDataModules: matrix & traceWay| CMD[CascadeModuleData]
    CMD -->|formatData()| Out[Format Output Object]
    Out -->|verticalMatrix: string[][]| VCM[VerticalCascadeModule]
    Out -->|listTraceWayVertical: string[][] with '-1'| VCM
```

---

## 2. Key Responsibilities

1. **Mode-Aware Matrix Extraction (`getMatrix()`)**:
   - Resolves appropriate raw matrix array based on active `this.gameMode` (`NORMAL_GAME` vs `FREE_GAME`) with multi-key fallbacks.
2. **Matrix Reshaping via `SlotUtils.convertSlotMatrix()`**:
   - Reshapes flat server symbol array into 2D column-major array `[col][row]` matching `format`.
3. **TraceWay Elimination Tagging (`formatData()`)**:
   - Scans winning coordinate indexes from `traceWay: number[]` and substitutes matching matrix positions with `DROP_SYMBOL_CODE = '-1'`.
