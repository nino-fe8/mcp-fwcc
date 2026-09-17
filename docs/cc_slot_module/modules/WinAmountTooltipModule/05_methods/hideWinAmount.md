---
id: "cc_slot_module:WinAmountTooltipModule:methods:hideWinAmount"
title: "WinAmountTooltipModule.hideWinAmount Method"
category: "cc_slot_module"
tags: ["WinAmountTooltipModule", "winamounttooltipmodule", "cc_slot_module", "methods", "hideWinAmount"]
---

# 📖 `WinAmountTooltipModule.hideWinAmount()`

<!-- convention-summary-start -->
### WinAmountTooltipModule.hideWinAmount Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinAmountTooltipModule.hideWinAmount Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public hideWinAmount(): void
```

---

## 2. Complete Source Code Implementation

```typescript
hideWinAmount(): void {
	this.clearWinAmount();
	this.winTextSprite.node.active = false;
	this.labelWinAmount.node.active = false;
}
```
