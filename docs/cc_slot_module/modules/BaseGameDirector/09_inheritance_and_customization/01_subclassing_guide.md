---
id: "cc_slot_module:BaseGameDirector:customization:subclassing_guide"
title: "BaseGameDirector Subclassing & Director Hierarchy Guide"
category: "cc_slot_module"
tags: ["BaseGameDirector", "base_game_director", "cc_slot_module", "customization", "subclassing", "director_writer"]
---

# 🏗️ BaseGameDirector Subclassing & Director Hierarchy Guide

<!-- convention-summary-start -->
### BaseGameDirector Subclassing & Director Hierarchy Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseGameDirector Subclassing & Director Hierarchy Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Class Inheritance Declaration

When implementing a game mode (e.g. `NormalGameDirectorModule` or `FreeGameDirectorModule`), inherit from `BaseGameDirector`:

```typescript
const { _decorator } = cc;
import { BaseGameDirector } from "../Core/BaseGameDirector";
const { ccclass } = _decorator;

@ccclass("NormalGameDirectorModule")
export class NormalGameDirectorModule extends BaseGameDirector {
    // Mode-specific directors override hooks and declare step handlers
}
```

---

## 2. Invariant Subclassing Rules
1. **Never override `onLoad()` without `super.onLoad()`**: `BaseGameDirector.onLoad()` calls `super.onLoad()` to resolve IoC dependencies and then triggers `this.onExtendedLoad()`.
2. **Always implement `init()` properly**: Ensure `this.writer` and `this.director` are attached to the node before `this.init()` executes.
3. **Keep Step Handlers Async-Safe**: Any method invoked by a command descriptor (`{ command: "MY_STEP", data }`) must return a resolved `Promise<void>` or handle errors gracefully.
