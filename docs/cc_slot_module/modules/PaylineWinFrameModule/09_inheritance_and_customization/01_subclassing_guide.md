---
id: "cc_slot_module:PaylineWinFrameModule:inheritance:subclassing_guide"
title: "PaylineWinFrameModule Subclassing Guide"
category: "cc_slot_module"
tags: ["PaylineWinFrameModule", "payline_win_frame_module", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ PaylineWinFrameModule Subclassing Guide

<!-- convention-summary-start -->
### PaylineWinFrameModule Subclassing Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineWinFrameModule Subclassing Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclassing Declaration

```typescript
const { ccclass } = cc._decorator;
import { PaylineWinFrameModule } from "PaylineWinFrameModule";

@ccclass
export default class PaylineWinFrameModule9666 extends PaylineWinFrameModule {
    // Custom win frame styling
}
```

---

## 2. Invariant Rules

1. **Retain Local NodePool**: Do not discard `winFramePool` to prevent memory thrashing.
2. **Handle Event Cleanup**: Preserve `hideAll()` and `clearAll()` behavior.
