---
id: "cc_slot_module:GameModeWriterModule:customization:subclassing_guide"
title: "GameModeWriterModule Subclassing & Script Hierarchy Guide"
category: "cc_slot_module"
tags: ["GameModeWriterModule", "game_mode_writer", "cc_slot_module", "customization", "subclassing", "base_writer"]
---

# 🏗️ GameModeWriterModule Subclassing & Script Hierarchy Guide

<!-- convention-summary-start -->
### GameModeWriterModule Subclassing & Script Hierarchy Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeWriterModule Subclassing & Script Hierarchy Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Class Inheritance Declaration

All custom mode writers inherit directly or indirectly from `GameModeWriterModule`:

```typescript
const { _decorator } = cc;
import { GameModeWriterModule } from "../GameModeWriterModule";
const { ccclass } = _decorator;

@ccclass("NormalGameWriterModule")
export class NormalGameWriterModule extends GameModeWriterModule {
    // Mode-specific script generators
}
```

---

## 2. Invariant Subclassing Rules

1. **Always Bind to Node in `onLoadExtend()`**: `super.onLoadExtend()` assigns `this.node["writer"] = this`.
2. **Pure Functional Pipelines**: Never store transient animation states or promises inside the writer.
