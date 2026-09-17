---
id: "cc_slot_module:SlotSymbolResourceManager:method:getBackgroundFrame"
title: "SlotSymbolResourceManager.getBackgroundFrame() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolResourceManager", "slot_symbol_resource_manager", "cc_slot_module", "method", "getBackgroundFrame"]
---

# `SlotSymbolResourceManager.getBackgroundFrame(symbolCode: string): cc.SpriteFrame`

<!-- convention-summary-start -->
### SlotSymbolResourceManager.getBackgroundFrame() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolResourceManager.getBackgroundFrame() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public getBackgroundFrame(symbolCode: string): cc.SpriteFrame
```

---

## 2. Detailed Algorithmic Execution Logic
1. Returns `this.backgroundFrameAssets[symbolCode]`.

---

## 3. Un-truncated Source Code Implementation
```typescript
getBackgroundFrame(symbolCode: string): cc.SpriteFrame {
	return this.backgroundFrameAssets[symbolCode];
}
```
