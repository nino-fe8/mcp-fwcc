---
id: "cc_slot_module:UIManagerModule:methods:setNodeOpacity"
title: "UIManagerModule.setNodeOpacity Method"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "methods", "setNodeOpacity"]
---

# 📖 `UIManagerModule.setNodeOpacity()`

<!-- convention-summary-start -->
### UIManagerModule.setNodeOpacity Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for UIManagerModule.setNodeOpacity Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Safely updates opacity on a target Cocos node using `eno.setOpacity` with null checking.

```typescript
public setNodeOpacity(node: cc.Node, opacity: number): void
```

---

## 2. Complete Source Code Implementation

```typescript
setNodeOpacity(node: cc.Node, opacity: number): void {
    if (node) {
        eno.setOpacity(node, opacity);
    }
}
```
