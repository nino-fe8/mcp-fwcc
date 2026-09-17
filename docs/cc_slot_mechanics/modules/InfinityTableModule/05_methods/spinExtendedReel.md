---
id: "cc_slot_mechanics:InfinityTableModule:methods:spinExtendedReel"
title: "InfinityTableModule.spinExtendedReel Method"
category: "cc_slot_mechanics"
tags: ["InfinityTableModule", "infinity_table_module", "cc_slot_mechanics", "methods", "spinExtendedReel"]
---

# 📖 `InfinityTableModule.spinExtendedReel()`

<!-- convention-summary-start -->
### InfinityTableModule.spinExtendedReel Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for InfinityTableModule.spinExtendedReel Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature & Overview

```typescript
spinExtendedReel(): void
```

- **Primary Role**: Implements spinExtendedReel within the InfinityTableModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected spinExtendedReel(): void {
		const index: number = this.extendedReels.length - 1;
        (this.extendedReels[index] as InfinityReelModule).runExtendedReelSpin();	
    }
```
