---
id: "cc_slot_mechanics:InfinityTableModule:methods:fastStop"
title: "InfinityTableModule.fastStop Method"
category: "cc_slot_mechanics"
tags: ["InfinityTableModule", "infinity_table_module", "cc_slot_mechanics", "methods", "fastStop"]
---

# 📖 `InfinityTableModule.fastStop()`

<!-- convention-summary-start -->
### InfinityTableModule.fastStop Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for InfinityTableModule.fastStop Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature & Overview

```typescript
fastStop(): void
```

- **Primary Role**: Implements fastStop within the InfinityTableModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
fastStop(): void {
        if (this.respinState === InfinityTableSpinState.CAN_F2R && this.currentReelExtended > 0) {
            this.extendedReels.forEach((reelComponent) => {
                reelComponent.fastStop();
            });
        }
		super.fastStop();
	}
```
