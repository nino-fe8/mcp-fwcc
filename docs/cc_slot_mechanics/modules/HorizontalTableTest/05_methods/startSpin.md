---
id: "cc_slot_mechanics:HorizontalTableTest:methods:startSpin"
title: "HorizontalTableTest.startSpin Method"
category: "cc_slot_mechanics"
tags: ["HorizontalTableTest", "horizontal_table_test", "cc_slot_mechanics", "methods", "startSpin"]
---

# 📖 `HorizontalTableTest.startSpin()`

<!-- convention-summary-start -->
### HorizontalTableTest.startSpin Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for HorizontalTableTest.startSpin Method.
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

- **Primary Role**: Implements startSpin within the HorizontalTableTest mechanics lifecycle.

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
