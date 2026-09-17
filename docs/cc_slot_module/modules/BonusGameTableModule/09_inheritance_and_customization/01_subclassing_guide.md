---
id: "cc_slot_module:BonusGameTableModule:customization:subclassing_guide"
title: "BonusGameTableModule Subclassing & Grid Customization Guide"
category: "cc_slot_module"
tags: ["BonusGameTableModule", "bonus_game_table", "cc_slot_module", "customization", "subclassing"]
---

# 🏗️ BonusGameTableModule Subclassing & Grid Customization Guide

<!-- convention-summary-start -->
### BonusGameTableModule Subclassing & Grid Customization Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BonusGameTableModule Subclassing & Grid Customization Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Class Inheritance Declaration

```typescript
const { _decorator } = cc;
import { BonusGameTableModule } from "../../../cc-common/cc-slot-module/SlotModuleExport";
const { ccclass } = _decorator;

@ccclass("BonusGameTableModule9666")
export default class BonusGameTableModule9666 extends BonusGameTableModule {
    // Custom grid animation
}
```

---

## 2. Invariant Subclassing Rules

1. **Maintain `listBoxes` Array Integrity**: All child item references instantiated in `initBoxes()` must be stored in `this.listBoxes` to ensure `disableAllBoxes()`, `enableAllBoxes()`, and `resetTable()` operate cleanly.
2. **Listen to Module Events**: Always call `super.registerEvents()` to bind to `INIT_BONUS_GAME`, `START_BONUS_GAME`, `OPEN_ITEM`, and `OPEN_ALL_ITEMS`.
