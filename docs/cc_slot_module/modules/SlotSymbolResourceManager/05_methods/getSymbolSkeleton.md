---
id: "cc_slot_module:SlotSymbolResourceManager:method:getSymbolSkeleton"
title: "SlotSymbolResourceManager.getSymbolSkeleton() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolResourceManager", "slot_symbol_resource_manager", "cc_slot_module", "method", "getSymbolSkeleton", "spine"]
---

# `SlotSymbolResourceManager.getSymbolSkeleton(symbolCode: string): sp.SkeletonData`

<!-- convention-summary-start -->
### SlotSymbolResourceManager.getSymbolSkeleton() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolResourceManager.getSymbolSkeleton() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public getSymbolSkeleton(symbolCode: string): sp.SkeletonData
```

---

## 2. Detailed Algorithmic Execution Logic
1. Returns `this.skeletonAssets[symbolCode]`.

---

## 3. Un-truncated Source Code Implementation
```typescript
getSymbolSkeleton(symbolCode: string): sp.SkeletonData {
	return this.skeletonAssets[symbolCode];
}
```
