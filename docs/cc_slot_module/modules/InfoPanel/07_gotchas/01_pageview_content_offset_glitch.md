---
id: "cc_slot_module:InfoPanel:gotchas:01_pageview_content_offset_glitch"
title: "PageView Content Offset Glitch"
category: "cc_slot_module"
tags: ["InfoPanel", "infopanel", "cc_slot_module", "gotchas", "pageview"]
---

# ⚠️ PageView Content Offset Glitch

<!-- convention-summary-start -->
### PageView Content Offset Glitch Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PageView Content Offset Glitch.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Defect & Solution

In Cocos Creator 2.4, reopening a PageView from an inactive parent node can freeze page boundaries. Use the `onResetPageView` scheduling hack:

```typescript
onResetPageView(): void {
    this.pageView.node.active = false;
    this.scheduleOnce(() => {
        this.pageView.node.active = true;
    });
}
```
