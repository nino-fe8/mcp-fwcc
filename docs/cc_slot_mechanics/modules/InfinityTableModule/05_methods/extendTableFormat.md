---
id: "cc_slot_mechanics:InfinityTableModule:methods:extendTableFormat"
title: "InfinityTableModule.extendTableFormat Method"
category: "cc_slot_mechanics"
tags: ["InfinityTableModule", "infinity_table_module", "cc_slot_mechanics", "methods", "extendTableFormat"]
---

# 📖 `InfinityTableModule.extendTableFormat()`

<!-- convention-summary-start -->
### InfinityTableModule.extendTableFormat Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for InfinityTableModule.extendTableFormat Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature & Overview

```typescript
extendTableFormat(): void
```

- **Primary Role**: Implements extendTableFormat within the InfinityTableModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected extendTableFormat(): void {
        const config = this._slotTableData.getComponent(InfinityTableConfig);
		const lastEl = config.TABLE_FORMAT[config.TABLE_FORMAT.length - 1];
		config.TABLE_FORMAT.push(lastEl);

		const latestRandomSymbolCode = config.RANDOM_SYMBOLS_CODE[config.RANDOM_SYMBOLS_CODE.length - 1];
		config.RANDOM_SYMBOLS_CODE.push(latestRandomSymbolCode.map(symbol => symbol));

		const latestSymbolIndexes = config.SYMBOL_INDEXES[config.SYMBOL_INDEXES.length - 1];
		config.SYMBOL_INDEXES.push(latestSymbolIndexes.map(index => index + lastEl));

        this.moduleEvent.emit('TABLE_FORMAT_CHANGED', {
            tableFormat: config.TABLE_FORMAT,
            symbolIndexes: config.SYMBOL_INDEXES,
        });
    }
```
