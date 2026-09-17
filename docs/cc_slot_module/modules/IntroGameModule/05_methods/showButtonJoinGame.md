---
id: "cc_slot_module:IntroGameModule:methods:showButtonJoinGame"
title: "IntroGameModule.showButtonJoinGame Method"
category: "cc_slot_module"
tags: ["IntroGameModule", "intro_game_module", "cc_slot_module", "methods", "showButtonJoinGame"]
---

# 📖 `IntroGameModule.showButtonJoinGame()`

<!-- convention-summary-start -->
### IntroGameModule.showButtonJoinGame Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for IntroGameModule.showButtonJoinGame Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Toggles visibility of loading indicator vs join button and "Do not show again" checkbox.

```typescript
public showButtonJoinGame(isShow: boolean = true): void
```

---

## 2. Complete Source Code Implementation

```typescript
showButtonJoinGame(isShow: boolean = true): void {
    if (this.progressBar) {
        this.progressBar.active = !isShow;
    }
    if (this.doNotShowNode) {
        this.doNotShowNode.active = isShow;
    }
    if (this.btnJoinGame) {
        this.btnJoinGame.node.active = isShow;
    }
}
```
