---
id: "cc_slot_mechanics:SlotTableMegaModule:methods:stopSpin"
title: "SlotTableMegaModule.stopSpin Method"
category: "cc_slot_mechanics"
tags: ["SlotTableMegaModule", "slot_table_mega_module", "cc_slot_mechanics", "methods", "stopSpin"]
---

# 📖 `SlotTableMegaModule.stopSpin()`

<!-- convention-summary-start -->
### SlotTableMegaModule.stopSpin Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableMegaModule.stopSpin Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature & Overview

```typescript
stopSpin(matrix?: string[][], _forceStop?: boolean): Promise<void>
```

- **Primary Role**: Implements stopSpin within the SlotTableMegaModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
stopSpin(matrix?: string[][], _forceStop?: boolean): Promise<void> {
		this._matrix = matrix || this._slotTableData.getMatrix();
        
        this.megaData = this._slotTableData.formatMegaData();
        this.hasMulti = this.megaData.filter(data => data.length > 0).length > 2;
        
		this._lastMatrix = [...this._matrix];
		this.onChangeState(TableSpinState.SHOWING_RESULT);

		this.reels.forEach((reelComponent, index) => {
            const reelData = {
                symbols: [...this._matrix[index]],
                megaData: this.megaData[index],
                hasMulti: this.hasMulti
            };
			reelComponent.showResult(reelData, this.onReelStop.bind(this), this.onReelPreStop.bind(this));

		});

		this.node.emit("SETUP_NEARWIN", { matrix: this._matrix, isTurboActive: this.currentMode.isTurbo, context: this });

		return new Promise((resolve) => {
			this._tableStopCB = resolve;
		});
	}
```
