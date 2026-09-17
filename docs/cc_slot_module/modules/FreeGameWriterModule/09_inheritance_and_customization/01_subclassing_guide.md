---
id: "cc_slot_module:FreeGameWriterModule:customization:subclassing_guide"
title: "FreeGameWriterModule Subclassing & Script Pipeline Guide"
category: "cc_slot_module"
tags: ["FreeGameWriterModule", "free_game_writer", "cc_slot_module", "customization", "subclassing"]
---

# 🏗️ FreeGameWriterModule Subclassing & Script Pipeline Guide

<!-- convention-summary-start -->
### FreeGameWriterModule Subclassing & Script Pipeline Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FreeGameWriterModule Subclassing & Script Pipeline Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Class Inheritance Declaration

```typescript
const { _decorator } = cc;
import { FreeGameWriterModule } from "../../../GameMode/FreeGame/FreeGameWriterModule";
const { ccclass } = _decorator;

@ccclass("FreeGameWriter9666")
export default class FreeGameWriter9666 extends FreeGameWriterModule {
    override makeScriptFreeSpinTrigger(): Object[] {
        const listScript = super.makeScriptFreeSpinTrigger();
        // Custom feature commands
        return listScript;
    }
}
```

---

## 2. Invariant Subclassing Rules

1. **Retain `_decreaseFreeGameSpinTimes`**: Ensures the badge counter always syncs at the start of spinning.
2. **Use `_showUnskippedCutscene` for Total Win**: Guarantees the player sees their final summary.
