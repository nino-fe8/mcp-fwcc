---
id: "cc_slot_mechanics:MegaReelData:methods:isSubset"
title: "MegaReelData.isSubset Method"
category: "cc_slot_mechanics"
tags: ["MegaReelData", "mega_reel_data", "cc_slot_mechanics", "methods", "isSubset"]
---

# 📖 `MegaReelData.isSubset()`

<!-- convention-summary-start -->
### MegaReelData.isSubset Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MegaReelData.isSubset Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature & Overview

```typescript
isSubset(mainArray: any[], subArray: any[]): boolean
```

- **Primary Role**: Implements isSubset within the MegaReelData mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
isSubset(mainArray: any[], subArray: any[]): boolean {
        return subArray.every(value => mainArray.indexOf(value.toString()) >= 0);
    }
```
