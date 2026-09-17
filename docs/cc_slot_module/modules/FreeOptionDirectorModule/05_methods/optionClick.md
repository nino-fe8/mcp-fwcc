---
id: "cc_slot_module:FreeOptionDirectorModule:method:optionClick"
title: "FreeOptionDirectorModule.optionClick() Method Specification"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "method", "optionClick", "network"]
---

# `FreeOptionDirectorModule.optionClick(ev: any, optionId: number): void`

<!-- convention-summary-start -->
### FreeOptionDirectorModule.optionClick() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FreeOptionDirectorModule.optionClick() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
optionClick(ev: any, optionId: number): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Resolves `selectedOption = Number(optionId ? optionId : ev.target.optionId)`.
2. Disables all option card buttons (`Button.interactable = false`) to prevent double-click race conditions.
3. Dispatches network event `this.gameLogic.emit(GameLogicUIEvents.SEND_FREE_OPTION_REQUEST, selectedOption)`.
4. Stops the countdown timer: `this.stopCountDown()`.

---

## 3. Un-truncated Source Code Implementation
```typescript
optionClick(ev: any, optionId: number): void {
    const selectedOption = Number(optionId ? optionId : ev.target.optionId);
    this.options.forEach((option) => {
        option.optionNode.getComponent(Button).interactable = false;
        // item.opacity = selectedOption === item.optionId ? 255 : 150;
    });
    this.gameLogic.emit(GameLogicUIEvents.SEND_FREE_OPTION_REQUEST, selectedOption);
    this.stopCountDown();
}
```
