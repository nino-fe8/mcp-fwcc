---
id: "cc_slot_module:FreeGameDirectorModule:customization:subclassing_guide"
title: "FreeGameDirectorModule Subclassing & Feature Customization Guide"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "customization", "subclassing"]
---

# 🏗️ FreeGameDirectorModule Subclassing & Feature Customization Guide

<!-- convention-summary-start -->
### FreeGameDirectorModule Subclassing & Feature Customization Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FreeGameDirectorModule Subclassing & Feature Customization Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Class Inheritance Declaration

```typescript
const { _decorator } = cc;
import { FreeGameDirectorModule } from "../../../GameMode/FreeGame/FreeGameDirectorModule";
const { ccclass } = _decorator;

@ccclass("FreeGameDirector9666")
export default class FreeGameDirector9666 extends FreeGameDirectorModule {
    override enter(): void {
        super.enter();
        // Custom feature banner or multiplier setup
    }
}
```

---

## 2. Invariant Subclassing Rules

1. **Always maintain `syncSpinTimes()`**: Ensures initial and retriggered spin counts match `GameDataStore`.
2. **Preserve `isFirstAutoSpin` pattern**: Ensures seamless entry without awkward pacing freezes.
