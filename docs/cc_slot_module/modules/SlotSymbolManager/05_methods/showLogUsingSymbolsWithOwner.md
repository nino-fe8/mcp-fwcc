---
id: "cc_slot_module:SlotSymbolManager:method:showLogUsingSymbolsWithOwner"
title: "SlotSymbolManager.showLogUsingSymbolsWithOwner() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "method", "showLogUsingSymbolsWithOwner", "debug"]
---

# `SlotSymbolManager.showLogUsingSymbolsWithOwner(tableFormat: number[]): void`

<!-- convention-summary-start -->
### SlotSymbolManager.showLogUsingSymbolsWithOwner() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolManager.showLogUsingSymbolsWithOwner() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public showLogUsingSymbolsWithOwner(tableFormat: number[] = []): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Checks node active and enabled state.
2. Extracts unique owner strings from active symbols.
3. Groups symbols by owner; if `tableFormat` is provided, reconstructs a 2D matrix, transposes it using `eno.ArrayUtils.transposeJagged(matrix, 'x')`, and prints via `console.table()`.

---

## 3. Un-truncated Source Code Implementation
```typescript
showLogUsingSymbolsWithOwner(tableFormat: number[] = []): void {
    if (!this.node.active || !this.enabledInHierarchy) {
        return;
    }

    const symbols = this.usingSymbols.map((symbol) => {
        return this.getSymbolModule(symbol) 
    });
    const allOwners: any = [...new Set(symbols.map((symbol) => symbol.getOwner()))];

    for (const owner of allOwners) {
        if (owner == SymbolOwnerType.NONE) {
            continue;
        }

        const filterSymbols = symbols.filter((symbol) => symbol.getOwner() == owner);

        if (tableFormat.length == 0) {
            const logSymbols = filterSymbols.map((symbol) => {
                const symbolIndex = symbol.getIndex();
                const symbolCode = symbol.symbolCode;
                const symbolOwner = symbol.getOwner();
                return {
                    index: symbolIndex,
                    symbol: symbolCode,
                    owner: symbolOwner
                }
            });

            logSymbols.sort((a, b) => a.index - b.index);

            console.log(owner, logSymbols);
        } else {
            const matrix: string[][] = [];
            let index = 0;

            // convert matrix to 2d array
            for (let col = 0; col < tableFormat.length; col++) {
                matrix.push(Array(tableFormat[col]).fill(""));
                for (let row = 0; row < tableFormat[col]; row++) {
                    const symbol = filterSymbols.find((it) => it.getIndex() == index);
                    const symbolCode = symbol ? symbol.symbolCode : "";
                    const symbolIndex = index;
                    matrix[col][row] = symbol ? `index:${symbolIndex}, symbol:${symbolCode}` : "";
                    index++;
                }
            }

            const transposeMatrix = eno.ArrayUtils.transposeJagged(matrix, 'x');
            console.log(owner);
            console.table(transposeMatrix);
        }
    }
}
```
