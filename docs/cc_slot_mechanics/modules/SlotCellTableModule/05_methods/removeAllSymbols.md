---
id: "cc_slot_mechanics:SlotCellTableModule:methods:removeAllSymbols"
title: "SlotCellTableModule.removeAllSymbols Method Implementation"
category: "cc_slot_mechanics"
tags: ["SlotCellTableModule", "slot_cell_table_module", "cc_slot_mechanics", "methods", "removeAllSymbols"]
---

# 📖 `SlotCellTableModule.removeAllSymbols()`

<!-- convention-summary-start -->
### SlotCellTableModule.removeAllSymbols Method Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotCellTableModule.removeAllSymbols Method Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
removeAllSymbols(); this.table.active = true; this._lastMatrix = [...this._matrix]; for (let col = 0; col < this.TOTAL_COLS; col++) { const totalRows = this.config.TABLE_FORMAT[col]; for (let row = 0; row < totalRows; row++) { const reelComponent = this.reelList[col][row]; reelComponent.clearSymbols(); reelComponent.resumeReel([this._matrix[col][row]]); } } } initTable(): void
```

- **Scope**: `SlotCellTableModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
removeAllSymbols();
		this.table.active = true;
		this._lastMatrix = [...this._matrix];
		for (let col = 0; col < this.TOTAL_COLS; col++) {
			const totalRows = this.config.TABLE_FORMAT[col];
			for (let row = 0; row < totalRows; row++) {
				const reelComponent = this.reelList[col][row];
				reelComponent.clearSymbols();
				reelComponent.resumeReel([this._matrix[col][row]]);
			}
		}
	}

	initTable(): void {
		//init list mask row
		this.initListMaskRow();

		//init reels
		this.initListReel();
	}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
