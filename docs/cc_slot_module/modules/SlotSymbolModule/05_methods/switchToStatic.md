---
id: "cc_slot_module:SlotSymbolModule:method:switchToStatic"
title: "SlotSymbolModule.switchToStatic() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "method", "switchToStatic", "tri_state"]
---

# `SlotSymbolModule.switchToStatic(flagStatic: boolean): void`

<!-- convention-summary-start -->
### SlotSymbolModule.switchToStatic() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolModule.switchToStatic() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
protected switchToStatic(flagStatic: boolean): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. If Spine exists: clears complete listeners on `this.spine`.
2. Toggles active state on nodes:
   - `this.sprite.node.active = flagStatic`
   - `this.spine.node.active = !flagStatic`

---

## 3. Un-truncated Source Code Implementation
```typescript
protected switchToStatic(flagStatic: boolean): void {
	if (this.spine) {
		this.spine.setCompleteListener(() => { });
	} else {
		this.sprite.node.active = true;
		return;
	}

	this.sprite.node.active = flagStatic;
	this.spine.node.active = !flagStatic;
}
```
