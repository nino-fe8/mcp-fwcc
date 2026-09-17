---
id: "cc_slot_module:SlotTableModule:method:showBeautyMatrix"
title: "SlotTableModule.showBeautyMatrix() Method Specification"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "method", "showBeautyMatrix"]
---

# `SlotTableModule.showBeautyMatrix(): void`

<!-- convention-summary-start -->
### SlotTableModule.showBeautyMatrix() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableModule.showBeautyMatrix() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
showBeautyMatrix(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Checks if `this.config.BEAUTY_MATRIX` exists and is non-empty.
2. Selects a beauty matrix layout: `let beautyMatrix = [...this.config.getRandomBeautyMatrix()];`.
3. Synchronizes the table: `this.syncTable(beautyMatrix)`.
4. Loops through columns and triggers `symbolComp.playSymbolIntro(symbolComp.symbolCode)` on all real symbols.

---

## 3. Un-truncated Source Code Implementation
```typescript
showBeautyMatrix(): void {
    if (!this.config.BEAUTY_MATRIX || !this.config.BEAUTY_MATRIX.length) {
        return;
    }
    let beautyMatrix = [...this.config.getRandomBeautyMatrix()];

    this.syncTable(beautyMatrix);
    this.reels.forEach(reelComponent => {
        const symbols = reelComponent.getRealSymbols();
        symbols.forEach(symbol => {
            const symbolComp = SlotSymbolModule.getModuleComponent(symbol);
            symbolComp.playSymbolIntro(symbolComp.symbolCode);
        });
    });
}
```
