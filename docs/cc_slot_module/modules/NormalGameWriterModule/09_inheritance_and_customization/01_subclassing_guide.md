---
id: "cc_slot_module:NormalGameWriterModule:customization:subclassing_guide"
title: "NormalGameWriterModule Subclassing & Script Extension Guide"
category: "cc_slot_module"
tags: ["NormalGameWriterModule", "normal_game_writer", "cc_slot_module", "customization", "subclassing", "makeScript"]
---

# 🏗️ NormalGameWriterModule Subclassing & Script Extension Guide

<!-- convention-summary-start -->
### NormalGameWriterModule Subclassing & Script Extension Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for NormalGameWriterModule Subclassing & Script Extension Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Class Inheritance Declaration

When creating a customized Base Game script writer for a new slot game:

```typescript
const { _decorator } = cc;
import { NormalGameWriterModule } from "../../../../cc-common/cc-slot-module/SlotModuleExport";
const { ccclass } = _decorator;

@ccclass("NormalGameWriterModule9666")
export default class NormalGameWriterModule9666 extends NormalGameWriterModule {
    // Override or add makeScript methods
}
```

---

## 2. Invariant Subclassing Rules
1. **Synchronous Purity**: Methods prefixed with `makeScript` must be **100% synchronous**. Never make network calls or query scene graph nodes inside `makeScript`.
2. **Pure Object Arrays**: Always return an array of objects matching `{ command: string, data?: any, isSkippable?: boolean }`.
