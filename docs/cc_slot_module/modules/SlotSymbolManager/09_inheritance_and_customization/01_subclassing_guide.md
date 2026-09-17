---
id: "cc_slot_module:SlotSymbolManager:customization:subclassing_guide"
title: "SlotSymbolManager Subclassing & Custom Pool Guide"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "customization", "subclassing"]
---

# 🏗️ SlotSymbolManager Subclassing & Custom Pool Guide

<!-- convention-summary-start -->
### SlotSymbolManager Subclassing & Custom Pool Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolManager Subclassing & Custom Pool Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Class Inheritance Declaration

```typescript
const { _decorator } = cc;
import { SlotSymbolManager, SlotSymbolModule } from "../../../../cc-common/cc-slot-module/SlotModuleExport";
const { ccclass } = _decorator;

@ccclass("SlotSymbolManager9666")
export default class SlotSymbolManager9666 extends SlotSymbolManager {
    protected override instantiateNewSymbol(): cc.Node {
        const symbol = super.instantiateNewSymbol();
        // Custom symbol node initialization / attachment of extra particle layers
        return symbol;
    }
}
```

---

## 2. Invariant Subclassing Rules

1. **Maintain `SlotSymbolModule` Component**: Every pooled symbol node MUST contain a component extending `SlotSymbolModule`.
2. **Honor `isForce` in `removeSymbol()`**: Never bypass sticky protection logic unless `isForce = true`.
