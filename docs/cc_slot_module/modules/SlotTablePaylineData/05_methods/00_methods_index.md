---
id: "cc_slot_module:SlotTablePaylineData:methods:index"
title: "SlotTablePaylineData Methods Index"
category: "cc_slot_module"
tags: ["SlotTablePaylineData", "slot_table_payline_data", "cc_slot_module", "methods", "index"]
---

# 📋 SlotTablePaylineData Methods Index

<!-- convention-summary-start -->
### SlotTablePaylineData Methods Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTablePaylineData Methods Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `./onloadExtend.md`, `./getPayLines.md`, `./getWinSymbols.md`
- **Related Docs**: [`onloadExtend(): void`](./onloadExtend.md), [`getJackpotPayline(): Object`](./getJackpotPayline.md), [`convertJackpotPayline(): Object`](./convertJackpotPayline.md)
<!-- convention-summary-end -->


---

## 1. Declared Methods Summary Table

| Method Signature | Visibility | Purpose |
| :--- | :--- | :--- |
| **[`onloadExtend(): void`](./onloadExtend.md)** | `public` | Caches `PaylineConfig` component. |
| **[`getPayLines(): any[]`](./getPayLines.md)** | `public` | Returns mode-appropriate converted and sorted paylines. |
| **[`getWinSymbols(): { reel, row, index }[]`](./getWinSymbols.md)** | `public` | Returns array of all winning symbol coordinate points. |
| **[`getMatrix(): any[]`](./getMatrix.md)** | `public` | Returns mode-appropriate converted 2D matrix. |
| **[`convertPayLine(payLines, isRight): any[]`](./convertPayLine.md)** | `protected` | Routes paylines to conversion utility matching `PAYLINE_TYPE`. |
| **[`getJackpotPayline(): Object`](./getJackpotPayline.md)** | `public` | Returns parsed Jackpot payline model. |
| **[`convertJackpotPayline(): Object`](./convertJackpotPayline.md)** | `protected` | Splits delimited jackpot string into structured fields. |
| **[`sortPayLines(payLines): any[]`](./sortPayLines.md)** | `protected` | Partitions paylines placing Left-to-Right before Right-to-Left. |
| **[`isRightPayLine(rawPayLine): boolean`](./isRightPayLine.md)** | `protected` | Checks if raw string contains `"R"` marker. |
