---
id: "cc_slot_module:TableModuleConfig:method:getRandomMatrix"
title: "TableModuleConfig.getRandomMatrix() Method Specification"
category: "cc_slot_module"
tags: ["TableModuleConfig", "table_config", "cc_slot_module", "method", "getRandomMatrix", "fallback_matrix"]
---

# `TableModuleConfig.getRandomMatrix(): string[][]`

<!-- convention-summary-start -->
### TableModuleConfig.getRandomMatrix() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TableModuleConfig.getRandomMatrix() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public getRandomMatrix(): string[][]
```

---

## 2. Detailed Algorithmic Execution Logic
1. If `this.RANDOM_MATRIX.length > 0`, selects a random pre-defined matrix from `this.RANDOM_MATRIX`.
2. Otherwise, iterates over columns `i = 0` to `TABLE_FORMAT.length - 1`:
   * Pulls symbol codes from `this.RANDOM_SYMBOLS_CODE[i]`.
   * Loops rows `j = 0` to `TABLE_FORMAT[i] - 1` and picks a random code from `symbols`.
3. Returns constructed 2D array `matrix`.

---

## 3. Un-truncated Source Code Implementation
```typescript
public getRandomMatrix(): string[][] {
    let matrix = [];
    if (this.RANDOM_MATRIX.length) {
        const randomIndex = Math.floor(Math.random() * this.RANDOM_MATRIX.length);
        return this.RANDOM_MATRIX[randomIndex];
    } else {
        for (let i = 0; i < this.TABLE_FORMAT.length; i++) {
            matrix[i] = [];
            const symbols = this.RANDOM_SYMBOLS_CODE[i];
            for (let j = 0; j < this.TABLE_FORMAT[i]; j++) {
                const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
                matrix[i][j] = randomSymbol;
            }
        }
        return matrix;
    }
}
```
