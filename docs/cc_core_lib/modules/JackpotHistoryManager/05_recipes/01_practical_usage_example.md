---
id: "cc_core_lib:JackpotHistoryManager:recipes:usage"
title: "Recipe: Practical JackpotHistoryManager Integration in Slot Games"
category: "cc_core_lib"
tags: ["JackpotHistoryManager", "jackpot_history_manager", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `JackpotHistoryManager` Integration

<!-- convention-summary-start -->
### Recipe: Practical JackpotHistoryManager Integration in Slot Games Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Practical JackpotHistoryManager Integration in Slot Games.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_core_lib, 05_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Standard Initialization & Usage

```typescript
import { JackpotHistoryManager } from "cc-core-lib";

// 1. Accessing via global eno namespace or modular import
const instance = new JackpotHistoryManager();

// 2. Executing primary operations
// ...
```

---

## 2. Real-World Game Workflow Example (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `JackpotHistoryManager` integrates directly into the Director and Writer modules to maintain seamless state synchronization across Base Game, Free Spins, and Respin cascades.
