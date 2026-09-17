---
id: "cc_slot_module:FreeOptionDirectorModule:method:onEnableOptions"
title: "FreeOptionDirectorModule.onEnableOptions() Method Specification"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "method", "onEnableOptions"]
---

# `FreeOptionDirectorModule.onEnableOptions(isEnable: boolean): void`

<!-- convention-summary-start -->
### FreeOptionDirectorModule.onEnableOptions() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FreeOptionDirectorModule.onEnableOptions() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
onEnableOptions(isEnable: boolean = false): void
```

---

## 2. Detailed Algorithmic Execution Logic
Iterates through `this.options`:
1. Sets `option.optionNode.attr({ optionId: option.optionId })`.
2. Sets `option.optionNode.getComponent(Button).interactable = isEnable`.

---

## 3. Un-truncated Source Code Implementation
```typescript
onEnableOptions(isEnable = false): void {
    this.options.forEach((option, index) => {
        option.optionNode.attr({ optionId: option.optionId});
        option.optionNode.getComponent(Button).interactable = isEnable;
    });
}
```
