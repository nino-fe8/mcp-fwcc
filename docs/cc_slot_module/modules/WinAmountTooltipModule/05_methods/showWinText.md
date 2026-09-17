---
id: "cc_slot_module:WinAmountTooltipModule:methods:showWinText"
title: "WinAmountTooltipModule.showWinText Method"
category: "cc_slot_module"
tags: ["WinAmountTooltipModule", "winamounttooltipmodule", "cc_slot_module", "methods", "showWinText"]
---

# 📖 `WinAmountTooltipModule.showWinText()`

<!-- convention-summary-start -->
### WinAmountTooltipModule.showWinText Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinAmountTooltipModule.showWinText Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public showWinText(isTotalWin: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
showWinText(isTotalWin: boolean): void {
	this.winTextSprite.node.active = true;
	this.winTextSprite.spriteFrame = isTotalWin ? this.totalWinTextSpriteFrame : this.winTextSpriteFrame;
}
```
