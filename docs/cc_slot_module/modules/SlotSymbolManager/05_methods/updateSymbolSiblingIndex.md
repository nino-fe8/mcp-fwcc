---
id: "cc_slot_module:SlotSymbolManager:method:updateSymbolSiblingIndex"
title: "SlotSymbolManager.updateSymbolSiblingIndex() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "method", "updateSymbolSiblingIndex", "z_order"]
---

# `SlotSymbolManager.updateSymbolSiblingIndex(symbols: cc.Node[]): void`

<!-- convention-summary-start -->
### SlotSymbolManager.updateSymbolSiblingIndex() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolManager.updateSymbolSiblingIndex() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public updateSymbolSiblingIndex(symbols: cc.Node[]): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Exits early if `symbols` is null or empty.
2. Partitions `symbols` into `highlightSymbols` (where `isHighlight !== false`) and `unhighlightSymbols`.
3. Sorts each partition via `this.sortSymbols()`.
4. Combines sorted lists: unhighlighted symbols first, followed by highlighted symbols.
5. Iterates through the sorted list and updates each node's rendering order: `symbol.setSiblingIndex(index)`.

---

## 3. Un-truncated Source Code Implementation
```typescript
updateSymbolSiblingIndex(symbols: cc.Node[]): void {
    if (!symbols || !symbols.length) {
        return;
    }

    const highlightSymbols: cc.Node[] = [];
    const unhighlightSymbols: cc.Node[] = [];

    for (const symbol of symbols) {
        (symbol['isHighlight'] !== false ? highlightSymbols : unhighlightSymbols).push(symbol);
    }

    const sortedSymbols = [
        ...this.sortSymbols(unhighlightSymbols),
        ...this.sortSymbols(highlightSymbols),
    ];

    sortedSymbols.forEach((symbol, index) => symbol.setSiblingIndex(index));
}
```
