---
id: "cc_slot_module:SymbolPaytableViewer:methods:index"
title: "SymbolPaytableViewer Methods Index"
category: "cc_slot_module"
tags: ["SymbolPaytableViewer", "symbolpaytableviewer", "cc_slot_module", "methods", "index"]
---

# 📑 SymbolPaytableViewer Methods Index

<!-- convention-summary-start -->
### SymbolPaytableViewer Methods Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SymbolPaytableViewer Methods Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `onLoadExtend.md`, `handleTouchSymbol.md`, `getSymbolCode.md`
- **Related Docs**: [`onLoadExtend`](onLoadExtend.md), [`handleTouchSymbol`](handleTouchSymbol.md), [`getSymbolCode`](getSymbolCode.md)
<!-- convention-summary-end -->


---

## 1. Master Methods Overview

`SymbolPaytableViewer` manages touch hit-testing on matrix symbols during idle states and shows floating payout callout tooltips.

---

## 2. Methods Table

| Method | Visibility | Parameters | Return | Summary Description |
| :--- | :--- | :--- | :--- | :--- |
| [`onLoadExtend`](onLoadExtend.md) | `public` | None | `void` | Hooks `START_SPIN` to auto-hide tooltips, acquires companion table components, and binds `TOUCH_END`. |
| [`handleTouchSymbol`](handleTouchSymbol.md) | `protected`| `event: any` | `void` | Converts world touch coordinates to column/row matrix indices and displays symbol payout callout. |
| [`getSymbolCode`](getSymbolCode.md) | `public` | `col: number, row: number` | `string` | Resolves symbol code from either resume matrix data or live table reel symbol nodes. |
| [`getSymbolByColRow`](getSymbolByColRow.md) | `public` | `col: number, row: number` | `string | null` | Queries symbol code from visual `SlotTableModule` instance. |
| [`getSymbolByMatrix`](getSymbolByMatrix.md) | `public` | `col: number, row: number` | `string | null` | Queries symbol code from `SlotTableData.getResumeMatrix()`. |
| [`getSymbolPosition`](getSymbolPosition.md) | `public` | `col: number, row: number` | `cc.Vec2` | Calculates local pixel anchor coordinate for centering the callout tooltip over the symbol. |
| [`showSymbolInfo`](showSymbolInfo.md) | `public` | `symbolData: any` | `void` | Activates dark backdrop, blocker, and triggers popup animation on `SymbolPayoutViewer`. |
| [`hideSymbolInfo`](hideSymbolInfo.md) | `public` | None | `void` | Dismisses tooltip callout and deactivates background blocker overlay. |
