---
id: "cc_slot_module:BaseDataModule:customization:subclassing_guide"
title: "BaseDataModule Subclassing & Data Layer Guide"
category: "cc_slot_module"
tags: ["BaseDataModule", "base_data_module", "cc_slot_module", "customization", "subclassing"]
---

# 🏗️ BaseDataModule Subclassing & Data Layer Guide

<!-- convention-summary-start -->
### BaseDataModule Subclassing & Data Layer Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseDataModule Subclassing & Data Layer Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Class Inheritance Declaration

```typescript
const { _decorator } = cc;
import { BaseDataModule } from "../Core/BaseDataModule";
const { ccclass } = _decorator;

@ccclass("SlotTableData")
export class SlotTableData extends BaseDataModule {
    public registeredKeys: string[] = ["matrix"];

    override onloadExtend(): void {
        // Initialize local cache arrays
    }

    override onDataUpdate(key: string, value: any): void {
        super.onDataUpdate(key, value);
    }
}
```

---

## 2. Invariant Subclassing Rules

1. **Always declare `registeredKeys`**: Empty keys prevent any data updates from reaching the component.
2. **Co-locate with `SlotBaseModule`**: Must be attached to the same `cc.Node` as its sibling UI controller.
