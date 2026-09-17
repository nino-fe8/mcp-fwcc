---
id: "cc_slot_module:VerticalCascadeModule:methods:resetAllEffectAndTasks"
title: "VerticalCascadeModule.resetAllEffectAndTasks Method"
category: "cc_slot_module"
tags: ["VerticalCascadeModule", "vertical_cascade_module", "cc_slot_module", "methods", "resetAllEffectAndTasks", "interrupt_recovery"]
---

# 📖 `VerticalCascadeModule.resetAllEffectAndTasks()`

<!-- convention-summary-start -->
### VerticalCascadeModule.resetAllEffectAndTasks Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for VerticalCascadeModule.resetAllEffectAndTasks Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Handles emergency interrupt recovery by unscheduling active completion timers and reconstructing the exact visual matrix state.

```typescript
public resetAllEffectAndTasks(): void
```

---

## 2. Complete Source Code Implementation

```typescript
resetAllEffectAndTasks(): void {
    // reset callback, remove schedule
    if (this._respinCB) {
        this.unschedule(this._respinCB);
        this._respinCB();
    } else {
        this.listSymbols = [];
    }

    // if has startRespin event and then back-to-real, event stopRespin 
    if (this._hasStartRespin && !this._hasRespinCompleted) {
        let index = 0;
        for (let i = 0; i < this.matrix.length; i++) {
            let row = 0;
            for (let j = 0; j < this.matrix[i].length; j++) {
                const symbolValue = this.matrix[i][j];
                const { size } = this.mapSymbolData(symbolValue);
                row = row + size - 1;
                index = this.getSymbolIndex(i, row);
                const symbol = this.symbolManager.getSymbolByIndex(index, SymbolOwnerType.CASCADE_SYMBOL);
                if (symbol) {
                    symbol.setParent(this.container);
                    symbol.active = true;

                    //update symbol again
                    const symbolComp: SlotSymbolModule = SlotSymbolModule.getModuleComponent(symbol);
                    symbolComp.init(symbolValue)
                    symbolComp.changeToSymbol(symbolValue);
        
                    const position = this.tableConfig.positions[i][row];
                    if (size > 1) {
                        symbol.setPosition(new cc.Vec2(position.x, position.y + (size - 1) * this.tableConfig.cellSize.y * 0.5));
                    } else {
                        symbol.setPosition(position);
                    }
                }
                row++;
            }
        }
    }
}
```
