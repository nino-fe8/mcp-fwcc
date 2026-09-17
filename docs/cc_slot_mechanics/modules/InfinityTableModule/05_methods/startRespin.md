---
id: "cc_slot_mechanics:InfinityTableModule:methods:startRespin"
title: "InfinityTableModule.startRespin Method Implementation"
category: "cc_slot_mechanics"
tags: ["InfinityTableModule", "infinity_table_module", "cc_slot_mechanics", "methods", "startRespin"]
---

# 📖 `InfinityTableModule.startRespin()`

<!-- convention-summary-start -->
### InfinityTableModule.startRespin Method Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for InfinityTableModule.startRespin Method Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
startRespin(matrix: string[][]): void
```

- **Scope**: `InfinityTableModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
public startRespin(matrix: string[][]): void {
        this.currentReelExtended++;
        this.tweenExtendedTable && this.tweenExtendedTable.stop();

        this.respinState = InfinityTableSpinState.READY;

        let pos = this.table.position.clone();
        this.createExtendedReel();
        this.tweenExtendedTable = tween(this.table)
                                    .to(0.2, { position: new cc.Vec2(pos.x - this.SYMBOL_WIDTH, pos.y) })
                                    .call(() => {
                                        this.spinExtendedReel();
                                    })
                                    .start();
    }

    public stopRespin(matrix: string[][]): Promise<void> {
        this._matrix = matrix || this._slotTableData.getMatrix();
        const index: number = this._matrix.length - 1;
        const reelData = [...this._matrix[index]];
        
        const lastReelIndex = this.extendedReels.length - 1;
		(this.extendedReels[lastReelIndex] as InfinityReelModule).showExtendedResult(reelData, this.onExtendedReelStop.bind(this), this.onReelPreStop.bind(this));
        this.respinState = InfinityTableSpinState.CAN_F2R;

        this.scheduleOnce(() => {
            this.respinState = InfinityTableSpinState.STOP_RESPIN;
            this._tableStopCB && this._tableStopCB();
            this._tableStopCB = null;
        }, (this.config as InfinityTableConfig).EXTENDE_REEL_DELAY_STOP);

        return new Promise((resolve) => {
			this._tableStopCB = resolve;
		}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
