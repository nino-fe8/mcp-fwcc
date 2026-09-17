---
id: "cc_slot_module:BonusGameItemModule:customization:subclassing_guide"
title: "BonusGameItemModule Subclassing & Spine Chest Guide"
category: "cc_slot_module"
tags: ["BonusGameItemModule", "bonus_game_item", "cc_slot_module", "customization", "subclassing", "spine_chest"]
---

# 🏗️ BonusGameItemModule Subclassing & Spine Chest Guide

<!-- convention-summary-start -->
### BonusGameItemModule Subclassing & Spine Chest Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BonusGameItemModule Subclassing & Spine Chest Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Class Inheritance Declaration

When implementing animated Spine chests or 3D cards:

```typescript
const { _decorator } = cc;
import { BonusGameItemModule } from "../../../cc-common/cc-slot-module/SlotModuleExport";
const { ccclass, property } = _decorator;

@ccclass("SpineBonusGameItemModule")
export default class SpineBonusGameItemModule extends BonusGameItemModule {
    @property(sp.Skeleton)
    spineChest: sp.Skeleton = null;

    override playAnimOpen(value: number, callback?: Function): void {
        this.spineChest.setAnimation(0, "open", false);
        super.playAnimOpen(value, callback);
    }
}
```

---

## 2. Invariant Subclassing Rules

1. **Always Set `isOpen = true` on Open**: Prevents re-clicking an already opened chest.
2. **Execute Callback on Animation End**: Ensures `BonusGameTableModule.openFinalBox()` Promise resolves promptly to allow subsequent settlement steps to run.
