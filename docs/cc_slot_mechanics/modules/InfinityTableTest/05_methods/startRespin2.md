---
id: "cc_slot_mechanics:InfinityTableTest:methods:startRespin2"
title: "InfinityTableTest.startRespin2 Method"
category: "cc_slot_mechanics"
tags: ["InfinityTableTest", "infinity_table_test", "cc_slot_mechanics", "methods", "startRespin2"]
---

# 📖 `InfinityTableTest.startRespin2()`

<!-- convention-summary-start -->
### InfinityTableTest.startRespin2 Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for InfinityTableTest.startRespin2 Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature & Overview

```typescript
startRespin2(): void
```

- **Primary Role**: Implements startRespin2 within the InfinityTableTest mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
startRespin2(): void {
        this.scheduleOnce(() => {
            this.table.startRespin(null);
            this.stopRespin2();
        }, 1.5);
    }
```
