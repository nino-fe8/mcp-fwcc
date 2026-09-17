---
id: "cc_slot_module:GameDirector:customization:subclassing_guide"
title: "GameDirector Subclassing & Custom Dispatcher Guide"
category: "cc_slot_module"
tags: ["GameDirector", "game_director", "cc_slot_module", "customization", "subclassing", "mode_dispatcher"]
---

# 🏗️ GameDirector Subclassing & Custom Dispatcher Guide

<!-- convention-summary-start -->
### GameDirector Subclassing & Custom Dispatcher Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameDirector Subclassing & Custom Dispatcher Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Class Inheritance Declaration

When extending the root `GameDirector` in a new slot title:

```typescript
const { _decorator } = cc;
import { GameDirector } from "../../../cc-common/cc-slot-module/SlotModuleExport";
const { ccclass } = _decorator;

@ccclass("GameDirector9666")
export default class GameDirector9666 extends GameDirector {
    // Custom global mode transitions
}
```

---

## 2. Invariant Subclassing Rules

1. **Always Call `super.onLoadExtend()` and `super.start()`**: Ensures game modes initialize and the default `NORMAL_GAME` activates.
2. **Never Break `currentModes` Stack Order**: Mode transitions rely on LIFO stack ordering to properly restore the prior mode on `onExitGameMode()`.
