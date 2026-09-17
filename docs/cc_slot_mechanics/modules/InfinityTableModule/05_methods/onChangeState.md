---
id: "cc_slot_mechanics:InfinityTableModule:methods:onChangeState"
title: "InfinityTableModule.onChangeState Method Implementation"
category: "cc_slot_mechanics"
tags: ["InfinityTableModule", "infinity_table_module", "cc_slot_mechanics", "methods", "onChangeState"]
---

# 📖 `InfinityTableModule.onChangeState()`

<!-- convention-summary-start -->
### InfinityTableModule.onChangeState Method Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for InfinityTableModule.onChangeState Method Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
onChangeState(TableSpinState.STOPPED); } protected extendTableFormat(): void
```

- **Scope**: `InfinityTableModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
onChangeState(TableSpinState.STOPPED);
	}

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
}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
