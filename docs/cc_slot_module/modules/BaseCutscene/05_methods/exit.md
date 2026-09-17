---
id: "cc_slot_module:BaseCutscene:methods:exit"
title: "BaseCutscene.exit Method"
category: "cc_slot_module"
tags: ["BaseCutscene", "base_cutscene", "cc_slot_module", "methods", "exit"]
---

# 📖 `BaseCutscene.exit()`

<!-- convention-summary-start -->
### BaseCutscene.exit Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseCutscene.exit Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Concludes the cutscene, fires completion callback, emits close notifications, and deactivates the root node.

```typescript
public exit(_data?: any, _callback?: Function): void
```

---

## 2. Complete Source Code Implementation

```typescript
exit(_data?: any, _callback?: Function): void {
    this.callback && this.callback();
    this.callback = null;

    this.fireCutsceneClose();
    this.node.emit("STOP");
    this.node.active = false;
}
```
