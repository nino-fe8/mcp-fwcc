---
id: "cc_slot_module:SlotTableModule:method:stopSpinWithRandomMatrix"
title: "SlotTableModule.stopSpinWithRandomMatrix() Method Specification"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "method", "stopSpinWithRandomMatrix", "fallback"]
---

# `SlotTableModule.stopSpinWithRandomMatrix(): Promise<void>`

<!-- convention-summary-start -->
### SlotTableModule.stopSpinWithRandomMatrix() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableModule.stopSpinWithRandomMatrix() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public stopSpinWithRandomMatrix(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
1. If already `TableSpinState.SHOWING_RESULT`, triggers `this.fastStop()` and returns a Promise awaiting `_tableStopCB`.
2. If state is not `TableSpinState.START`, resolves immediately.
3. Retrieves random matrix: `let randomMatrix = [...this.config.getRandomMatrix()];`.
4. Dispatches `this.stopSpin(randomMatrix, true)` followed by `this.fastStop()`, ensuring instant settling upon disconnects.

---

## 3. Un-truncated Source Code Implementation
```typescript
stopSpinWithRandomMatrix(): Promise<void> {
    if (this.state === TableSpinState.SHOWING_RESULT) {
        return new Promise((resolve) => {
            this.fastStop();
            this._tableStopCB = resolve;
        });
    }
    if (this.state !== TableSpinState.START) {
        return Promise.resolve();
    }
    let randomMatrix = [...this.config.getRandomMatrix()];
    return new Promise((resolve) => {
        this.stopSpin(randomMatrix, true).then(() => {
            resolve() 
        });
        this.fastStop();
    });
}
```
