---
id: "cc_core_lib:SlotUtils:methods:index"
title: "SlotUtils Methods Master Index"
category: "cc_core_lib"
tags: ["SlotUtils", "slot_utils", "cc_core_lib", "methods", "index"]
---

# 📖 `SlotUtils` Methods Master Index

<!-- convention-summary-start -->
### SlotUtils Methods Master Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotUtils Methods Master Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_core_lib, 03_methods
- **Scope & Code Paths**: `./convertSlotMatrix.md`, `./convertMegaSymbols.md`, `./convertPayLine.md`
- **Related Docs**: [`convertSlotMatrix()`](./convertSlotMatrix.md), [`convertMegaSymbols()`](./convertMegaSymbols.md), [`convertPayLine()`](./convertPayLine.md)
<!-- convention-summary-end -->


---

## 1. Declared Method Signatures

| Method | Parameters | Return Type | Description |
| :--- | :--- | :--- | :--- |
| **[`convertSlotMatrix()`](./convertSlotMatrix.md)** | `arr?: string[], format?: number[]` | `string[][]` | Executes convertSlotMatrix operation in `SlotUtils`. |
| **[`convertMegaSymbols()`](./convertMegaSymbols.md)** | `symbols?: string[], format?: string[]` | `string[]` | Executes convertMegaSymbols operation in `SlotUtils`. |
| **[`convertPayLine()`](./convertPayLine.md)** | `payLines?: string[]` | `PayLineResult[]` | Executes convertPayLine operation in `SlotUtils`. |
| **[`convertPayLineAllWays()`](./convertPayLineAllWays.md)** | `payLines?: string[], multiplier?: number, betDenom?: number` | `PayLineAllWaysResult[]` | Executes convertPayLineAllWays operation in `SlotUtils`. |
| **[`convertPayLineCluster()`](./convertPayLineCluster.md)** | `payLines?: string[], multiplier?: number, betDenom?: number` | `PayLineClusterResult[]` | Executes convertPayLineCluster operation in `SlotUtils`. |
| **[`convertPayLineScatterPay()`](./convertPayLineScatterPay.md)** | `payLines?: string[], multiplier?: number, betDenom?: number` | `PayLineScatterPayResult[]` | Executes convertPayLineScatterPay operation in `SlotUtils`. |
| **[`generateSymbolIndexes()`](./generateSymbolIndexes.md)** | `tableFormat?: number[]` | `number[][]` | Executes generateSymbolIndexes operation in `SlotUtils`. |
