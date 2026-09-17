---
id: "cc_slot_module:BaseCutscene:methods:show"
title: "BaseCutscene.show Method"
category: "cc_slot_module"
tags: ["BaseCutscene", "base_cutscene", "cc_slot_module", "methods", "show"]
---

# 📖 `BaseCutscene.show()`

<!-- convention-summary-start -->
### BaseCutscene.show Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseCutscene.show Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Activates the cutscene root node.

```typescript
public show(): void
```

---

## 2. Complete Source Code Implementation

```typescript
show(): void {
    this.node.active = true;
}
```
