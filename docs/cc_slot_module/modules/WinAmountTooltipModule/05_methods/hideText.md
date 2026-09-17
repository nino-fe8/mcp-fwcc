---
id: "cc_slot_module:WinAmountTooltipModule:methods:hideText"
title: "WinAmountTooltipModule.hideText Method"
category: "cc_slot_module"
tags: ["WinAmountTooltipModule", "winamounttooltipmodule", "cc_slot_module", "methods", "hideText"]
---

# 📖 `WinAmountTooltipModule.hideText()`

<!-- convention-summary-start -->
### WinAmountTooltipModule.hideText Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinAmountTooltipModule.hideText Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public hideText(): void
```

---

## 2. Complete Source Code Implementation

```typescript
hideText(): void {
	this.winTextSprite.node.active = false;
	this.featureSprite.node.active = false;
}
```
