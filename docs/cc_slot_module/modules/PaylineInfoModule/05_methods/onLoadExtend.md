---
id: "cc_slot_module:PaylineInfoModule:methods:onLoadExtend"
title: "PaylineInfoModule.onLoadExtend Method"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `PaylineInfoModule.onLoadExtend()`

<!-- convention-summary-start -->
### PaylineInfoModule.onLoadExtend Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineInfoModule.onLoadExtend Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Registers event listeners for show/hide, populates symbol asset map, and localizes text.

```typescript
public onLoadExtend(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
    this.eventManager.on('ON_SHOW_PAYLINE_INFO', this.showPaylineInfo, this);
    this.eventManager.on('ON_HIDE_PAYLINE_INFO', this.hidePaylineInfo, this);

    this._symbolAssets = eno.CommonUtils.convertAssetArrayToObject(this.smallSymbolFrames, true);
    this.localizeText();
}
```
