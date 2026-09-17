---
id: "cc_slot_mechanics:StackedReelConfig:methods:getStackedConfig"
title: "StackedReelConfig.getStackedConfig Method"
category: "cc_slot_mechanics"
tags: ["StackedReelConfig", "stacked_reel_config", "cc_slot_mechanics", "methods", "getStackedConfig"]
---

# 📖 `StackedReelConfig.getStackedConfig()`

<!-- convention-summary-start -->
### StackedReelConfig.getStackedConfig Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for StackedReelConfig.getStackedConfig Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature & Overview

```typescript
getStackedConfig(reelIndex: number): StackedConfig | undefined
```

- **Primary Role**: Implements getStackedConfig within the StackedReelConfig mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
getStackedConfig(reelIndex: number): StackedConfig | undefined {
		return this.STACKED_CONFIG.find(config => config.reel === reelIndex);
	}
```
