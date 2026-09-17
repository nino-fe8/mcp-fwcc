---
id: "cc_slot_module:NormalGameDirectorModule:customization:subclassing_guide"
title: "NormalGameDirectorModule Subclassing Guide"
category: "cc_slot_module"
tags: ["NormalGameDirectorModule", "normal_game_director", "cc_slot_module", "customization", "subclassing", "RedCliff"]
---

# 🏗️ NormalGameDirectorModule Subclassing Guide

<!-- convention-summary-start -->
### NormalGameDirectorModule Subclassing Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for NormalGameDirectorModule Subclassing Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Class Inheritance Declaration

When creating the Base Game director for a new slot game:

```typescript
const { _decorator } = cc;
import { NormalGameDirectorModule } from "../../../../cc-common/cc-slot-module/SlotModuleExport";
const { ccclass } = _decorator;

@ccclass("NormalGameDirectorModule9666")
export default class NormalGameDirectorModule9666 extends NormalGameDirectorModule {
    onExtendedLoad(): void {
        super.onExtendedLoad();
        this.node["director"] = this;
        this.node["writer"] = this.getComponent(NormalGameWriterModule9666);
        this.init();
    }
}
```

---

## 2. Invariant Subclassing Rules
1. **Always bind `this.node["writer"]` before calling `this.init()`**: Failure to do so prevents `ScriptExecutor` from binding action script generators.
2. **Handle Progressive Multipliers in `onBackToGameMode`**: When returning to Normal Game from Free Game, reset progressive counters via event bus before calling `super.onBackToGameMode()`.
