---
id: "cc_slot_module:BonusGameTableModule:methods:index"
title: "BonusGameTableModule Methods Index"
category: "cc_slot_module"
tags: ["BonusGameTableModule", "bonus_game_table", "cc_slot_module", "methods", "index"]
---

# 📋 BonusGameTableModule Methods Index

<!-- convention-summary-start -->
### BonusGameTableModule Methods Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BonusGameTableModule Methods Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `./initBoxes.md`, `./setBoxValues.md`, `./openBox.md`
- **Related Docs**: [`initBoxes(): void`](./initBoxes.md), [`setBoxValues(betId: string): void`](./setBoxValues.md), [`openBox(index: number, value: any): void`](./openBox.md)
<!-- convention-summary-end -->


---

## 1. Declared Methods Summary Table

| Method Signature | Visibility | Purpose |
| :--- | :--- | :--- |
| **[`initBoxes(): void`](./initBoxes.md)** | `public` | Instantiates `COL_NUMBER * ROW_NUMBER` chest nodes and positions them on grid. |
| **[`setBoxValues(betId: string): void`](./setBoxValues.md)** | `public` | Resolves payout distribution table based on `betId` and `BonusType`. |
| **[`openBox(index: number, value: any): void`](./openBox.md)** | `public` | Emits `BOX_OPEN` to the specific box node at index. |
| **[`openFinalBox(index: number, value: any): Promise<void>`](./openFinalBox.md)** | `public` | Emits `BOX_OPEN` and returns a Promise that resolves when the opening animation completes. |
| **[`openAllBoxes(result: any): Promise<void>`](./openAllBoxes.md)** | `public` | Reveals remaining unopened boxes with dimmed colors and delays before resolution. |
| **[`autoClick(): void`](./autoClick.md)** | `public` | Selects an unopened box at random and triggers simulated click. |
| **[`resumeTable(data: any[]): Promise<void>`](./resumeTable.md)** | `public` | Reconstructs opened boxes state upon session reconnection. |
| **[`resetTable(): void`](./resetTable.md)** | `public` | Emits `BOX_RESET` to all boxes and clears internal lists. |
| **[`disableAllBoxes(): void`](./disableAllBoxes.md)** | `public` | Emits `DISABLE_CLICK` to block player touches during network transit. |
| **[`enableAllBoxes(): void`](./enableAllBoxes.md)** | `public` | Emits `ENABLE_CLICK` to re-enable interaction on unopened chests. |
