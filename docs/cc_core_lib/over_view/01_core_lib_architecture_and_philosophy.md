---
id: "cc_core_lib:overview:architecture"
title: "cc-core-lib Architecture & Global Runtime Kernel"
category: "cc_core_lib"
tags: ["cc_core_lib", "overview", "architecture", "kernel", "eno"]
---

# 🏛️ `cc-core-lib` Architecture & Global Runtime Kernel

<!-- convention-summary-start -->
### cc-core-lib Architecture & Global Runtime Kernel Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for cc-core-lib Architecture & Global Runtime Kernel.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_core_lib, over_view
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Global Plugin Injection (`window.eno` / `globalThis.eno`)

`cc-core-lib` compiles into self-executing UMD/IIFE bundles loaded as Cocos Creator **Plugin Scripts**:
```typescript
// Global access across all game scripts
const { MoneyTween, HowlerSoundPlayer, FloatUtils, NodeUtils, inject, provide } = globalThis.eno;
```
