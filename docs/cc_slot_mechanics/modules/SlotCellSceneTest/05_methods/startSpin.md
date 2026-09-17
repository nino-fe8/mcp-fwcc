---
id: "cc_slot_mechanics:SlotCellSceneTest:methods:startSpin"
title: "SlotCellSceneTest.startSpin Method"
category: "cc_slot_mechanics"
tags: ["SlotCellSceneTest", "slot_cell_scene_test", "cc_slot_mechanics", "methods", "startSpin"]
---

# 📖 `SlotCellSceneTest.startSpin()`

<!-- convention-summary-start -->
### SlotCellSceneTest.startSpin Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotCellSceneTest.startSpin Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature & Overview

```typescript
startSpin(): void
```

- **Primary Role**: Implements startSpin within the SlotCellSceneTest mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
startSpin(): void {
		this.table.startSpin();
		this.scheduleOnce(() => {
			this.stopWithRandomMatrix();
		}, 0.3);
	}
```
