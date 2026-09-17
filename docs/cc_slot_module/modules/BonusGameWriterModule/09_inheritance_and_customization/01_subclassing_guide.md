---
id: "cc_slot_module:BonusGameWriterModule:customization:subclassing_guide"
title: "BonusGameWriterModule Subclassing & Script Extension Guide"
category: "cc_slot_module"
tags: ["BonusGameWriterModule", "bonus_game_writer", "cc_slot_module", "customization", "subclassing", "makeScript"]
---

# 🏗️ BonusGameWriterModule Subclassing & Script Extension Guide

<!-- convention-summary-start -->
### BonusGameWriterModule Subclassing & Script Extension Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BonusGameWriterModule Subclassing & Script Extension Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Class Inheritance Declaration

When constructing a custom pick bonus or wheel script writer for a new slot title:

```typescript
const { _decorator } = cc;
import { BonusGameWriterModule } from "../../../../cc-common/cc-slot-module/SlotModuleExport";
const { ccclass } = _decorator;

@ccclass("BonusGameWriterModule9666")
export default class BonusGameWriterModule9666 extends BonusGameWriterModule {
    // Custom makeScript definitions
}
```

---

## 2. Invariant Subclassing Rules

1. **Synchronous Purity**: Methods prefixed with `makeScript` must return pure arrays of `{ command: string, data?: any }` objects synchronously.
2. **Terminal Step Order**: In `makeScriptShowResultFinal()`, ensure unpicked item revelations (`_openAllItems`) run before the total win cutscene (`_playFinalResultEffect`).
