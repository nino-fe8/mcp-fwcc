---
id: "cc_slot_module:FreeOptionDirectorModule:method:runAutoTrigger"
title: "FreeOptionDirectorModule._runAutoTrigger() Method Specification"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "method", "_runAutoTrigger", "auto_pick"]
---

# `FreeOptionDirectorModule._runAutoTrigger(): void`

<!-- convention-summary-start -->
### FreeOptionDirectorModule._runAutoTrigger() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FreeOptionDirectorModule._runAutoTrigger() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
_runAutoTrigger(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Halts active timer: `this.stopCountDown()`.
2. Computes random option index: `let randomIndex = Math.floor(Math.random() * this.options.length);`.
3. Selects option card: `let randomOption = this.options[randomIndex];`.
4. Executes click logic programmatically: `this.optionClick(null, Number(randomOption.optionId));`.

---

## 3. Un-truncated Source Code Implementation
```typescript
_runAutoTrigger(): void {
    this.stopCountDown();
    let randomIndex = Math.floor(Math.random() * this.options.length);
    let randomOption = this.options[randomIndex];
    this.optionClick(null, Number(randomOption.optionId));
}
```
