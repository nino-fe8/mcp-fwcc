---
id: "cc_slot_module:SlotTableNearWinModule:inheritance:subclassing_guide"
title: "SlotTableNearWinModule Subclassing Guide"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ SlotTableNearWinModule Subclassing Guide

<!-- convention-summary-start -->
### SlotTableNearWinModule Subclassing Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableNearWinModule Subclassing Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclassing Declaration

```typescript
const { ccclass, property } = cc._decorator;
import { SlotTableNearWinModule } from "SlotTableNearWinModule";

@ccclass
export default class SlotTableNearWinModule9666 extends SlotTableNearWinModule {
    // Custom logic
}
```

---

## 2. Invariant Rules

1. **Do not override `onLoad()`**: Implement `extendInit()` or `onLoadExtend()` with `super.onLoadExtend()`.
2. **Always call `super.resetNearWin()`**: Ensure tension audio and Spine playback are reliably terminated during reset.
3. **Coordinate Math**: If reel padding or custom spacing is altered, override `_getXPosition()`.
