---
id: "cc_slot_mechanics:MegaReelModule:methods:resetReel"
title: "MegaReelModule.resetReel Method"
category: "cc_slot_mechanics"
tags: ["MegaReelModule", "mega_reel_module", "cc_slot_mechanics", "methods", "resetReel"]
---

# 📖 `MegaReelModule.resetReel()`

<!-- convention-summary-start -->
### MegaReelModule.resetReel Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MegaReelModule.resetReel Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature & Overview

```typescript
resetReel(): void
```

- **Primary Role**: Implements resetReel within the MegaReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
resetReel(): void {
		const offset = Math.abs(this.node.position.y);
		this.megaSymbolList.forEach((s) => s.setPosition(s.position.x, s.position.y - offset));

        super.resetReel();
	}
```
