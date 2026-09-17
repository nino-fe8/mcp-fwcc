---
id: "cc_slot_module:BetHistoryDetailModule:gotchas:02_scrollview_offset_negative_bounce"
title: "ScrollView Offset Calculation Gotcha"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "gotchas", "scrollview"]
---

# ⚠️ ScrollView Offset Calculation Gotcha

<!-- convention-summary-start -->
### ScrollView Offset Calculation Gotcha Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for ScrollView Offset Calculation Gotcha.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Defect & Fix

When `index === 0`, calculating `(index - 1) * itemLength` produces a negative offset. Always branch on `index == 0` to explicitly scroll to `v2(0, 0)`:

```typescript
if (index >= 1 && index + 1 <= this.usingScrollItem.length) {
    const itemLength = this.usingScrollItem[0].width;
    const offsetX = (index - 1) * itemLength;
    this.scrollView.scrollToOffset(v2(offsetX, 0));
} else if (index == 0) {
    this.scrollView.scrollToOffset(v2(0, 0));
}
```
