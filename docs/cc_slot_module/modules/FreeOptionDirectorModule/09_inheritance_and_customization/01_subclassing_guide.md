---
id: "cc_slot_module:FreeOptionDirectorModule:customization:subclassing_guide"
title: "FreeOptionDirectorModule Subclassing & Customization Guide"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "customization", "subclassing"]
---

# 🏗️ FreeOptionDirectorModule Subclassing & Customization Guide

<!-- convention-summary-start -->
### FreeOptionDirectorModule Subclassing & Customization Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FreeOptionDirectorModule Subclassing & Customization Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Class Inheritance Declaration

```typescript
const { _decorator } = cc;
import { FreeOptionDirectorModule } from "../../../GameMode/FreeOption/FreeOptionDirectorModule";
const { ccclass } = _decorator;

@ccclass("FreeOptionDirector9666")
export class FreeOptionDirector9666 extends FreeOptionDirectorModule {
    // Custom option animation hooks
}
```

---

## 2. Invariant Subclassing Rules

1. **Always stop countdown timer**: When overriding `optionClick()`, ensure `this.stopCountDown()` executes.
2. **Synchronous Button Disabling**: Disable buttons immediately to avoid duplicate network payloads.
