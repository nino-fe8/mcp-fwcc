---
id: "cc_slot_module:WinAmountTooltipModule:methods:hideTooltip"
title: "WinAmountTooltipModule.hideTooltip Method"
category: "cc_slot_module"
tags: ["WinAmountTooltipModule", "winamounttooltipmodule", "cc_slot_module", "methods", "hideTooltip"]
---

# 📖 `WinAmountTooltipModule.hideTooltip()`

<!-- convention-summary-start -->
### WinAmountTooltipModule.hideTooltip Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinAmountTooltipModule.hideTooltip Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public hideTooltip(): void
```

---

## 2. Complete Source Code Implementation

```typescript
hideTooltip(): void {
	this.hideWinAmount();
	this._currentType = TOOL_TIP_TYPE.IDLE;
	this.showText();
}
```
