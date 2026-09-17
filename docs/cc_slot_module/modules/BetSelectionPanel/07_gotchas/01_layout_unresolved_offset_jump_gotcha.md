---
id: "cc_slot_module:BetSelectionPanel:gotchas:01_layout_unresolved_offset_jump_gotcha"
title: "Layout Unresolved Offset Jump Gotcha"
category: "cc_slot_module"
tags: ["BetSelectionPanel", "betselectionpanel", "cc_slot_module", "gotchas", "layout"]
---

# ⚠️ Layout Unresolved Offset Jump Gotcha

<!-- convention-summary-start -->
### Layout Unresolved Offset Jump Gotcha Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Layout Unresolved Offset Jump Gotcha.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Defect & Solution

Always call `layout.updateLayout()` before computing `calculateOffsetY` when opening the panel:

```typescript
updateLayout(): void {
    const layoutTotal = this.scrollViewTotal.getComponentInChildren(Layout);
    const layoutDenom = this.scrollViewDenom.getComponentInChildren(Layout);
    if (layoutTotal) layoutTotal.updateLayout();
    if (layoutDenom) layoutDenom.updateLayout();
}
```
