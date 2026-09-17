---
id: "cc_slot_module:UIManagerModule:methods:setNodeActive"
title: "UIManagerModule.setNodeActive Method"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "methods", "setNodeActive"]
---

# 📖 `UIManagerModule.setNodeActive()`

<!-- convention-summary-start -->
### UIManagerModule.setNodeActive Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for UIManagerModule.setNodeActive Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Safely toggles active state on a target Cocos node with null checking.

```typescript
public setNodeActive(node: cc.Node, active: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
setNodeActive(node: cc.Node, active: boolean): void {
    if (node) {
        node.active = active;
    }
}
```
