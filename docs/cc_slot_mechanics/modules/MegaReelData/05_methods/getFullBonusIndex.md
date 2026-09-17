---
id: "cc_slot_mechanics:MegaReelData:methods:getFullBonusIndex"
title: "MegaReelData.getFullBonusIndex Method"
category: "cc_slot_mechanics"
tags: ["MegaReelData", "mega_reel_data", "cc_slot_mechanics", "methods", "getFullBonusIndex"]
---

# 📖 `MegaReelData.getFullBonusIndex()`

<!-- convention-summary-start -->
### MegaReelData.getFullBonusIndex Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MegaReelData.getFullBonusIndex Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature & Overview

```typescript
getFullBonusIndex(): string[]
```

- **Primary Role**: Implements getFullBonusIndex within the MegaReelData mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
getFullBonusIndex(): string[] {
        if (this["fBi"]) {
            return this["fBi"];
        } else {
            return [];
        }
    }
```
