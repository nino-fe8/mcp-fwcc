---
id: "cc_slot_module:WinAmountModule:methods:resetLabel"
title: "WinAmountModule._resetLabel Method"
category: "cc_slot_module"
tags: ["WinAmountModule", "win_amount_module", "cc_slot_module", "methods", "_resetLabel"]
---

# 📖 `WinAmountModule._resetLabel()`

<!-- convention-summary-start -->
### WinAmountModule._resetLabel Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinAmountModule._resetLabel Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Stops running tweens and restores label opacity to 255.

```typescript
private _resetLabel(): void
```

---

## 2. Complete Source Code Implementation

```typescript
_resetLabel(): void {
    this.stopTweenFade();
    this.stopTweenValue();
    setOpacity(this.labelWinAmount.node, 255);
    (this.node as any).isFading = false;
}
```
