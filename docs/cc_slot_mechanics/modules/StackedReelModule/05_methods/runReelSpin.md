---
id: "cc_slot_mechanics:StackedReelModule:methods:runReelSpin"
title: "StackedReelModule.runReelSpin Method"
category: "cc_slot_mechanics"
tags: ["StackedReelModule", "stacked_reel_module", "cc_slot_mechanics", "methods", "runReelSpin"]
---

# 📖 `StackedReelModule.runReelSpin()`

<!-- convention-summary-start -->
### StackedReelModule.runReelSpin Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for StackedReelModule.runReelSpin Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature & Overview

```typescript
runReelSpin(mode): void
```

- **Primary Role**: Implements runReelSpin within the StackedReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
runReelSpin(mode): void {
		this._listRandomSymbols = this.generateStackedSymbol(true);
		super.runReelSpin(mode);
	}
```
