---
id: "cc_slot_module:BaseCutscene:methods:init"
title: "BaseCutscene.init Method"
category: "cc_slot_module"
tags: ["BaseCutscene", "base_cutscene", "cc_slot_module", "methods", "init"]
---

# 📖 `BaseCutscene.init()`

<!-- convention-summary-start -->
### BaseCutscene.init Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseCutscene.init Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Binds local node lifecycle events and deactivates the cutscene node.

```typescript
public init(): void
```

---

## 2. Complete Source Code Implementation

```typescript
init(): void {
    this.node.on('PLAY', this.play, this);
    this.node.on('HIDE', this.exit, this);
    this.node.on('INIT', this.init, this);
    this.node.on('SKIP', this.skip, this);

    this.node.active = false;

    // @ts-ignore
    if (CC_PREVIEW) {
        globalThis[this.node.name] = this;
    }
}
```
