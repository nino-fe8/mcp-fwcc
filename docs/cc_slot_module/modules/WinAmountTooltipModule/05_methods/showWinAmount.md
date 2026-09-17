---
id: "cc_slot_module:WinAmountTooltipModule:methods:showWinAmount"
title: "WinAmountTooltipModule.showWinAmount Method"
category: "cc_slot_module"
tags: ["WinAmountTooltipModule", "winamounttooltipmodule", "cc_slot_module", "methods", "showWinAmount"]
---

# 📖 `WinAmountTooltipModule.showWinAmount()`

<!-- convention-summary-start -->
### WinAmountTooltipModule.showWinAmount Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinAmountTooltipModule.showWinAmount Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public showWinAmount({ winAmount, time, winLevel }: any): void
```

---

## 2. Complete Source Code Implementation

```typescript
showWinAmount({ winAmount, time, winLevel }: any): void {
	this.stopAllTweens();
	this.hideText();

	this._currentType = TOOL_TIP_TYPE.WIN_AMOUNT;
	this.labelWinAmount.node.active = true;
	this.showWinText(false);
	this.updateWinAmount({ winAmount, time, winLevel });
}
```
