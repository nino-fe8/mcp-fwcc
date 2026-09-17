---
id: "cc_slot_module:SlotSymbolResourceManager:method:initAssets"
title: "SlotSymbolResourceManager.initAssets() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolResourceManager", "slot_symbol_resource_manager", "cc_slot_module", "method", "initAssets", "dictionary_indexing"]
---

# `SlotSymbolResourceManager.initAssets(): void`

<!-- convention-summary-start -->
### SlotSymbolResourceManager.initAssets() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolResourceManager.initAssets() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
protected initAssets(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Iterates over `symbolSfList` and sets `staticFrameAssets[code] = frame`.
2. Iterates over `blurSymbolSfList` and sets `blurFrameAssets[code] = frame`.
3. Iterates over `backgroundSymbolSfList` and sets `backgroundFrameAssets[code] = frame`.
4. Iterates over `symbolSkeletons` and sets `skeletonAssets[code] = skeletonData`.

---

## 3. Un-truncated Source Code Implementation
```typescript
protected initAssets(): void {
	for (const frame of this.symbolSfList) {
		this.staticFrameAssets[frame.symbolCode] = frame.symbolSf;
	}

	for (const frame of this.blurSymbolSfList) {
		this.blurFrameAssets[frame.symbolCode] = frame.symbolSf;
	}

	for (const frame of this.backgroundSymbolSfList) {
		this.backgroundFrameAssets[frame.symbolCode] = frame.symbolSf;
	}

	for (const skeleton of this.symbolSkeletons) {
		this.skeletonAssets[skeleton.symbolCode] = skeleton.skeletonData;
	}
}
```
